package com.crunch42.openapi.report.tree;

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
import com.crunch42.openapi.report.Severity;
import com.crunch42.openapi.utils.OpenAPIUtils;

public class ReportTreeLabelProvider extends StyledCellLabelProvider implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {
	
	private final Font defaultFont;
	private final ReportTreeContentProvider contentProvider;
	
	public ReportTreeLabelProvider(IWorkbench workbench, ReportTreeContentProvider contentProvider) {
		this.contentProvider = contentProvider;
		this.defaultFont = workbench.getDisplay().getSystemFont();
	}

    @Override
    public StyledString getStyledText(Object element) {
    	
        DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) element;
        Object userObject = treeNode.getUserObject();
        if (userObject == null) {
            return null;
        }

        StyledString label;
        if (userObject instanceof ReportFileObject) {
            ReportFileObject fo = (ReportFileObject) userObject;
            String shortName = fo.getShortFileName();
            String numberOfIssues = " [" + contentProvider.getChildCount(treeNode) + "]";
            label = new StyledString(shortName + numberOfIssues, new FontStyler(OpenAPIUtils.getBoldFont(defaultFont), null)); 
            return label;
        }
        if (userObject instanceof ReportIssueObject) {        	
            ReportIssueObject io = (ReportIssueObject) userObject;
            label = new StyledString(io.getLabel(), null);
            label.append(new StyledString(io.getLabelLocation(), new FontStyler(OpenAPIUtils.getItalicFont(defaultFont), StyledString.QUALIFIER_STYLER)));
            return label;
        }
        return null;
    }
    
    @Override
    public Image getImage(Object element) {
    	
        DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) element;
        Object userObject = treeNode.getUserObject();
        if (userObject == null) {
            return null;
        }
        
        if (userObject instanceof ReportFileObject) {
            return OpenAPIImages.Any_type.createImage();
        }

        if (userObject instanceof ReportIssueObject) {
            ReportIssueObject io = (ReportIssueObject) userObject;
            
            if (io.getSeverity() == Severity.CRITICAL || io.getSeverity() == Severity.HIGH) {
            	return OpenAPIImages.ReportError.createImage();
            }
            else if (io.getSeverity() == Severity.MEDIUM) {
            	return OpenAPIImages.ReportWarning.createImage();
            }
            else {
            	return OpenAPIImages.ReportInfo.createImage();
            }
        }
        
        return null;
    }

    @Override
    public String getText(Object element) {
        return getStyledText(element).toString();
    }    
}