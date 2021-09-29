package com.xliic.openapi.report.tree;

import java.util.LinkedList;
import java.util.List;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import org.eclipse.jface.viewers.ITreeContentProvider;

import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.report.tree.filter.FilterState;

public class ReportTreeContentProvider implements ITreeContentProvider {

	private final Project project;
	private final String projectPath;
	private final FilterState filterState;

	public ReportTreeContentProvider(ReportManager manager) {
		this.project = manager.getProject();
		this.projectPath = project.getBasePath();
		this.filterState = manager.getFilterState();
	}

	@Override
	public Object[] getChildren(Object parent) {
		int count = getChildCount(parent);
		LinkedList<TreeNode> children = new LinkedList<>();
		for (int i = 0; i < count; i++) {
			children.add((TreeNode) getChild(parent, i));
		}
		return children.toArray();
	}

	@Override
	public Object getParent(Object element) {
		DefaultMutableTreeNode on = (DefaultMutableTreeNode) element;
		return on.getParent();
	}

	@Override
	public boolean hasChildren(Object element) {
		return getChildCount(element) > 0;
	}

	@Override
	public Object[] getElements(Object inputElement) {
		return getChildren(inputElement);
	}

	private Object getChild(Object objectNode, int index) {

		DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
		if (node.getParent() == null) {
			return getChildrenOfRootNode(objectNode).get(index);
		} else if (node.getUserObject() instanceof ReportFileObject) {
			return getChildrenOfReportFileNode(objectNode).get(index);
		} else {
			throw new ArrayIndexOutOfBoundsException("incorrect index");
		}
	}

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

	private List<DefaultMutableTreeNode> getChildrenOfRootNode(Object objectNode) {

		List<DefaultMutableTreeNode> nodes = new LinkedList<>();
		DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
		int count = node.getChildCount();
		for (int i = 0; i < count; i++) {
			DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) node.getChildAt(i);
			if (!getChildrenOfReportFileNode(treeNode).isEmpty()) {
				nodes.add(treeNode);
			}
		}
		return nodes;
	}

	private List<DefaultMutableTreeNode> getChildrenOfReportFileNode(Object objectNode) {

		List<DefaultMutableTreeNode> nodes = new LinkedList<>();
		DefaultMutableTreeNode node = (DefaultMutableTreeNode) objectNode;
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
			Pattern pattern = filterState.isCaseSensitiveState() ? Pattern.compile(patternToFind)
					: Pattern.compile(patternToFind, Pattern.CASE_INSENSITIVE);
			return pattern.matcher(input).find();
		} catch (PatternSyntaxException e) {
			return false;
		}
	}
}