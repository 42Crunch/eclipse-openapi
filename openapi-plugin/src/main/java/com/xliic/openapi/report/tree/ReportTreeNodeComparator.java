package com.xliic.openapi.report.tree;

import java.util.Comparator;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import com.xliic.openapi.report.IssueComparator;

public class ReportTreeNodeComparator implements Comparator<TreeNode> {

    private static final IssueComparator comparator = new IssueComparator();

    @Override
    public int compare(TreeNode o1, TreeNode o2) {
        ReportIssueObject io1 = (ReportIssueObject) ((DefaultMutableTreeNode) o1).getUserObject();
        ReportIssueObject io2 = (ReportIssueObject) ((DefaultMutableTreeNode) o2).getUserObject();
        return comparator.compare(io1.getIssue(), io2.getIssue()) ;
    }
}
