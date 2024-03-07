package com.xliic.openapi.report.tree.ui;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import javax.swing.JPanel;
import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.MutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.ToggleAction;
import com.xliic.core.project.Project;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.SwingUtilities;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.core.util.ui.tree.TreeUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.SearchWidget;
import com.xliic.openapi.report.tree.ReportColoredTreeCellRenderer;
import com.xliic.openapi.report.tree.ReportFileObject;
import com.xliic.openapi.report.tree.ReportIssueObject;
import com.xliic.openapi.report.tree.ReportMouseAdapter;
import com.xliic.openapi.report.tree.ReportTreeModel;
import com.xliic.openapi.report.tree.ReportTreeNodeComparator;
import com.xliic.openapi.report.tree.filter.FilterResetAction;
import com.xliic.openapi.report.tree.filter.FilterState;
import com.xliic.openapi.report.tree.filter.ShowErrorAction;
import com.xliic.openapi.report.tree.filter.ShowForSelectedFileAction;
import com.xliic.openapi.report.tree.filter.ShowInfoAction;
import com.xliic.openapi.report.tree.filter.ShowWarningsAction;
import com.xliic.openapi.report.tree.filter.TextCaseSensitiveAction;
import com.xliic.openapi.report.tree.filter.TextRegexAction;
import com.xliic.openapi.report.tree.filter.TextWholeWordsAction;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;

@SuppressWarnings("serial")
public class ReportPanel extends JPanel implements FileListener, AuditListener, Disposable {

	@NotNull
    private final Project project;
	@NotNull
    private final ToolWindow toolWindow;
	@NotNull
	private final Map<String, DefaultMutableTreeNode> fileNameToTreeNodeMap = new HashMap<>();
	@NotNull
    private final Map<Issue, DefaultMutableTreeNode> issueToTreeNodeMap = new HashMap<>();
	@NotNull
    private Tree tree;
	@NotNull
	private FilterState filterState = new FilterState();
    @NotNull
    private final SearchWidget searchWidget;
    
    public ReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        this.project = project;
        this.toolWindow = toolWindow;
    	// Install search widget
        searchWidget = new SearchWidget(project, toolWindow.getSearchParent(), null, true) {
            @Override
            public void searchTextChanged(@NotNull String text) {
                filterState.setSearchText(text);
                SwingUtilities.invokeLater(() -> {
                	fastReload();
                });
            }
            @Override
            public void setExtraActions(List<ToggleAction> actions) {
            	actions.add(new TextCaseSensitiveAction(ReportPanel.this));
            	actions.add(new TextWholeWordsAction(ReportPanel.this));
            	actions.add(new TextRegexAction(ReportPanel.this));
            }
        };
        // Install search filters
        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new ShowInfoAction(this));
        titleActions.add(new ShowWarningsAction(this));
        titleActions.add(new ShowErrorAction(this));
        titleActions.add(new ShowForSelectedFileAction(this));
        titleActions.add(new FilterResetAction(this));
        toolWindow.setTitleActions(titleActions);
        // Install tree
        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        tree.setOpaque(true);
        tree.setBackground(UIUtil.getTreeBackground());
        tree.setRootVisible(false);
        tree.setModel(new ReportTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), this));
        tree.setCellRenderer(new ReportColoredTreeCellRenderer(project));
        tree.addMouseListener(new ReportMouseAdapter(this));
        cleanTree();
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);
        // Tree is forced to be drawn by the view in onViewPartBroughtToTop method
    }

    @Override
    public void dispose() {
        handleAllFilesClosed();
        tree.removeAll();
    }

    public @NotNull Tree getTree() {
        return tree;
    }

    public @NotNull Project getProject() {
        return project;
    }

    public void fastReload() {
        fastReload(null);
    }

    private void fastReload(DefaultMutableTreeNode node) {
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        model.resetCache();
        try {
            List<TreePath> expandedPaths = TreeUtil.collectExpandedPaths(tree);
            if (node == null) {
                model.reload();
            } else {
                model.reload(node);
            }
            TreeUtil.restoreExpandedPaths(tree, expandedPaths);
        } finally {
            model.resetCache();
        }
    }
    
    public void cleanSearchWidget() {
    	searchWidget.clean();
    }

    public void updateTitleActions() {
        toolWindow.updateTitleActions();
    }

    public @NotNull FilterState getFilterState() {
        return filterState;
    }

    @Override
    public void handleAllFilesClosed() {
        cleanTree();
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.getAuditReport(file.getPath());
        if (report == null) {
            removeIssuesByFile(file.getPath());
        } else {
            removeIssues(report.getIssues());
        }
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (fileNameToTreeNodeMap.containsKey(oldFileName)) {
            fileNameToTreeNodeMap.put(newFile.getPath(), fileNameToTreeNodeMap.remove(oldFileName));
            DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(newFile.getPath());
            fastReload(node);
        }
    }

    @Override
    public void handleAuditReportReady(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit data = auditService.getAuditReport(file.getPath());
        if (!data.isDownloaded() || data.getDisplayOptions().isShowInProblemsList()) {
            addIssues(data.getIssues());
            toolWindow.show(null);
            // Navigate to the report tree node
            if (fileNameToTreeNodeMap.containsKey(data.getAuditFileName())) {
                goToFileTreeNode(fileNameToTreeNodeMap.get(data.getAuditFileName()));
            } else {
                for (String fileName : data.getParticipantFileNames()) {
                    if (fileNameToTreeNodeMap.containsKey(fileName)) {
                        goToFileTreeNode(fileNameToTreeNodeMap.get(fileName));
                        break;
                    }
                }
            }
        }
    }

    @Override
    public void handleIssuesFixed(@NotNull List<Issue> issues) {
        removeIssues(issues);
    }

    @Override
    public void handleAuditReportClean(@NotNull Audit report) {
        removeIssues(report.getIssues());
    }

    @Override
    public void handleSelectedFile(@NotNull VirtualFile file) {
        refreshProblems(file);
        if (filterState.isShowSelectedFileOnly()) {
        	fastReload();
        }
        if (!fileNameToTreeNodeMap.containsKey(file.getPath())) {
            return;
        }
        goToFileTreeNode(fileNameToTreeNodeMap.get(file.getPath()));
    }

    private void goToFileTreeNode(TreeNode node) {
        TreePath path = TreePathUtil.pathToTreeNode(node);
        tree.scrollPathToVisible(path);
        tree.setSelectionPath(path);
    }

    @Override
    public void handleDocumentChanged(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        if (auditService.isNotAuditParticipantFile(file.getPath())) {
            return;
        }
        if (!fileNameToTreeNodeMap.containsKey(file.getPath())) {
            return;
        }
        DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(file.getPath());
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        if (model.isLeaf(node)) {
        	fastReload();
        } else {
        	fastReload(node);
        }
    }

    private void cleanTree() {
        fileNameToTreeNodeMap.clear();
        issueToTreeNodeMap.clear();
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        model.setRoot(new DefaultMutableTreeNode());
    }

    private void addIssues(List<Issue> issues) {
        if (issues.isEmpty()) {
            return;
        }
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        DefaultMutableTreeNode root = (DefaultMutableTreeNode) model.getRoot();
        List<DefaultMutableTreeNode> nodesToExpand = new LinkedList<>();
        for (Issue issue : issues) {
            if (issueToTreeNodeMap.containsKey(issue)) {
                continue;
            }
            String fileName = issue.getFileName();
            ReportIssueObject io = new ReportIssueObject(project, issue);
            DefaultMutableTreeNode child = new DefaultMutableTreeNode(io);
            if (fileNameToTreeNodeMap.containsKey(fileName)) {
                DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(fileName);
                node.add(child);
                issueToTreeNodeMap.put(issue, child);
            } else {
                ReportFileObject fo = new ReportFileObject(issue);
                DefaultMutableTreeNode node = new DefaultMutableTreeNode(fo);
                node.add(child);
                root.add(node);
                fileNameToTreeNodeMap.put(fileName, node);
                issueToTreeNodeMap.put(issue, child);
                nodesToExpand.add(node);
            }
        }
        for (String fileName : fileNameToTreeNodeMap.keySet()) {
            sortChildren(fileNameToTreeNodeMap.get(fileName));
        }
        fastReload();
        try {
            for (DefaultMutableTreeNode node : nodesToExpand) {
                tree.expandPath(TreePathUtil.pathToTreeNode(node));
            }
        } finally {
            model.resetCache();
        }
    }

    private void removeIssues(List<Issue> issues) {
        if (issues.isEmpty()) {
            return;
        }
        for (Issue issue : issues) {
            if (issueToTreeNodeMap.containsKey(issue)) {
                removeIssue(issue);
            }
        }
        removeFilesIfNecessary();
        fastReload();
    }

    private void removeIssuesByFile(String fileName) {
        for (Issue issue : new HashSet<>(issueToTreeNodeMap.keySet())) {
            if (fileName.equals(issue.getAuditFileName())) {
                removeIssue(issue);
            }
        }
        removeFilesIfNecessary();
        fastReload();
    }

    private void removeIssue(Issue issue) {
        DefaultMutableTreeNode node = issueToTreeNodeMap.remove(issue);
        DefaultMutableTreeNode parent = (DefaultMutableTreeNode) node.getParent();
        parent.remove(node);
    }

    private void removeFilesIfNecessary() {
        for (String fileName : new HashSet<>(fileNameToTreeNodeMap.keySet())) {
            DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(fileName);
            if (node.getChildCount() == 0) {
                DefaultMutableTreeNode parent = (DefaultMutableTreeNode) node.getParent();
                parent.remove(node);
                fileNameToTreeNodeMap.remove(fileName);
            }
        }
    }

    private void sortChildren(DefaultMutableTreeNode node) {
        Enumeration<TreeNode> children = node.children();
        List<TreeNode> list = Collections.list(children);
        list.sort(new ReportTreeNodeComparator());
        node.removeAllChildren();
        for (TreeNode o : list) {
            node.add((MutableTreeNode) o);
        }
    }

    public void refreshProblems(@NotNull VirtualFile file) {
        if (file != null) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(file.getPath());
            if (report != null && !fileNameToTreeNodeMap.containsKey(report.getAuditFileName())) {
                handleAuditReportReady(file);
            }
        }
    }
}
