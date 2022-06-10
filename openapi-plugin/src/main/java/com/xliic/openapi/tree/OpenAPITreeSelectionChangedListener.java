package com.xliic.openapi.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ITreeSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.ui.texteditor.ITextEditor;

import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.tree.node.BaseNode;

public class OpenAPITreeSelectionChangedListener implements ISelectionChangedListener {

	@Override
    public void selectionChanged(SelectionChangedEvent event) {
        ITreeSelection selection = (ITreeSelection) event.getSelection();
        if (!selection.isEmpty()) {
        	DefaultMutableTreeNode on1 = (DefaultMutableTreeNode) selection.getFirstElement();
            BaseNode o = (BaseNode) on1.getUserObject();
            if (o.getNode() == null) {
                return;
            }
            try {
            	Range range = EclipseUtil.getSelectionRange(o.getNode());
                ITextEditor editor = (ITextEditor) EclipseUtil.getCurrentEditor();
                editor.selectAndReveal(range.getOffset(), range.getLength());
            }
            finally {
            }
        }
    }
}
