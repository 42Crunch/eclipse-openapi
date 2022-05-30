package com.xliic.core.psi;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
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
	
	public PsiElement getParent() {
		Node parent = node.getParent();
		if (parent == null) {
			return null;
		}
		return new PsiElement(parent.getRange().getStartOffset(), parent, file);
	}
	
	public PsiElement getFirstChild() {
		List<Node> children = node.getChildren();
		if (children == null || children.isEmpty()) {
			return null;
		}
		Node child = children.get(0);
		return new PsiElement(child.getRange().getStartOffset(), child, file);
	}
	
	public int getTextOffset() {
		return offset;
	}
}
