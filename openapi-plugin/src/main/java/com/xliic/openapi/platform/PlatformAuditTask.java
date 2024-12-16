package com.xliic.openapi.platform;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;
import static com.xliic.openapi.tryit.TryItUtils.extractSingleOperation;

import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.report.payload.AuditOperation;
import com.xliic.openapi.report.types.AuditCompliance;
import com.xliic.openapi.report.types.AuditToDoReport;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.tags.TagsUtils;

public class PlatformAuditTask extends Task.Backgroundable {

    private static final int PAUSE = 1000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API using the platform: ";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @Nullable
    private final AuditOperation operation;
    @NotNull
    private final AuditService.Callback callback;

    public PlatformAuditTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = file;
        operation = null;
        this.callback = callback;
    }

    public PlatformAuditTask(@NotNull Project project, @NotNull AuditOperation operation, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = operation.getPsiFile().getVirtualFile();
        this.operation = operation;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        BundleService bundleService = BundleService.getInstance(project);
        BundleResult bundle = bundleService.getBundle(file.getPath());
        if (bundle == null || !bundle.isBundleComplete()) {
            callback.reject("Failed to bundle for audit, check OpenAPI file for errors");
            return;
        }
        String text = operation == null ? bundle.getJsonText() : extractSingleOperation(operation.getPath(), operation.getMethod(), bundle);
        String apiId = null;
        String collectionId = null;
        try {
            AuditService.getInstance(project).downloadArticles(progress);
            collectionId = ScanUtils.findOrCreateTempCollection();
            Set<String> tagIds = TagsUtils.getTagIds(project, file.getPath());
            PlatformAPI api = ScanUtils.createTempApi(collectionId, text, tagIds);
            apiId = api.getId();
            Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION).get();
            Node report = PlatformUtils.getAssessmentReportNode(fullReport);
            if (report == null) {
                callback.reject(ERROR_MSG + "format is not valid");
                return;
            }
            String tid = fullReport.getChildValueRequireNonNull("tid");
            AuditCompliance compliance = AuditUtils.readAuditCompliance(tid);
            AuditToDoReport todoReport = AuditUtils.readAuditReportSqgTodo(tid);
            callback.complete(report, compliance, todoReport);
        } catch (Exception e) {
            if (e instanceof AuditService.KdbException) {
                callback.reject(e.getMessage());
            } else {
                String msg = e.getMessage();
                callback.reject(msg.equals(ScanUtils.LIMIT_REACHED_MSG) ? msg : ERROR_MSG + msg);
            }
            Logger.getInstance(PlatformAuditTask.class).error(e);
        } finally {
            if (apiId != null) {
                ScanUtils.deleteAPI(apiId);
            }
            if (collectionId != null) {
                ScanUtils.clearTempApis(collectionId);
            }
            progress.cancel();
        }
    }
}
