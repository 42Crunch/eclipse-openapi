package com.xliic.openapi.platform.tree.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.platform.PlatformConnection;

public class PlatformOpenAPIInWebUIAction extends AnJAction implements DumbAware {

    private final String apiId;

    public PlatformOpenAPIInWebUIAction(String apiId) {
        super("Open In Web UI", "", null);
        this.apiId = apiId;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }
    
    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        PlatformConnection options = PlatformConnection.getOptions();
        String href = options.getPlatformUrl() + "/apis/" + apiId + "/api-summary";
        BrowserUtil.browse(href);
    }
}
