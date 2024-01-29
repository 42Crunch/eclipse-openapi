package com.xliic.openapi.platform.scan.task;

import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.USE_HOST_NETWORK;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.util.SystemInfoRt;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.services.TerminalService;

public class ScanDockerTask extends ScanRunTask {

	private static final String DEFAULT_SHELL = "sh";

    public ScanDockerTask(@NotNull Project project, @NotNull ScanRunConfig runConfig, @NotNull Callback callback) {
        super(project, runConfig, callback);
    }

    @Override
    protected void runScan(@NotNull ProgressIndicator progress,
                           @NotNull String image,
                           @NotNull String service,
                           @NotNull String token,
                           @NotNull Map<String, String> env) throws Exception {
        progress.setText("Running scan in docker container");

        env.put("SCAN_TOKEN", token);
        env.put("PLATFORM_SERVICE", service);

        List<String> cmdList = new LinkedList<>();
        boolean useHostNetwork = PropertiesComponent.getInstance().getBoolean(USE_HOST_NETWORK) &&
        		(SystemInfoRt.isLinux || SystemInfoRt.isFreeBSD);

        if (SystemInfoRt.isWindows) {
        	cmdList.add("docker");
            cmdList.add("run");
            if (useHostNetwork) {
            	cmdList.add("--network");
            	cmdList.add("host");
            }
            cmdList.add("--rm");
            for (Map.Entry<String, String> e : env.entrySet()) {
                cmdList.add("-e");
                cmdList.add(e.getKey() + "=" + e.getValue());
            }
            cmdList.add(image);
        } else {
        	String shell = System.getenv().get("SHELL");
        	if (shell == null || shell.endsWith("csh") || shell.endsWith("tcsh")) {
        		shell = DEFAULT_SHELL;
        	}
        	String hostNetwork = useHostNetwork ? "--network host" : "";
        	cmdList.add(shell);
        	cmdList.add("--login");
        	cmdList.add("-c");
        	cmdList.add("docker run " + hostNetwork + " --rm " + env.entrySet().stream().map(
                    e -> "-e " + e.getKey() + "=" + e.getValue()).collect(
                    		Collectors.joining(" ")) + " " + image);
        }
        TerminalService terminalService = TerminalService.getInstance(project);
        terminalService.sendText(ScanService.TERMINAL_TAB, cmdList);
    }
}