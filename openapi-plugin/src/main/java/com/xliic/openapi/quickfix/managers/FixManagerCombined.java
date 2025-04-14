package com.xliic.openapi.quickfix.managers;

import static com.xliic.openapi.report.AuditUtils.getHighlightInfoLabel;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

import org.jetbrains.annotations.NotNull;
import org.snakeyaml.engine.v2.api.Dump;
import org.snakeyaml.engine.v2.api.DumpSettings;
import org.snakeyaml.engine.v2.api.Load;
import org.snakeyaml.engine.v2.api.LoadSettings;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.replace.ReplaceManager;
import com.xliic.openapi.parser.replace.Replacement;
import com.xliic.openapi.quickfix.FixIssueItem;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.FixTitle;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.report.types.Issue;

public class FixManagerCombined extends FixManager {

    private final List<QuickFix> quickFixes;
    private final Map<QuickFix, Issue> fixToIssueMap;

    // Do not set a code point limit, since fixes typically have a small size
    private static final Dump dump = new Dump(DumpSettings.builder().build());
    private static final Load load = new Load(LoadSettings.builder().build());

    public FixManagerCombined(PsiFile psiFile, List<QuickFix> quickFixes, Map<QuickFix, Issue> issuesMap) {
        super(psiFile);
        this.quickFixes = quickFixes;
        this.fixToIssueMap = issuesMap;
    }

    @Override
    @SuppressWarnings("unchecked")
    public List<FixItem> getFixItems() {
        List<FixItem> result = new LinkedList<>();
        String pointer = getAbsolutePointer(getIssuePointer(), "");
        // Use tree map to sort inserted fix properties by key
        Map<String, Object> root = new TreeMap<>();
        for (QuickFix fix : quickFixes) {
            root.putAll((Map<String, Object>) load.loadFromString(fix.getFixText(isJson)));
        }

        String auditFileName = getAuditFileName();
        String text = QuickFix.formatFixText(dump.dumpToString(root), isJson);
        OpenApiVersion version = getOpenApiVersion(auditFileName, psiFile.getProject());
        BundleResult bundle = getBundle(auditFileName, psiFile.getProject());
        List<Replacement> replacements = new LinkedList<>();
        List<PlaceHolder> placeHolders = new LinkedList<>();

        for (QuickFix quickFix : quickFixes) {
            for (FixParameter parameter : quickFix.getParameters()) {
                Issue issue = fixToIssueMap.get(quickFix);
                List<Object> values = parameter.getSource().get(issue, quickFix, parameter, version, bundle);
                values.addAll(parameter.getValues());
                values = wrap(values);
                placeHolders.add(getPlaceHolder(parameter, values, pointer, quickFix));
                if (!values.isEmpty()) {
                    String value = (String) values.get(0);
                    replacements.add(new Replacement(parameter.getPath(), value, parameter.isKeyType()));
                }
            }
        }
        if (!replacements.isEmpty()) {
            String sourceText = ReplaceManager.replace(text, replacements, isJson);
            result.add(
                    new FixIssueItem(new LinkedList<>(fixToIssueMap.values()), pointer, sourceText, FixType.Insert).withPlaceHolders(placeHolders));
            return result;
        }
        result.add(new FixIssueItem(new LinkedList<>(fixToIssueMap.values()), pointer, text, FixType.Insert).withPlaceHolders(placeHolders));
        return result;
    }

    @Override
    public String getTitle() {
        FixTitle title = new FixTitle();
        quickFixes.stream().map(QuickFix::getTitle).sorted().forEach(title::update);
        return title.toString();
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        for (Issue issue : fixToIssueMap.values()) {
            if (pointer.equals(issue.getPointer()) && label.equals(getHighlightInfoLabel(issue))) {
                return true;
            }
        }
        return false;
    }

    private String getAuditFileName() {
        for (Map.Entry<QuickFix, Issue> entry : fixToIssueMap.entrySet()) {
            return entry.getValue().getAuditFileName();
        }
        return null;
    }

    private String getIssuePointer() {
        for (Map.Entry<QuickFix, Issue> entry : fixToIssueMap.entrySet()) {
            return entry.getValue().getPointer();
        }
        return null;
    }
}
