package com.xliic.openapi.quickfix.managers;

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
import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.report.Issue;

public class FixManagerSingle extends FixManager {

    private final QuickFix quickFix;
    private final Issue issue;

    public FixManagerSingle(PsiFile psiFile, QuickFix quickFix, Issue issue) {
        super(psiFile);
        this.quickFix = quickFix;
        this.issue = issue;
    }

    @Override
    public List<FixItem> getFixItems() {

        boolean isJson = isJson(psiFile);
        String text = quickFix.getFixText(isJson);
        List<FixItem> result = new LinkedList<>();
        List<FixParameter> parameters = quickFix.getParameters();
        String pointer = getAbsolutePointer(issue.getPointer(), quickFix.getPointer());
        List<PlaceHolder> placeHolders = new LinkedList<>();

        if (!parameters.isEmpty()) {
            OpenApiVersion version = getOpenApiVersion(issue.getAuditFileName(), psiFile.getProject());
            BundleResult bundle = getBundle(issue.getAuditFileName(), psiFile.getProject());
            List<Replacement> replacements = new LinkedList<>();
            for (FixParameter parameter : parameters) {
                List<Object> values = parameter.getSource().get(issue, quickFix, parameter, version, bundle);
                values.addAll(parameter.getValues());
                values = wrap(values);
                placeHolders.add(getPlaceHolder(parameter, values, pointer, quickFix));
                if (!values.isEmpty()) {
                    String value = (String) values.get(0);
                    replacements.add(new Replacement(parameter.getPath(), value, parameter.isKeyType()));
                }
            }
            if (!replacements.isEmpty()) {
                result.add(new FixIssueItem(issue, pointer, ReplaceManager.replace(text, replacements, isJson), quickFix.getType())
                        .withPlaceHolders(placeHolders));
                return result;
            }
        }
        result.add(new FixIssueItem(issue, pointer, text, quickFix.getType()).withPlaceHolders(placeHolders));
        return result;
    }

    @Override
    public String getTitle() {
        return quickFix.getTitle();
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return pointer.equals(issue.getPointer()) && label.equals(issue.getHighlightInfoLabel());
    }
}
