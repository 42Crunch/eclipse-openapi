package com.xliic.openapi.report;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.ProgressIndicator;
import com.xliic.idea.codeHighlighting.HighlightSeverity;
import com.xliic.idea.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.idea.codeInsight.HighlightInfo;
import com.xliic.idea.codeInsight.HighlightInfoType;
import com.xliic.idea.codeInsight.QuickFixAction;
import com.xliic.idea.codeInsight.SeverityRegistrar;
import com.xliic.idea.codeInsight.UpdateHighlightersUtil;
import com.xliic.idea.codeInspection.ProblemDescriptorUtil;
import com.xliic.idea.codeInspection.ProblemHighlightType;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.openapi.actions.GoToHTMLIntentionAction;
import com.xliic.openapi.services.DataService;

public class ReportHighlightingPass extends TextEditorHighlightingPass {

	private final PsiFile psiFile;
	private final List<HighlightInfo> highlights = new LinkedList<>();

	public ReportHighlightingPass(final PsiFile file, final Editor editor) {
		super(file.getProject(), editor.getDocument(), true);
		psiFile = file;
	}

	@Override
	public void doCollectInformation(@NotNull final ProgressIndicator progress) {

		DataService dataService = DataService.getInstance(myProject);
		if (!dataService.isAuditParticipantFile(psiFile.getVirtualFile().getPath())) {
			highlights.clear();
			return;
		}
		List<Issue> issues = dataService.getIssuesForAuditParticipantFileName(psiFile.getVirtualFile().getPath());
		for (Issue issue : issues) {
			if (!issue.isLocationFound()) {
				continue;
			}
			ProblemHighlightType type = Severity.getProblemHighlightType(issue.getSeverity());
			HighlightSeverity severity = Severity.getHighlightSeverity(issue.getSeverity());
			HighlightInfoType highlightInfoType = ProblemDescriptorUtil.getHighlightInfoType(type, severity,
					SeverityRegistrar.getSeverityRegistrar(myProject));
			HighlightInfo info = HighlightInfo.newHighlightInfo(highlightInfoType).range(issue.getTextRange())
					.pointer(issue.getPointer()).descriptionAndTooltip(issue.getLabel()).create();
			QuickFixAction.registerQuickFixAction(info, new GoToHTMLIntentionAction(psiFile.getVirtualFile(), issues));
			highlights.add(info);
		}
	}

	@Override
	public void doApplyInformationToEditor() {
		if (myDocument != null) {
			UpdateHighlightersUtil.setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(),
					highlights, getColorsScheme(), getId());
		}
	}

	@Override
	public List<HighlightInfo> getInformationToEditor() {
		return highlights;
	}
}
