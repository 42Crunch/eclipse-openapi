package com.xliic.openapi.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.IWorkbench;

import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.FontStyler;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.RootNode;

public class OpenAPITreeLabelProvider extends StyledCellLabelProvider 
	implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {

	private final static Image panelNodeImage = OpenAPIImages.PanelNode.createImage();
	private final static Image propertyNodeImage = OpenAPIImages.PropertyNode.createImage();

	private final Font defaultFont;
	private final FontStyler boldFontStyler;
	private final FontStyler counterBoldFontStyler;
	
	public OpenAPITreeLabelProvider(IWorkbench workbench) {
		this.defaultFont = workbench.getDisplay().getSystemFont();
		Font boldFont = EclipseUtil.getBoldFont(defaultFont);
		this.boldFontStyler = new FontStyler(boldFont, null);
		this.counterBoldFontStyler = new FontStyler(boldFont, StyledString.COUNTER_STYLER);
	}

    @Override
    public StyledString getStyledText(Object element) {
    	
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) element;
        Object obj = node.getUserObject();
        if (obj instanceof RootNode) {
            return null;
        }
        BaseNode o = (BaseNode) obj;
        StyledString label;
        if (o instanceof PanelNode) {
        	label = new StyledString(o.getName().toUpperCase(), boldFontStyler);    
        }
        else {
        	label = new StyledString(o.getName(), null);
        }
        if (o.hasHint()) {
        	label.append(new StyledString(" [+]", counterBoldFontStyler));
        }        
        return label;
    }
    
    @Override
    public Image getImage(Object element) {
    	
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) element;
        Object obj = node.getUserObject();
        if (obj instanceof RootNode) {
            return null;
        }
        if (obj instanceof PanelNode) {
        	return panelNodeImage;
        }
        else {
        	return propertyNodeImage;
        }
    }

    @Override
    public String getText(Object element) {
        return getStyledText(element).toString();
    }    
}