package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.ASTService;

public class TreeDocumentListener extends DocumentListener {

	private final ASTService astService;

	public TreeDocumentListener(@NotNull Project project) {
		this.astService = ASTService.getInstance(project);
	}

	@Override
	public void beforeDocumentChange(@NotNull DocumentEvent event) {
	}

	@Override
	public void documentChanged(@NotNull DocumentEvent event) {
		astService.documentChanged(event.getDocument());
	}
}
