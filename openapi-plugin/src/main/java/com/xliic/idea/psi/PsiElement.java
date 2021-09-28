package com.xliic.idea.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.PsiFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.parser.ast.node.Node;

public class PsiElement {

	private final int offset;
	private final PsiFile file;
	private final Node node;

	public PsiElement(int offset, @NotNull Node node, @NotNull PsiFile file) {
		this.offset = offset;
		this.node = node;
		this.file = file;
	}

	public Project getProject() {
		return file.getProject();
	}

	public String getText() {
		return node.getValue();
	}

	public int getOffset() {
		return offset;
	}

	public PsiFile getFile() {
		return file;
	}

	public Node getNode() {
		return node;
	}

	public PsiFile getContainingFile() {
		return file;
	}
}
