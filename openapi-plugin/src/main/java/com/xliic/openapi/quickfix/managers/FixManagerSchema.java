package com.xliic.openapi.quickfix.managers;

import com.google.gson.JsonObject;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.schema.SchemaNameChooser;
import com.xliic.openapi.quickfix.schema.SchemaUtils;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.ASTService;

import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class FixManagerSchema extends FixManager {

    private final QuickFix quickFix;
    private final Issue issue;
    private final String title;
    private final Node genFrom;

    private String schemaName;

    public FixManagerSchema(PsiFile psiFile, QuickFix quickFix, Issue issue, Node genFrom) {
        super(psiFile);
        this.quickFix = quickFix;
        this.issue = issue;
        this.genFrom = genFrom;
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        String place = (version == OpenApiVersion.V2) ? "definitions" : "components";
        title = "Generate schema from examples and place it in " + place;
    }

    @Override
    public boolean openDialog() {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        Set<String> schemaNames = SchemaUtils.getSchemaNames(root, version);
        schemaName = SchemaUtils.getUniqueSchemaName(schemaNames);
        final SchemaNameChooser chooser = new SchemaNameChooser(project, schemaName, schemaNames);
        if (chooser.showAndGet()) {
            schemaName = chooser.getValue();
            return true;
        }
        else {
            return false;
        }
    }

    @Override
    public List<FixItem> getFixItems() {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        List<FixItem> result = new LinkedList<>();
        result.add(getSchemaMainFixItem(root));
        result.add(getSchemaRefFixItem(schemaName, root));
        return result;
    }

    @Override
    public boolean showDialog() {
        return true;
    }

    @Override
    public FixType getType() {
        return quickFix.getType();
    }

    @Override
    public String getTitle() {
        return title;
    }

    private FixItem getSchemaRefFixItem(String schemaName, Node root) {

        String pointer = getAbsolutePointer(issue.getPointer(), quickFix.getPointer());
        Node target = root.find(pointer);
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        JsonObject schemaRefFix = new JsonObject();

        if (version == OpenApiVersion.V2) {
            if ("schema".equals(target.getKey())) {
                schemaRefFix.addProperty("$ref", "#/definitions/" + schemaName);
            }
            else {
                JsonObject schemaRef = new JsonObject();
                schemaRef.addProperty("$ref", "#/definitions/" + schemaName);
                schemaRefFix.add("schema", schemaRef);
            }
        }
        else {
            if ("schema".equals(target.getKey())) {
                schemaRefFix.addProperty("$ref", "#/components/schemas/" + schemaName);
            }
            else {
                JsonObject schemaRef = new JsonObject();
                schemaRef.addProperty("$ref", "#/components/schemas/" + schemaName);
                schemaRefFix.add("schema", schemaRef);
            }
        }
        String text = QuickFix.formatFixText(schemaRefFix.toString(), isJson(psiFile));
        return new FixItem(issue, pointer, text, new LinkedList<>());
    }

    private FixItem getSchemaMainFixItem(Node root) {

        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        JsonObject schemaMainFix = new JsonObject();
        schemaMainFix.add(schemaName, SchemaUtils.getSchemaFromAST(psiFile, genFrom, version));

        String pointer;
        String text = schemaMainFix.toString();
        if (version == OpenApiVersion.V2) {
            pointer = "/definitions";
            Node target = root.find(pointer);
            if (target == null) {
                pointer = "";
                JsonObject definitions = new JsonObject();
                definitions.add("definitions", schemaMainFix);
                text = definitions.toString();
            }
        }
        else {
            pointer = "/components/schemas";
            Node target = root.find(pointer);
            if (target == null) {
                pointer = "/components";
                target = root.find(pointer);
                if (target != null) {
                    JsonObject schemas = new JsonObject();
                    schemas.add("schemas", schemaMainFix);
                    text = schemas.toString();
                }
                else {
                    pointer = "";
                    JsonObject schemas = new JsonObject();
                    schemas.add("schemas", schemaMainFix);
                    JsonObject components = new JsonObject();
                    components.add("components", schemas);
                    text = components.toString();
                }
            }
        }
        text = QuickFix.formatFixText(text, isJson(psiFile));
        return new FixItem(issue, pointer, text, new LinkedList<>());
    }

	@Override
	public boolean isResponsibleFor(String pointer, String label) {
		return pointer.equals(issue.getPointer()) && label.startsWith(issue.getDescription());
	}
}