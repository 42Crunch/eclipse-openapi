package com.xliic.openapi.tree;

import org.eclipse.core.resources.IFile;

public interface PanelManager {

    void handleAllFilesClosed();
    void handleClosedFile(IFile file);
    void handleSelectedFile(IFile file);
    void handleToolWindowRegistered();
    void handleDocumentChanged(IFile file);
    void handleFileNameChanged(IFile newFile, IFile oldFile);
    void handleLAFUpdate(boolean isDarkTheme);
}
