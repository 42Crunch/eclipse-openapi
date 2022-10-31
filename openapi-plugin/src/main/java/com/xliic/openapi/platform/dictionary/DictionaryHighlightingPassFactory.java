package com.xliic.openapi.platform.dictionary;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeHighlighting.Pass;
import com.xliic.core.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.core.codeHighlighting.TextEditorHighlightingPassFactory;
import com.xliic.core.codeHighlighting.TextEditorHighlightingPassFactoryRegistrar;
import com.xliic.core.codeHighlighting.TextEditorHighlightingPassRegistrar;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;

final public class DictionaryHighlightingPassFactory implements TextEditorHighlightingPassFactory, TextEditorHighlightingPassFactoryRegistrar {

    @Override
    public void registerHighlightingPassFactory(@NotNull TextEditorHighlightingPassRegistrar registrar, @NotNull Project project) {
        registrar.registerTextEditorHighlightingPass(this, new int[] { Pass.UPDATE_ALL }, null, true, -1);
    }

    @Override
    public TextEditorHighlightingPass createHighlightingPass(@NotNull final PsiFile file, @NotNull final Editor editor) {
        if ((editor.getProject() != null) && (OpenApiUtils.getFileType(file.getVirtualFile()) != OpenApiFileType.Unsupported)) {
            return new DictionaryHighlightingPass(file, editor);
        }
        return null;
    }
}
