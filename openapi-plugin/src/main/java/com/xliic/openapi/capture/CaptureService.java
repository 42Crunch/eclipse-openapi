package com.xliic.openapi.capture;

import static com.xliic.openapi.webapp.editor.WebFileEditor.CAPTURE_EDITOR_ID;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.HashSet;
import java.util.Objects;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.PrettyPrinter;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.project.Project;
import com.xliic.core.services.ICaptureService;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.capture.payload.PrepareOptions;
import com.xliic.openapi.capture.payload.Status;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;

import okhttp3.Response;
import okhttp3.ResponseBody;

public final class CaptureService implements ICaptureService, Disposable {

    private static final String CAPTURE = "Convert";

    private static final int POLLING_DELAY_MS = 5 * 1000; // 5s
    private static final int POLLING_TIME_MS = 5 * 60 * 1000; // 5min
    private static final int POLLING_LIMIT = (int) Math.floor((double) POLLING_TIME_MS / POLLING_DELAY_MS);

    @NotNull
    private final Project project;
    @NotNull
    private final List<CaptureItem> items = new LinkedList<>();

    public CaptureService(@NotNull Project project) {
        this.project = project;
    }

    public static CaptureService getInstance(@NotNull Project project) {
        return project.getService(CaptureService.class);
    }

    public void createAndOpenCaptureWindow() {
        WindowUtils.openWebTab(project, CAPTURE_EDITOR_ID, CAPTURE, () ->
                project.getMessageBus().syncPublisher(CaptureListener.TOPIC).showCaptureWindow(items));
    }

    public void selectFiles(@Nullable String id, @NotNull List<String> files) {
        CaptureItem item;
        if (id != null) {
            item = findItem(id);
            if (!files.isEmpty()) {
                Set<String> newFiles = new HashSet<>(item.getFiles());
                newFiles.addAll(files);
                item.setFiles(new LinkedList<>(newFiles));
            }
        } else {
            item = new CaptureItem(files);
            items.add(0, item);
        }
        saveCapture(item);
    }
    
    @SuppressWarnings("unchecked")
    public void saveCaptureSettings(@NotNull String id, @NotNull Map<String, Object> settings) {
        CaptureItem item = findItem(id);
        item.setPrepareOptions(PrepareOptions.getInstance((Map<String, Object>) settings.get("prepareOptions")));
        item.setFiles((List<String>) settings.get("files"));
    }

    public void convert(@NotNull String id) {

        String anondToken = SettingsService.getInstance().getValue(Settings.Audit.TOKEN, "");
        CaptureItem item = findItem(id);
        item.setLog(new LinkedList<>());
        item.setDownloadedFile(null);

        // Handle the case when restart requested
        if (item.getQuickgenId() != null && item.getStatus() == Status.FAILED) {
            try {
                requestDelete(anondToken, item.getQuickgenId());
            } catch (Exception error) {
                // Silent removal
            }
        }
        item.setStatus(Status.RUNNING);

        // Prepare request -> capture server
        String quickgenId = "";
        try {
            quickgenId = requestPrepare(anondToken, item.getPrepareOptions());
            showPrepareResponse(item, quickgenId, true, "");
        } catch (Exception error) {
            showPrepareResponse(item, quickgenId, false, getError(error));
            return;
        }

        // Upload request -> capture server
        try {
            requestUpload(anondToken, quickgenId, item.getFiles(), percent -> {
                if (item.getStatus() != Status.FAILED) {
                    showPrepareUploadFileResponse(item, true, "", percent == 1.0, percent);
                }
            });
        } catch (Exception error) {
            showPrepareUploadFileResponse(item, false, getError(error), false, 0.0);
            return;
        }

        // Start request -> capture server
        try {
            requestStart(anondToken, quickgenId);
            showExecutionStartResponse(item, true, "");
        } catch (Exception error) {
            showExecutionStartResponse(item, false, getError(error));
            return;
        }

        // Wait for correct status request -> capture server
        refreshJobStatus(item, anondToken);
    }

    public void downloadFile(@NotNull String id, @NotNull VirtualFile target) {
        CaptureItem item = findItem(id);
        String quickgenId = item.getQuickgenId();
        String anondToken = SettingsService.getInstance().getValue(Settings.Audit.TOKEN, "");
        try {
            String fileText = requestDownload(anondToken, quickgenId);
            PrettyPrinter printer = Utils.getPrinter("  ", "\n");
            String result = new ObjectMapper().writer(printer).writeValueAsString(Utils.deserialize(fileText)).trim();
            WriteCommandAction.runWriteCommandAction(project, () -> {
                try {
                    VfsUtil.saveText(target, result);
                    showDownloadResult(item, target.getPath(), true, "");
                } catch (Exception error) {
                    showDownloadResult(item, target.getPath(), false, getError(error));
                }
            });
        } catch (Exception error) {
            showDownloadResult(item, target.getPath(), false, getError(error));
        }
    }

    public void deleteJob(@NotNull String id) {
        int index = -1;
        String quickgenId = null;
        for (int i = 0; i < this.items.size(); i++) {
            if (id.equals(items.get(i).getId())) {
                index = i;
                quickgenId = items.get(i).getQuickgenId();
                break;
            }
        }
        if (index > -1) {
            items.remove(index);
        }
        String anondToken = SettingsService.getInstance().getValue(Settings.Audit.TOKEN, "");
        // If prepare fails, there will be no quickgenId defined
        if (quickgenId != null) {
            try {
                requestDelete(anondToken, quickgenId);
            } catch (Exception error) {
                // Silent removal
            }
        }
    }

    @NotNull
    public CaptureItem findItem(@NotNull String id) {
        for (CaptureItem item : items) {
            if (id.equals(item.getId())) {
                return item;
            }
        }
        // Must not ever be here
        throw new RuntimeException("Capture item with id " + id + " not found");
    }

    @Override
    public void dispose() {
        items.clear();
    }

    private void refreshJobStatus(CaptureItem item, String token) {
        try {
          String status = requestStatus(token, item.getQuickgenId());
          item.setPollingCounter(item.getPollingCounter() + 1);
          showExecutionStatusResponse(item, status, true, "");
          boolean keepPolling = item.getPollingCounter() <= POLLING_LIMIT;
          if ((Objects.equals(status, "pending") || Objects.equals(status, "running")) && keepPolling) {
              new Thread(() -> {
                  LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(POLLING_DELAY_MS));
                  refreshJobStatus(item, token);
              }).start();
          }
        } catch (Exception error) {
            showExecutionStatusResponse(item, "finished", false, getError(error));
        }
    };

    private void saveCapture(@NotNull CaptureItem item) {
        ApplicationManager.getApplication().invokeLater(() -> project.getMessageBus().syncPublisher(CaptureListener.TOPIC).saveCapture(item));
    }

    private String requestDownload(@NotNull String token, @NotNull String quickgenId) throws Exception {
        try (Response response = CaptureAPI.download(token, quickgenId)) {
            return getBodyContent(response, 200);
        }
    }

    private void requestDelete(@NotNull String token, @NotNull String quickgenId) throws Exception {
        try (Response response = CaptureAPI.delete(token, quickgenId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                body.getChildValue("detail");
                return;
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private String requestPrepare(String token, PrepareOptions prepareOptions) throws Exception {
        try (Response response = CaptureAPI.prepare(token, prepareOptions)) {
            Node body = getBodyNode(response, 201);
            if (body != null) {
                return body.getChildValue("quickgen_id");
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private void requestUpload(String token,
                               String quickgenId,
                               List<String> files,
                               ProgressRequestBody.ProgressListener listener) throws Exception {
        try (Response response = CaptureAPI.upload(token, quickgenId, files, listener)) {
            Node body = getBodyNode(response, 200);
            if (body == null || body.getChildValue("file_id") == null) {
                throw new RuntimeException("HTTPError: unable to get file_id");
            }
        }
    }

    private void requestStart(String token, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.start(token, quickgenId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                body.getChildValue("detail");
                return;
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private String requestStatus(String token, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.status(token, quickgenId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                return body.getChildValue("status");
            }
        }
        throw new RuntimeException("HTTPError: unable to get status");
    }

    private void showPrepareResponse(CaptureItem item, String quickgenId, boolean success, String error) {
        if (success) {
            item.setQuickgenId(quickgenId);
            item.getLog().add("Created quickgen job");
        } else {
            item.setStatus(Status.FAILED);
            item.getLog().add("Failed to prepare quickgen job: " + error);
        }
        saveCapture(item);
    }

    private void showPrepareUploadFileResponse(CaptureItem item, boolean success, String error, boolean completed, double percent) {
        if (success) {
            List<String> log = item.getLog();
            if (completed) {
                if (log.get(log.size() - 1).startsWith("Uploading files")) {
                    log.set(log.size() - 1, "Uploading files: 100%");
                }
                log.add("All files successfully uploaded");
            } else {
                percent = Math.ceil(100 * percent);
                if (log.get(log.size() - 1).startsWith("Uploading files")) {
                    log.set(log.size() - 1, "Uploading files: " + percent + "%");
                } else {
                    log.add("Uploading files: " + percent + "%");
                }
            }
        } else {
            item.setStatus(Status.FAILED);
            item.getLog().add("Failed to upload files: " + error);
        }
        saveCapture(item);
    }

    private void showExecutionStartResponse(CaptureItem item, boolean success, String message) {
        if (success) {
            item.getLog().add("Quickgen job started");
        } else {
            item.setStatus(Status.FAILED);
            item.getLog().add("Quickgen job failed to start: " + message);
        }
        saveCapture(item);
    }

    private void showExecutionStatusResponse(CaptureItem item, String status, boolean success, String error) {
        if (success) {
            List<String> log = item.getLog();
            if (log.get(log.size() - 1).startsWith("Quickgen job ")) {
                log.set(log.size() - 1, "Quickgen job " + status);
            } else {
                log.add("Quickgen job " + status);
            }
            if (Objects.equals(status, "finished")) {
                item.setStatus(Status.FINISHED);
            } else if (Objects.equals(status, "failed")) {
                item.setStatus(Status.FAILED);
            }
        } else {
            item.setStatus(Status.FAILED);
            item.getLog().add("Quickgen job execution failed: " + error);
        }
        saveCapture(item);
    }

    private void showDownloadResult(CaptureItem item, String downloadedFile, boolean success, String error) {
        if (success) {
            item.setDownloadedFile(downloadedFile);
        } else {
            item.getLog().add("Download failed: " + error);
        }
        saveCapture(item);
    }

    private String getError(Exception error) {
        return error.getMessage();
    }

    private static Node getBodyNode(Response response, int okCode) throws Exception {
        return Utils.getJsonAST(getBodyContent(response, okCode));
    }

    private static String getBodyContent(Response response, int okCode) throws Exception {
        try (ResponseBody body = response.body()) {
            if (body == null) {
                throw new RuntimeException("Unexpected response with no body");
            }
            String bodyText = body.string();
            if (response.code() == okCode) {
                return bodyText;
            } else {
                Node node = Utils.getJsonAST(bodyText);
                String error = "HTTPError: Response code " + response.code();
                if (node != null) {
                    String detail = node.getChildValue("detail");
                    error = error + ", " + detail;
                }
                throw new RuntimeException(error);
            }
        }
    }
}
