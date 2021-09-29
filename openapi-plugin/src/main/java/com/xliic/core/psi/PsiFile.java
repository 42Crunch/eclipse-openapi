package com.xliic.core.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

public class PsiFile {

	private final Project project;
	private final VirtualFile file;

	private volatile int hashCode;

	public PsiFile(@NotNull Project project, @NotNull VirtualFile file) {
		this.file = file;
		this.project = project;
	}

	public PsiElement findElementAt(int offset) {
		ASTService astService = ASTService.getInstance(project);
		Node root = astService.getRootNode(file);
		if (root != null) {
			Node target = root.findNodeAtOffset(offset);
			if (target != null) {
				if (target.isScalar()) {
					return new LeafPsiElement(offset, target, this);
				} else {
					return new PsiElement(offset, target, this);
				}
			}
		}
		return null;
	}

	@Override
	public int hashCode() {
		int result = hashCode;
		if (result == 0) {
			final int prime = 31;
			result = 1;
			result = prime * result + ((file == null) ? 0 : file.hashCode());
			hashCode = result;
		}
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		PsiFile other = (PsiFile) obj;
		if (file == null) {
			if (other.file != null)
				return false;
		} else if (!file.equals(other.file))
			return false;
		return true;
	}

	public Project getProject() {
		return project;
	}

	public VirtualFile getVirtualFile() {
		return file;
	}

	public int getTextLength() {
		return 0; // todo
	}

	public PsiElement toPsiElement() {
		ASTService astService = ASTService.getInstance(project);
		Node root = astService.getRootNode(file);
		if (root != null) {
			return new PsiElement(0, root, this);
		}
		return null;
	}

}
