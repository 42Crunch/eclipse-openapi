package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.REPLACE_LOCALHOST;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanGeneralError;
import com.xliic.openapi.platform.scan.ScanLogger;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.config.ScanRunConfig;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;

public abstract class ScanRunTask extends Task.Backgroundable {

    private static final String DEFAULT_CONFIG_NAME = "updated";
    private static final String SCAN42C_HOST = "SCAN42C_HOST";
    private static final String LOCALHOST = "localhost";
    private static final String HTTP_LOCALHOST = "http://" + LOCALHOST;
    private static final String HTTPS_LOCALHOST = "https://" + LOCALHOST;
    private static final String HOST_DOCKER_INTERNAL = "host.docker.internal";

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
        void cancel();
    }

    public ScanRunTask(@NotNull Project project, @NotNull String tabId, @NotNull ScanRunConfig runConfig, @NotNull Callback callback) {
        super(project, "Running scan", false);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
        logger = new ScanLogger(project, tabId);
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
            String image = SettingsService.getInstance().getValue(Settings.Platform.Scan.IMAGE, "");
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
            // WA
            String host = env.get(SCAN42C_HOST);
            if (host != null) {
            	host = host.toLowerCase();
            	if (host.startsWith(HTTP_LOCALHOST) || host.startsWith(HTTPS_LOCALHOST)) {
                	if (SettingsService.getInstance().getBoolean(REPLACE_LOCALHOST)) {
                		String os = Utils.getOs();
                		if ("darwin".equals(os) || "win32".equals(os)) {
                        	env.put(SCAN42C_HOST, host.replace(LOCALHOST, HOST_DOCKER_INTERNAL));
                		}
                	}
            	}
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
