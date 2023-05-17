package com.xliic.openapi.tryit.jcef.messages;

import static com.xliic.openapi.tryit.jcef.JCEFTryItPanel.TRY_IT_OPERATION;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.editor.DocumentUpdater;
import com.xliic.openapi.tryit.TryItFixManager;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class CreateSchemaCommand extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public CreateSchemaCommand(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("createSchema", true);
        this.project = project;
        this.cache = cache;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof Node) {
            TryItOperation operation = (TryItOperation) cache.get(TRY_IT_OPERATION);
            if (operation != null) {
                String filePath = operation.getPsiFile().getVirtualFile().getPath();
                PsiFile psiFile = Utils.findPsiFile(project, filePath);
                if (psiFile != null) {
                    TryItFixManager provider = new TryItFixManager(psiFile, (Node) payload);
                    ApplicationManager.getApplication().invokeLater(() -> {
                        if (provider.openDialog()) {
                            VirtualFile file = psiFile.getVirtualFile();
                            FileEditor[] editors = FileEditorManager.getInstance(project).getEditors(file);
                            if (editors.length > 0) {
                                Editor editor = ((TextEditor) editors[0]).getEditor();
                                DocumentUpdater documentUpdater = new DocumentUpdater(editor, psiFile);
                                WriteCommandAction.runWriteCommandAction(project, () -> {
                                            documentUpdater.process(provider.getFixItems());
                                            int offset = documentUpdater.getMoveToOffset();
                                            new OpenFileDescriptor(project, file, offset).navigate(true);
                                        }
                                );
                            }
                        }
                    });
                }
            }
        }
    }
}
