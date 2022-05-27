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
        OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
        if (o == null) {
            return null;
        }
        StyledString label;
        if (o.isPanel()) {
        	label = new StyledString(o.getKey().toUpperCase(), boldFontStyler);    
        }
        else {
        	label = new StyledString(o.getKey(), null);
        }
        if (o.applyHint()) {
        	label.append(new StyledString(" [+]", counterBoldFontStyler));
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