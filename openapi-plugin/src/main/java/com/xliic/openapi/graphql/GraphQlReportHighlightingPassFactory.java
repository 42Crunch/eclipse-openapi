package com.xliic.openapi.graphql;

import com.xliic.core.codeHighlighting.*;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.utils.FileUtils.isGraphQl;

final public class GraphQlReportHighlightingPassFactory implements TextEditorHighlightingPassFactory,
        TextEditorHighlightingPassFactoryRegistrar {

    @Override
    public void registerHighlightingPassFactory(@NotNull TextEditorHighlightingPassRegistrar registrar, @NotNull Project project) {
        registrar.registerTextEditorHighlightingPass(this, new int[]{Pass.UPDATE_ALL}, null, true, -1);
    }

    @Override
    public TextEditorHighlightingPass createHighlightingPass(@NotNull final PsiFile file, @NotNull final Editor editor) {
        if (editor.getProject() != null && isGraphQl(file.getVirtualFile())) {
            return new GraphQlReportHighlightingPass(file, editor);
        }
        return null;
    }
}
