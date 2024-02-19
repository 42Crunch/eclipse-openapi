package com.xliic.openapi.report.task;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Objects;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT_CLI;
import static com.xliic.openapi.tryit.TryItUtils.extractSingleOperation;
import static com.xliic.openapi.utils.MsgUtils.notifyLimit;

public class AuditCliTask extends Task.Backgroundable {

    public static final long UPGRADE_WARN_LIMIT = 10;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API: ";


    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @Nullable
    private final AuditOperation operation;
    @NotNull
    private final AuditService.Callback callback;

    public AuditCliTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT_CLI, false);
        this.project = project;
        this.file = file;
        operation = null;
        this.callback = callback;
    }

    public AuditCliTask(@NotNull Project project, @NotNull AuditOperation operation, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT_CLI, false);
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
            boolean isSingleOperationAudit = operation != null;
            String text = isSingleOperationAudit ? extractSingleOperation(operation.getPath(), operation.getMethod(), bundle) : bundle.getJsonText();
            String token = PropertiesComponent.getInstance().getValue(Settings.Audit.TOKEN);
            if (token == null) {
                callback.reject("Security audit token is not set");
                return;
            }
            AuditCliResult result = CliUtils.runAuditWithCliBinary(project, text, isSingleOperationAudit, progress);
            if (result.hasError()) {
                if (result.getStatusCode() == 3 && "limits_reached".equals(result.getStdOut())) {
                    ScanConfigUtils.offerUpgrade(project);
                } else {
                    callback.reject("Unexpected error running CLI Audit: " + result);
                }
                return;
            }
            if (isSingleOperationAudit && result.getRemainingPerOperationAudit() < UPGRADE_WARN_LIMIT) {
                notifyLimit(project, result.getRemainingPerOperationAudit(), "per-operation Security Audits");
            } else if (!isSingleOperationAudit && result.getRemainingFullAudit() < UPGRADE_WARN_LIMIT) {
                notifyLimit(project, result.getRemainingFullAudit(), "Security Audits");
            }
            Node report = Utils.getJsonAST(Objects.requireNonNull(result.getReport()));
            callback.complete(Objects.requireNonNull(report), null, null);
        } catch (Exception e) {
            callback.reject(e instanceof AuditService.KdbException ? e.getMessage() : ERROR_MSG + e);
        } finally {
            progress.cancel();
        }
    }
}
