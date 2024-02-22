package com.xliic.openapi.platform.scan.config.jcef.messages;

import static com.xliic.openapi.platform.scan.config.jcef.JCEFScanConfPanel.SCAN_CONF_PATH;

import java.io.File;
import java.util.Map;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.platform.scan.ScanRunConfig;
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class RunScan extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public RunScan(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("runScan");
        this.project = project;
        this.cache = cache;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            Map<String, Object> env = (Map<String, Object>) map.get("env");
            Map<String, String> configEnv = env.entrySet().stream().collect(
                    Collectors.toMap(Map.Entry::getKey, e -> String.valueOf(e.getValue())));
            String rawOas = null;
            String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
            if (filePath != null) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                if (file != null) {
                    BundleService bundleService = BundleService.getInstance(project);
                    BundleResult bundle = bundleService.getBundle(file.getPath());
                    if (bundle != null && bundle.isBundleComplete()) {
                        rawOas = bundle.getJsonText();
                    }
                }
            }
            String scanConfPath = (String) cache.get(SCAN_CONF_PATH);
            String path = (String) map.get("path");
            String method = (String) map.get("method");
            String opId = (String) map.get("operationId");
            String scanconf = (String) map.get("scanconf");
            if (scanconf != null && rawOas != null) {
                ScanService.getInstance(project).runScan(new ScanRunConfig(path, method, opId, scanConfPath, scanconf, configEnv, rawOas));
            }
        }
    }
}
