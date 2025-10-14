package com.xliic.openapi.report.task;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT_CLI;
import static com.xliic.openapi.tryit.TryItUtils.extractSingleOperation;
import static com.xliic.openapi.utils.MsgUtils.notifyAuditsLimit;

import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.AuditToDoReport;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.tags.TagsUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class AuditCliTask extends Task.Backgroundable {

    public static final long UPGRADE_WARN_LIMIT = 10;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API: ";

    @NotNull
    private final Project project;
    @NotNull
    private final Credentials.Type type;
    @NotNull
    private final VirtualFile file;
    @Nullable
    private final AuditOperation operation;
    @NotNull
    private final AuditService.Callback callback;

    public AuditCliTask(@NotNull Project project, 
                        @NotNull Credentials.Type type, 
                        @NotNull VirtualFile file, 
                        @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT_CLI, false);
        this.project = project;
        this.type = type;
        this.file = file;
        operation = null;
        this.callback = callback;
    }

    public AuditCliTask(@NotNull Project project, 
                        @NotNull Credentials.Type type, 
                        @NotNull AuditOperation operation,
                        @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT_CLI, false);
        this.project = project;
        this.type = type;
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
            boolean isFullAudit = operation == null;
            String text = isFullAudit ? bundle.getJsonText() : extractSingleOperation(operation.getPath(), operation.getMethod(), bundle);
            String token = SettingsService.getInstance().getValue(Settings.Audit.TOKEN);
            if (token == null) {
                callback.reject("Security audit token is not set");
                return;
            }
            Set<String> tags = (type == Credentials.Type.AnondToken) ? new HashSet<>(0) : TagsUtils.getTags(project, file.getPath());
            AuditCliResult result = CliUtils.runAuditWithCliBinary(project, text, tags, isFullAudit, progress);
            if (result.hasError()) {
                if (result.getStatusCode() == 3 && result.isLimitsReached()) {
                    ApplicationManager.getApplication().invokeAndWait(() -> {
                        MsgUtils.offerUpgrade(project);
                        callback.cancel();
                    });
                } else {
                    callback.reject("Unexpected error running API Security Testing Binary Audit: " + result);
                }
                return;
            }
            if (result.getRemainingPerOperationAudit() < UPGRADE_WARN_LIMIT) {
                notifyAuditsLimit(project, result.getRemainingPerOperationAudit());
            }
            Node report = Utils.getJsonAST(Objects.requireNonNull(result.getReport()));
            AuditToDoReport todo = getAuditToDoReport(result.getTodo());
            AuditCompliance compliance = getAuditCompliance(result.getCompliance());
            callback.complete(Objects.requireNonNull(report), compliance, todo);
        } catch (Exception e) {
            callback.reject(e instanceof AuditService.KdbException ? e.getMessage() : ERROR_MSG + e);
        } finally {
            progress.cancel();
        }
    }
    
    private static AuditToDoReport getAuditToDoReport(String toDoReport) {
        if (toDoReport != null) {
            return new AuditToDoReport(toDoReport);
        }
        return null;
    }

    @SuppressWarnings("unchecked")
    private static AuditCompliance getAuditCompliance(String compliance) {
        if (compliance != null) {
            Map<String, Object> data = (Map<String, Object>) Utils.deserialize(compliance);
            if (data != null) {
                return new AuditCompliance(data);
            }
        }
        return null;
    }
}
