package com.xliic.openapi.editor;

import static com.xliic.openapi.OpenApiUtils.JSON_REF_PATTERN;
import static com.xliic.openapi.OpenApiUtils.YAML_REF_PATTERN;
import static com.xliic.openapi.OpenApiUtils.getFileType;
import static com.xliic.openapi.OpenApiUtils.getRefTextFromPsiElement;

import java.io.File;
import java.nio.file.Paths;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.navigation.DirectNavigationProvider;
import com.xliic.idea.project.Project;
import com.xliic.idea.psi.LeafPsiElement;
import com.xliic.idea.psi.PsiElement;
import com.xliic.idea.psi.PsiManager;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

public class OpenAPINavigationProvider implements DirectNavigationProvider {

	@Override
	public @Nullable PsiElement getNavigationElement(@NotNull PsiElement psiElement) {

		VirtualFile file = psiElement.getContainingFile().getVirtualFile();
		if (getFileType(file) == OpenApiFileType.Unsupported) {
			return null;
		}

		if (!((psiElement instanceof LeafPsiElement)
				&& (JSON_REF_PATTERN.accepts(psiElement) || YAML_REF_PATTERN.accepts(psiElement)))) {
			return null;
		}

		String text = getRefTextFromPsiElement(psiElement);
		String[] parts = text.split("#/");
		if (parts.length == 0) {
			return null;
		}

		final String refFileName = parts[0];
		final Project project = psiElement.getProject();

		// Local ref inside this current file
		if ((parts.length == 2) && StringUtils.isEmpty(refFileName)) {
			return getPsiElementFromIndex(project, file, "/" + parts[1]);
		}

		// External ref outside this current file
		File refIoFile = new File(new File(Paths.get(file.getPath()).getParent().toString()), refFileName);
		VirtualFile refFile = LocalFileSystem.getInstance().findFileByIoFile(refIoFile);
		if (refFile == null || getFileType(refFile) == OpenApiFileType.Unsupported) {
			return null;
		}

		if (parts.length == 1) {
			// External ref = file
			return PsiManager.getInstance(project).findFile(refFile).toPsiElement();
		} else {
			// External ref = specific pointer in the file
			return getPsiElementFromIndex(project, refFile, "/" + parts[1]);
		}
	}

	private PsiElement getPsiElementFromIndex(Project project, VirtualFile refFile, String pointer) {
		ASTService astService = ASTService.getInstance(project);
		Node root = astService.getRootNode(refFile);
		if (root != null) {
			Node target = root.find(pointer);
			if (target != null) {
				return new PsiElement(target.getRange().getStartOffset(), target, new PsiFile(project, refFile));
			}
		}
		return null;
	}
}
