package com.xliic.openapi.platform.tree.utils;

import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Base64;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jface.viewers.TreePath;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.Tag;
import com.xliic.openapi.platform.tree.PlatformAsyncTreeModel;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.platform.tree.node.PlatformCollection;
import com.xliic.openapi.platform.tree.node.PlatformRootCloud;
import com.xliic.openapi.platform.tree.node.core.Filter;
import com.xliic.openapi.platform.tree.node.core.Paginator;
import com.xliic.openapi.platform.tree.node.core.ProgressAware;
import com.xliic.openapi.platform.tree.node.decorator.PlatformFilterDecorator;
import com.xliic.openapi.platform.tree.node.decorator.PlatformLoadMoreDecorator;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;

import okhttp3.Callback;
import okhttp3.Response;

public class PlatformUtils {

    private static final DateFormat FORMATTER = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");

    public static void setInProgress(@Nullable Tree tree, @Nullable DefaultMutableTreeNode targetDMTN, boolean isInProgress) {
        if (tree != null && targetDMTN != null) {
            Object o = targetDMTN.getUserObject();
            if (o instanceof ProgressAware) {
                // Eclipse Development Note
                // Avoid invalid thread access exception
                SwingUtilities.invokeLater(() -> {
                    ProgressAware progressAware = (ProgressAware) o;
                    progressAware.setInProgress(isInProgress);
                    PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
                    model.valueForPathChanged(TreePathUtil.pathToTreeNode(targetDMTN), progressAware);
                });
            }
        }
    }

    public static List<DefaultMutableTreeNode> getVisibleChildren(Object parent) {

        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) parent;
        if (parentDMTN.getChildCount() == 0) {
            return Collections.emptyList();
        }
        Object parentObj = parentDMTN.getUserObject();
        LinkedList<DefaultMutableTreeNode> result = new LinkedList<>();

        if (parentObj instanceof PlatformRootCloud) {
            Filter filter = (Filter) parentObj;
            boolean active = filter.isActive();
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                DefaultMutableTreeNode collectionDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                Object obj = collectionDMTN.getUserObject();
                if (active && obj instanceof PlatformCollection) {
                    if (filter.pass(collectionDMTN)) {
                        result.add(collectionDMTN);
                    }
                } else {
                    result.add(collectionDMTN);
                }
            }
        } else if (parentObj instanceof PlatformCollection) {
            Filter filter = (Filter) parentObj;
            boolean active = filter.isActive();
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                DefaultMutableTreeNode apiDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                Object obj = apiDMTN.getUserObject();
                if (active && obj instanceof PlatformAPI) {
                    if (filter.pass(apiDMTN)) {
                        result.add(apiDMTN);
                    }
                } else {
                    result.add(apiDMTN);
                }
            }
        } else {
            for (int i = 0; i < parentDMTN.getChildCount(); i++) {
                result.add((DefaultMutableTreeNode) parentDMTN.getChildAt(i));
            }
        }
        final int size = result.size();
        // Apply pagination
        if (parentObj instanceof Paginator) {
            Paginator paginator = (Paginator) parentDMTN.getUserObject();
            int pageSize = paginator.getPageSize();
            if (size > pageSize) {
                result = new LinkedList<>(result.subList(0, pageSize));
                result.add(new DefaultMutableTreeNode(new PlatformLoadMoreDecorator(parentDMTN), false));
            }
        }
        // Apply filter decorator
        if (parentObj instanceof Filter) {
            Filter filter = (Filter) parentObj;
            if (filter.isActive()) {
                result.addFirst(new DefaultMutableTreeNode(new PlatformFilterDecorator("Found " + size, parentDMTN), false));
            }
        }
        return result;
    }

    public static void reloadAll(@NotNull Project project, @NotNull Tree tree) {
        DefaultMutableTreeNode treeRoot = (DefaultMutableTreeNode) tree.getModel().getRoot();
        for (int i = 0; i < treeRoot.getChildCount(); i++) {
            DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) treeRoot.getChildAt(i);
            childDMTN.removeAllChildren();
            Object obj = childDMTN.getUserObject();
            if (obj instanceof PlatformRootCloud) {
                PlatformRootCloud root = (PlatformRootCloud) childDMTN.getUserObject();
                root.setChildrenUnavailable(true);
                root.resetPageSize();
                root.reset();
            }
        }
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        DefaultMutableTreeNode favoriteCollections = model.getFavoriteCollections();
        PlatformService platformService = PlatformService.getInstance(project);
        Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
        callbacks.clear();
        // Eclipse Development Note
        // If node in collapsed state its children will be ignored by the model
        // Set it before reload to ask model to take care of non leaf children
        tree.expandPath(TreePathUtil.pathToTreeNode(favoriteCollections));
        tree.expandPath(TreePathUtil.pathToTreeNode(cloudCollections));
        model.reload();
    }

    public static boolean hasCollectionsLoaded(@NotNull Project project, @NotNull Tree tree) {
        PlatformService platformService = PlatformService.getInstance(project);
        Map<DefaultMutableTreeNode, Callback> callbacks = platformService.getTreeAsyncCallbacks();
        PlatformAsyncTreeModel model = ((PlatformAsyncTreeModel) tree.getModel());
        DefaultMutableTreeNode cloudCollections = model.getCloudCollections();
        return !callbacks.containsKey(cloudCollections);
    }

    public static void goToTreeNode(@NotNull Tree tree, @NotNull TreeNode node) {
        TreePath path = TreePathUtil.pathToTreeNode(node);
        // Eclipse Development Note
        // Use only selection as it triggers scrolling under the hood
        // tree.scrollPathToVisible(path);
        tree.setSelectionPath(path);
    }

    public static DefaultMutableTreeNode getCopyDMTN(@NotNull TreeNode node) {
        return new DefaultMutableTreeNode(((DefaultMutableTreeNode) node).getUserObject());
    }

    public static String getApiId(@NotNull VirtualFile file) {
        String apiId = "";
        Path p = Paths.get(file.getPath());
        String fileName = p.getFileName().toString();
        if (fileName.contains(".")) {
            apiId = fileName.substring(0, fileName.lastIndexOf('.'));
        }
        return apiId;
    }

    @Nullable
    public static Node getAssessmentReportNode(@NotNull Node report) {
        String data = report.getChildValue("data");
        if (data == null) {
            return null;
        }
        return Utils.getJsonAST(new String(Base64.getDecoder().decode(data)));
    }

    @Nullable
    public static Date getLastAssessmentDate(@Nullable Node assessment) {
        if (assessment == null) {
            return null;
        }
        String serverLastDate = assessment.getChildValue("last");
        if (StringUtils.isEmpty(serverLastDate)) {
            return null;
        }
        try {
            return FORMATTER.parse(serverLastDate);
        } catch (ParseException ignored) {
        }
        return null;
    }
    
    @NotNull
    public static NamingConvention getCollectionNamingConvention() {
        try (Response response = PlatformAPIs.Sync.getCollectionNamingConvention()) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                String pattern = body.getChildValueOrEmpty("pattern");
                String description = body.getChildValueOrEmpty("description");
                String example = body.getChildValueOrEmpty("example");
                return new NamingConvention(pattern, description, example);
            }
        } catch (Exception ignored) {
        }
        return new NamingConvention();
    }
    
    @NotNull
    public static NamingConvention getApiNamingConvention() {
        try (Response response = PlatformAPIs.Sync.getApiNamingConvention()) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                String pattern = body.getChildValueOrEmpty("pattern");
                String description = body.getChildValueOrEmpty("description");
                String example = body.getChildValueOrEmpty("example");
                return new NamingConvention(pattern, description, example);
            }
        } catch (Exception ignored) {
        }
        return new NamingConvention();
    }

    @NotNull
    public static List<Tag> getTags(boolean withOnlyAdminCanTag) {
        List<Tag> tags = new LinkedList<>();
        Map<String, Boolean> idToOnlyAdminCanTag = new HashMap<>();
        if (withOnlyAdminCanTag) {
            try (Response response = PlatformAPIs.Sync.getCategories()) {
                Node body = NetUtils.getBodyNode(response);
                if (body != null) {
                    Node list = body.find("/list");
                    if (list != null) {
                        for (Node item : list.getChildren()) {
                            String id = item.getChildValue("id");
                            if (id != null) {
                                boolean onlyAdminCanTag = item.getBooleanChildValue("onlyAdminCanTag");
                                idToOnlyAdminCanTag.put(id, onlyAdminCanTag);
                            }
                        }
                    }
                }
            } catch (IOException ignored) {
            }
        }
        try (Response response = PlatformAPIs.Sync.getTags()) {
            Node body = NetUtils.getBodyNode(response);
            if (body != null) {
                Node list = body.find("/list");
                if (list != null) {
                    for (Node item : list.getChildren()) {
                    	String categoryId = item.getChildValueOrEmpty("categoryId");
                        String categoryName = item.getChildValueOrEmpty("categoryName");
                        String tagName = item.getChildValueOrEmpty("tagName");
                        String tagId = item.getChildValueOrEmpty("tagId");
                        boolean onlyAdminCanTag = idToOnlyAdminCanTag.getOrDefault(categoryId, false);
                        tags.add(new Tag(categoryName, tagName, tagId, onlyAdminCanTag));
                    }
                }
            }
        } catch (IOException ignored) {
        }
        return tags;
    }
    
    public static void targetTreeNode(@NotNull Tree tree,
                                      @NotNull DefaultMutableTreeNode parent,
                                      @NotNull DefaultMutableTreeNode child,
                                      @NotNull Runnable onTargetCb) {
		Object obj = parent.getUserObject();
		if (!(obj instanceof Paginator)) {
			// Should not happen if child is collection or API node
			onTargetCb.run();
			return;
		}
		int prevChildSize = -1;
		boolean reloadMe = false;
		Paginator paginator = (Paginator) obj;
		// This logic must consider that the child node may not be visible in the tree due to pagination
		while (true) {
			List<DefaultMutableTreeNode> children = getVisibleChildren(parent);
			if (prevChildSize >= children.size()) {
				return;
			}
			prevChildSize = children.size();
			if (children.contains(child)) {
				if (reloadMe) {
					PlatformAsyncTreeModel model = (PlatformAsyncTreeModel) tree.getModel();
					List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
					model.reload(parent);
					TreeUtil.restoreExpandedPaths(tree, expandedPaths);
				}
				onTargetCb.run();
				return;
			} else {
				paginator.increasePageSize();
				reloadMe = true;
			}
		}
	}
}
