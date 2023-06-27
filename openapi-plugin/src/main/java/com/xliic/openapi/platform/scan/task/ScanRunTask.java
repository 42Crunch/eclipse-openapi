package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanGeneralError;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.settings.Settings;

public abstract class ScanRunTask extends Task.Backgroundable {

    private static final String DEFAULT_CONFIG_NAME = "updated";

    @NotNull
    protected final Project project;
    @NotNull
    protected final ScanRunConfig runConfig;
    @NotNull
    protected final Callback callback;
    protected final boolean isNewApi;
    @NotNull
    protected final ScanLogger logger;

    public interface Callback {
        void setDone(@NotNull ScanReport report);
        void setRejected(@NotNull Exception ex);
    }

    public ScanRunTask(@NotNull Project project, @NotNull ScanRunConfig runConfig, @NotNull Callback callback, boolean isNewApi) {
        super(project, "Running scan", false, 8);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
        this.isNewApi = isNewApi;
        logger = new ScanLogger(project);
    }

    protected abstract void runScan(@NotNull ProgressIndicator progress,
                                    @NotNull String image,
                                    @NotNull String service,
                                    @NotNull String token,
                                    @NotNull Map<String, String> env) throws Exception;

    protected void dispose(@NotNull ProgressIndicator progress) {}

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            logger.info("Starting API Conformance scan");

            progress.setText("Creating temp API");
            collectionId = ScanUtils.findOrCreateTempCollection();
            apiId = ScanUtils.createTempAPI(collectionId, runConfig.getRawOas());
            logger.info("Created temp API " + apiId + ", waiting for Security Audit");

            progress.setText(RUNNING_SECURITY_AUDIT);
            ScanUtils.auditTempAPI(getProject(), apiId);
            logger.info("Security Audit check is successfull");

            progress.setText("Creating scan configuration");
            ScanUtils.createScanConfig(apiId, DEFAULT_CONFIG_NAME, runConfig.getConfig(), isNewApi);

            progress.setText("Downloading scan configurations");
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);

            progress.setText("Reading scan configuration");
            ScanConfiguration config = ScanUtils.readScanConfig(configs.get(0).getId());
            String token = config.getToken();
            String image = PropertiesComponent.getInstance().getValue(Settings.Platform.Scan.IMAGE, "");
            if (image.isEmpty()) {
                throw new ScanGeneralError("Scan image is not defined");
            }
            String services = new PlatformServices().getServices();
            if (services.isEmpty()) {
                throw new ScanGeneralError("Platform services is not defined");
            }
            EnvService envService = EnvService.getInstance(project);
            Environment myEnv = envService.getEnv();
            Map<String, String> env = new HashMap<>();
            for (Map.Entry<String, String> entry : runConfig.getEnv().entrySet()) {
                env.put(entry.getKey(), myEnv.replace(entry.getValue()));
            }

            runScan(progress, image, services, token, env);

            progress.setText("Waiting for scan report");
            String reportId = ScanUtils.waitForScanReport(apiId);
            progress.setText("Reading scan report");
            ScanReport report = ScanUtils.readScanReport(reportId);
            callback.setDone(report);

        } catch (Exception e) {
            e.printStackTrace();
            dispose(progress);
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
