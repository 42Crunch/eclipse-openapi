package com.xliic.openapi.actions;

import java.net.MalformedURLException;

import com.xliic.core.ide.BrowserUtil;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.preview.PreviewUtils;

public class PreviewSwaggerUIAction extends PreviewAbstractAction {

	@Override
	public void browse(Project project, VirtualFile file) throws MalformedURLException {
		BrowserUtil.browse(PreviewUtils.getURL(project, file, 0));
	}
}