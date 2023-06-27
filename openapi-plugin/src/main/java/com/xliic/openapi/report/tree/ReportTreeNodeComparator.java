package com.xliic.openapi.report.tree;

import java.util.Comparator;

import javax.swing.tree.DefaultMutableTreeNode;
import javax.swing.tree.TreeNode;

import com.xliic.openapi.report.types.Issue;

public class ReportTreeNodeComparator implements Comparator<TreeNode> {

    private static final Comparator<Issue> ISSUE_COMPARATOR = (a, b) -> {
        if (a.getCriticality() == b.getCriticality()) {
            return Float.compare(b.getScore(), a.getScore());
        }
        return Integer.compare(b.getCriticality(), a.getCriticality());
    };

    @Override
    public int compare(TreeNode o1, TreeNode o2) {
        ReportIssueObject io1 = (ReportIssueObject) ((DefaultMutableTreeNode) o1).getUserObject();
        ReportIssueObject io2 = (ReportIssueObject) ((DefaultMutableTreeNode) o2).getUserObject();
        return ISSUE_COMPARATOR.compare(io1.getIssue(), io2.getIssue());
    }
}
