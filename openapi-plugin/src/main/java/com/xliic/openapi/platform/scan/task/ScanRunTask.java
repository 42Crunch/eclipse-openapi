package com.xliic.openapi.platform.scan.task;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.*;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.settings.Settings;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public abstract class ScanRunTask extends Task.Backgroundable {

    private static final String DEFAULT_CONFIG_NAME = "updated";

    @NotNull
    protected final Project project;
    @NotNull
    protected final ScanRunConfig runConfig;
    @NotNull
    protected final Callback callback;
    @NotNull
    protected final ScanLogger logger;

    public interface Callback {
        void setDone(@NotNull String scanConfPath, @NotNull ScanReport report);
        void setRejected(@NotNull Exception ex);
    }

    public ScanRunTask(@NotNull Project project, @NotNull ScanRunConfig runConfig, @NotNull Callback callback) {
        super(project, "Running scan", false);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
        logger = new ScanLogger(project);
    }

    protected abstract void runScan(@NotNull ProgressIndicator progress,
                                    @NotNull String image,
                                    @NotNull String service,
                                    @NotNull String token,
                                    @NotNull Map<String, String> env) throws Exception;

    protected void dispose(@NotNull ProgressIndicator progress) {}

    protected void log(@NotNull ProgressIndicator progress, @NotNull String message) {
        progress.setText(message);
        logger.info(message);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String apiId = null;
        String collectionId = null;
        try {
            log(progress, "Starting API Conformance scan");
            collectionId = ScanUtils.findOrCreateTempCollection();
            apiId = ScanUtils.createTempAPI(collectionId, runConfig.getRawOas());
            log(progress, "Created temp API " + apiId + ", waiting for Security Audit");
            ScanUtils.auditTempAPI(getProject(), apiId);
            log(progress, "Security Audit check is successfull");
            ScanUtils.createScanConfig(apiId, DEFAULT_CONFIG_NAME, runConfig.getEncodedConfig(), true);
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);
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
            String reportId = ScanUtils.waitForScanReport(apiId);
            ScanReport report = ScanUtils.readScanReport(runConfig.getPath(), runConfig.getMethod(), runConfig.getRawOas(), reportId);
            log(progress, "Finished API Conformance Scan");
            callback.setDone(runConfig.getScanConfPath(), report);

        } catch (Exception e) {
            dispose(progress);
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
