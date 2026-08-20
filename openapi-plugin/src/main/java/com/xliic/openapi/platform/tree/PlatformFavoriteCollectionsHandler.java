package com.xliic.openapi.platform.tree;

import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.Permissions;
import com.xliic.openapi.platform.callback.EnqueueCallback;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.io.IOException;
import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import static com.xliic.openapi.platform.tree.utils.PlatformCollectionUtils.getApiCount;

// Implement interface just to use its type to put in callbacks map for convenience
public class PlatformFavoriteCollectionsHandler implements Callback {

    @NotNull
    private final Project project;
    @NotNull
    private final Tree tree;
    @NotNull
    private final DefaultMutableTreeNode parentDMTN;
    @NotNull
    private final Set<String> collectionIds;
    @NotNull
    private final Map<String, PlatformCollection> collections = new ConcurrentHashMap<>();
    @NotNull
    private final Map<String, String> errors = new ConcurrentHashMap<>();

    public PlatformFavoriteCollectionsHandler(@NotNull Project project,
                                              @NotNull Tree tree,
                                              @NotNull DefaultMutableTreeNode parentDMTN,
                                              @NotNull Set<String> collectionIds) {
        this.project = project;
        this.tree = tree;
        this.parentDMTN = parentDMTN;
        this.collectionIds = collectionIds;
    }

    private synchronized void checkIfReady() {
        if (collections.size() + errors.size() == collectionIds.size()) {
            List<PlatformCollection> myCollections = new LinkedList<>(collections.values());
            myCollections.sort(Comparator.comparing(PlatformCollection::getName, String.CASE_INSENSITIVE_ORDER));
            SwingUtilities.invokeLater(() -> {
                PlatformCollectionUtils.addAll(project, tree, parentDMTN, myCollections);
                collectionIds.clear();
                collections.clear();
                errors.clear();
            });
        }
    }

    public EnqueueCallback getEnqueueCallback(@NotNull String collectionId) {
        return new SuccessASTResponseCallback(project, false) {

            @Override
            public void onCode200ASTResponse(@NotNull Node item) {
                String id, name, technicalName;
                Node desc = item.getChild("desc");
                int apiCount;
                if (desc == null) {
                    id = item.getChildValueRequireNonNull("id");
                    name = item.getChildValueRequireNonNull("name");
                    technicalName = item.getChildValueRequireNonNull("technicalName");
                    apiCount = getApiCount(item);
                } else {
                    id = desc.getChildValueRequireNonNull("id");
                    name = desc.getChildValueRequireNonNull("name");
                    technicalName = desc.getChildValueRequireNonNull("technicalName");
                    apiCount = getApiCount(desc);
                }
                Node summary = item.getChild("summary");
                Permissions permissions = Permissions.get(summary == null ? item : summary);
                boolean locked = !permissions.isWriteApis();
                collections.put(collectionId, new PlatformCollection(id, name, locked, technicalName, permissions, apiCount));
                checkIfReady();
            }

            @Override
            public void onFailure(@NotNull String reason) {
                errors.put(collectionId, reason);
                checkIfReady();
            }
        };
    }

    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        // Not used
    }

    @Override
    public void onResponse(@NotNull Call call, @NotNull Response response) {
        // Not used
    }
}
