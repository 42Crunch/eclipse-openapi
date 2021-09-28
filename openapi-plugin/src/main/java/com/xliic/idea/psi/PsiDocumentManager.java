package com.xliic.idea.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.Document;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class PsiDocumentManager {

	private final static PsiDocumentManager psiDocumentManager = new PsiDocumentManager();
	private final static Project project = OpenAPIAbstractUIPlugin.getInstance().getProject();

	public static PsiDocumentManager getInstance(@NotNull Project project) {
		return psiDocumentManager;
	}

	public PsiFile getPsiFile(@NotNull Document document) {
		return new PsiFile(project, FileDocumentManager.getInstance().getFile(document));
	}
}
