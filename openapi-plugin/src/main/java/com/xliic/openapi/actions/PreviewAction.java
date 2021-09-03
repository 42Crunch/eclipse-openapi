package com.xliic.openapi.actions;

import com.xliic.idea.BrowserUtil;
import com.xliic.idea.PropertiesComponent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewUtils;

import java.net.MalformedURLException;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;

public class PreviewAction extends PreviewAbstractAction {

    @Override
    public void browse(VirtualFile file) throws MalformedURLException {
        int rendererIndex = PropertiesComponent.getInstance().getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
        BrowserUtil.browse(PreviewUtils.getURL(file, rendererIndex));
    }
}
