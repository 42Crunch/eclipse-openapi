package com.xliic.openapi.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ISelectionChangedListener;
import org.eclipse.jface.viewers.ITreeSelection;
import org.eclipse.jface.viewers.SelectionChangedEvent;
import org.eclipse.ui.texteditor.ITextEditor;

import com.xliic.openapi.utils.EditorUtil;

public class OpenAPITreeSelectionChangedListener implements ISelectionChangedListener {

	@Override
    public void selectionChanged(SelectionChangedEvent event) {
        ITreeSelection selection = (ITreeSelection) event.getSelection();
        if (!selection.isEmpty()) {
        	DefaultMutableTreeNode on1 = (DefaultMutableTreeNode) selection.getFirstElement();
        	OpenApiTreeNode on = (OpenApiTreeNode) on1.getUserObject();
            try {
                int startOffset = (int) on.getStartOffset();
                int endOffset = (int) on.getEndOffset();
                ITextEditor editor = (ITextEditor) EditorUtil.getCurrentEditor();
                editor.selectAndReveal(startOffset, endOffset - startOffset);
            }
            finally {
            }
        }
    }
}
