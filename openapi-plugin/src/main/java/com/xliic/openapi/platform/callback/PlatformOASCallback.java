package com.xliic.openapi.platform.callback;

import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.PlatformService;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.Base64;
import java.util.Collections;

public class PlatformOASCallback extends SuccessASTResponseCallback {

    private final Tree tree;
    private final DefaultMutableTreeNode progressDMTN;
    private final boolean showAsHTML;
    private final boolean openInEditor;

    public PlatformOASCallback(@NotNull Project project,
            @Nullable Tree tree,
            @Nullable DefaultMutableTreeNode progressDMTN,
            boolean showAsHTML,
            boolean openInEditor) {
        this(project, tree, progressDMTN, showAsHTML, openInEditor, true);
    }

    public PlatformOASCallback(@NotNull Project project,
            @Nullable Tree tree,
            @Nullable DefaultMutableTreeNode progressDMTN,
            boolean showAsHTML,
            boolean openInEditor,
            boolean showDialogOnFailure) {
        super(project, showDialogOnFailure);
        this.tree = tree;
        this.progressDMTN = progressDMTN;
        this.showAsHTML = showAsHTML;
        this.openInEditor = openInEditor;
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            Node desc = node.getChild("desc");
            String id = desc.getChild("id").getValue();
            boolean isJson = !Boolean.parseBoolean(desc.getChild("yaml").getValue());
            String specFile = desc.getChild("specfile").getValue();
            byte[] decodedBytes = Base64.getDecoder().decode(specFile);
            String text = QuickFix.formatFixText(new String(decodedBytes), isJson);
            VirtualFile file = WriteCommandAction.runWriteCommandAction(project, (Computable<VirtualFile>) () -> {
                String fileName = id + (isJson ? ".json" : ".yaml");
                return TempFileUtils.createPlatformFile(this, fileName, text);
            });
            if (file != null) {
                LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(file));
                ASTService astService = ASTService.getInstance(project);
                astService.resetCacheEntry(file.getPath());
                PlatformService platformService = PlatformService.getInstance(project);
                platformService.setFileIsModified(file, false);
                PlatformAPIs.readAuditReport(id,
                        new PlatformAuditCallback(project, file, tree, progressDMTN, showAsHTML, openInEditor));
            } else {
                PlatformUtils.setInProgress(tree, progressDMTN, false);
            }
        } catch (Throwable t) {
            PlatformUtils.setInProgress(tree, progressDMTN, false);
            t.printStackTrace();
        }
    }
}
