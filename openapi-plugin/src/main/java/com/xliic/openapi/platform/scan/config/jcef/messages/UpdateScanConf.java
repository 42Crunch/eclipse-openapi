package com.xliic.openapi.platform.scan.config.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.scan.config.ScanConfService;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;
import java.util.Map;

import static com.xliic.openapi.platform.scan.config.jcef.JCEFScanConfPanel.SCAN_CONF_PATH;

public class UpdateScanConf extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public UpdateScanConf(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("updateScanconf");
        this.project = project;
        this.cache = cache;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload == null) {
            String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
            if (filePath != null) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                if (file != null) {
                    String scanConfPath = (String) cache.get(SCAN_CONF_PATH);
                    ScanConfService.getInstance(project).updateScanconf(file, scanConfPath);
                }
            }
        }
    }
}
