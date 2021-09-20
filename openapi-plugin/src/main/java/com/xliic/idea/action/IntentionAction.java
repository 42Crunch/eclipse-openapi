package com.xliic.idea.action;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.IncorrectOperationException;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.project.Project;

public abstract class IntentionAction {

	@NotNull
	public abstract String getText();

	@NotNull
	public abstract String getFamilyName();

	public abstract boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file);

	public abstract void invoke(@NotNull Project project, Editor editor, PsiFile file, int offset)
			throws IncorrectOperationException;

	public abstract boolean startInWriteAction();
}
