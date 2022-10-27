package com.xliic.openapi.report;

import static com.xliic.core.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.core.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.core.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.openapi.report.Severity.getHighlightSeverity;
import static com.xliic.openapi.report.Severity.getProblemHighlightType;

import java.util.Collections;
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
import com.xliic.core.lang.HighlightSeverity;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.TextRange;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.quickfix.actions.FixBulkAction;
import com.xliic.openapi.quickfix.actions.FixCombinedAction;
import com.xliic.openapi.quickfix.actions.FixGoToHTMLAction;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.PlaceHolderService;
import com.xliic.openapi.services.QuickFixService;

public class ReportHighlightingPass extends TextEditorHighlightingPass {

    private final Editor editor;
    private final PsiFile psiFile;

    private final AuditService auditService;
    private final QuickFixService quickFixService;
    private final PlaceHolderService placeHolderService;

    public ReportHighlightingPass(final PsiFile file, final Editor editor) {
        super(file.getProject(), editor.getDocument(), true);
        this.editor = editor;
        psiFile = file;
        auditService = AuditService.getInstance(myProject);
        quickFixService = QuickFixService.getInstance();
        placeHolderService = PlaceHolderService.getInstance(myProject);
    }

    @Override
    public void doCollectInformation(@NotNull final ProgressIndicator progress) {
        placeHolderService.update(editor);
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
        Map<String, List<HighlightInfo>> pointerToInfo = new HashMap<>();
        Map<String, List<Issue>> idToIssues = new HashMap<>();
        Map<String, List<Issue>> pointerToIssues = new HashMap<>();
        for (Issue issue : issues) {
            if (issue.getRangeMarker() != null) {
                String pointer = issue.getPointer();
                if (!pointerToIssues.containsKey(pointer)) {
                    pointerToIssues.put(pointer, new LinkedList<>());
                }
                pointerToIssues.get(pointer).add(issue);
                String id = issue.getId();
                if (!idToIssues.containsKey(id)) {
                    idToIssues.put(id, new LinkedList<>());
                }
                idToIssues.get(id).add(issue);
            }
        }
        boolean isTempFile = TempFileUtils.isExtRefFile(psiFile.getVirtualFile());
        // Create editor highlights per pointer
        for (Map.Entry<String, List<Issue>> entry : pointerToIssues.entrySet()) {
            String pointer = entry.getKey();
            List<Issue> pointerIssues = entry.getValue();
            pointerToInfo.put(pointer, new LinkedList<>());
            List<HighlightInfo> infoList = pointerToInfo.get(pointer);
            pointerToActions.put(pointer, new LinkedList<>());
            List<IntentionAction> actions = pointerToActions.get(pointer);
            actions.add(new FixGoToHTMLAction(pointerIssues));
            // Create single fixes
            for (Issue issue : pointerIssues) {
                String label = issue.getHighlightInfoLabel();
                TextRange range = issue.getTextRange();
                ProblemHighlightType type = getProblemHighlightType(issue.getSeverity());
                HighlightSeverity severity = getHighlightSeverity(issue.getSeverity());
                HighlightInfoType infoType = getHighlightInfoType(type, severity, getSeverityRegistrar(myProject));
                HighlightInfo info = newHighlightInfo(infoType).pointer(issue.getPointer()).range(range)
                        .descriptionAndTooltip(label).create();
                infoList.add(info);
                if (!isTempFile) {
                    actions.addAll(quickFixService.getSingleFixActions(psiFile, issue));
                }
            }
            // Create combined fixes
            if (!isTempFile) {
                FixCombinedAction ca = quickFixService.getCombinedFixAction(psiFile, pointerIssues);
                if (ca != null) {
                    actions.add(ca);
                }
            }
        }
        // Create bulk fixes
        if (!isTempFile) {
            for (Map.Entry<String, List<Issue>> idToIssuesEntry : idToIssues.entrySet()) {
                List<Issue> idIssues = idToIssuesEntry.getValue();
                Map<Issue, List<FixBulkAction>> issueToActions = quickFixService.getBulkFixActions(psiFile, idIssues);
                for (Map.Entry<Issue, List<FixBulkAction>> entry : issueToActions.entrySet()) {
                    pointerToActions.get(entry.getKey().getPointer()).addAll(entry.getValue());
                }
            }
        }
        // Register actions
        for (Map.Entry<String, List<HighlightInfo>> entry : pointerToInfo.entrySet()) {
            String pointer = entry.getKey();
            List<HighlightInfo> infoList = entry.getValue();
            List<IntentionAction> actions = pointerToActions.get(pointer);
            if (actions.size() > 1) {
                Collections.sort(actions);
            }
            if (!actions.isEmpty()) {
                QuickFixAction.registerQuickFixActions(infoList.get(0), null, actions);
            }
            highlights.addAll(infoList);
        }
    }

    @Override
    public void doApplyInformationToEditor() {
        if (myDocument != null) {
            UpdateHighlightersUtil.setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(), highlights, getColorsScheme(), getId());
        }
    }
}
