package com.xliic.idea.psi;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.file.PsiFile;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;

public class PsiManager {

	private static PsiManager psiManager;
	private final Project project;

	public PsiManager(@NotNull Project project) {
		this.project = project;
	}

	public static PsiManager getInstance(@NotNull Project project) {
		if (psiManager == null) {
			psiManager = new PsiManager(project);
		}
		return psiManager;
	}

	@Nullable
	public PsiFile findFile(@NotNull VirtualFile file) {
		return new PsiFile(project, file);
	}
}
