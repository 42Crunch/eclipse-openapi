package com.xliic.openapi.platform.tree.actions;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import com.xliic.openapi.services.PlatformService;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class PlatformRemoveFromFavoriteAction extends AnJAction implements DumbAware {

    private final String collectionId;
    private final Tree tree;

    public PlatformRemoveFromFavoriteAction(Tree tree, String collectionId) {
        super("Remove From My Favorite Collections", "Remove from my favorite collections", null);
        this.collectionId = collectionId;
        this.tree = tree;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Project project = Objects.requireNonNull(event.getProject());
        PlatformService.getInstance(project).getState().collectionIds.remove(collectionId);
        PlatformCollectionUtils.removeFromFavoriteCollection(tree, collectionId);
    }
}
