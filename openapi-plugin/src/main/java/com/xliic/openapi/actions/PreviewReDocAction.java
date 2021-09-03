package com.xliic.openapi.actions;

import com.xliic.idea.BrowserUtil;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.preview.PreviewUtils;

import java.net.MalformedURLException;

public class PreviewReDocAction extends PreviewAbstractAction {

    @Override
    public void browse(VirtualFile file) throws MalformedURLException {
        BrowserUtil.browse(PreviewUtils.getURL(file, 1));
    }
}
