package com.xliic.core.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;

public class PsiDocumentManager {

    private final static PsiDocumentManager psiDocumentManager = new PsiDocumentManager();
    private final static Project project = Project.getInstance();

    public static PsiDocumentManager getInstance(@NotNull Project project) {
        return psiDocumentManager;
    }

    public PsiFile getPsiFile(@NotNull Document document) {
        return new PsiFile(project, FileDocumentManager.getInstance().getFile(document));
    }
}
