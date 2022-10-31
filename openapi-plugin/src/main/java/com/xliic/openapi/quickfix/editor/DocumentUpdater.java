package com.xliic.openapi.quickfix.editor;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixIssueItem;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentDeleter;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentInserter;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentReplacer;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentDeleter;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentInserter;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentReplacer;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.PlaceHolderService;

public class DocumentUpdater {

    private static final ParserJsonAST parserJsonAST = new ParserJsonAST();
    private static final ParserYamlAST parserYamlAST = new ParserYamlAST();

    protected final Editor editor;

    private int moveToOffset = 0;
    private final Map<FixType, Processor> processors = new HashMap<>();

    public DocumentUpdater(@NotNull Editor editor, @NotNull PsiFile psiFile) {
        this.editor = editor;
        boolean isJson = (OpenApiUtils.getFileType(psiFile) == OpenApiFileType.Json);
        if (isJson) {
            Node root = parserJsonAST.parse(editor.getDocument().getText());
            processors.put(FixType.Insert, new JSONDocumentInserter(editor, root));
            processors.put(FixType.Replace, new JSONDocumentReplacer(editor, root, false));
            processors.put(FixType.RenameKey, new JSONDocumentReplacer(editor, root, true));
            processors.put(FixType.Delete, new JSONDocumentDeleter(editor, root));
        } else {
            Node root = parserYamlAST.parse(editor.getDocument().getText());
            processors.put(FixType.Insert, new YAMLDocumentInserter(editor, root));
            processors.put(FixType.Replace, new YAMLDocumentReplacer(editor, root, false));
            processors.put(FixType.RenameKey, new YAMLDocumentReplacer(editor, root, true));
            processors.put(FixType.Delete, new YAMLDocumentDeleter(editor, root));
        }
    }

    public int getMoveToOffset() {
        return moveToOffset;
    }

    public List<Issue> process(@NotNull List<FixItem> fixItems) {
        List<DocumentUpdate> updates = new LinkedList<>();
        Map<DocumentUpdate, FixItem> mapping = new HashMap<>();
        // First collect all necessary changes need to be made
        for (FixItem item : fixItems) {
            try {
                DocumentUpdate update = processors.get(item.getFixType()).process(item);
                if (update != null) {
                    updates.add(update);
                    mapping.put(update, item);
                    moveToOffset = update.getMarker().getStartOffset();
                    item.setPlaceHolderOffset(moveToOffset);
                }
            } catch (Throwable ignored) {
            }
        }
        // Apply changes one by one, markers offsets will be recalculated automatically
        List<Issue> fixedIssues = new LinkedList<>();
        for (DocumentUpdate update : updates) {
            try {
                FixItem item = mapping.get(update);
                processors.get(item.getFixType()).apply(update);
                if (item instanceof FixIssueItem) {
                    fixedIssues.addAll(((FixIssueItem) item).getIssues());
                }
            } catch (Throwable ignored) {
            } finally {
                update.getMarker().dispose();
            }
        }
        // Apply placeholders if not in bulk mode
        if (updates.size() == 1) {
            Project project = editor.getProject();
            FixItem fixItem = mapping.get(updates.get(0));
            if ((project != null) && !fixItem.getPlaceHolders().isEmpty()) {
                PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
                placeHolderService.register(editor, fixItem);
            }
        }
        if (fixItems.size() != 1) {
            moveToOffset = 0;
        }
        return fixedIssues;
    }
}
