package com.xliic.openapi.tryit;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.google.gson.JsonObject;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.Pair;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.quickfix.managers.FixManagerSchema;
import com.xliic.openapi.quickfix.schema.SchemaGenerator;
import com.xliic.openapi.quickfix.schema.SchemaNameChooser;
import com.xliic.openapi.quickfix.schema.SchemaUtils;
import com.xliic.openapi.services.ASTService;

public class TryItFixManager extends FixManager {

    private final Node genFrom;

    private String schemaName;

    public TryItFixManager(PsiFile psiFile, Node genFrom) {
        super(psiFile);
        this.genFrom = genFrom;
    }

    @Override
    public boolean openDialog() {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        Set<String> schemaNames = SchemaUtils.getSchemaNames(Objects.requireNonNull(root), version);
        schemaName = SchemaUtils.getUniqueSchemaName(schemaNames);
        final SchemaNameChooser chooser = new SchemaNameChooser(project, schemaName, schemaNames);
        if (chooser.showAndGet()) {
            schemaName = chooser.getValue();
            return true;
        } else {
            return false;
        }
    }

    @Override
    public List<FixItem> getFixItems() {
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(psiFile.getVirtualFile());
        List<FixItem> result = new LinkedList<>();
        result.add(getSchemaMainFixItem(root));
        return result;
    }

    @Override
    public boolean showDialog() {
        return true;
    }

    @Override
    public String getTitle() {
        return "";
    }

    private FixItem getSchemaMainFixItem(Node root) {
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, psiFile.getVirtualFile());
        JsonObject schemaMainFix = new JsonObject();
        schemaMainFix.add(schemaName, SchemaGenerator.generateSchema(genFrom));
        Pair<String, String> pair = FixManagerSchema.getSchemaPointerAndText(root, schemaMainFix, version);
        String pointer = pair.getFirst();
        String text = pair.getSecond();
        text = QuickFix.formatFixText(text, isJson);
        return new FixItem(pointer, text, FixType.Insert);
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return false;
    }
}
