package com.xliic.openapi.utils;

import org.eclipse.ui.IWorkbenchPage;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.ToolWindowId;

public class WindowUtils {

    public interface ContentLoadHandler {
        void onLoadEnd();
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
}
