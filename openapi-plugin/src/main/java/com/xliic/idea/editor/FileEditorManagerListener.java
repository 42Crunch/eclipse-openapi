package com.xliic.idea.editor;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;

public interface FileEditorManagerListener {
	
	public interface Before {
	    public void beforeFileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file);
	    public void beforeFileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file);
	}

    public void fileOpened(@NotNull FileEditorManager source, @NotNull VirtualFile file);
    public void fileClosed(@NotNull FileEditorManager source, @NotNull VirtualFile file);
    public void selectionChanged(@NotNull FileEditorManagerEvent event);
}
