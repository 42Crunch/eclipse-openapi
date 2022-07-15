package com.xliic.openapi.platform.tree.actions;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessBodyResponseCallback;
import com.xliic.openapi.platform.tree.form.PlatformCollectionNameChooser;
import com.xliic.openapi.platform.tree.form.PlatformNameChooser;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

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
                        Node node = OpenApiUtils.getJsonAST(text);
                        String id = node.getChild("desc").getChild("id").getValue();
                        String name = node.getChild("desc").getChild("name").getValue();
                        boolean locked = !Boolean.parseBoolean(node.getChild("summary").getChild("writeApis").getValue());
                        SwingUtilities.invokeLater(() -> PlatformCollectionUtils.create(tree, id, name, locked));
                    }
                });
            }
        }
    }
}
