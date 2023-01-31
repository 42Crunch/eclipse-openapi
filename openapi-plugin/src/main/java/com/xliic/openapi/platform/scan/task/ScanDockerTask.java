package com.xliic.openapi.platform.scan.task;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.scan.Environment;
import com.xliic.openapi.platform.scan.ScanConfiguration;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.services.ScanService;
import com.xliic.openapi.services.TerminalService;
import com.xliic.openapi.settings.Settings;

public class ScanDockerTask extends Task.Backgroundable {

    private static final String DEFAULT_CONFIG_NAME = "updated";

    @NotNull
    private final Project project;
    @NotNull
    private final ScanRunConfig runConfig;
    @NotNull
    private final Callback callback;

    public interface Callback {
        void setDone(@NotNull ScanReport report);

        void setRejected(@NotNull String error);
    }

    public ScanDockerTask(@NotNull Project project, @NotNull ScanRunConfig runConfig, @NotNull Callback callback) {
        super(project, "Running scan", false, 8);
        this.project = project;
        this.runConfig = runConfig;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progressIndicator) {
        String apiId = null;
        try {
            apiId = ScanUtils.getTempAPI(getProject(), runConfig.getRawOas(), progressIndicator);

            progressIndicator.setText("Creating scan configuration");
            ScanUtils.createScanConfig(apiId, DEFAULT_CONFIG_NAME, runConfig.getConfig());

            progressIndicator.setText("Downloading scan configurations");
            List<ScanConfiguration> configs = ScanUtils.getScanConfigs(apiId);

            progressIndicator.setText("Reading scan configuration");
            ScanConfiguration config = ScanUtils.readScanConfig(configs.get(0).getId());
            String token = config.getToken();

            progressIndicator.setText("Setting docker environment");
            String image = PropertiesComponent.getInstance().getValue(Settings.Platform.Scan.IMAGE);
            if (image == null) {
                callback.setRejected("Scan image is not available");
                return;
            }
            ScanService scanService = ScanService.getInstance(project);
            Environment myEnv = scanService.loadEnv();
            Map<String, String> dockerEnv = new HashMap<>();
            for (Map.Entry<String, String> entry : runConfig.getEnv().entrySet()) {
                dockerEnv.put(entry.getKey(), myEnv.replace(entry.getValue()));
            }
            dockerEnv.put("SCAN_TOKEN", token);
            dockerEnv.put("PLATFORM_SERVICE", ScanUtils.getServices());

            String dockerArgs = ScanUtils.getCmdLine(dockerEnv);
            TerminalService terminalService = TerminalService.getInstance(project);
            terminalService.sendText(ScanService.TERMINAL_TAB, "docker run --rm " + dockerArgs + " " + image);

            progressIndicator.setText("Waiting for scan report");
            String reportId = ScanUtils.waitForScanReport(apiId);

            progressIndicator.setText("Reading scan report");
            ScanReport report = ScanUtils.readScanReport(reportId);
            callback.setDone(report);

        } catch (Exception e) {
            e.printStackTrace();
            callback.setRejected(e.getMessage());
        } finally {
            if (apiId != null) {
                progressIndicator.setText("Deleting platform temporary API");
                ScanUtils.deleteAPI(apiId);
            }
            progressIndicator.cancel();
        }
    }
}
