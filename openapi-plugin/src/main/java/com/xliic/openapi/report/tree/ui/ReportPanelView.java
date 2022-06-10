package com.xliic.openapi.report.tree.ui;

import java.util.Collections;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Set;

import javax.inject.Inject;
import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.MutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.action.Action;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.action.IToolBarManager;
import org.eclipse.jface.viewers.DecoratingStyledCellLabelProvider;
import org.eclipse.jface.viewers.DecorationContext;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.TreeSelection;
import org.eclipse.jface.viewers.TreeViewer;
import org.eclipse.swt.SWT;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IActionBars;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.part.ViewPart;

import com.xliic.core.Disposable;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.tree.ReportFileObject;
import com.xliic.openapi.report.tree.ReportIssueObject;
import com.xliic.openapi.report.tree.ReportTreeContentProvider;
import com.xliic.openapi.report.tree.ReportTreeExpansionListener;
import com.xliic.openapi.report.tree.ReportTreeLabelProvider;
import com.xliic.openapi.report.tree.ReportTreeNodeComparator;
import com.xliic.openapi.report.tree.ReportTreeSelectionChangedListener;
import com.xliic.openapi.report.tree.filter.FilterResetAction;
import com.xliic.openapi.report.tree.filter.FilterState;
import com.xliic.openapi.report.tree.filter.ShowErrorAction;
import com.xliic.openapi.report.tree.filter.ShowFilterAction;
import com.xliic.openapi.report.tree.filter.ShowForSelectedFileAction;
import com.xliic.openapi.report.tree.filter.ShowInfoAction;
import com.xliic.openapi.report.tree.filter.ShowWarningsAction;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.WindowListener;

public class ReportPanelView extends ViewPart 
	implements FileListener, WindowListener, AuditListener, Disposable {

	@Inject
	IWorkbench workbench;

	private TreeViewer viewer;
	private Action filterShowInfoAction;
	private Action filterShowWarningsAction;
	private Action filterShowErrorAction;
	private Action filterShowForSelectedFileAction;
	private Action filterFilterResetAction;
	private Action filterShowFilterAction;

	private ReportTreeContentProvider contentProvider;
	private StyledCellLabelProvider labelProvider;

	private ReportTreeSelectionChangedListener listener;
	private ReportTreeExpansionListener expansionListener;

	private final Map<String, DefaultMutableTreeNode> fileNameToTreeNodeMap = new HashMap<>();
	private final Map<Issue, DefaultMutableTreeNode> issueToTreeNodeMap = new HashMap<>();
	private final Set<VirtualFile> currentFiles = new HashSet<>();
	private final Project project;
	private FilterState filterState;
	
	public ReportPanelView() {
		project = Project.getInstance();	
	}

	@Override
	public void createPartControl(Composite parent) {
		viewer = new TreeViewer(parent, SWT.MULTI | SWT.H_SCROLL | SWT.V_SCROLL);
		filterState = new FilterState();
		contentProvider = new ReportTreeContentProvider(this);
		viewer.setContentProvider(contentProvider);
		viewer.setInput(new DefaultMutableTreeNode());
		labelProvider = new DecoratingStyledCellLabelProvider(
				new ReportTreeLabelProvider(project, workbench, contentProvider),
				workbench.getDecoratorManager().getLabelDecorator(), DecorationContext.DEFAULT_CONTEXT);
		viewer.setLabelProvider(labelProvider);

		this.listener = new ReportTreeSelectionChangedListener();
		this.expansionListener = new ReportTreeExpansionListener(workbench, viewer);
		viewer.addSelectionChangedListener(listener);
		getSite().setSelectionProvider(viewer);
		makeActions();
		contributeToActionBars();
		
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

	private void contributeToActionBars() {
		IActionBars bars = getViewSite().getActionBars();
		fillLocalPullDown(bars.getMenuManager());
		fillLocalToolBar(bars.getToolBarManager());
	}

	private void fillLocalPullDown(IMenuManager manager) {
		manager.add(filterShowInfoAction);
		manager.add(filterShowWarningsAction);
		manager.add(filterShowErrorAction);
		manager.add(filterShowForSelectedFileAction);
		manager.add(filterShowFilterAction);
		manager.add(filterFilterResetAction);
	}

	private void fillLocalToolBar(IToolBarManager manager) {
		manager.add(filterShowInfoAction);
		manager.add(filterShowWarningsAction);
		manager.add(filterShowErrorAction);
		manager.add(filterShowForSelectedFileAction);
		manager.add(filterShowFilterAction);
		manager.add(filterFilterResetAction);
	}

	private void makeActions() {
		filterShowInfoAction = new ShowInfoAction(this);
		filterShowWarningsAction = new ShowWarningsAction(this);
		filterShowErrorAction = new ShowErrorAction(this);
		filterShowForSelectedFileAction = new ShowForSelectedFileAction(this);
		filterFilterResetAction = new FilterResetAction(this);
		filterShowFilterAction = new ShowFilterAction(workbench.getActiveWorkbenchWindow(), this);
	}

	public Project getProject() {
		return project;
	}

	@Override
	public void setFocus() {
		viewer.getControl().setFocus();
	}

	public FilterState getFilterState() {
		return filterState;
	}

	public void cleanSearchTextArea() {
		filterShowInfoAction.setChecked(filterState.isShowInfo());
		filterShowWarningsAction.setChecked(filterState.isShowWarning());
		filterShowErrorAction.setChecked(filterState.isShowError());
		filterShowForSelectedFileAction.setChecked(filterState.isShowSelectedFileOnly());
		filterFilterResetAction.setChecked(false);
		filterShowFilterAction.setChecked(false);
	}

	public void reloadAndRestoreExpansion() {
		if (!isDisposed()) {
			DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
			viewer.setInput(root);
			expansionListener.expand(fileNameToTreeNodeMap.values());
		}
	}

	@Override
	public void handleAllFilesClosed() {
		currentFiles.clear();
		expansionListener.clear();
		cleanTree();
	}

	@Override
	public void handleClosedFile(VirtualFile file) {
	    AuditService auditService = AuditService.getInstance(project);
	    Audit auditReport = auditService.getAuditReport(file.getPath());
	    if (auditReport != null) {
	      removeIssues(auditReport.getIssues());
	    }
		currentFiles.remove(file);
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {
		if (filterState.isShowSelectedFileOnly()) {
			reloadAndRestoreExpansion();
		}
		String fileName = file.getPath();
		if (!fileNameToTreeNodeMap.containsKey(fileName)) {
			return;
		}
		goToFileTreeNode(fileNameToTreeNodeMap.get(fileName));
	}

	@Override
	public void handleAuditReportReady(VirtualFile file) {

		//WorkbenchUtils.showView(ID, null, IWorkbenchPage.VIEW_ACTIVATE);
		AuditService auditService = AuditService.getInstance(project);
		Audit data = auditService.getAuditReport(file.getPath());
		addIssues(data.getIssues());
		currentFiles.add(file);

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

	private void cleanTree() {
		fileNameToTreeNodeMap.clear();
		issueToTreeNodeMap.clear();
		if (!isDisposed()) {
			viewer.setInput(new DefaultMutableTreeNode());
		}
	}

	private void addIssues(List<Issue> issues) {

		if (issues.isEmpty()) {
			return;
		}

		DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();

		for (Issue issue : issues) {

			String fileName = issue.getFileName();
			ReportIssueObject io = new ReportIssueObject(issue);
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

	private void goToFileTreeNode(TreeNode node) {
		viewer.setSelection(new TreeSelection(EclipseUtil.getTreePathFromTreeNode(node)));
	}

	@Override
	public void handleIssuesFixed(List<Issue> issues) {
		removeIssues(issues);
	}

	@Override
	public void handleAuditReportClean(Audit auditReport) {
		removeIssues(auditReport.getIssues());
	}

	@Override
	public void handleDocumentChanged(VirtualFile file) {
	    AuditService auditService = AuditService.getInstance(project);
	    if (auditService.isNotAuditParticipantFile(file.getPath())) {
	      return;
	    }
		if (!fileNameToTreeNodeMap.containsKey(file.getPath())) {
			return;
		}
		TreeNode node = fileNameToTreeNodeMap.get(file.getPath());
		if (node.isLeaf()) {
			reloadAndRestoreExpansion();
		} else {
			viewer.refresh(node);
		}
	}

	@Override
	public void handleToolWindowRegistered(String id) {
		boolean hide = true;
		AuditService auditService = AuditService.getInstance(project);
		for (VirtualFile file : currentFiles) {
			if (auditService.getAuditReport(file.getPath()) != null) {
				Audit data = auditService.getAuditReport(file.getPath());
				addIssues(data.getIssues());
				hide = false;
			}
		}
		if (hide) {
			EclipseWorkbenchUtil.hideView(ToolWindowId.OPEN_API_REPORT, null, IWorkbenchPage.VIEW_ACTIVATE);
		}
	}

	@Override
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {

		String oldKey = oldFileName;
		if (fileNameToTreeNodeMap.containsKey(oldKey)) {
			String newKey = newFile.getPath();
			expansionListener.replace(newKey, oldKey);
			fileNameToTreeNodeMap.put(newKey, fileNameToTreeNodeMap.remove(oldKey));
			DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(newKey);
			viewer.refresh(node);
			expansionListener.expand(fileNameToTreeNodeMap.values());
		}
	}

	@Override
	public void dispose() {
		super.dispose();
		if (labelProvider != null) {
			labelProvider.dispose();
		}
		fileNameToTreeNodeMap.clear();
		issueToTreeNodeMap.clear();
		currentFiles.clear();
		filterState = null;
		viewer.removeSelectionChangedListener(listener);
		viewer.removeTreeListener(expansionListener);
	}
	
	private boolean isDisposed() {
		return (viewer == null) || viewer.getControl().isDisposed();
	}

	@Override
	public void handleViewDetails(VirtualFile file, List<Issue> issues) {}

	@Override
	public void handleToolWindowOpened(String id) {}
}
