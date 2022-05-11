package com.xliic.openapi;

import org.eclipse.ui.IFolderLayout;
import org.eclipse.ui.IPageLayout;
import org.eclipse.ui.IPerspectiveFactory;

import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.tree.ui.OpenAPITreeView;

public class OpenAPIPerspectiveFactory implements IPerspectiveFactory {
	
	public static final String ID = "com.xliic.openapi.OpenAPIPerspectiveFactory";
	
	@Override
	public void createInitialLayout(IPageLayout layout) {
		defineActions(layout);
		defineLayout(layout);
	}

	public void defineActions(IPageLayout layout) {
		layout.addShowViewShortcut(IPageLayout.ID_PROJECT_EXPLORER);
		layout.addShowViewShortcut(IPageLayout.ID_PROBLEM_VIEW);
		layout.addShowViewShortcut(IPageLayout.ID_PROGRESS_VIEW);
		layout.addActionSet(IPageLayout.ID_NAVIGATE_ACTION_SET);
	}

	public void defineLayout(IPageLayout layout) {
		// Editors are placed for free.
		String editorArea = layout.getEditorArea();

		// Top left.
		IFolderLayout topLeft = layout.createFolder("topLeft", IPageLayout.LEFT, (float) 0.20, editorArea);
		topLeft.addView(IPageLayout.ID_PROJECT_EXPLORER);
		topLeft.addPlaceholder(IPageLayout.ID_BOOKMARKS);

		// Add a placeholder for the old navigator to maintain compatibility
		topLeft.addPlaceholder("org.eclipse.ui.views.ResourceNavigator");

		IFolderLayout bottomLeft = layout.createFolder("bottomLeft", IPageLayout.BOTTOM, (float) 0.50, "topLeft");
		bottomLeft.addView(OpenAPITreeView.ID);

		IFolderLayout bottomRight = layout.createFolder("bottomRight", IPageLayout.BOTTOM, (float) 0.70, editorArea);
		bottomRight.addView(ReportPanelView.ID);
		
		IFolderLayout topRight = layout.createFolder("topRight", IPageLayout.RIGHT, (float) 0.70, editorArea);
		topRight.addView(ToolWindowId.OPEN_API_HTML_REPORT);
	}
}
