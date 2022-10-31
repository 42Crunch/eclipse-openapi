package com.xliic.core.codeInsight.editorActions.enter;

import org.eclipse.swt.SWT;
import org.eclipse.swt.custom.StyledText;
import org.eclipse.swt.widgets.Event;
import org.eclipse.swt.widgets.Listener;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.actionSystem.DataContext;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.actionSystem.EditorActionHandler;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Ref;
import com.xliic.openapi.services.PlaceHolderService;

public abstract class EnterHandlerDelegate implements Listener {

    public enum Result {
        Default, Continue, DefaultForceIndent, DefaultSkipIndent, Stop
    }

    private final Editor editor;

    public EnterHandlerDelegate(@NotNull Editor editor) {
        this.editor = editor;
    }

    @Override
    public void handleEvent(Event event) {
        switch (event.detail) {
        case SWT.TRAVERSE_ESCAPE:
            PlaceHolderService placeHolderService = PlaceHolderService.getInstance(editor.getProject());
            placeHolderService.dispose(editor);
            event.doit = false;
            event.detail = SWT.TRAVERSE_NONE;
            break;
        case SWT.TRAVERSE_RETURN:
            StyledText text = (StyledText) event.widget;
            int offset = text.getSelection().x;
            PsiFile psiFile = new PsiFile(editor.getProject(), editor.getVirtualFile());
            Ref<Integer> ref = new Ref<>(offset);
            Result result = preprocessEnter(psiFile, editor, ref, null, null, null);
            event.doit = (result == Result.Stop);
            event.detail = SWT.TRAVERSE_NONE;
            break;
        }
    }

    public abstract Result preprocessEnter(@NotNull PsiFile psiFile, @NotNull Editor editor, @NotNull Ref<Integer> ref, @NotNull Ref<Integer> ref1,
            @NotNull DataContext dataContext, @Nullable EditorActionHandler editorActionHandler);

    public abstract Result postProcessEnter(@NotNull PsiFile psiFile, @NotNull Editor editor, @NotNull DataContext dataContext);
}
