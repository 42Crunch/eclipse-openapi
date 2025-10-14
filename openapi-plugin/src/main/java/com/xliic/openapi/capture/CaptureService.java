package com.xliic.openapi.capture;

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
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.signup.SignUpType;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_ANOND_TOKEN;
import static com.xliic.openapi.webapp.editor.WebFileEditor.CAPTURE_EDITOR_ID;

public final class CaptureService implements ICaptureService, Disposable {

    private static final String CAPTURE = "API Contract Generator";
    private static final String FAILED_CON_ERROR = "Failed to establish connection to capture server";

    private static final int POLLING_DELAY_MS = 5 * 1000; // 5s
    private static final int POLLING_TIME_MS = 5 * 60 * 1000; // 5min
    private static final int POLLING_LIMIT = (int) Math.floor((double) POLLING_TIME_MS / POLLING_DELAY_MS);

    @NotNull
    private final Project project;
    @NotNull
    private final List<CaptureItem> items = new LinkedList<>();
    @NotNull
    private final Map<String, CaptureConnection> connections = new HashMap<>();

    public CaptureService(@NotNull Project project) {
        this.project = project;
    }

    public static CaptureService getInstance(@NotNull Project project) {
        return project.getService(CaptureService.class);
    }

    public void createAndOpenCaptureWindow() {
        Credentials.Type type = Credentials.getCredentialsType();
        if (type != null) {
            internalCreateAndOpenCaptureWindow();
        } else {
            Credentials.configureCredentials(project, SignUpType.CAPTURE, new WizardCallback() {
                @Override
                public void complete() {
                    new Thread(() -> internalCreateAndOpenCaptureWindow()).start();
                }
            });
        }
    }

    private void internalCreateAndOpenCaptureWindow() {
        WindowUtils.openWebTab(project, CAPTURE_EDITOR_ID, CAPTURE, () -> {
            project.getMessageBus().syncPublisher(CaptureListener.TOPIC).showCaptureWindow(items);
            new Thread(() -> {
                try {
                    CaptureConnection captureConnection = getCaptureConnection();
                    if (captureConnection != null) {
                        ApplicationManager.getApplication().invokeLater(() ->
                            project.getMessageBus().syncPublisher(CaptureListener.TOPIC).setCaptureToken(captureConnection.getToken()));
                    } else {
                        showGeneralError(null);
                    }
                } catch (Exception e) {
                    showGeneralError(e.getMessage());
                }
            }).start();
        });
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

        CaptureConnection captureConnection;
        CaptureItem item = findItem(id);
        item.setLog(new LinkedList<>());
        item.setDownloadedFile(null);

        try {
            captureConnection = getCaptureConnection();
        } catch (Exception e) {
            this.showExecutionStatusResponse(item, "failed", false, e.toString());
            return;
        }

        // Handle the case when restart requested
        if (item.getQuickgenId() != null && item.getStatus() == Status.FAILED) {
            try {
                CaptureConnection connection = connections.remove(item.getQuickgenId());
                if (connection != null) {
                    requestDelete(connection, item.getQuickgenId());
                }
            } catch (Exception error) {
                // Silent removal
            }
        }
        item.setStatus(Status.RUNNING);

        // Prepare request -> capture server
        String quickgenId = "";
        try {
            quickgenId = requestPrepare(captureConnection, item.getPrepareOptions());
            // Mapping below will be removed if user deletes or restarts the task
            connections.put(quickgenId, captureConnection);
            showPrepareResponse(item, quickgenId, true, "");
        } catch (Exception error) {
            showPrepareResponse(item, quickgenId, false, getError(error));
            maybeOfferUpgrade(error);
            return;
        }

        // Upload request -> capture server
        try {
            requestUpload(captureConnection, quickgenId, item.getFiles(), percent -> {
                if (item.getStatus() != Status.FAILED) {
                    showPrepareUploadFileResponse(item, true, "", percent == 1.0, percent);
                }
            });
        } catch (Exception error) {
            showPrepareUploadFileResponse(item, false, getError(error), false, 0.0);
            maybeOfferUpgrade(error);
            return;
        }

        // Start request -> capture server
        try {
            Thread.sleep(500); // TODO: remove later
            requestStart(captureConnection, quickgenId);
            showExecutionStartResponse(item, true, "");
        } catch (Exception error) {
            showExecutionStartResponse(item, false, getError(error));
            maybeOfferUpgrade(error);
            return;
        }

        // Wait for correct status request -> capture server
        refreshJobStatus(captureConnection, item);
    }

    public void downloadFile(@NotNull String id, @NotNull VirtualFile target) {
        CaptureItem item = findItem(id);
        String quickgenId = item.getQuickgenId();
        try {
            // Do not remove from the map, user can download multiple times
            CaptureConnection connection = connections.get(quickgenId);
            if (connection == null) {
                showDownloadResult(item, target.getPath(), false, "Current credentials were not used to generate this task");
                return;
            }
            String fileText = requestDownload(connection, quickgenId);
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
        // If prepare fails, there will be no quickgenId defined
        if (quickgenId != null) {
            try {
                CaptureConnection connection = connections.remove(quickgenId);
                if (connection != null) {
                    requestDelete(connection, quickgenId);
                }
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
        connections.clear();
    }

    private void refreshJobStatus(CaptureConnection connection, CaptureItem item) {
        try {
            String status = requestStatus(connection, item.getQuickgenId());
            item.setPollingCounter(item.getPollingCounter() + 1);
            showExecutionStatusResponse(item, status, true, "");
            boolean keepPolling = item.getPollingCounter() <= POLLING_LIMIT;
            if ((Objects.equals(status, "pending") || Objects.equals(status, "running")) && keepPolling) {
                new Thread(() -> {
                    LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(POLLING_DELAY_MS));
                    refreshJobStatus(connection, item);
                }).start();
            }
        } catch (Exception error) {
            showExecutionStatusResponse(item, "finished", false, getError(error));
            maybeOfferUpgrade(error);
        }
    }

    private void saveCapture(@NotNull CaptureItem item) {
        ApplicationManager.getApplication().invokeLater(() -> project.getMessageBus().syncPublisher(CaptureListener.TOPIC).saveCapture(item));
    }

    private CaptureConnection getCaptureConnection() throws Exception {
        Credentials.Type type = Credentials.getCredentialsType();
        if (type == Credentials.Type.AnondToken) {
            try (Response response = CaptureAPI.requestDiscover(Credentials.getAnonCredentials())) {
                return getCaptureConnection(response);
            }
        } else if (type == Credentials.Type.ApiToken) {
            PlatformConnection con = PlatformConnection.getOptions();
            try (Response response = CaptureAPI.requestDiscover(con.getPlatformUrl(), con.getApiToken())) {
                return getCaptureConnection(response);
            }
        }
        return null;
    }

    private static CaptureConnection getCaptureConnection(Response response) throws Exception {
        Node body = getBodyNode(response, 200);
        if (body != null) {
            String token = body.getChildValueRequireNonNull("token");
            String captureInstanceUrl = body.getChildValueRequireNonNull("captureInstanceUrl");
            return new CaptureConnection(token, captureInstanceUrl);
        }
        throw new RuntimeException("HTTPError: failed to get capture connection");
    }

    private String requestDownload(CaptureConnection connection, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.download(connection, quickgenId)) {
            return getBodyContent(response, 200);
        }
    }

    private void requestDelete(CaptureConnection connection, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.delete(connection, quickgenId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                body.getChildValue("detail");
                return;
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private String requestPrepare(CaptureConnection connection, PrepareOptions prepareOptions) throws Exception {
        try (Response response = CaptureAPI.prepare(connection, prepareOptions)) {
            Node body = getBodyNode(response, 201);
            if (body != null) {
                return body.getChildValue("quickgen_id");
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private void requestUpload(CaptureConnection connection,
                               String quickgenId,
                               List<String> files,
                               ProgressRequestBody.ProgressListener listener) throws Exception {
        try (Response response = CaptureAPI.upload(connection, quickgenId, files, listener)) {
            Node body = getBodyNode(response, 200);
            if (body == null || body.getChildValue("file_id") == null) {
                throw new RuntimeException("HTTPError: unable to get file_id");
            }
        }
    }

    private void requestStart(CaptureConnection connection, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.start(connection, quickgenId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                body.getChildValue("detail");
                return;
            }
        }
        throw new RuntimeException("HTTPError: unable to get quickgen_id");
    }

    private String requestStatus(CaptureConnection connection, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.status(connection, quickgenId)) {
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
                String error = getErrorFromResponseCode(response.code());
                if (node != null) {
                    String detail = node.getChildValue("detail");
                    error = error + ", " + detail;
                }
                throw new RuntimeException(error);
            }
        }
    }

    private void showGeneralError(String details) {
        ApplicationManager.getApplication().invokeLater(() ->
            project.getMessageBus().syncPublisher(CaptureListener.TOPIC).showGeneralError(FAILED_CON_ERROR, details));
    }

    private static String getErrorFromResponseCode(int code) {
        return "HTTPError: Response code " + code;
    }

    private void maybeOfferUpgrade(Exception error) {
        if (error.getMessage().contains(getErrorFromResponseCode(402))) {
            String platformAuthType = SettingsService.getInstance().getValue(AUTH_TYPE);
            if (AUTH_TYPE_ANOND_TOKEN.equals(platformAuthType)) {
                ApplicationManager.getApplication().invokeLater(() -> MsgUtils.offerUpgrade(project));
            }
        }
    }
}
