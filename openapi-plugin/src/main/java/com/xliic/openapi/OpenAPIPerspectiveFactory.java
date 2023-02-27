package com.xliic.openapi;

import org.eclipse.ui.IFolderLayout;
import org.eclipse.ui.IPageLayout;
import org.eclipse.ui.IPerspectiveFactory;

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
        // Layout
        // A * E
        // B * E
        // C D E
        IFolderLayout abc = layout.createFolder("abc", IPageLayout.LEFT, (float) 0.20, editorArea);
        abc.addView(IPageLayout.ID_PROJECT_EXPLORER);
        abc.addPlaceholder(IPageLayout.ID_BOOKMARKS);

        // Add a placeholder for the old navigator to maintain compatibility
        abc.addPlaceholder("org.eclipse.ui.views.ResourceNavigator");

        IFolderLayout b = layout.createFolder("b", IPageLayout.BOTTOM, (float) 0.34, "abc");
        b.addView(ToolWindowId.PLATFORM);

        IFolderLayout c = layout.createFolder("c", IPageLayout.BOTTOM, (float) 0.50, "b");
        c.addView(ToolWindowId.OPEN_API);

        IFolderLayout e = layout.createFolder("e", IPageLayout.RIGHT, (float) 0.70, editorArea);
        e.addView(ToolWindowId.OPEN_API_HTML_REPORT);

        IFolderLayout d = layout.createFolder("d", IPageLayout.BOTTOM, (float) 0.675, editorArea);
        d.addView(ToolWindowId.OPEN_API_REPORT);
        d.addView(ToolWindowId.PLATFORM_DICTIONARY);
        d.addView(ToolWindowId.TRY_IT);
        d.addView(ToolWindowId.SCAN);
        d.addView(ToolWindowId.ENV);
    }
}
