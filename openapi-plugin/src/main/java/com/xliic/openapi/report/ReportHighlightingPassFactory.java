package com.xliic.openapi.report;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.codeHighlighting.Pass;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPassFactory;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPassFactoryRegistrar;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPassRegistrar;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;

public class ReportHighlightingPassFactory
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
			return new ReportHighlightingPass(file, editor);
		}
		return null;
	}
}
