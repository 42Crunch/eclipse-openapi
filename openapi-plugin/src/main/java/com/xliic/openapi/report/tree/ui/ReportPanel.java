package com.xliic.openapi.report.tree.ui;

import com.xliic.core.Disposable;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.tree.TreePathUtil;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.tree.*;
import com.xliic.openapi.report.tree.filter.*;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;
import org.eclipse.jface.viewers.TreePath;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;
import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.MutableTreeNode;
import javax.swing.tree.TreeNode;
import java.util.List;
import java.util.*;

@SuppressWarnings("serial")
public class ReportPanel extends JPanel implements FileListener, WindowListener, AuditListener, Disposable {

    private final Project project;
    private final ToolWindow toolWindow;
    private final ReportTreeExpansionListener expansionListener;
    private final Map<String, DefaultMutableTreeNode> fileNameToTreeNodeMap = new HashMap<>();
    private final Map<Issue, DefaultMutableTreeNode> issueToTreeNodeMap = new HashMap<>();

    private Tree tree;
    private FilterState filterState = new FilterState();

    public ReportPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {

        tree = new Tree(new TreeViewer(parent, SWT.SINGLE | SWT.H_SCROLL | SWT.V_SCROLL));
        this.project = project;
        this.toolWindow = toolWindow;

        List<AnJAction> titleActions = new ArrayList<>();
        titleActions.add(new ShowInfoAction(this));
        titleActions.add(new ShowWarningsAction(this));
        titleActions.add(new ShowErrorAction(this));
        titleActions.add(new ShowFilterAction(this));
        titleActions.add(new ShowForSelectedFileAction(this));
        titleActions.add(new FilterResetAction(this));
        toolWindow.setTitleActions(titleActions);

        tree.setOpaque(true);
        tree.setBackground(UIUtil.getTreeBackground());

        tree.setRootVisible(false);
        tree.setModel(new ReportTreeModel(tree.getViewer(), new DefaultMutableTreeNode(), this));
        tree.setCellRenderer(new ReportColoredTreeCellRenderer(project));
        expansionListener = new ReportTreeExpansionListener(tree);
        tree.addTreeExpansionListener(expansionListener);
        tree.addMouseListener(new ReportMouseAdapter(this));
        cleanTree();

        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(WindowListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(AuditListener.TOPIC, this);

        // Panel may be created lazily
        AuditService auditService = AuditService.getInstance(project);
        for (VirtualFile file : FileEditorManager.getInstance(project).getOpenFiles()) {
            if (auditService.getAuditReport(file.getPath()) != null) {
                handleAuditReportReady(file);
            }
        }
    }

    @Override
    public void dispose() {
        handleAllFilesClosed();
        tree.removeAll();
        filterState = null;
    }

    public Tree getTree() {
        return tree;
    }

    public Project getProject() {
        return project;
    }

    public void reloadAndRestoreExpansion() {
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        model.reload();
        expansionListener.expand(fileNameToTreeNodeMap.values());
    }

    public void updateTitleActions() {
        toolWindow.updateTitleActions();
    }

    public FilterState getFilterState() {
        return filterState;
    }

    @Override
    public void handleToolWindowRegistered(@NotNull String id) {
        if (ToolWindowId.OPEN_API_REPORT.equals(id)) {
            if (toolWindow.isVisible()) {
                toolWindow.hide(null);
            }
        }
    }

    @Override
    public void handleToolWindowOpened(@NotNull String id) {
        if (ToolWindowId.OPEN_API_REPORT.equals(id) && toolWindow.isVisible()) {
            refreshProblems(OpenApiUtils.getSelectedFile(project));
        }
    }

    @Override
    public void handleAllFilesClosed() {
        expansionListener.clear();
        cleanTree();
    }

    @Override
    public void handleClosedFile(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit report = auditService.getAuditReport(file.getPath());
        if (report != null) {
            removeIssues(report.getIssues());
        }
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        if (fileNameToTreeNodeMap.containsKey(oldFileName)) {
            expansionListener.replace(newFile.getPath(), oldFileName);
            fileNameToTreeNodeMap.put(newFile.getPath(), fileNameToTreeNodeMap.remove(oldFileName));
            DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(newFile.getPath());
            ReportTreeModel model = (ReportTreeModel) getTree().getModel();
            model.reload(node);
            expansionListener.expand(fileNameToTreeNodeMap.values());
        }
    }

    @Override
    public void handleAuditReportReady(@NotNull VirtualFile file) {
        AuditService auditService = AuditService.getInstance(project);
        Audit data = auditService.getAuditReport(file.getPath());
        if (!data.isPlatform() || data.isShowAsProblems()) {
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
            reloadAndRestoreExpansion();
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
        TreeNode node = fileNameToTreeNodeMap.get(file.getPath());
        ReportTreeModel model = (ReportTreeModel) getTree().getModel();
        if (model.isLeaf(node)) {
            reloadAndRestoreExpansion();
        } else {
            model.reload(node);
        }
    }

    @Override
    public void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues) {
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

        for (Issue issue : issues) {

            String fileName = issue.getFileName();
            ReportIssueObject io = new ReportIssueObject(project, issue);
            DefaultMutableTreeNode child = new DefaultMutableTreeNode(io);

            if (fileNameToTreeNodeMap.containsKey(fileName)) {
                DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(fileName);
                node.add(child);
                issueToTreeNodeMap.put(issue, child);
                expansionListener.addNodeExpandedState(node);
            } else {
                ReportFileObject fo = new ReportFileObject(issue);
                DefaultMutableTreeNode node = new DefaultMutableTreeNode(fo);
                node.add(child);
                root.add(node);
                fileNameToTreeNodeMap.put(fileName, node);
                issueToTreeNodeMap.put(issue, child);
                expansionListener.addNodeExpandedState(node);
            }
        }
        for (String fileName : fileNameToTreeNodeMap.keySet()) {
            sortChildren(fileNameToTreeNodeMap.get(fileName));
        }
        reloadAndRestoreExpansion();
    }

    private void removeIssues(List<Issue> issues) {
        if (issues.isEmpty()) {
            return;
        }
        for (Issue issue : issues) {
            if (issueToTreeNodeMap.containsKey(issue)) {
                DefaultMutableTreeNode node = issueToTreeNodeMap.remove(issue);
                DefaultMutableTreeNode parent = (DefaultMutableTreeNode) node.getParent();
                parent.remove(node);
            }
        }
        Iterator<String> iterator = fileNameToTreeNodeMap.keySet().iterator();
        while (iterator.hasNext()) {
            String fileName = iterator.next();
            DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(fileName);
            if (node.getChildCount() == 0) {
                DefaultMutableTreeNode parent = (DefaultMutableTreeNode) node.getParent();
                parent.remove(node);
                expansionListener.clearNodeExpandedState(node);
                iterator.remove();
            }
        }
        reloadAndRestoreExpansion();
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

    private void refreshProblems(VirtualFile file) {
        if (file != null) {
            AuditService auditService = AuditService.getInstance(project);
            Audit report = auditService.getAuditReport(file.getPath());
            if (report != null && !fileNameToTreeNodeMap.containsKey(report.getAuditFileName())) {
                report.setShowAsProblems(true);
                handleAuditReportReady(file);
            }
        }
    }
}
