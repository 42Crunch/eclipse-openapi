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
import com.xliic.openapi.ReTryer;
import com.xliic.openapi.capture.payload.SortedFiles;
import com.xliic.openapi.capture.payload.CaptureFileType;
import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.capture.payload.FileUploadStatus;
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

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.util.*;

import static com.xliic.openapi.utils.NetUtils.getResponseBody;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_ANOND_TOKEN;
import static com.xliic.openapi.webapp.editor.WebFileEditor.CAPTURE_EDITOR_ID;

public final class CaptureService implements ICaptureService, Disposable {

    private static final String CAPTURE = "API Contract Generator";
    private static final String FAILED_CON_ERROR = "Failed to establish connection to capture server";
    private static final String EXCEEDED_MAXIMUM_RETRIES = "Conversion failed: exceeded maximum retries";
    
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
        CaptureConnection connection;
        CaptureItem item = findItem(id);
        item.setLog(new LinkedList<>());
        item.setUploadStatus(new HashMap<>());
        item.setDownloadedFile(null);

        SortedFiles files = sortFiles(item.getFiles());
        if (files.getEnv().size() > 1) {
            updateItem(item, Status.FAILED,"Multiple environment files provided. Please provide only one environment file.");
            return;
        } else if (files.getPostman().isEmpty() && files.getOther().isEmpty()) {
            updateItem(item, Status.FAILED, "No valid Postman or HAR files provided. Please provide at least one Postman or HAR file.");
            return;
        }

        try {
            connection = getCaptureConnection();
        } catch (Exception e) {
            updateItem(item, Status.FAILED, "Failed to establish connection to capture server: " + getError(e));
            return;
        }

        // Handle the case when restart requested
        if (item.getQuickgenId() != null && item.getStatus() == Status.FAILED) {
            try {
                CaptureConnection itemConnection = connections.remove(item.getQuickgenId());
                if (itemConnection != null) {
                    requestDelete(itemConnection, item.getQuickgenId());
                }
            } catch (Exception error) {
                // Silent removal
            }
        }
        updateItem(item, Status.RUNNING, "Started new session");

        // Prepare request -> capture server
        String quickgenId = "";
        try {
            quickgenId = requestPrepare(connection, item.getPrepareOptions());
            // Mapping below will be removed if user deletes or restarts the task
            connections.put(quickgenId, connection);
            item.setQuickgenId(quickgenId);
            updateItem(item, null, "Created quickgen job");
            updateItem(item, null, "Starting file uploads");
        } catch (Exception error) {
            updateItem(item, Status.FAILED, "Failed to prepare quickgen job: " + getError(error));
            maybeOfferUpgrade(error);
            return;
        }

        // Upload request -> capture server
        try {
            for (String postman : files.getPostman()) {
                requestUpload(connection, item, postman, files.getEnv().get(0));
            }
            for (String other : files.getOther()) {
                requestUpload(connection, item, other, null);
            }
            updateItem(item, null, "All files uploaded, starting conversion");
        } catch (Exception error) {
            updateItem(item, Status.FAILED, getError(error));
            maybeOfferUpgrade(error);
            return;
        }

        // Start request -> capture server
        try {
            new ReTryer<Response>(500, 30, EXCEEDED_MAXIMUM_RETRIES) {
                @Override
                protected @NotNull Response execute() throws Exception {
                    String quickgenId = Objects.requireNonNull(item.getQuickgenId());
                    return CaptureAPI.start(Objects.requireNonNull(connection), quickgenId);
                }
                @Override
                protected boolean keepRetrying(@NotNull Response response) throws Exception {
                    final int code = response.code();
                    if (code == 200) {
                        return false;
                    } else if (code == 409) {
                        return true;
                    } else {
                        throw new Exception(getResponseError(response));
                    }
                }
            }.run();
            updateItem(item, null, "Conversion started, waiting for completion");
        } catch (Exception error) {
            updateItem(item, Status.FAILED, "Failed to start conversion: " + getError(error));
            List<String> uploadSummary = getUploadSummary(connection, item);
            updateItem(item, null, uploadSummary);
            updateItem(item, Status.FAILED, "Conversion failed");
            maybeOfferUpgrade(error);
            return;
        }

        // Wait for correct status request -> capture server
        try {
            new ReTryer<String>(2000, 60, EXCEEDED_MAXIMUM_RETRIES) {
                @Override
                protected @NotNull String execute() throws Exception {
                    return requestStatus(connection, item.getQuickgenId());
                }
                @Override
                protected boolean keepRetrying(@NotNull String status) {
                    return Objects.equals(status, "pending") || Objects.equals(status, "running");
                }
            }.run();
        } catch (Exception error) {
            List<String> uploadSummary = getUploadSummary(connection, item);
            updateItem(item, null, uploadSummary);
            updateItem(item, Status.FAILED, "Conversion failed: " + getError(error));
            maybeOfferUpgrade(error);
            return;
        }

        List<String> uploadSummary = getUploadSummary(connection, item);
        updateItem(item, null, uploadSummary);
        updateItem(item, Status.FINISHED, "Conversion completed");
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

    private void saveCapture(@NotNull CaptureItem item) {
        ApplicationManager.getApplication().invokeLater(() -> project.getMessageBus().syncPublisher(CaptureListener.TOPIC).saveCapture(item));
    }

    private CaptureConnection getCaptureConnection() throws Exception {
        Credentials.Type type = Credentials.getCredentialsType();
        if (type == Credentials.Type.AnondToken) {
            String token = Objects.requireNonNull(Credentials.getAnonCredentials());
            try (Response response = CaptureAPI.requestDiscover(token)) {
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
            getBodyNode(response, 200);
        }
    }

    private String requestPrepare(CaptureConnection connection, PrepareOptions prepareOptions) throws Exception {
        try (Response response = CaptureAPI.prepare(connection, prepareOptions)) {
            return getBodyNode(response, 201).getChildValueRequireNonNull("quickgen_id");
        }
    }

    private void requestUpload(CaptureConnection connection, CaptureItem item, String dataFile, String envFile) throws Exception {
        String fileId;
        String quickgenId = Objects.requireNonNull(item.getQuickgenId());
        item.getUploadStatus().put(dataFile, new FileUploadStatus(0, null));
        saveCapture(item);
        try (Response response = CaptureAPI.upload(connection, quickgenId, dataFile, envFile, percent -> {
            item.getUploadStatus().put(dataFile, new FileUploadStatus(percent, null));
            saveCapture(item);
        })) {
            Node body = getBodyNode(response, 200);
            if (body == null || body.getChildValue("file_id") == null) {
                throw new Exception("Upload failed for file " + dataFile + ": response missing required field 'file_id'");
            }
            fileId = body.getChildValue("file_id");
        } catch (Exception e) {
            throw new Exception("Upload failed for file " + dataFile + ": " + getError(e));
        }
        item.getUploadStatus().put(dataFile, new FileUploadStatus(100, fileId));
        saveCapture(item);
    }

    private String requestStatus(CaptureConnection connection, String quickgenId) throws Exception {
        try (Response response = CaptureAPI.status(connection, quickgenId)) {
            return getBodyNode(response, 200).getChildValueRequireNonNull("status");
        }
    }

    private void showDownloadResult(CaptureItem item, String downloadedFile, boolean success, String error) {
        if (success) {
            item.setDownloadedFile(downloadedFile);
        } else {
            item.getLog().add("Download failed: " + error);
        }
        saveCapture(item);
    }

    private static String getError(Exception error) {
        return error.getMessage();
    }

    private static Node getBodyNode(Response response, int okCode) throws Exception {
        return Utils.getJsonAST(getBodyContent(response, okCode));
    }

    private static String getBodyContent(Response response, int okCode) throws Exception {
        try (ResponseBody body = getResponseBody(response)) {
            if (response.code() == okCode) {
                return Objects.requireNonNull(body).string();
            } else {
                throw new Exception(getResponseError(response));
            }
        }
    }

    private static String getResponseError(Response response) {
        String error = getErrorFromResponseCode(response.code());
        try (ResponseBody body = getResponseBody(response)) {
            if (body != null) {
                String text = body.string();
                Node node = Utils.getJsonAST(text);
                if (node != null) {
                    String detail = node.getChildValue("detail");
                    error = error + ", " + Objects.requireNonNullElse(detail, text);
                } else if (!StringUtils.isEmpty(text)) {
                    error = error + ", " + text;
                }
            }
        } catch (Exception ignored) {
        }
        return error;
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
    
    @NotNull
    private static SortedFiles sortFiles(List<String> files) {
        List<String> env = new LinkedList<>();
        List<String> postman = new LinkedList<>();
        List<String> other = new LinkedList<>();
        for (String file : files) {
            CaptureFileType type = checkFileType(file);
            if (type == CaptureFileType.ENV) {
                env.add(file);
            } else if (type == CaptureFileType.POSTMAN) {
                postman.add(file);
            } else {
                other.add(file);
            }
        }
        return new SortedFiles(env, postman, other);
    }

    private static CaptureFileType checkFileType(String uri) {
        String filePath = uri.replace("file:///", "");
        String text = Utils.getTextFromFile(new File(filePath).getAbsolutePath(), true);
        Node parsed = (text != null) && ("json".equals(Utils.getFileLanguage(uri))) ? Utils.getJsonAST(text, false) : null;
        if (parsed != null && parsed.isObject()) {
            Node values = parsed.getChild("values");
            if (values != null && values.isArray()) {
                return CaptureFileType.ENV;
            } else {
                return CaptureFileType.POSTMAN;
            }
        }
        return CaptureFileType.OTHER;
    }

    private void updateItem(CaptureItem item, Status status, String message) {
        if (status != null) {
            item.setStatus(status);
        }
        item.getLog().add(message);
        saveCapture(item);
    }

    private void updateItem(CaptureItem item, Status status, List<String> message) {
        if (status != null) {
            item.setStatus(status);
        }
        item.getLog().addAll(message);
        saveCapture(item);
    }

    private List<String> getUploadSummary(CaptureConnection captureConnection, CaptureItem item) {
        List<String> uploadSummary = new LinkedList<>();
        for (Map.Entry<String, FileUploadStatus> entry : item.getUploadStatus().entrySet()) {
            FileUploadStatus status = entry.getValue();
            String filename = FilenameUtils.getBaseName(entry.getKey());
            if (status.getFileId() != null) {
                try {
                    List<String> summary = requestSummary(captureConnection, item.getQuickgenId(), status.getFileId());
                    for (String line : summary) {
                        uploadSummary.add("Error in " + filename + ": " + line);
                    }
                } catch (Exception e) {
                    uploadSummary.add("Failed to get summary for file " + filename + ": " + getError(e));
                }
            }
        }
        return uploadSummary;
    }

    private static List<String> requestSummary(CaptureConnection captureConnection, String quickgenId, String fileId) throws Exception {
        List<String> result = new LinkedList<>();
        try (Response response = CaptureAPI.summary(captureConnection, quickgenId, fileId)) {
            Node body = getBodyNode(response, 200);
            if (body != null) {
                Node errors = body.getChild("errors");
                if (errors != null) {
                    for (Node error : errors.getChildren()) {
                        result.add(error.getChildValue("detail"));
                    }
                    return result;
                }
            }
        }
        throw new RuntimeException("Unknown error getting capture summary");
    }
}
