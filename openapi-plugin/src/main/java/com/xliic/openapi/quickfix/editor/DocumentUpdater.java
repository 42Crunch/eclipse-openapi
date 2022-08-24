package com.xliic.openapi.quickfix.editor;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.text.source.ISourceViewer;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.RangeMarker;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.DocumentUtil;
import com.xliic.core.util.TextRange;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.ParserYamlAST;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.JsonNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentDeleter;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentInserter;
import com.xliic.openapi.quickfix.editor.json.JSONDocumentKeyRenamer;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentDeleter;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentInserter;
import com.xliic.openapi.quickfix.editor.yaml.YAMLDocumentKeyRenamer;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.services.PlaceHolderService;

public abstract class DocumentUpdater {

    protected final Editor editor;
    protected final List<FixItem> fixItems;
    protected final ParserAST parser;
    protected final Document document;
    protected final Node root;
    private int moveToOffset;

    private static final ParserJsonAST parserJsonAST = new ParserJsonAST();
    private static final ParserYamlAST parserYamlAST = new ParserYamlAST();

    public DocumentUpdater(Editor editor, ParserAST parser, List<FixItem> fixItems) {
        this.editor = editor;
        this.parser = parser;
        this.fixItems = fixItems;
        document = editor.getDocument();
        root = (parser == null) ? null : parser.parse(document.getText());
        moveToOffset = 0;
    }

    public int getMoveToOffset() {
        if (fixItems.size() != 1) {
            return 0;
        }
        else {
            return moveToOffset;
        }
    }

    public List<Issue> process() {
        List<Issue> fixedIssues = new LinkedList<>();
        List<DocumentUpdate> updates = new LinkedList<>();
        // First collect all necessary changes need to be made
        for (FixItem item : fixItems) {
            DocumentUpdate update = process(item);
            if (update != null) {
                updates.add(update);
                moveToOffset = update.getMarker().getStartOffset();
                item.setPlaceHolderOffset(moveToOffset);
            }
        }
        // Apply changes one by one, markers offsets will be recalculated automatically
        ISourceViewer viewer = editor.getSourceViewer();
        for (DocumentUpdate update : updates) {
            try {
                apply(update);
                fixedIssues.addAll(update.getItem().getIssues());
                if (viewer != null) {
                    viewer.resetVisibleRegion();
                }
            } catch (Exception ignored) {
            }
            finally {
                update.getMarker().dispose();
            }
        }
        // Apply placeholders if not in bulk mode
        if (updates.size() == 1) {
            Project project = editor.getProject();
            FixItem fixItem = updates.get(0).getItem();
            if ((project != null) && !fixItem.getPlaceHolders().isEmpty()) {
                PlaceHolderService placeHolderService = PlaceHolderService.getInstance(project);
                placeHolderService.register(editor, fixItem);
            }
        }
        return fixedIssues;
    }

    public abstract DocumentUpdate process(FixItem item);

    public abstract void apply(DocumentUpdate update);

    @NotNull
    public static DocumentUpdater getInstance(Editor editor, PsiFile file, FixManager provider) {

        List<FixItem> fixItems = provider.getFixItems();
        boolean isJson = (OpenApiUtils.getFileType(file) == OpenApiFileType.Json);

        if (provider.getType() == FixType.Insert) {
            if (isJson) {
                return new JSONDocumentInserter(editor, parserJsonAST, fixItems);
            } else {
                return new YAMLDocumentInserter(editor, parserYamlAST, fixItems);
            }
        } else if (provider.getType() == FixType.RenameKey) {
            if (isJson) {
                return new JSONDocumentKeyRenamer(editor, parserJsonAST, fixItems);
            } else {
                return new YAMLDocumentKeyRenamer(editor, parserYamlAST, fixItems);
            }
        } else if (provider.getType() == FixType.Delete) {
            if (isJson) {
                return new JSONDocumentDeleter(editor, parserJsonAST, fixItems);
            } else {
                return new YAMLDocumentDeleter(editor, parserYamlAST, fixItems);
            }
        }
        return new DefaultDocumentUpdater(editor);
    }

    protected RangeMarker createMarker(int endOffset) {
        return createMarker(endOffset, endOffset);
    }

    protected RangeMarker createMarker(Range range) {
        return createMarker(range.getStartOffset(), range.getEndOffset());
    }

    protected RangeMarker createMarker(int startOffset, int endOffset) {
        return document.createRangeMarker(TextRange.create(startOffset, endOffset));
    }

    protected DocumentIndent getBasicIndent(Node root) {
        Node target = null;
        for (Node child : root.getChildren()) {
            if (child.isObject()) {
                List<Node> tmp = child.getChildren();
                if (!tmp.isEmpty()) {
                    target = tmp.get(0);
                }
            }
        }
        if (target == null) {
            return DocumentIndent.defaultInstance();
        }
        int offset = target.getRange().getStartOffset();
        int index = getCurrentIndent(offset);
        int depth = (root instanceof JsonNode) ? target.getDepth() : target.getDepth() - 1;
        int indent = index / depth;
        if (indent == 0) {
            return DocumentIndent.defaultInstance();
        }
        return new DocumentIndent(indent, getLineTextByOffset(offset).startsWith("\t") ? '\t' : ' ');
    }

    protected int getCurrentIndent(int offset) {
        return firstAlphabeticCharIndex(getLineTextByOffset(offset));
    }

    protected String shift(String text, DocumentIndent indent, int padding) {
        return shift(text, indent, padding, 0, true);
    }

    protected String shift(String text, DocumentIndent indent, int padding, int extra) {
        return shift(text, indent, padding, extra, true);
    }

    protected String shift(String text, DocumentIndent indent, int padding, int extra, boolean prepend) {
        if (prepend) {
            text = indent.toString(padding) + text;
        }
        text = text.replace("\n", "\n" + indent.toString(padding + extra));
        return text.replace("\t", indent.toString());
    }

    private static int firstAlphabeticCharIndex(String lineText) {
        int index = 0;
        while (index < lineText.length()) {
            char ch = lineText.charAt(index);
            if ((ch != ' ') && (ch != '\t')) {
                break;
            }
            index += 1;
        }
        return index;
    }

    private boolean hasCrLfEnding() {
        return document.hasCrLfEnding();
    }

    private String getLineTextByOffset(int offset) {
        return document.getText(DocumentUtil.getLineTextRange(document, document.getLineNumber(offset)));
    }

    protected int getSafeEndOffset(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        if (column == 0) {
            return offset - (hasCrLfEnding() ? 2 : 1);
        } else if (hasNoAlphabeticCharBeforeOffset(offset)) {
            return offset - column - (hasCrLfEnding() ? 2 : 1);
        }
        return offset;
    }

    protected int includeEOL(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        String text = getLineTextByOffset(offset);
        int len = text.length();
        if (len == column) {
            return offset + 1; // next symbol is \n
        }
        if (hasCrLfEnding() && text.endsWith("\r") && (len == (column + 1))) {
            return offset + 2; // symbol is between \r and \n in CRLF
        }
        return offset;
    }

    protected boolean hasNoAlphabeticCharBeforeOffset(int offset) {
        int column = editor.offsetToLogicalPosition(offset).column;
        if (column == 0) {
            return true;
        }
        String text = getLineTextByOffset(offset).substring(0, column);
        text = text.replace(" ", "").replace("\t", "");
        return (text.length() == 0) || ("-".equals(text));
    }

    protected static TextRange getTextRange(Range range) {
        return new TextRange(range.getStartOffset(), range.getEndOffset());
    }
}
