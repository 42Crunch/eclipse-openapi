package com.xliic.core.actionSystem;

import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;

public class AnActionUpdater implements FileListener, SettingsListener {

	@Override
	public void propertiesUpdated(String key) {
		EclipseWorkbenchUtil.updateActionBars();
	}

	@Override
	public void handleAllFilesClosed() {
		EclipseWorkbenchUtil.updateActionBars();
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {
		EclipseWorkbenchUtil.updateActionBars();
	}

	@Override
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
		EclipseWorkbenchUtil.updateActionBars();
	}

	@Override
	public void handleClosedFile(VirtualFile file) {
		EclipseWorkbenchUtil.updateActionBars();
	}

	@Override
	public void handleDocumentChanged(VirtualFile file) {
		EclipseWorkbenchUtil.updateActionBars();
	}
}
