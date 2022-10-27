package com.xliic.openapi.platform.dictionary.quickfix;

import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.IncorrectOperationException;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerSingleInsertDictionary;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerUpdateAllDictionary;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManager;
import org.jetbrains.annotations.NotNull;

public class FixDictionaryAction extends IntentionAction implements Comparable<IntentionAction> {

    private final FixManager provider;

    public FixDictionaryAction(FixManager provider) {
        this.provider = provider;
    }

    @Override
    public @NotNull String getText() {
        return provider.getTitle();
    }

    @Override
    public @NotNull String getFamilyName() {
        return getText();
    }

    @Override
    public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile psiFile) {
        return provider.isAvailable();
    }

    @Override
    public void invoke(@NotNull Project project, Editor editor, PsiFile file, int offset) throws IncorrectOperationException {
        DocumentUpdater documentUpdater = new DocumentUpdater(editor, file);
        WriteCommandAction.runWriteCommandAction(project, () -> {
            documentUpdater.process(provider.getFixItems());
        }
                );
    }

    @Override
    public boolean startInWriteAction() {
        return false;
    }

    private int getPriority() {
        if (provider instanceof FixManagerUpdateAllDictionary) {
            return 0;
        } else if (provider instanceof FixManagerSingleInsertDictionary) {
            return 1;
        } else {
            return 2;
        }
    }

    @Override
    public int compareTo(@NotNull IntentionAction o) {
        if (o instanceof FixDictionaryAction) {
            FixDictionaryAction d = (FixDictionaryAction) o;
            return Integer.compare(getPriority(), d.getPriority());
        } else {
            return 0;
        }
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return provider.isResponsibleFor(pointer, label);
    }
}
