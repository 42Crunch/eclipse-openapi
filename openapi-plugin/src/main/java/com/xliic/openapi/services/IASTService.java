package com.xliic.openapi.services;

import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.document.Document;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;

public interface IASTService {

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);

	public void bundleDocumentChanged(Set<String> fileNames);

	public void documentChanged(@NotNull Document document);

	public Node getRootNode(@NotNull VirtualFile file);

	public Node getRootNode(@NotNull VirtualFile file, @NotNull String text);

	public void addASTDocumentListener(@NotNull VirtualFile file);

	public void removeASTDocumentListener(@NotNull VirtualFile file);

	public void scheduleToRemove(@NotNull VirtualFile file);
}
