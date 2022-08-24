package com.xliic.core.codeInsight.daemon;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;

public class DaemonCodeAnalyzer {

    private static DaemonCodeAnalyzer analyzer;

    public static DaemonCodeAnalyzer getInstance(@NotNull Project project) {
        if (analyzer == null) {
            analyzer = new DaemonCodeAnalyzer();
        }
        return analyzer;
    }

    public void restart(@NotNull PsiFile file) {}
}
