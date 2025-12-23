package com.xliic.openapi.preview.actions;

import static com.xliic.openapi.settings.Settings.Preview.RENDERER;
import static com.xliic.openapi.settings.Settings.Preview.SWAGGER_UI;

import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.preview.PreviewUtils;
import com.xliic.openapi.settings.SettingsService;

public class PreviewAction extends PreviewAbstractAction {

    @Override
    public void browse(Project project, VirtualFile file) throws Exception {
        BrowserUtil.browse(PreviewUtils.getURL(project, file, getRendererIndex()));
    }

    private static int getRendererIndex() {
        return SWAGGER_UI.equals(SettingsService.getInstance().getValue(RENDERER)) ? 0 : 1;
    }
}
