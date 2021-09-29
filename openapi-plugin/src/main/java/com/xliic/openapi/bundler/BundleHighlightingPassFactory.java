package com.xliic.openapi.bundler;

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

public final class BundleHighlightingPassFactory
		implements TextEditorHighlightingPassFactory, TextEditorHighlightingPassFactoryRegistrar {

	@Override
	public void registerHighlightingPassFactory(@NotNull TextEditorHighlightingPassRegistrar registrar,
			@NotNull Project project) {

		registrar.registerTextEditorHighlightingPass(this, new int[] { Pass.UPDATE_ALL }, null, true, -1);
	}

	@Override
	public TextEditorHighlightingPass createHighlightingPass(@NotNull final PsiFile file,
			@NotNull final Editor editor) {
		if (editor.getProject() == null) {
			return null;
		}
		if (OpenApiUtils.getFileType(file.getVirtualFile()) != OpenApiFileType.Unsupported) {
			return new BundleHighlightingPass(file, editor);
		}
		return null;
	}
}
