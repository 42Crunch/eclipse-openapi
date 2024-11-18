package com.xliic.openapi.platform.tree.actions;

import static com.xliic.openapi.platform.scan.ScanUtils.getMandatoryTagIds;

import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class PlatformImportAPIAction extends AnJAction implements DumbAware {

    @NotNull
    private final Project project;
    @NotNull
    private final Tree tree;
    @NotNull
    private final String collectionId;
    @NotNull
    private final DefaultMutableTreeNode subRootDn;

    public PlatformImportAPIAction(@NotNull Project project,
                                   @NotNull Tree tree,
                                   @NotNull String collectionId,
                                   @NotNull DefaultMutableTreeNode subRootDn) {
        super("Import API", "Import API", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
        this.subRootDn = subRootDn;
    }
    
    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        FileChooserDescriptor descriptor = new FileChooserDescriptor(true, false, false, false, false, false)
                .withFileFilter(new String[] { "*.json;*.yaml;*.yml" });
        VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(descriptor, project, getText(), null).choose(null,
                VirtualFile.EMPTY_ARRAY);
        if (choose.length == 1) {
            VirtualFile file = choose[0];
            if (Utils.isOpenAPIFileType(file)) {
                BundleResult result = new BundleResult(project, file.getPath());
                if (result.isBundleComplete()) {
                    String text = result.getJsonText();
                    if (text != null) {
                        String name = "";
                        Node root = Utils.getJsonAST(text);
                        if (root != null) {
                            Node titleNode = root.find("/info/title");
                            if (titleNode != null) {
                                name = titleNode.getValue();
                            }
                        }
                        if (StringUtils.isEmpty(name)) {
                            name = file.getName();
                            name = name.substring(0, name.lastIndexOf('.'));
                        }
                        try {
                            List<String> tagIds = getMandatoryTagIds();
                            PlatformAPIs.createAPI(collectionId, name, text, tagIds,
                                    new PlatformImportAPICallback(project, tree, collectionId, name, subRootDn));
                        } catch (Exception e) {
                            MsgUtils.error(project, e.getMessage(), true);
                        }
                    }
                } else {
                    SwingUtilities.invokeLater(() -> {
                        StringBuilder msg = new StringBuilder(result.getExceptionReason() + "\n");
                        for (BundleError error : result.getBundleErrors()) {
                            msg.append(error.getMessage()).append("\n");
                        }
                        MsgUtils.error(project, msg.toString(), false);
                    });
                }
            }
        }
    }
}
