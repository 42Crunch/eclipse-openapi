package com.xliic.openapi.quickfix.managers;

import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.replace.ReplaceManager;
import com.xliic.openapi.parser.replace.Replacement;
import com.xliic.openapi.quickfix.FixIssueItem;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.report.types.Issue;

public class FixManagerBulk extends FixManager {

    private final QuickFix quickFix;
    private final Issue targetIssue;
    private final List<Issue> issues;

    private final String text;
    private final List<FixParameter> parameters;
    private volatile int fixItemsSize;

    public FixManagerBulk(PsiFile psiFile, QuickFix quickFix, Issue targetIssue, List<Issue> issues) {
        super(psiFile);
        this.quickFix = quickFix;
        this.targetIssue = targetIssue;
        this.issues = issues;
        text = quickFix.getFixText(isJson);
        parameters = quickFix.getParameters();
        fixItemsSize = 0;
    }

    @Override
    public List<FixItem> getFixItems() {

        FixItem targetFixItem = getFixItemForIssue(targetIssue);
        if (targetFixItem == null) {
            return Collections.emptyList();
        }
        List<FixItem> result = new LinkedList<>();
        for (Issue issue : issues) {
            if (issue != targetIssue) {
                FixItem item = getFixItemForIssue(issue);
                if (item != null) {
                    result.add(item);
                }
            }
        }
        if (result.isEmpty()) {
            return Collections.emptyList();
        }
        result.add(targetFixItem);
        return result;
    }

    @Override
    public boolean isAvailable() {
        return fixItemsSize > 0;
    }

    @Override
    public String getTitle() {
        fixItemsSize = getFixItems().size();
        return "Group fix: " + quickFix.getTitle().toLowerCase() + " in " + fixItemsSize + " locations";
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        for (Issue issue : issues) {
            if (pointer.equals(issue.getPointer()) && label.equals(issue.getHighlightInfoLabel())) {
                return true;
            }
        }
        return false;
    }

    private FixItem getFixItemForIssue(Issue issue) {
        String pointer = getAbsolutePointer(issue.getPointer(), quickFix.getPointer());
        if (parameters.isEmpty()) {
            return new FixIssueItem(issue, pointer, text, quickFix.getType());
        }
        OpenApiVersion version = getOpenApiVersion(issue.getAuditFileName(), psiFile.getProject());
        BundleResult bundle = getBundle(issue.getAuditFileName(), psiFile.getProject());
        List<Replacement> replacements = new LinkedList<>();
        for (FixParameter parameter : parameters) {
            List<Object> values = parameter.getSource().get(issue, quickFix, parameter, version, bundle);
            if (!values.isEmpty()) {
                String value = (String) wrap(values).get(0);
                replacements.add(new Replacement(parameter.getPath(), value, parameter.isKeyType()));
            }
        }
        if (!replacements.isEmpty() && (parameters.size() == replacements.size())) {
            return new FixIssueItem(issue, pointer, ReplaceManager.replace(text, replacements, isJson), quickFix.getType());
        }
        return null;
    }
}
