package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.project.Project;
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
