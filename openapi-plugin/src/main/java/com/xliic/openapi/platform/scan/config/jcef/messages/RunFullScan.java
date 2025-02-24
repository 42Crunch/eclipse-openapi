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
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.platform.scan.config.ScanFullRunConfig;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class RunFullScan extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public RunFullScan(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("runFullScan");
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
            String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
            String scanConfPath = (String) cache.get(SCAN_CONF_PATH);
            String scanconf = (String) map.get("scanconf");
            if (filePath != null && scanconf != null) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                if (file != null) {
                    BundleService bundleService = BundleService.getInstance(project);
                    BundleResult bundle = bundleService.getBundle(file.getPath());
                    if (bundle != null && bundle.isBundleComplete()) {
                        String rawOas = bundle.getJsonText();
                        ScanFullRunConfig config = new ScanFullRunConfig(scanConfPath, scanconf, configEnv, rawOas);
                        ScanService.getInstance(project).runScan(file, config, true);
                    }
                }
            }
        }
    }
}
