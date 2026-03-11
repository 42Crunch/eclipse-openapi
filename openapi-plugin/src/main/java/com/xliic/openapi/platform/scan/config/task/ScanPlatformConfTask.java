package com.xliic.openapi.platform.scan.config.task;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.util.List;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.Tag;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.tags.TagsUtils;

public class ScanPlatformConfTask extends ScanConfTask {

    @NotNull
    private final VirtualFile file;
    @NotNull
    private final Credentials.Type type;

    public ScanPlatformConfTask(@NotNull Project project,
                                @NotNull BundleResult bundle,
                                @NotNull String scanConfPath,
                                @NotNull VirtualFile file,
                                @NotNull Credentials.Type type,
                                @NotNull Callback callback) {
        super(project, bundle, scanConfPath, callback);
        this.file = file;
        this.type = type;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            String oas = bundle.getJsonText();

            progress.setText("Creating temp API");
            collectionId = ScanUtils.findOrCreateTempCollection();
            Set<Tag> tags = TagsUtils.getTags(project, type, file.getPath());
            apiId = ScanUtils.createTempAPI(collectionId, oas, tags);

            progress.setText(RUNNING_SECURITY_AUDIT);
            ScanUtils.auditTempAPI(getProject(), apiId);

            progress.setText("Creating default scan configuration");
            ScanUtils.createDefaultScanConfig(apiId);

            progress.setText("Downloading scan configurations");
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);

            progress.setText("Reading scan configuration");
            ScanConfiguration config = ScanUtils.readScanConfig(configs.get(0).getId());

            String cfg = config.getConfig();
            if (StringUtils.isEmpty(cfg)) {
                throw new Error("Failed to load default scan configuration from the platform");
            }
            ScanConfigUtils.createScanConf(project, scanConfPath, cfg);
            callback.setDone(oas, cfg, true);
        } catch (Exception e) {
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
