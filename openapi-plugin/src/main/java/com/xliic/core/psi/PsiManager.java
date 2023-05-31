package com.xliic.core.psi;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

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

    @NotNull
    public PsiFile findFile(@NotNull VirtualFile file) {
        return new PsiFile(project, file);
    }
}
