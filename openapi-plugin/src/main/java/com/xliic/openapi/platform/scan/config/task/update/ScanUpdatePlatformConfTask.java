package com.xliic.openapi.platform.scan.config.task.update;

import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanUtils;

public class ScanUpdatePlatformConfTask extends ScanUpdateConfTask {

    public ScanUpdatePlatformConfTask(@NotNull Project project, @NotNull BundleResult bundle, @NotNull Callback callback) {
        super(project, bundle, callback);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            String oas = bundle.getJsonText();
            collectionId = ScanUtils.findOrCreateTempCollection();
            apiId = ScanUtils.createTempAPI(collectionId, oas);
            // Without audit there is no delay and createDefaultScanConfig fails
            ScanUtils.auditTempAPI(getProject(), apiId);
            ScanUtils.createDefaultScanConfig(apiId);
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);
            ScanConfiguration config = ScanUtils.readScanConfig(configs.get(0).getId());
            String cfg = config.getConfig();
            if (StringUtils.isEmpty(cfg)) {
                throw new Error("Failed to load default scan configuration from the platform");
            }
            callback.setDone(oas, cfg);
        } catch (Exception e) {
            callback.setRejected(e);
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
