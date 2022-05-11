package com.xliic.core.wm;

import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class ToolWindowManager {
	
	private static ToolWindowManager manager;
	
	private ToolWindowManager(@NotNull Project project) {}
	
	public static ToolWindowManager getInstance(@NotNull Project project) {
		if (manager == null) {
			manager = new ToolWindowManager(project);
		}
		return manager;
	}
	
	public ToolWindow getToolWindow(@NotNull String id) {
		IWorkbenchWindow[] windows = PlatformUI.getWorkbench().getWorkbenchWindows();
		for (int i = 0; i < windows.length; i++) {
			IWorkbenchPage[] pages = windows[i].getPages();
			for (int j = 0; j < pages.length; j++) {
				IWorkbenchPage page = pages[j];
				IViewPart viewPart = page.findView(id);
				if (viewPart != null) {
					return new ToolWindow(page, viewPart);
				}
			}
		}
		return null;
	}
}
