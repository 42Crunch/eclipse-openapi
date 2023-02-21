package com.xliic.openapi.platform;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;

public class PlatformAuditTask extends Task.Backgroundable {

    private static final int PAUSE = 1000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API using the platform: ";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final AuditService.Callback callback;

    public PlatformAuditTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull AuditService.Callback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = file;
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
        String text = bundle.getJsonText();
        String apiId = null;
        try {
            PlatformAPI api = ScanUtils.createTempApi(text);
            apiId = api.getId();
            Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION).get();
            Node report = PlatformUtils.getAssessmentReportNode(fullReport);
            if (report == null) {
                callback.reject(ERROR_MSG + "format is not valid");
                return;
            }
            callback.complete(report);
        } catch (Exception e) {
            e.printStackTrace();
            String msg = e.getMessage();
            callback.reject(msg.equals(ScanUtils.LIMIT_REACHED_MSG) ? msg : ERROR_MSG + msg);
        } finally {
            if (apiId != null) {
                ScanUtils.deleteAPI(apiId);
            }
            progress.cancel();
        }
    }
}
