package com.xliic.openapi.actions;

import java.net.MalformedURLException;

import com.xliic.idea.BrowserUtil;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.preview.PreviewUtils;

public class PreviewReDocAction extends PreviewAbstractAction {

	@Override
	public void browse(Project project, VirtualFile file) throws MalformedURLException {
		BrowserUtil.browse(PreviewUtils.getURL(project, file, 1));
	}
}
