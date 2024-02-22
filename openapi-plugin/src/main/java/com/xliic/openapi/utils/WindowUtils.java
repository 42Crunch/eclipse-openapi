package com.xliic.openapi.utils;

import java.util.List;

import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.webapp.editor.WebFileEditorInput;
import com.xliic.openapi.webapp.editor.WebFileEditorPart;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public class WindowUtils {

	private static final String EDITOR_ID = "com.xliic.openapi.webapp.editor.WebFileEditorPart"; 
	
    public interface ContentLoadHandler {
        void onLoadEnd();
    }
    
    public static void openWebTab(@NotNull Project project, @NotNull String resourceId, @NotNull String tabId, @NotNull ViewPartHandler handler) {
        WebVirtualFile webFile = new WebVirtualFile(tabId, resourceId, handler);
		WebFileEditorInput input = new WebFileEditorInput(webFile);
		ApplicationManager.getApplication().invokeLater(() -> {
			List<IWorkbenchPage> pages = EclipseUtil.getAllSupportedPages();
			if (pages.isEmpty()) {
				// No editors are opened
				IWorkbenchWindow window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
				if (window != null) {
					IWorkbenchPage page = window.getActivePage();
					if (page != null) {
						openWebEditorOnPage(page, input, resourceId);	
					}
				}
				return;
			}
			IEditorPart editor = null;
			for (IWorkbenchPage page : pages) {
				editor = page.findEditor(input);
				if (editor != null) {
					page.activate(editor);
					input.getVirtualFile().getHandler().onReady();
					return;
				}
			}
			openWebEditorOnPage(pages.get(0), input, resourceId);
		});
    }

    public static boolean exists(@NotNull Project project, @NotNull String id) {
        return ToolWindowManager.getInstance(project).getToolWindow(id) != null;
    }

    public static void activate(@NotNull Project project, @NotNull String id) {
        ToolWindow window = ToolWindowManager.getInstance(project).getToolWindow(id);
        if (window != null) {
            activate(window);
        }
    }

    public static void activateToolWindow(@NotNull Project project, @NotNull String id) {
        activateToolWindow(project, id, null);
    }

    public static void activateToolWindow(@NotNull Project project, @NotNull String id, @Nullable WindowUtils.ContentLoadHandler handler) {
        if (!project.isDisposed()) {
            EclipseWorkbenchUtil.openPerspective();
            ToolWindow toolWindow = ToolWindowManager.getInstance(project).getToolWindow(id);
            if (toolWindow == null) {
                if (handler != null && ToolWindowId.WEB_APP_IDS.contains(id)) {
                    PanelViewPart.addContentLoadHandler(id, () -> { handler.onLoadEnd(); });
                }
                // View is always registered, but may not be available in any page
                EclipseWorkbenchUtil.showView(id, null, IWorkbenchPage.VIEW_ACTIVATE);
                return;
            }
            if (!toolWindow.isActive()) {
                toolWindow.activate(null);
            }
            if (handler != null && ToolWindowId.WEB_APP_IDS.contains(id)) {
                PanelViewPart part = toolWindow.getPanelViewPart();
                if (part != null) {
                    part.runWhenReady(() -> { handler.onLoadEnd(); });
                }
            }
        }
    }

    private static void activate(@NotNull ToolWindow window) {
        if (!window.isActive()) {
            window.activate(null);
        }
    }

    private static void openWebEditorOnPage(@NotNull IWorkbenchPage page, @NotNull WebFileEditorInput input, @NotNull String resourceId) {
    	if (!WebFileEditorPart.isTabsLimitOk(resourceId)) {
    		return;
    	}
		try {
			page.openEditor(input, EDITOR_ID);
		} catch (PartInitException e) {
			e.printStackTrace();
		}
    }
}
