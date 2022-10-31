package com.xliic.openapi.platform.dictionary;

import static com.xliic.core.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.core.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.core.codeInsight.UpdateHighlightersUtil.setHighlightersToEditor;
import static com.xliic.core.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.core.codeInspection.ProblemHighlightType.GENERIC_ERROR;
import static com.xliic.core.lang.HighlightSeverity.ERROR;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.X_42C_FORMAT_KEY;

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
import com.xliic.core.editor.Editor;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.TextRange;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.DictionaryUpdate;
import com.xliic.openapi.platform.dictionary.quickfix.FixDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerSingleInsertDictionary;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerSingleReplaceDictionary;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerUpdateAllDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.services.DictionaryService;

public class DictionaryHighlightingPass extends TextEditorHighlightingPass {

    private final PsiFile psiFile;

    public DictionaryHighlightingPass(final PsiFile file, final Editor editor) {
        super(file.getProject(), editor.getDocument(), true);
        psiFile = file;
    }

    @Override
    public void doCollectInformation(@NotNull final ProgressIndicator progress) {
        if (!PlatformConnection.isPlatformUsed()) {
            return;
        }
        DictionaryService ddService = DictionaryService.getInstance(myProject);
        if (ddService.getDictionaries().isEmpty()) {
            return;
        }
        VirtualFile file = psiFile.getVirtualFile();
        for (Node target : ddService.getFormatNodes(file.getPath())) {
            Node container = target.getParent();
            String formatName = target.getValue();
            DataFormat dataFormat = ddService.get(formatName);
            List<String> propsToAdd = new LinkedList<>();
            List<Node> nodesToUpdate = new LinkedList<>();
            Map<Node, HighlightInfo> nodesInfo = new HashMap<>();
            // FIXME in the current version of Data Dictionary we don't error on missing
            // Data Dictionary entries, to reduce number of error messages reported
            // for the standard formats, as on the backend we don't yet add 'standard'
            // dictionary to everyone
            if (dataFormat != null) {
                for (String prop : DataFormat.PROPERTIES) {
                    if (dataFormat.hasOwnProperty(prop)) {
                        Node propNode = container.getChild(prop);
                        if (propNode != null) {
                            if (!dataFormat.equals(prop, propNode.getTypedValue())) {
                                Range range = propNode.getValueRange();
                                if (range != null) {
                                    String pointer = propNode.getJsonPointer();
                                    HighlightInfo info = getInfo("Data Dictionary requires value of " + dataFormat.get(prop), range, pointer);
                                    QuickFixAction.registerQuickFixActions(this, pointer,
                                            List.of(new FixDictionaryAction(new FixManagerSingleReplaceDictionary(psiFile, dataFormat, propNode))));
                                    highlights.add(info);
                                    nodesToUpdate.add(propNode);
                                    nodesInfo.put(propNode, info);
                                }
                            }
                        } else {
                            Range range = container.getKeyRange();
                            if (range != null) {
                                String pointer = container.getJsonPointer();
                                HighlightInfo info = getInfo("Missing " + prop + " property defined in Data Dictionary", range, pointer);
                                QuickFixAction.registerQuickFixActions(this, pointer,
                                        List.of(new FixDictionaryAction(new FixManagerSingleInsertDictionary(psiFile, dataFormat, container, prop))));
                                highlights.add(info);
                                propsToAdd.add(prop);
                                nodesInfo.put(container, info);
                            }
                        }
                    }
                }
                // Check custom x-42c-format property
                Node x42FormatNode = container.getChild(X_42C_FORMAT_KEY);
                if (x42FormatNode != null) {
                    DataFormat x42Format = ddService.get(x42FormatNode.getValue());
                    if (x42Format == null || !x42Format.equals(dataFormat)) {
                        Range range = x42FormatNode.getValueRange();
                        if (range != null) {
                            String pointer = x42FormatNode.getJsonPointer();
                            HighlightInfo info = getInfo("Data Dictionary requires value of " + formatName, range, pointer);
                            QuickFixAction.registerQuickFixActions(this, pointer,
                                    List.of(new FixDictionaryAction(new FixManagerSingleReplaceDictionary(psiFile, x42FormatNode, formatName))));
                            highlights.add(info);
                            nodesToUpdate.add(x42FormatNode);
                            nodesInfo.put(x42FormatNode, info);
                        }
                    }
                } else {
                    Range range = container.getKeyRange();
                    if (range != null) {
                        String pointer = container.getJsonPointer();
                        HighlightInfo info = getInfo("Missing " + X_42C_FORMAT_KEY + " property required for data dictionary", range, pointer);
                        QuickFixAction.registerQuickFixActions(this, pointer, List
                                .of(new FixDictionaryAction(new FixManagerSingleInsertDictionary(psiFile, container, X_42C_FORMAT_KEY, formatName))));
                        highlights.add(info);
                        propsToAdd.add(X_42C_FORMAT_KEY);
                        nodesInfo.put(container, info);
                    }
                }
            }
            // A container has been processed
            if ((nodesToUpdate.size() + propsToAdd.size()) > 1) {
                DictionaryUpdate update = new DictionaryUpdate(container, dataFormat, nodesToUpdate, propsToAdd);
                List<IntentionAction> actions = List.of(new FixDictionaryAction(new FixManagerUpdateAllDictionary(psiFile, update)));
                QuickFixAction.registerQuickFixActions(this, container.getJsonPointer(), actions);
            }
        }
    }

    private HighlightInfo getInfo(String msg, Range nodeRange, String pointer) {
        TextRange range = new TextRange(nodeRange.getStartOffset(), nodeRange.getEndOffset());
        HighlightInfoType type = getHighlightInfoType(GENERIC_ERROR, ERROR, getSeverityRegistrar(myProject));
        HighlightInfo.Builder builder = newHighlightInfo(type).pointer(pointer).range(range);
        return builder.descriptionAndTooltip(msg).create();
    }

    @Override
    public void doApplyInformationToEditor() {
        setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(), highlights, getColorsScheme(), getId());
    }
}
