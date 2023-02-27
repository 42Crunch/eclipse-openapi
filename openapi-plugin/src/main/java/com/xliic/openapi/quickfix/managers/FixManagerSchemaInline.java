package com.xliic.openapi.quickfix.managers;

import java.util.LinkedList;
import java.util.List;

import com.google.gson.JsonObject;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixIssueItem;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.schema.SchemaUtils;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.ASTService;

public class FixManagerSchemaInline extends FixManager {

    private static final String TITLE = "Generate inline schema from examples";

    private final QuickFix quickFix;
    private final Issue issue;
    private final Node genFrom;

    public FixManagerSchemaInline(PsiFile psiFile, QuickFix quickFix, Issue issue, Node genFrom) {
        super(psiFile);
        this.quickFix = quickFix;
        this.issue = issue;
        this.genFrom = genFrom;
    }

    @Override
    public List<FixItem> getFixItems() {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        String pointer = getAbsolutePointer(issue.getPointer(), quickFix.getPointer());
        Node target = root.find(pointer);
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        JsonObject schema = SchemaUtils.getSchemaFromAST(psiFile, genFrom, version);
        List<FixItem> result = new LinkedList<>();
        if (schema != null) {
            String text;
            if ("schema".equals(target.getKey())) {
                text = schema.toString();
            } else {
                JsonObject schemaObj = new JsonObject();
                schemaObj.add("schema", schema);
                text = schemaObj.toString();
            }
            text = QuickFix.formatFixText(text, isJson);
            result.add(new FixIssueItem(issue, pointer, text, quickFix.getType()));
        }
        return result;
    }

    @Override
    public String getTitle() {
        return TITLE;
    }

    @Override
    public boolean isResponsibleFor(String pointer, String label) {
        return pointer.equals(issue.getPointer()) && label.startsWith(issue.getDescription());
    }
}
