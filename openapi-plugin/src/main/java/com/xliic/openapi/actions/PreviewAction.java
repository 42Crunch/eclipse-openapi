package com.xliic.openapi.actions;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;

import java.net.MalformedURLException;

import com.xliic.idea.BrowserUtil;
import com.xliic.idea.PropertiesComponent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewUtils;

public class PreviewAction extends PreviewAbstractAction {

	@Override
	public void browse(Project project, VirtualFile file) throws MalformedURLException {
		int rendererIndex = PropertiesComponent.getInstance().getInt(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX);
		BrowserUtil.browse(PreviewUtils.getURL(project, file, rendererIndex));
	}
}
