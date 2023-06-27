package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanUtils;

public class ScanTask extends Task.Backgroundable {

    @NotNull
    private final String path;
    @NotNull
    private final BundleResult bundle;
    @NotNull
    private final Callback callback;

    public interface Callback {
        void setDone(@NotNull String oas, @NotNull String config, boolean isNewApi);
        void setRejected(@NotNull Exception ex);
    }

    public ScanTask(@NotNull Project project, @NotNull String path, @NotNull BundleResult bundle, @NotNull Callback callback) {
        super(project, "Initializing scan", false);
        this.path = path;
        this.bundle = bundle;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            String oas = ScanUtils.extractSinglePath(path, bundle);

            progress.setText("Creating temp API");
            collectionId = ScanUtils.findOrCreateTempCollection();
            apiId = ScanUtils.createTempAPI(collectionId, oas);

            progress.setText(RUNNING_SECURITY_AUDIT);
            ScanUtils.auditTempAPI(getProject(), apiId);

            progress.setText("Creating default scan configuration");
            ScanUtils.createDefaultScanConfig(apiId);

            progress.setText("Downloading scan configurations");
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);

            progress.setText("Reading scan configuration");
            ScanConfiguration config = ScanUtils.readScanConfig(configs.get(0).getId());
            callback.setDone(oas, config.getConfig(), config.isNewApi());

        } catch (Exception e) {
            e.printStackTrace();
            callback.setRejected(e);
        } finally {
            if (apiId != null) {
                progress.setText("Deleting temp API");
                ScanUtils.deleteAPI(apiId);
            }
            if (collectionId != null) {
                ScanUtils.clearTempApis(collectionId);
            }
            progress.cancel();
        }
    }
}
