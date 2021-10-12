package com.xliic.openapi.quickfix.actions;

import java.util.List;

import org.eclipse.ui.IMarkerResolutionRelevance;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.QuickFixService;

public abstract class FixAction extends IntentionAction implements IMarkerResolutionRelevance, Comparable<FixAction> {

	private final int priority;
	private final String title;
	private final FixManager provider;

	public FixAction(int priority, String title, FixManager provider) {
		this.priority = priority;
		this.title = title;
		this.provider = provider;
	}

	@Override
	@NotNull
	public String getText() {
		return getTitle();
	}

	@Override
	@NotNull
	public String getFamilyName() {
		return getTitle();
	}

	@Override
	public boolean isAvailable(@NotNull Project project, Editor editor, PsiFile file) {
		return provider.isAvailable();
	}

	@Override
	public void invoke(@NotNull final Project project, Editor editor, PsiFile file, int offset) {
		QuickFixService quickFixService = QuickFixService.getInstance();
		DocumentUpdater documentUpdater = DocumentUpdater.getInstance(editor, file, provider);
		WriteCommandAction.runWriteCommandAction(project, () -> {
			List<Issue> fixedIssues = documentUpdater.process();
			quickFixService.fix(project, fixedIssues);
		});
	}

	@Override
	public int getRelevanceForResolution() {
		return getPriority();
	}

	public int getPriority() {
		return priority;
	}

	public String getTitle() {
		return title;
	}

	@Override
	public int compareTo(@NotNull FixAction o) {
		if (priority == o.getPriority()) {
			return title.compareTo(o.getTitle());
		}
		return Integer.compare(o.getPriority(), priority);
	}

	@Override
	public boolean startInWriteAction() {
		return true;
	}

	@Override
	public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
		if ((provider == null) && (this instanceof FixGoToHTMLAction)) {
			return true;
		}
		return provider.isResponsibleFor(pointer, label);
	}
}
