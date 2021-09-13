package com.xliic.openapi.tree;

import com.xliic.idea.file.VirtualFile;

public interface PanelManager {

	void handleAllFilesClosed();

	void handleClosedFile(VirtualFile file);

	void handleSelectedFile(VirtualFile file);

	void handleToolWindowRegistered();

	void handleDocumentChanged(VirtualFile file);

	void handleFileNameChanged(VirtualFile newFile, String oldFileName);

	void handleLAFUpdate(boolean isDarkTheme);
}
