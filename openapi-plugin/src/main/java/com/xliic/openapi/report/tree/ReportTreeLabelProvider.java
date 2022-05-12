package com.xliic.openapi.report.tree;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jface.viewers.DelegatingStyledCellLabelProvider;
import org.eclipse.jface.viewers.ILabelProvider;
import org.eclipse.jface.viewers.StyledCellLabelProvider;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.IWorkbench;

import com.xliic.core.project.Project;
import com.xliic.openapi.FontStyler;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.report.Severity;
import com.xliic.openapi.utils.OpenAPIUtils;

public class ReportTreeLabelProvider extends StyledCellLabelProvider
		implements DelegatingStyledCellLabelProvider.IStyledLabelProvider, ILabelProvider {

	private final static Image anyTypeImage = OpenAPIImages.Any_type.createImage();
	private final static Image reportErrorImage = OpenAPIImages.ReportError.createImage();
	private final static Image reportWarningImage = OpenAPIImages.ReportWarning.createImage();
	private final static Image reportInfoImage = OpenAPIImages.ReportInfo.createImage();

	private final Font defaultFont;
	private final FontStyler boldFontStyler;
	private final FontStyler italicFontStyler;

	private final String projectPath;
	private final ReportTreeContentProvider contentProvider;

	public ReportTreeLabelProvider(Project project, IWorkbench workbench, ReportTreeContentProvider contentProvider) {
		this.contentProvider = contentProvider;
		projectPath = project.getBasePath();
		defaultFont = workbench.getDisplay().getSystemFont();
		boldFontStyler = new FontStyler(OpenAPIUtils.getBoldFont(defaultFont), null);
		italicFontStyler = new FontStyler(OpenAPIUtils.getItalicFont(defaultFont), StyledString.QUALIFIER_STYLER);
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
			String shortName = fo.getShortFileName(projectPath);
			String numberOfIssues = " [" + contentProvider.getChildCount(treeNode) + "]";
			label = new StyledString(shortName + numberOfIssues, boldFontStyler);
			return label;
		}
		if (userObject instanceof ReportIssueObject) {
			ReportIssueObject io = (ReportIssueObject) userObject;
			label = new StyledString(io.getLabel(), null);
			label.append(new StyledString(io.getLabelLocation(), italicFontStyler));
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
			return anyTypeImage;
		}

		if (userObject instanceof ReportIssueObject) {
			ReportIssueObject io = (ReportIssueObject) userObject;

			if (io.getSeverity() == Severity.CRITICAL || io.getSeverity() == Severity.HIGH) {
				return reportErrorImage;
			} else if (io.getSeverity() == Severity.MEDIUM) {
				return reportWarningImage;
			} else {
				return reportInfoImage;
			}
		}

		return null;
	}

	@Override
	public String getText(Object element) {
		return getStyledText(element).toString();
	}
}