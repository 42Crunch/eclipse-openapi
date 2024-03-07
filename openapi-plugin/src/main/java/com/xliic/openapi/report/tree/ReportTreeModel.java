package com.xliic.openapi.report.tree;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.TreeViewer;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.DefaultTreeModel;
import com.xliic.openapi.report.tree.filter.FilterState;
import com.xliic.openapi.report.tree.ui.ReportPanel;

public class ReportTreeModel extends DefaultTreeModel {

    @NotNull
    private final Project project;
    @Nullable
    private final String projectPath;
    @NotNull
    private final FilterState filterState;
    @NotNull
    private final Map<Object, List<DefaultMutableTreeNode>> cache = new HashMap<>();

    public ReportTreeModel(@NotNull TreeViewer viewer, TreeNode root, ReportPanel panel) {
        super(viewer, root, false);
        project = panel.getProject();
        projectPath = project.getBasePath();
        filterState = panel.getFilterState();
    }

    public void resetCache() {
        cache.clear();
    }

    @Override
    public boolean isLeaf(Object objectNode) {
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
        if (node.getParent() == null) {
            return getChildrenOfRootNode(objectNode).isEmpty();
        } else if (node.getUserObject() instanceof ReportFileObject) {
            return getChildrenOfReportFileNode(objectNode).isEmpty();
        } else {
            return true;
        }
    }

    @Override
    public Object getChild(Object objectNode, int index) {
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
        if (node.getParent() == null) {
            return getChildrenOfRootNode(objectNode).get(index);
        } else if (node.getUserObject() instanceof ReportFileObject) {
            return getChildrenOfReportFileNode(objectNode).get(index);
        } else {
            throw new ArrayIndexOutOfBoundsException("incorrect index");
        }
    }

    @Override
    public int getChildCount(Object objectNode) {
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
        if (node.getParent() == null) {
            return getChildrenOfRootNode(objectNode).size();
        } else if (node.getUserObject() instanceof ReportFileObject) {
            return getChildrenOfReportFileNode(objectNode).size();
        } else {
            return 0;
        }
    }

    private List<DefaultMutableTreeNode> getChildrenOfRootNode(Object parent) {
        if (cache.containsKey(parent)) {
            return cache.get(parent);
        }
        List<DefaultMutableTreeNode> nodes = new LinkedList<>();
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) parent;
        int count = node.getChildCount();
        for (int i = 0; i < count; i++) {
            DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) node.getChildAt(i);
            if (!getChildrenOfReportFileNode(treeNode).isEmpty()) {
                nodes.add(treeNode);
            }
        }
        cache.put(parent, nodes);
        return nodes;
    }

    private List<DefaultMutableTreeNode> getChildrenOfReportFileNode(Object parent) {
        if (cache.containsKey(parent)) {
            return cache.get(parent);
        }
        List<DefaultMutableTreeNode> nodes = new LinkedList<>();
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) parent;
        if (!isReportFileObjectShowOnly((ReportFileObject) node.getUserObject())) {
            return nodes;
        }
        int count = node.getChildCount();
        boolean doSearchFilter = doSearchFilterOfReportFileObjectChildren((ReportFileObject) node.getUserObject());
        for (int i = 0; i < count; i++) {
            DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) node.getChildAt(i);
            ReportIssueObject o = (ReportIssueObject) treeNode.getUserObject();
            if (isReportIssueObjectVisible(o, doSearchFilter)) {
                nodes.add(treeNode);
            }
        }
        cache.put(parent, nodes);
        return nodes;
    }

    private boolean isReportFileObjectShowOnly(ReportFileObject o) {
        if (filterState.isShowSelectedFileOnly()) {
            FileEditor editor = FileEditorManager.getInstance(project).getSelectedEditor();
            return editor == null || editor.getFile() == null || editor.getFile().getPath().equals(o.getFileName());
        }
        return true;
    }

    private boolean doSearchFilterOfReportFileObjectChildren(ReportFileObject o) {
        return !(filterState.search() && match(o.getShortFileName(projectPath), filterState.getSearchText()));
    }

    private boolean isReportIssueObjectVisible(ReportIssueObject o, boolean doSearchTextFilter) {
        if (o == null || !o.isRangeDetected()) {
            return false;
        }
        switch (o.getSeverity()) {
            case LOW:
                if (!filterState.isShowInfo()) {
                    return false;
                }
                break;
            case MEDIUM:
                if (!filterState.isShowWarning()) {
                    return false;
                }
                break;
            case HIGH:
            case CRITICAL:
                if (!filterState.isShowError()) {
                    return false;
                }
                break;
            default:
                break;
        }
        if (doSearchTextFilter && filterState.search()) {
            return match(o.getLabel() + o.getLabelLocation(), filterState.getSearchText());
        }
        return true;
    }

    private boolean match(String input, String toFind) {
        if (filterState.isRegexState()) {
            return matchPatterString(input, filterState.isWholeWordsState() ? "\\b" + toFind + "\\b" : toFind);
        } else {
            if (filterState.isWholeWordsState()) {
                return matchPatterString(input, "\\b" + Pattern.quote(toFind) + "\\b");
            } else {
                if (filterState.isCaseSensitiveState()) {
                    return input.contains(toFind);
                } else {
                    return input.toLowerCase().contains(toFind.toLowerCase());
                }
            }
        }
    }

    private boolean matchPatterString(String input, String patternToFind) {
        try {
            Pattern pattern = filterState.isCaseSensitiveState() ?
                    Pattern.compile(patternToFind) : Pattern.compile(patternToFind, Pattern.CASE_INSENSITIVE);
            return pattern.matcher(input).find();
        } catch (PatternSyntaxException e) {
            return false;
        }
    }
}
