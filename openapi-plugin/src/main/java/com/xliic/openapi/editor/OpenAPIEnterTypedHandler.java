package com.xliic.openapi.editor;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.actionSystem.DataContext;
import com.xliic.core.codeInsight.editorActions.enter.EnterHandlerDelegate;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.actionSystem.EditorActionHandler;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Ref;
import com.xliic.openapi.services.PlaceHolderService;

public class OpenAPIEnterTypedHandler extends EnterHandlerDelegate {

    public OpenAPIEnterTypedHandler(@NotNull Editor editor) {
        super(editor);
    }

    @Override
    public Result preprocessEnter(@NotNull PsiFile psiFile, @NotNull Editor editor, @NotNull Ref<Integer> ref, @NotNull Ref<Integer> ref1,
            @NotNull DataContext dataContext, @Nullable EditorActionHandler editorActionHandler) {
        PlaceHolderService placeHolderService = PlaceHolderService.getInstance(psiFile.getProject());
        return placeHolderService.preprocessEnter(editor, ref.get());
    }

    @Override
    public Result postProcessEnter(@NotNull PsiFile psiFile, @NotNull Editor editor, @NotNull DataContext dataContext) {
        return Result.Continue;
    }
}
