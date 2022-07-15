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

public class PlatformAddToFavoriteAction extends AnJAction implements DumbAware {

    private final String collectionId;
    private final Tree tree;

    public PlatformAddToFavoriteAction(Tree tree, String collectionId) {
        super("Add To My Favorite Collections", "Add to my favorite collections", null);
        this.collectionId = collectionId;
        this.tree = tree;
    }

    @Override
    public void update(@NotNull AnJActionEvent event) {
        Project project = Objects.requireNonNull(event.getProject());
        PlatformService platformService = PlatformService.getInstance(project);
        event.getPresentation().setEnabled(!platformService.getState().collectionIds.contains(collectionId));
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        Project project = Objects.requireNonNull(event.getProject());
        PlatformService platformService = PlatformService.getInstance(project);
        platformService.getState().collectionIds.add(collectionId);
        PlatformCollectionUtils.addToFavoriteCollection(project, tree, collectionId);
    }
}
