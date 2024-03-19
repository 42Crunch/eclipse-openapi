package com.xliic.openapi.outline;

import static com.xliic.openapi.OpenApiPanelKeys.PANELS_ORDER;

import java.util.Comparator;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.openapi.outline.dmtn.DMTNAlphabeticalComparator;
import com.xliic.openapi.outline.dmtn.DMTNNaturalComparator;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.RootNode;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;

public class OutlineSortTreeModel extends DefaultTreeModel {

    private static final DMTNNaturalComparator NATURAL_COMPARATOR = new DMTNNaturalComparator(PANELS_ORDER);
    private static final DMTNAlphabeticalComparator ABC_COMPARATOR = new DMTNAlphabeticalComparator(PANELS_ORDER);

    @NotNull
    private Comparator<TreeNode> comparator;
    @Nullable
    private String value;
    @NotNull
    private final Map<Object, List<DefaultMutableTreeNode>> cache = new HashMap<>();
    
    public OutlineSortTreeModel(@NotNull TreeViewer viewer, @NotNull TreeNode root, boolean asksAllowsChildren) {
        super(viewer, root, asksAllowsChildren);
        boolean sortABC = SettingsService.getInstance().getBoolean(Settings.Outline.ABC_SORT);
        comparator = getComparator(sortABC);
        value = null;
    }

    public void setSortABC(boolean sortABC) {
        comparator = getComparator(sortABC);
    }

    public void setValue(@Nullable String value) {
        this.value = value;
    }

    public void resetCache() {
        cache.clear();
    }

    @Override
    public boolean isLeaf(Object parent) {
        return getAndFilterChildren(parent).isEmpty();
    }

    @Override
    public int getChildCount(Object parent) {
        return getAndFilterChildren(parent).size();
    }

    @Override
    public Object getChild(Object parent, int index) {
        return getAndFilterChildren(parent).get(index);
    }

    private List<DefaultMutableTreeNode> getAndFilterChildren(Object parent) {
        if (cache.containsKey(parent)) {
            return cache.get(parent);
        }
        List<DefaultMutableTreeNode> nodes = new LinkedList<>();
        DefaultMutableTreeNode parentDMTN = (DefaultMutableTreeNode) parent;
        boolean ignoreSearch = StringUtils.isEmpty(value);
        int count = parentDMTN.getChildCount();
        Object parentObj = parentDMTN.getUserObject();
        if (ignoreSearch || parentObj instanceof RootNode || parentObj == null || ((BaseNode) parentObj).isSkipDeepSearch()) {
            for (int i = 0; i < count; i++) {
                DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
                updateSkipDeepSearch(childDMTN);
                nodes.add(childDMTN);
            }
            nodes.sort(comparator);
            cache.put(parent, nodes);
            return nodes;
        }
        for (int i = 0; i < count; i++) {
            DefaultMutableTreeNode childDMTN = (DefaultMutableTreeNode) parentDMTN.getChildAt(i);
            updateSkipDeepSearch(childDMTN);
            BaseNode childObj = (BaseNode) childDMTN.getUserObject();
            if (!childObj.isSearchable()) {
                nodes.add(childDMTN);
            } else if (childObj.getName().toLowerCase().contains(value)) {
                int level = childObj.getLevel();
                if ((level == 2 || level == 3) && childObj.getPointer().startsWith("/paths/")) {
                    childObj.setSkipDeepSearch(true);
                }
                nodes.add(childDMTN);
            } else if (!getAndFilterChildren(childDMTN).isEmpty()) {
                nodes.add(childDMTN);
            }
        }
        nodes.sort(comparator);
        cache.put(parent, nodes);
        return nodes;
    }

    private static void updateSkipDeepSearch(DefaultMutableTreeNode node) {
        Object obj = node.getUserObject();
        if (obj instanceof BaseNode) {
            ((BaseNode) obj).updateSkipDeepSearch();
        }
    }

    private static Comparator<TreeNode> getComparator(boolean sortABC) {
        return sortABC ? ABC_COMPARATOR : NATURAL_COMPARATOR;
    }
}
