package com.xliic.openapi.platform.tree.actions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.project.DumbAware;
import com.xliic.openapi.platform.PlatformConnection;

public class PlatformOpenCollectionInWebUIAction extends AnJAction implements DumbAware {

    private final String collectionId;

    public PlatformOpenCollectionInWebUIAction(String collectionId) {
        super("Open In Web UI", "", null);
        this.collectionId = collectionId;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        PlatformConnection options = PlatformConnection.getOptions();
        String href = options.getPlatformUrl() + "/collections/" + collectionId;
        BrowserUtil.browse(href);
    }
}
