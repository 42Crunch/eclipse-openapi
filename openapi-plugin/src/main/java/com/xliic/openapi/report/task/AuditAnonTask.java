package com.xliic.openapi.report.task;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Puller;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.AuditAPIs;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.types.ResponseStatus;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.NetUtils;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;
import static com.xliic.openapi.tryit.TryItUtils.extractSingleOperation;
import static com.xliic.openapi.utils.Utils.getStatus;

public class AuditAnonTask extends Task.Backgroundable {

    private static final int PAUSE = 5000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API: ";
    private static final String ERROR_429_MSG = "Too many requests. You can run up to 3 security audits per minute, please try again later";
    private static final String ERROR_403_MSG = "Authentication failed. Please paste the token that you received in email to " +
            "Preferences > Settings > Extensions > OpenAPI > Security Audit Token. If you want to receive a new token instead, " +
            "clear that setting altogether and initiate a new security audit for one of your OpenAPI files.";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @Nullable
    private final AuditOperation operation;
    @NotNull
    private final AuditService.Callback callback;

    public AuditAnonTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = file;
        operation = null;
        this.callback = callback;
    }

    public AuditAnonTask(@NotNull Project project, @NotNull AuditOperation operation, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = operation.getPsiFile().getVirtualFile();
        this.operation = operation;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            BundleService bundleService = BundleService.getInstance(project);
            BundleResult bundle = bundleService.getBundle(file.getPath());
            if (bundle == null || !bundle.isBundleComplete()) {
                callback.reject("Failed to bundle for audit, check OpenAPI file for errors");
                return;
            }
            AuditService.getInstance(project).downloadArticles(progress);
            String text = operation == null ? bundle.getJsonText() : extractSingleOperation(operation.getPath(), operation.getMethod(), bundle);
            String token = SettingsService.getInstance().getValue(Settings.Audit.TOKEN);
            if (token == null) {
                callback.reject("Security audit token is not set");
                return;
            }
            try (Response response = AuditAPIs.Sync.getAuditReport(token, file.getPath(), text)) {
                int code = response.code();
                if (code == 403) {
                    callback.reject(ERROR_403_MSG);
                    return;
                } else if (code == 429) {
                    callback.reject(ERROR_429_MSG);
                    return;
                } else if (code != 200) {
                    callback.reject(ERROR_MSG + " response code " + code);
                    return;
                }
                Node body = NetUtils.getBodyNode(response);
                if (body == null || body.getChild("report") == null) {
                    callback.reject(ERROR_MSG + " unexpected response body");
                    return;
                }
                ResponseStatus status = getStatus(body);
                if (status == ResponseStatus.PROCESSED) {
                    callback.complete(body.getChildRequireNonNull("report"), null, null);
                } else if (status == ResponseStatus.IN_PROGRESS) {
                    progress.setText("Processing takes longer than expected, please wait");
                    String respToken = body.getChildValue("token");
                    Node report = new Puller<Node>(PAUSE, PULL_REPORT_DURATION) {
                        @Override
                        protected @NotNull Response send() throws IOException {
                            return AuditAPIs.Sync.getAuditReportByToken(respToken, token);
                        }
                        @Override
                        protected @Nullable Node response(@NotNull Node body) {
                            return getStatus(body) == ResponseStatus.PROCESSED ? body.getChild("report") : null;
                        }
                    }.get();
                    callback.complete(report, null, null);
                } else {
                    callback.reject(ERROR_MSG + " unexpected status " + body.getChildValue("status"));
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
            callback.reject(e instanceof AuditService.KdbException ? e.getMessage() : ERROR_MSG + e);
        } finally {
            progress.cancel();
        }
    }
}
