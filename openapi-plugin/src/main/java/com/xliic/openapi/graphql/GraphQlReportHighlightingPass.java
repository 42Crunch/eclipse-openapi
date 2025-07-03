package com.xliic.openapi.graphql;

import static com.xliic.core.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.core.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.core.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.openapi.report.AuditUtils.getAuditOfText;
import static com.xliic.openapi.report.AuditUtils.getScoreText;
import static com.xliic.openapi.report.types.Severity.getHighlightSeverity;
import static com.xliic.openapi.report.types.Severity.getProblemHighlightType;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeHighlighting.TextEditorHighlightingPass;
import com.xliic.core.codeInsight.HighlightInfo;
import com.xliic.core.codeInsight.HighlightInfoType;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.codeInsight.QuickFixAction;
import com.xliic.core.codeInsight.UpdateHighlightersUtil;
import com.xliic.core.codeInspection.ProblemHighlightType;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.lang.HighlightSeverity;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.TextRange;
import com.xliic.openapi.quickfix.actions.FixGoToHTMLAction;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.AuditService;

public class GraphQlReportHighlightingPass extends TextEditorHighlightingPass {

    private final PsiFile psiFile;
    private final AuditService auditService;

    public GraphQlReportHighlightingPass(final PsiFile file, final Editor editor) {
        super(file.getProject(), editor.getDocument(), true);
        psiFile = file;
        auditService = AuditService.getInstance(myProject);
    }

    @Override
    public void doCollectInformation(@NotNull final ProgressIndicator progress) {
        String fileName = psiFile.getVirtualFile().getPath();
        if (auditService.isNotAuditParticipantFile(fileName)) {
            highlights.clear();
            return;
        }
        List<Issue> issues = auditService.getIssuesForAuditParticipantFileName(fileName);
        if (issues.isEmpty()) {
            highlights.clear();
            return;
        }
        // In graphQl, issue pointer = location and different locations may point to the same place in text
        // That is why we are going to use text range as map key, not pointer
        Map<String, List<Issue>> rangeToIssues = new HashMap<>();
        for (Issue issue : issues) {
            if (issue.getRangeMarker() != null) {
                String range = issue.getRangeMarker().getTextRange().toString();
                if (!rangeToIssues.containsKey(range)) {
                    rangeToIssues.put(range, new LinkedList<>());
                }
                rangeToIssues.get(range).add(issue);
            }
        }
        for (String rangeKey : rangeToIssues.keySet()) {
            List<Issue> rangeIssues = rangeToIssues.get(rangeKey);
            HighlightInfo firstInfo = null;
            for (Issue issue: rangeIssues) {
                if (issue.getRangeMarker() != null) {
                    String label = getHighlightInfoLabel(issue);
                    TextRange range = getTextRange(issue);
                    ProblemHighlightType type = getProblemHighlightType(issue.getSeverity());
                    HighlightSeverity severity = getHighlightSeverity(issue.getSeverity());
                    HighlightInfoType infoType = getHighlightInfoType(type, severity, getSeverityRegistrar(myProject));
                    HighlightInfo info = newHighlightInfo(infoType).pointer(issue.getPointer()).range(range).descriptionAndTooltip(label).create();
                    highlights.add(info);
                    if (firstInfo == null) {
                        firstInfo = info;
                    }
                }
            }
            if (firstInfo != null) {
            	List<IntentionAction> actions = new LinkedList<>();
            	actions.add(new FixGoToHTMLAction(rangeIssues));
            	pointerToActions.put(firstInfo.getPointer(), actions);
                QuickFixAction.registerQuickFixActions(firstInfo, null, actions);
            }
        }
    }

    @Override
    public void doApplyInformationToEditor() {
        UpdateHighlightersUtil.setHighlightersToEditor(myProject, myDocument,
                0, psiFile.getTextLength(), highlights, getColorsScheme(), getId());
    }

    private static TextRange getTextRange(Issue issue) {
        RangeMarker marker = issue.getRangeMarker();
        return new TextRange(marker.getStartOffset(), marker.getEndOffset());
    }

    private static String getHighlightInfoLabel(Issue issue) {
        return issue.getDescription() + " in " + getAuditOfText(issue) + " " + getScoreText(issue);
    }
}
