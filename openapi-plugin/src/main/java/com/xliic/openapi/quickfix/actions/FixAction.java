package com.xliic.openapi.quickfix.actions;

import java.util.List;

import org.eclipse.ui.IMarkerResolutionRelevance;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.QuickFixService;

public abstract class FixAction extends IntentionAction implements IMarkerResolutionRelevance {

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
        // Ask the manager if a dialog must be shown
        if (provider.showDialog()) {
            ApplicationManager.getApplication().invokeLater(() -> {
                // Continue only if a user presses OK button
                if (provider.openDialog()) {
                    DocumentUpdater documentUpdater = DocumentUpdater.getInstance(editor, file, provider);
                    WriteCommandAction.runWriteCommandAction(project, () -> {
                            List<Issue> fixedIssues = documentUpdater.process();
                            quickFixService.fix(project, fixedIssues);
                        }
                    );
                }
            });
        }
        else {
            DocumentUpdater documentUpdater = DocumentUpdater.getInstance(editor, file, provider);
            WriteCommandAction.runWriteCommandAction(project, () -> {
                    List<Issue> fixedIssues = documentUpdater.process();
                    quickFixService.fix(project, fixedIssues);
                }
            );
        }
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
    public int compareTo(@NotNull IntentionAction o) {
        if (o instanceof FixAction) {
            FixAction fa = (FixAction) o;
            if (priority == fa.getPriority()) {
                return title.compareTo(fa.getTitle());
            }
            return Integer.compare(fa.getPriority(), priority);
        }
        return 1;
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
