package com.xliic.openapi.services;

import com.xliic.core.Disposable;
import com.xliic.core.codeInsight.editorActions.enter.EnterHandlerDelegate;
import com.xliic.core.codeInsight.highlighting.HighlightManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.Editor;
import com.xliic.core.editor.LogicalPosition;
import com.xliic.core.editor.colors.EditorColors;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.editor.event.EditorMouseListener;
import com.xliic.core.editor.markup.RangeHighlighter;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DoubleClickListener;
import com.xliic.core.ui.MouseEvent;
import com.xliic.core.ui.popup.ComponentPopupBuilder;
import com.xliic.core.ui.popup.JBList;
import com.xliic.core.ui.popup.JBPopup;
import com.xliic.core.ui.popup.JBPopupFactory;
import com.xliic.core.util.Disposer;
import com.xliic.core.util.DocumentUtil;
import com.xliic.core.util.Pair;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.listeners.PlaceHolderDocumentListener;
import com.xliic.openapi.listeners.PlaceHolderEditorMouseListener;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.PlaceHolder;
import com.xliic.openapi.services.api.IPlaceHolderService;

import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;
import java.util.*;

public class PlaceHolderService implements IPlaceHolderService, Disposable {

    private final Project project;
    private final Map<Editor, Set<RangeHighlighter>> highlighters;
    private final Map<RangeHighlighter, Pair<PlaceHolder, Boolean>> highlighterInfoMap;

    private final Map<Editor, DocumentListener> documentListeners;
    private final Map<Editor, EditorMouseListener> editorMouseListeners;

    private JBPopup popup;

    public PlaceHolderService(@NotNull final Project project) {
        this.project = project;
        highlighters = new HashMap<>();
        highlighterInfoMap = new HashMap<>();
        documentListeners = new HashMap<>();
        editorMouseListeners = new HashMap<>();
    }

    public void register(@NotNull Editor editor, @NotNull FixItem fixItem) {
    	dispose(editor);
        Document document = editor.getDocument();
        VirtualFile file = FileDocumentManager.getInstance().getFile(document);
        if (file != null) {
            String fileName = file.getPath();
            ASTService astService = ASTService.getInstance(project);
            astService.resetCacheEntry(fileName);
            Node root = astService.getRootNode(fileName, document.getText());
            if (root == null) {
                return;
            }
            boolean hasSuggestions = false;
            highlighters.put(editor, new HashSet<>());
            Set<RangeHighlighter> editorHighlighters = highlighters.get(editor);
            HighlightManager highlightManager = HighlightManager.getInstance(project);

            for (PlaceHolder placeHolder : fixItem.getPlaceHolders()) {
                List<RangeHighlighter> output = new LinkedList<>();
                Node node = root.find(mergePointers(fixItem.getAbsPointer(), placeHolder.getPointer()));
                if (node != null) {
                    Range range = placeHolder.isForKey() ? node.getKeyRange() : node.getValueRange();
                    highlightManager.addRangeHighlight(editor, range.getStartOffset(), range.getEndOffset(),
                            EditorColors.WRITE_SEARCH_RESULT_ATTRIBUTES, false, output);
                }
                if (output.size() == 1) {
                    RangeHighlighter highlighter = output.get(0);
                    highlighter.setGreedyToLeft(true);
                    highlighter.setGreedyToRight(true);
                    editorHighlighters.add(highlighter);
                    highlighterInfoMap.put(highlighter, new Pair<>(placeHolder, endInComma(editor, highlighter)));
                    if (!placeHolder.getValues().isEmpty()) {
                        hasSuggestions = true;
                    }
                }
            }
            if (!editorHighlighters.isEmpty()) {
                documentListeners.put(editor, new PlaceHolderDocumentListener(project));
                editor.getDocument().addDocumentListener(documentListeners.get(editor));
            }
            if (hasSuggestions) {
                editorMouseListeners.put(editor, new PlaceHolderEditorMouseListener(project));
                editor.addEditorMouseListener(editorMouseListeners.get(editor));
            }
        }
    }

    public static PlaceHolderService getInstance(@NotNull Project project) {
        return (PlaceHolderService) PlatformUI.getWorkbench().getService(IPlaceHolderService.class);
    }

    public List<Object> getValues(Editor editor, RangeHighlighter highlighter) {
        if (highlighters.containsKey(editor)) {
            return highlighterInfoMap.get(highlighter).getFirst().getValues();
        }
        return Collections.emptyList();
    }

    public boolean hasOpenPopup() {
        return popup != null;
    }

    public void closePopup() {
        if (popup != null) {
            popup.cancel();
            popup = null;
        }
    }

    public void show(Editor editor, RangeHighlighter highlighter, List<Object> values) {
        List<String> input = new LinkedList<>();
        for (Object value : values) {
            input.add(String.valueOf(value));
        }
        JBList<String> list = new JBList<>(input);
        list.setSelectionMode(ListSelectionModel.SINGLE_SELECTION);
        new DoubleClickListener() {
            @Override
            @SuppressWarnings("rawtypes")
            protected boolean onDoubleClick(@NotNull MouseEvent e) {
                int index = ((JBList) e.getSource()).getSelectedIndex();
                String text = input.get(index);
                int startOffset = highlighter.getStartOffset();
                int endOffset = highlighter.getEndOffset();
                final String replaceText = wrapInQuote(editor, text, startOffset, endOffset);
                WriteCommandAction.runWriteCommandAction(project, () -> {
                    editor.getDocument().replaceString(startOffset, endOffset, replaceText);
                    dispose(editor, highlighter);
                });
                closePopup();
                return true;
            }
        }.installOn(list);
        ComponentPopupBuilder builder = JBPopupFactory.getInstance().createComponentPopupBuilder(list, list);
        popup = builder.setProject(project).setCancelOnClickOutside(false).setFocusable(true)
                .setResizable(false).setCancelOnOtherWindowOpen(true).createPopup(editor, highlighter.getPosition());
        popup.showInBestPositionFor(editor);
        Disposer.register(popup, () -> popup = null);
    }

    public EnterHandlerDelegate.Result preprocessEnter(@NotNull Editor editor, int offset) {
        if (highlighters.containsKey(editor)) {
        	LogicalPosition caretPosition = editor.getCaretModel().getPrimaryCaret().getLogicalPosition();
            int myOffset = editor.logicalPositionToOffset(caretPosition);
            RangeHighlighter highlighter = getTriggeredRangeHighlighter(highlighters.get(editor), myOffset);
            if (highlighter != null) {
                if (!highlighterInfoMap.get(highlighter).getSecond() && endInComma(editor, offset)) {
                    editor.getDocument().deleteString(offset - 1, offset);
                }
                dispose(editor, highlighter);
                if (hasOpenPopup()) {
                    closePopup();
                }
                return EnterHandlerDelegate.Result.Stop;
            }
        }
        return EnterHandlerDelegate.Result.Continue;
    }

    // Range highlighters can be disposed by ESC key, let highlighting pass thread handle this case
    public void update(@NotNull Editor editor) {
        if (highlighters.containsKey(editor)) {
            for (RangeHighlighter highlighter : highlighters.get(editor)) {
                if (highlighter.isValid()) {
                    return;
                }
            }
            dispose(editor);
        }
    }

    public void documentChanged(@NotNull Editor editor, int offset) {
        if (highlighters.containsKey(editor)) {
            if (getTriggeredRangeHighlighter(highlighters.get(editor), offset) == null) {
                dispose(editor);
            }
        }
    }

    public RangeHighlighter getTriggeredRangeHighlighter(Editor editor, int offset) {
        if (highlighters.containsKey(editor)) {
            for (RangeHighlighter highlighter : highlighters.get(editor)) {
                if (highlighter.isValid() && contains(highlighter, offset)) {
                    return highlighter;
                }
            }
        }
        return null;
    }

    private void dispose(Editor editor, RangeHighlighter highlighter) {
        highlighter.dispose();
        highlighters.get(editor).remove(highlighter);
        highlighterInfoMap.remove(highlighter);
        if (highlighters.get(editor).isEmpty()) {
            dispose(editor);
        }
    }

    public void dispose(Editor editor) {
        if (highlighters.containsKey(editor)) {
            for (RangeHighlighter highlighter : highlighters.remove(editor)) {
                highlighter.dispose();
                highlighterInfoMap.remove(highlighter);
            }
            EditorMouseListener mouseListener = editorMouseListeners.remove(editor);
            if (mouseListener != null) {
                editor.removeEditorMouseListener(mouseListener);
            }
            DocumentListener documentListener = documentListeners.remove(editor);
            if (documentListener != null) {
                editor.getDocument().removeDocumentListener(documentListener);
            }
        }
    }

    private RangeHighlighter getTriggeredRangeHighlighter(Set<RangeHighlighter> highlighters, int offset) {
        for (RangeHighlighter highlighter : highlighters) {
            if (highlighter.isValid() && contains(highlighter, offset)) {
                return highlighter;
            }
        }
        return null;
    }

    private static boolean contains(RangeHighlighter highlighter, int offset) {
        return (highlighter.getStartOffset() <= offset) && (offset <= highlighter.getEndOffset());
    }

    private static Boolean endInComma(Editor editor, RangeHighlighter range) {
        return endInComma(editor, range.getEndOffset());
    }

    private static Boolean endInComma(Editor editor, int offset) {
        Document document = editor.getDocument();
        String text = document.getText(DocumentUtil.getLineTextRange(document, document.getLineNumber(offset))).trim();
        return text.charAt(text.length() - 1) == ',';
    }

    private static String wrapInQuote(Editor editor, String text, int startOffset, int endOffset) {
        Document document = editor.getDocument();
        int lineNumber = document.getLineNumber(endOffset);
        String lineText = document.getText(DocumentUtil.getLineTextRange(document, lineNumber));
        int lineOffset = document.getLineStartOffset(lineNumber);
        lineText = lineText.substring(startOffset - lineOffset, endOffset - lineOffset);
        if (lineText.startsWith("\"") && lineText.endsWith("\"")) {
            return "\"" + text + "\"";
        }
        else if (lineText.startsWith("'") && lineText.endsWith("'")) {
            return "'" + text + "'";
        }
        else {
            return text;
        }
    }

    private static String mergePointers(String basePointer, String pointer) {
        if (basePointer.endsWith("/")) {
            basePointer = basePointer.substring(0, basePointer.length() - 1);
        }
        return basePointer + pointer;
    }

    @Override
    public void dispose() {
        for (Editor editor : new HashSet<>(highlighters.keySet())) {
            dispose(editor);
        }
    }
}
