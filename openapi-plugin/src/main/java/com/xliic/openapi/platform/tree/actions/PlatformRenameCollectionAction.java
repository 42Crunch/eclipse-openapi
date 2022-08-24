package com.xliic.openapi.platform.tree.actions;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.SuccessResponseCallback;
import com.xliic.openapi.platform.tree.form.PlatformCollectionNameChooser;
import com.xliic.openapi.platform.tree.form.PlatformNameChooser;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class PlatformRenameCollectionAction extends AnJAction implements DumbAware {

    private static final String TITLE = "New collection name";

    private final Project project;
    private final Tree tree;
    private final String collectionId;
    private final String name;

    private String newName;

    public PlatformRenameCollectionAction(@NotNull Project project,
            @NotNull Tree tree,
            @NotNull String collectionId,
            @NotNull String name) {
        super("Rename", "Rename collection", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
        this.name = name;
        newName = null;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        final PlatformNameChooser chooser = new PlatformCollectionNameChooser(project, TITLE, name);
        if (chooser.showAndGet()) {
            newName = chooser.getValue();
            if (!StringUtils.isEmpty(newName) && !Objects.equals(name, newName)) {
                PlatformAPIs.updateCollection(collectionId, newName, new SuccessResponseCallback(project) {
                    @Override
                    public void onCode200Response() {
                        SwingUtilities.invokeLater(() -> PlatformCollectionUtils.rename(tree, collectionId, newName));
                    }
                });
            }
        }
    }
}
