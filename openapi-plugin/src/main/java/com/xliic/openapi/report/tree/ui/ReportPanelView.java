package  com.xliic.openapi.report.tree.ui;

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

import org.eclipse.core.resources.IFile;
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
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.part.ViewPart;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.report.tree.ReportFileObject;
import com.xliic.openapi.report.tree.ReportIssueObject;
import com.xliic.openapi.report.tree.ReportManager;
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
import com.xliic.openapi.services.IDataService;
import com.xliic.openapi.utils.OpenAPIUtils;
import com.xliic.openapi.utils.WorkbenchUtils;

public class ReportPanelView extends ViewPart implements ReportManager {

	public static final String ID = "com.xliic.openapi.report.tree.ui.ReportPanelView";

	@Inject IWorkbench workbench;
	
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
    private static final Set<IFile> currentFiles = new HashSet<>();
	  
    private FilterState filterState;

	@Override
	public void createPartControl(Composite parent) {
		viewer = new TreeViewer(parent, SWT.MULTI | SWT.H_SCROLL | SWT.V_SCROLL);
		filterState = new FilterState();
		contentProvider = new ReportTreeContentProvider(this);
		viewer.setContentProvider(contentProvider);
		viewer.setInput(new DefaultMutableTreeNode());
		
		labelProvider = new DecoratingStyledCellLabelProvider(new ReportTreeLabelProvider(workbench, contentProvider), 
				workbench.getDecoratorManager().getLabelDecorator(), DecorationContext.DEFAULT_CONTEXT);
		viewer.setLabelProvider(labelProvider);
		
		this.listener = new ReportTreeSelectionChangedListener();
		this.expansionListener = new ReportTreeExpansionListener(workbench, viewer);
		viewer.addSelectionChangedListener(listener);
		getSite().setSelectionProvider(viewer);
		makeActions();
		contributeToActionBars();
		handleToolWindowRegistered();
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

	@Override
	public void setFocus() {
		viewer.getControl().setFocus();
	}

	@Override
	public FilterState getFilterState() {
		return filterState;
	}

	@Override
	public void cleanSearchTextArea() {
		filterShowInfoAction.setChecked(filterState.isShowInfo());
		filterShowWarningsAction.setChecked(filterState.isShowWarning());
		filterShowErrorAction.setChecked(filterState.isShowError());
		filterShowForSelectedFileAction.setChecked(filterState.isShowSelectedFileOnly());
		filterFilterResetAction.setChecked(false);
		filterShowFilterAction.setChecked(false);
	}

	@Override
	public void reloadAndRestoreExpansion() {
		DefaultMutableTreeNode root = (DefaultMutableTreeNode) viewer.getInput();
		viewer.setInput(root);
	    expansionListener.expand(fileNameToTreeNodeMap.values());
	}

	@Override
	public void handleAllFilesClosed() {
		currentFiles.clear();
	    expansionListener.clear();
	    cleanTree();
	}

	@Override
	public void handleClosedFile(VirtualFile file) {
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    if (!dataService.hasAuditReport(file.getPath())) {
	      return;
	    }
	    Audit auditReport = dataService.getAuditReport(file.getPath());
	    removeIssues(auditReport.getIssues());
	    currentFiles.remove(file.getIFile());
	}

	@Override
	public void handleSelectedFile(VirtualFile file) {
	    if (filterState.isShowSelectedFileOnly()) {
	    	reloadAndRestoreExpansion();
	    }
	    String fileName = file.getAbsoluteFullFilePath();
	    if (!fileNameToTreeNodeMap.containsKey(fileName)) {
	        return;
	    }
	    goToFileTreeNode(fileNameToTreeNodeMap.get(fileName));
	}

	@Override
	public void handleAuditReportReady(IFile file) {

	  WorkbenchUtils.showView2(ID, null, IWorkbenchPage.VIEW_ACTIVATE);
	  IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
      Audit data = dataService.getAuditReport(file.getFullPath().toPortableString());
      addIssues(data.getIssues());
      currentFiles.add(file);

      // Navigate to the report tree node
      if (fileNameToTreeNodeMap.containsKey(data.getAuditFileName())) {
        goToFileTreeNode(fileNameToTreeNodeMap.get(data.getAuditFileName()));
      }
      else {
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
	    viewer.setInput(new DefaultMutableTreeNode());
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
		      }
		      else {
		        ReportFileObject fo = new ReportFileObject(fileName, issue.getFile());
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
		  viewer.setSelection(new TreeSelection(OpenAPIUtils.getTreePathFromTreeNode(node)));
	  }

	@Override
	public void handleAuditReportClean(Audit auditReport) {
		removeIssues(auditReport.getIssues());
	}

	@Override
	public void handleDocumentChanged(IFile file) {
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
	    if (!dataService.isAuditParticipantFile(OpenAPIUtils.getAbsoluteFullFilePath(file))) {
	      return;
	    }
	    if (!fileNameToTreeNodeMap.containsKey(OpenAPIUtils.getAbsoluteFullFilePath(file))) {
	      return;
	    }
	    TreeNode node = fileNameToTreeNodeMap.get(OpenAPIUtils.getAbsoluteFullFilePath(file));
	    viewer.refresh(node);
	}

	@Override
	public void handleToolWindowRegistered() {
		boolean hide = true;
		IDataService dataService = (IDataService) PlatformUI.getWorkbench().getService(IDataService.class);
		for (IFile file : currentFiles) {
			  if (dataService.hasAuditReport(file.getFullPath().toPortableString())) {
			      Audit data = dataService.getAuditReport(file.getFullPath().toPortableString());
			      addIssues(data.getIssues());
			      hide = false;
			  }
		}
		if (hide) {
			WorkbenchUtils.hideView(ID, null, IWorkbenchPage.VIEW_ACTIVATE);
		}
	}

	@Override
	public void handleFileNameChanged(IFile newFile, IFile oldFile) {

		String oldKey = OpenAPIUtils.getAbsoluteFullFilePath(oldFile);	
	    if (fileNameToTreeNodeMap.containsKey(oldKey)) {
	    	String newKey = OpenAPIUtils.getAbsoluteFullFilePath(newFile);
	        expansionListener.replace(newKey, oldKey);	        
	        fileNameToTreeNodeMap.put(newKey, fileNameToTreeNodeMap.remove(oldKey));
	        DefaultMutableTreeNode node = fileNameToTreeNodeMap.get(newKey);	        
	        ((ReportFileObject) node.getUserObject()).setFileWithFileName(newFile, newKey);
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
        filterState = null;       
        viewer.removeSelectionChangedListener(listener);
        viewer.removeTreeListener(expansionListener);
    }

	public static void handlePluginStop() {
		currentFiles.clear();
	}
}
