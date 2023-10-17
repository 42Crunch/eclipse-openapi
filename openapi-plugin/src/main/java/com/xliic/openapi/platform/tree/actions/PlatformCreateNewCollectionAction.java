package com.xliic.openapi.platform.tree.actions;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessBodyResponseCallback;
import com.xliic.openapi.platform.tree.form.PlatformCollectionNameChooser;
import com.xliic.openapi.platform.tree.form.PlatformNameChooser;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import com.xliic.openapi.utils.Utils;

public class PlatformCreateNewCollectionAction extends AnJAction implements DumbAware {

    private static final String TITLE = "New collection name";

    private final Project project;
    private final Tree tree;

    private String newName;

    public PlatformCreateNewCollectionAction(@NotNull Project project, @NotNull Tree tree) {
        super("Create New Collection", "Create new collection", null);
        this.project = project;
        this.tree = tree;
        newName = null;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        final PlatformNameChooser chooser = new PlatformCollectionNameChooser(project, TITLE, "");
        if (chooser.showAndGet()) {
            newName = chooser.getValue();
            if (!StringUtils.isEmpty(newName)) {
                PlatformAPIs.createCollection(newName, new SuccessBodyResponseCallback(project) {
                    @Override
                    public void onCode200WithBodyTextResponse(@NotNull String text) {
                        Node node = Utils.getJsonAST(text);
                        if (node != null) {
                            PlatformCollection collection = getPlatformCollection(node);
                            SwingUtilities.invokeLater(() -> PlatformCollectionUtils.create(tree, collection));
                        }
                    }
                });
            }
        }
    }

    @NotNull
    public static PlatformCollection getPlatformCollection(@NotNull Node node) {
        Node desc = node.getChildRequireNonNull("desc");
        String id = desc.getChildValueRequireNonNull("id");
        String name = desc.getChildValueRequireNonNull("name");
        String technicalName = desc.getChildValueRequireNonNull("technicalName");
        boolean locked = !Boolean.parseBoolean(node.getChildRequireNonNull("summary").getChildValueRequireNonNull("writeApis"));
        return new PlatformCollection(id, name, locked, technicalName);
    }
}
