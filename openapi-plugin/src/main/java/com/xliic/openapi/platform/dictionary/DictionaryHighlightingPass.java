package com.xliic.openapi.platform.dictionary;

import static com.xliic.core.codeInsight.HighlightInfo.newHighlightInfo;
import static com.xliic.core.codeInsight.SeverityRegistrar.getSeverityRegistrar;
import static com.xliic.core.codeInsight.UpdateHighlightersUtil.setHighlightersToEditor;
import static com.xliic.core.codeInspection.ProblemDescriptorUtil.getHighlightInfoType;
import static com.xliic.core.codeInspection.ProblemHighlightType.GENERIC_ERROR;
import static com.xliic.core.lang.HighlightSeverity.ERROR;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.doPropertyReplacement;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.getPropertiesToPass;

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
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.DictionaryUpdate;
import com.xliic.openapi.platform.dictionary.quickfix.FixDictionaryAction;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerSingleInsertDictionary;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerSingleReplaceDictionary;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerUpdateAllDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.utils.Utils;

public class DictionaryHighlightingPass extends TextEditorHighlightingPass {

    private final PsiFile psiFile;

    public DictionaryHighlightingPass(final PsiFile file, final Editor editor) {
        super(file.getProject(), editor.getDocument(), true);
        psiFile = file;
    }

    @Override
    public void doCollectInformation(@NotNull final ProgressIndicator progress) {
        if (!PlatformConnection.isPlatformIntegrationEnabled()) {
            return;
        }
        DictionaryService ddService = DictionaryService.getInstance(myProject);
        if (ddService.getDictionaries().isEmpty()) {
            return;
        }
        VirtualFile file = psiFile.getVirtualFile();
        ASTService astService = ASTService.getInstance(myProject);
        boolean isJson = (Utils.getFileType(psiFile) == OpenApiFileType.Json);
        OpenApiVersion version = astService.getOpenAPIVersion(file.getPath());
        for (Node target : ddService.getFormatNodes(file.getPath())) {
            Node container = target.getParent();
            String formatName = target.getValue();
            DataFormat dataFormat = ddService.get(formatName, isJson);
            List<String> propsToAdd = new LinkedList<>();
            List<Node> nodesToUpdate = new LinkedList<>();
            Map<Node, HighlightInfo> nodesInfo = new HashMap<>();
            // FIXME in the current version of Data Dictionary we don't error on missing
            // Data Dictionary entries, to reduce number of error messages reported
            // for the standard formats, as on the backend we don't yet add 'standard'
            // dictionary to everyone
            if (dataFormat != null) {
                List<String> properties = getPropertiesToPass(version, container.getJsonPointer());
                for (String prop : properties) {
                    if (dataFormat.hasOwnProperty(prop, isJson)) {
                        Node propNode = container.getChild(prop);
                        if (propNode != null) {
                            if (doPropertyReplacement(prop) && !dataFormat.equals(prop, propNode.getTypedValue(), isJson)) {
                                FixManager manager = new FixManagerSingleReplaceDictionary(psiFile, dataFormat, propNode);
                                replaceProperty(manager, propNode, dataFormat.get(prop, isJson), nodesToUpdate, nodesInfo);
                            }
                        } else {
                            FixManager manager = new FixManagerSingleInsertDictionary(psiFile, dataFormat, container, prop);
                            insertMissingProperty(manager, container, prop, propsToAdd, nodesInfo);
                        }
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

    @Override
    public void doApplyInformationToEditor() {
        setHighlightersToEditor(myProject, myDocument, 0, psiFile.getTextLength(), highlights, getColorsScheme(), getId());
    }

    private HighlightInfo getInfo(String msg, Range nodeRange, String pointer) {
        TextRange range = new TextRange(nodeRange.getStartOffset(), nodeRange.getEndOffset());
        HighlightInfoType type = getHighlightInfoType(GENERIC_ERROR, ERROR, getSeverityRegistrar(myProject));
        HighlightInfo.Builder builder = newHighlightInfo(type).pointer(pointer).range(range);
        return builder.descriptionAndTooltip(msg).create();
    }

    private void replaceProperty(FixManager manager, Node propNode, Object value, List<Node> propNodes, Map<Node, HighlightInfo> infos) {
        Range range = propNode.getValueRange();
        if (range != null) {
            String pointer = propNode.getJsonPointer();
            HighlightInfo info = getInfo("Data Dictionary requires value of " + value, range, pointer);
            QuickFixAction.registerQuickFixActions(this, pointer, List.of(new FixDictionaryAction(manager)));
            propNodes.add(propNode);
            infos.put(propNode, info);
            highlights.add(info);
        }
    }

    private void insertMissingProperty(FixManager manager, Node container, String prop, List<String> props, Map<Node, HighlightInfo> infos) {
        Range range = container.getKeyRange();
        if (range != null) {
            String pointer = container.getJsonPointer();
            HighlightInfo info = getInfo("Missing " + prop + " property defined in Data Dictionary", range, pointer);
            QuickFixAction.registerQuickFixActions(this, pointer, List.of(new FixDictionaryAction(manager)));
            props.add(prop);
            infos.put(container, info);
            highlights.add(info);
        }
    }
}
