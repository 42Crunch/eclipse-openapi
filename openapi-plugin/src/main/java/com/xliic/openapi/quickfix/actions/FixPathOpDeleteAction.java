package com.xliic.openapi.quickfix.actions;

import static com.xliic.openapi.utils.Utils.getOpenAPIPsiFile;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManagerPathOpDelete;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.MsgUtils;

public class FixPathOpDeleteAction extends AnJAction implements DumbAware {

    private static final String PROMPT = "Are you sure you want to delete unused schemas?";

    @NotNull
    private final FixManagerPathOpDelete provider;

    public FixPathOpDeleteAction(@NotNull FixManagerPathOpDelete provider) {
        super(provider.getTitle(), "", null);
        this.provider = provider;
    }

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        PsiFile psiFile = getOpenAPIPsiFile(event);
        if (psiFile != null && provider.isAvailable()) {
            ASTService astService = ASTService.getInstance(Objects.requireNonNull(event.getProject()));
            event.getPresentation().setEnabled(astService.getRootNode(psiFile.getVirtualFile()) != null);
        } else {
            event.getPresentation().setEnabled(false);
        }
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        PsiFile psiFile = getOpenAPIPsiFile(event);
        Project project = Objects.requireNonNull(psiFile).getProject();
        FileEditor fileEditor = FileEditorManager.getInstance(project).getSelectedEditor(psiFile.getVirtualFile());
        Editor editor = ((TextEditor) Objects.requireNonNull(fileEditor)).getEditor();
        DocumentUpdater documentUpdater = new DocumentUpdater(editor, psiFile);
        if (provider.openDialog()) {
            ApplicationManager.getApplication().invokeLater(() -> {
                updateDocument(project, documentUpdater, editor, MsgUtils.confirm(project, PROMPT));
            });
        } else {
            updateDocument(project, documentUpdater, editor, false);
        }
    }

    private void updateDocument(Project project, DocumentUpdater documentUpdater, Editor editor, boolean removeDeadRefs) {
        WriteCommandAction.runWriteCommandAction(project, () -> {
            documentUpdater.process(provider.getFixItems(removeDeadRefs));
            editor.getCaretModel().moveToOffset(documentUpdater.getMoveToOffset());
            editor.getScrollingModel().scrollToCaret(ScrollType.CENTER_UP);
        });
    }
}
