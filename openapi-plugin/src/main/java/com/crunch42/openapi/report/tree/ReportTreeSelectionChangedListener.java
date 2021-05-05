package com.crunch42.openapi.report.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ITreeSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;

public class ReportTreeSelectionChangedListener implements ISelectionChangedListener {

	@Override
    public void selectionChanged(SelectionChangedEvent event) {

		ITreeSelection selection = (ITreeSelection) event.getSelection();
        if (!selection.isEmpty()) {
        	DefaultMutableTreeNode on1 = (DefaultMutableTreeNode) selection.getFirstElement();        	
            DefaultMutableTreeNode thisNode = on1;
            if (thisNode == null) {
                return;
            }
            Object userObject = thisNode.getUserObject();
            if (userObject instanceof ReportFileObject) {
                return;
            }
            if (userObject instanceof ReportIssueObject) {
                ReportIssueObject io = (ReportIssueObject) userObject;
                io.navigate();
            }
        }
    }
}
