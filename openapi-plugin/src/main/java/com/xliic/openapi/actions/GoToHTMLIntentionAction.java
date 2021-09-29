package com.xliic.openapi.actions;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;

public class GoToHTMLIntentionAction extends IntentionAction {

	private final VirtualFile virtualFile;
	private final List<Issue> issues;

	public GoToHTMLIntentionAction(VirtualFile file, List<Issue> issues) {
		this.virtualFile = file;
		this.issues = issues;
	}

	@Override
	@NotNull
	public String getText() {
		return OpenApiBundle.message("openapi.audit.intention.name");
	}

	@Override
	@NotNull
	public String getFamilyName() {
		return getText();
	}

	@Override
	public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file) {
		return true;
	}

	@Override
	public void invoke(@NotNull Project project, Editor editor, PsiFile file, int offset) {

		ApplicationManager.getApplication().runWriteAction(() -> {
			List<Issue> selectedIssues = new LinkedList<>();
			for (Issue issue : issues) {
				if (issue.getRange() != null) {
					TextRange range = issue.getTextRange();
					if (range.containsOffset(offset)) {
						selectedIssues.add(issue);
					}
				}
			}
			Objects.requireNonNull(HTMLReportPanel.getInstance(project)).handleGoToHTMLIntention(virtualFile,
					selectedIssues);
		});
	}

	@Override
	public boolean startInWriteAction() {
		return true;
	}
}
