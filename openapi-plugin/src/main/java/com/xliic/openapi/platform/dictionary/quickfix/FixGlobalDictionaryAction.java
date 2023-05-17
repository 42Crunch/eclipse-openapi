package com.xliic.openapi.platform.dictionary.quickfix;

import static com.xliic.openapi.platform.dictionary.types.DataFormat.doPropertyReplacement;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.getPropertiesToPass;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.ActionCallback;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.actions.ProjectAction;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.platform.dictionary.quickfix.managers.FixManagerUpdateAllDictionary;
import com.xliic.openapi.platform.dictionary.types.DataFormat;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.utils.Utils;

public class FixGlobalDictionaryAction extends ProjectAction {

    public FixGlobalDictionaryAction() {
        super("update data dictionary properties", true);
    }

    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setVisible(PlatformConnection.isPlatformIntegrationEnabled());
        if (event.getPresentation().isVisible()) {
            super.update(event);
        }
    }

    @Override
    public boolean update(@NotNull Project project, @NotNull VirtualFile file) {
        List<DictionaryUpdate> updates = getDictionaryUpdates(project, file);
        return !updates.isEmpty();
    }

    @Override
    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile currentFile) {
        actionPerformed(project, currentFile, new ActionCallback());
    }

    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile currentFile, @NotNull ActionCallback callback) {
        PsiFile psiFile = Utils.findPsiFile(project, currentFile);
        if (psiFile != null) {
            List<DictionaryUpdate> updates = getDictionaryUpdates(project, currentFile);
            // All containers have been processed
            if (updates.size() > 0) {
                Editor editor = FileEditorManager.getInstance(project).getSelectedTextEditor();
                if (editor != null) {
                    List<FixItem> result = new LinkedList<>();
                    boolean isJson = Utils.getFileType(currentFile) == OpenApiFileType.Json;
                    for (DictionaryUpdate update : updates) {
                        result.addAll(FixManagerUpdateAllDictionary.getItems(update, isJson));
                    }
                    DocumentUpdater documentUpdater = new DocumentUpdater(editor, psiFile);
                    WriteCommandAction.runWriteCommandAction(project, () -> {
                        documentUpdater.process(result);
                        callback.setDone();
                    });
                }
            }
        }
    }

    private static List<DictionaryUpdate> getDictionaryUpdates(@NotNull Project project, @NotNull VirtualFile file) {
        List<DictionaryUpdate> updates = new LinkedList<>();
        DictionaryService ddService = DictionaryService.getInstance(project);
        if (!ddService.getDictionaries().isEmpty()) {
            ASTService astService = ASTService.getInstance(project);
            OpenApiVersion version = astService.getOpenAPIVersion(file.getPath());
            boolean isJson = (Utils.getFileType(file) == OpenApiFileType.Json);
            for (Node target : ddService.getFormatNodes(file.getPath())) {
                Node container = target.getParent();
                String formatName = target.getValue();
                DataFormat dataFormat = ddService.get(formatName, isJson);
                List<String> propsToAdd = new LinkedList<>();
                List<Node> nodesToUpdate = new LinkedList<>();
                if (dataFormat != null) {
                    List<String> properties = getPropertiesToPass(version, container.getJsonPointer());
                    for (String prop : properties) {
                        if (dataFormat.hasOwnProperty(prop, isJson)) {
                            Node propNode = container.getChild(prop);
                            if (propNode != null) {
                                if (doPropertyReplacement(prop) && !dataFormat.equals(prop, propNode.getTypedValue(), isJson)) {
                                    nodesToUpdate.add(propNode);
                                }
                            } else {
                                propsToAdd.add(prop);
                            }
                        }
                    }
                }
                // A container has been processed
                if ((nodesToUpdate.size() + propsToAdd.size()) > 0) {
                    DictionaryUpdate update = new DictionaryUpdate(container, dataFormat, nodesToUpdate, propsToAdd);
                    updates.add(update);
                }
            }
        }
        return updates;
    }
}
