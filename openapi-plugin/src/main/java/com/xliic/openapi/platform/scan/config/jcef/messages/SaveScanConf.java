package com.xliic.openapi.platform.scan.config.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.Map;

import static com.xliic.openapi.platform.scan.config.jcef.JCEFScanConfPanel.SCAN_CONF_PATH;

public class SaveScanConf extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public SaveScanConf(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("saveScanconf");
        this.project = project;
        this.cache = cache;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            String scanConfPath = (String) cache.get(SCAN_CONF_PATH);
            try {
                ScanConfigUtils.createScanConf(project, scanConfPath, (String) payload);
            } catch (IOException e) {
                MsgUtils.notifyError(project, e.toString());
            }
        }
    }
}
