package com.crunch42.openapi.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.IWorkbench;

import com.crunch42.openapi.FontStyler;
import com.crunch42.openapi.OpenAPIImages;
import com.crunch42.openapi.utils.OpenAPIUtils;

public class OpenAPITreeLabelProvider extends StyledCellLabelProvider 
	implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {

	private final Font defaultFont;

	public OpenAPITreeLabelProvider(IWorkbench workbench) {
		this.defaultFont = workbench.getDisplay().getSystemFont();
	}

    @Override
    public StyledString getStyledText(Object element) {
    	
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) element;
        OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
        if (o == null) {
            return null;
        }
        StyledString label;
        if (o.isPanel()) {
        	label = new StyledString(o.getKey().toUpperCase(), new FontStyler(OpenAPIUtils.getBoldFont(defaultFont), null));    
        }
        else {
        	label = new StyledString(o.getKey(), null);
        }
        if (o.applyHint()) {
        	label.append(new StyledString(" [+]", new FontStyler(OpenAPIUtils.getBoldFont(defaultFont), StyledString.COUNTER_STYLER)));
        }        
        return label;
    }
    
    @Override
    public Image getImage(Object element) {
    	
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) element;
        OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
        if (o == null) {
            return null;
        }
        if (o.isPanel()) {
        	return OpenAPIImages.PanelNode.createImage();
        }
        else {
        	return OpenAPIImages.PropertyNode.createImage();
        }
    }

    @Override
    public String getText(Object element) {
        return getStyledText(element).toString();
    }    
}