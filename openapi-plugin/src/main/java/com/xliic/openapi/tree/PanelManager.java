package com.xliic.openapi.tree;

import org.eclipse.core.resources.IFile;

import com.xliic.idea.file.VirtualFile;

public interface PanelManager {

    void handleAllFilesClosed();
    void handleClosedFile(VirtualFile file);
    void handleSelectedFile(VirtualFile file);
    void handleToolWindowRegistered();
    void handleDocumentChanged(IFile file);
    void handleFileNameChanged(IFile newFile, IFile oldFile);
    void handleLAFUpdate(boolean isDarkTheme);
}
