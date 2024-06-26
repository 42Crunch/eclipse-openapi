package com.xliic.openapi.actions;

import static com.xliic.openapi.utils.Utils.getOpenAPIPsiFile;

import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Icon;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.services.ASTService;

public class FixSnippetAction extends AnJAction implements DumbAware { 

	@NotNull
    private final FixManager provider;

    public FixSnippetAction(@NotNull FixManager provider, @Nullable Icon icon) {
        super(provider.getTitle(), "", icon);
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
            ASTService astService = ASTService.getInstance(event.getProject());
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
        WriteCommandAction.runWriteCommandAction(project, () -> {
            documentUpdater.process(provider.getFixItems());
            editor.getCaretModel().moveToOffset(documentUpdater.getMoveToOffset());
            editor.getScrollingModel().scrollToCaret(ScrollType.CENTER_UP);
        });
    }
}
