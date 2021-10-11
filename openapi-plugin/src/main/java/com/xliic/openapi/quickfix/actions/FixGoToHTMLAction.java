package com.xliic.openapi.quickfix.actions;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.html.HTMLReportManager;
import com.xliic.openapi.report.html.ui.HTMLReportPanel;

public class FixGoToHTMLAction extends FixAction {

	private final List<Issue> issues;

	public FixGoToHTMLAction(List<Issue> issues) {
		super(0, OpenApiBundle.message("openapi.audit.intention.name"), null);
		this.issues = issues;
	}

	@Override
	public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file) {
		return true;
	}

	@Override
	public void invoke(@NotNull final Project project, Editor editor, PsiFile file, int offset) {
		final HTMLReportManager htmlReportManager = HTMLReportPanel.getInstance(project);
		if (htmlReportManager == null) {
			return;
		}
		ApplicationManager.getApplication().runWriteAction(() -> {
			htmlReportManager.handleGoToHTMLIntention(file.getVirtualFile(), issues);
		});
	}
}
