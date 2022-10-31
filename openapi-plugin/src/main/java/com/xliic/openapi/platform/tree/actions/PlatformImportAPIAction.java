package com.xliic.openapi.platform.tree.actions;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;

public class PlatformImportAPIAction extends AnJAction implements DumbAware {

    private final Project project;
    private final Tree tree;
    private final String collectionId;

    public PlatformImportAPIAction(@NotNull Project project, @NotNull Tree tree, @NotNull String collectionId) {
        super("Import API", "Import API", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        FileChooserDescriptor descriptor = new FileChooserDescriptor(true, false, false, false, false, false)
                .withFileFilter(new String[] { "*.json;*.yaml;*.yml" });
        VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(descriptor, project, getText(), null).choose(null,
                VirtualFile.EMPTY_ARRAY);
        if (choose.length == 1) {
            VirtualFile file = choose[0];
            if (OpenApiUtils.isOpenAPIFileType(file)) {
                BundleResult result = new BundleResult(project, file.getPath());
                if (result.isBundleComplete()) {
                    String text = result.getJsonText();
                    if (text != null) {
                        String name = "";
                        Node root = OpenApiUtils.getJsonAST(text);
                        Node titleNode = root.find("/info/title");
                        if (titleNode != null) {
                            name = titleNode.getValue();
                        }
                        if (StringUtils.isEmpty(name)) {
                            name = file.getName();
                            name = name.substring(0, name.lastIndexOf('.'));
                        }
                        PlatformAPIs.createAPI(collectionId, name, text, new PlatformImportAPICallback(project, tree, collectionId, name));
                    }
                } else {
                    SwingUtilities.invokeLater(() -> {
                        StringBuilder msg = new StringBuilder(result.getExceptionReason() + "\n");
                        for (BundleError error : result.getBundleErrors()) {
                            msg.append(error.getMessage()).append("\n");
                        }
                        Messages.showMessageDialog(project, msg.toString(), OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon());
                    });
                }
            }
        }
    }
}
