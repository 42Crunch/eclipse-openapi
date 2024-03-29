package com.xliic.core.codeInsight;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.IncorrectOperationException;
import com.xliic.openapi.quickfix.actions.FixAction;

public abstract class IntentionAction implements Comparable<IntentionAction> {

    @Override
    public int compareTo(@NotNull IntentionAction o) {
        return (o instanceof FixAction) ? -1 : 0;
    }

    @NotNull
    public abstract String getText();

    @NotNull
    public abstract String getFamilyName();

    public abstract boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file);

    public abstract void invoke(@NotNull Project project, Editor editor, PsiFile file, int offset) throws IncorrectOperationException;

    public abstract boolean startInWriteAction();

    public abstract boolean isResponsibleFor(@NotNull String pointer, @NotNull String label);
}
