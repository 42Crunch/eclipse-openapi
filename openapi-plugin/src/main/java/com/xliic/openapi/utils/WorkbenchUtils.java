package com.xliic.openapi.utils;

import java.util.Optional;

import org.eclipse.ui.IPerspectiveDescriptor;
import org.eclipse.ui.IPerspectiveRegistry;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IViewReference;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.Workbench;
import org.eclipse.ui.internal.WorkbenchPlugin;

import com.xliic.openapi.OpenAPIPerspectiveFactory;

@SuppressWarnings("restriction")
public final class WorkbenchUtils {

	private WorkbenchUtils() {
	}

	@SuppressWarnings("unchecked")
	public static <T extends IViewPart> T showView(String viewId, String secondaryId, int mode) {
		IWorkbenchWindow window = getIWorkbenchWindow(Workbench.getInstance());
		IWorkbenchPage page = getIWorkbenchPage(window);
		if (page == null) {
			return null;
		}
		try {
			T view = (T) page.showView(viewId, secondaryId, mode);
			IViewReference reference = (IViewReference) page.getReference(view);
			page.setPartState(reference, IWorkbenchPage.STATE_RESTORED);
			return view;
		} catch (PartInitException e) {
			throw new RuntimeException(
					String.format("Cannot show view with id %s and secondary id %s.", viewId, secondaryId), e);
		}
	}

	@SuppressWarnings("unchecked")
	public static <T extends IViewPart> T hideView(String viewId, String secondaryId, int mode) {
		IWorkbenchWindow window = getIWorkbenchWindow(Workbench.getInstance());
		IWorkbenchPage page = getIWorkbenchPage(window);
		if (page == null) {
			return null;
		}
		T view = (T) page.findView(viewId);
		IViewReference reference = (IViewReference) page.getReference(view);
		page.setPartState(reference, IWorkbenchPage.STATE_MINIMIZED);
		return view;
	}

	public static IWorkbenchWindow getActiveWorkbenchWindow() {
		return PlatformUI.getWorkbench().getActiveWorkbenchWindow();
	}

	@SuppressWarnings("unchecked")
	public static <T extends IViewPart> Optional<T> findView(String viewId) {
		IWorkbenchWindow window = getIWorkbenchWindow(Workbench.getInstance());
		IWorkbenchPage page = getIWorkbenchPage(window);
		if (page == null) {
			return Optional.ofNullable(null);
		}
		T result = (T) page.findView(viewId);
		return Optional.ofNullable(result);
	}

	public static void openPerspective() {
		IPerspectiveRegistry registry = WorkbenchPlugin.getDefault().getPerspectiveRegistry();
		IPerspectiveDescriptor perspective = registry.findPerspectiveWithId(OpenAPIPerspectiveFactory.ID);
		if (perspective != null) {
			IWorkbenchPage page = EditorUtil.getActivePage();
			page.setPerspective(perspective);
		}
	}

	public static IWorkbenchWindow getIWorkbenchWindow() {
		return getIWorkbenchWindow(Workbench.getInstance());
	}

	private static IWorkbenchWindow getIWorkbenchWindow(Workbench workbench) {
		IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
		if (window == null) {
			IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
			if (windows.length > 0) {
				return windows[0];
			}
			return null;
		}
		return window;
	}

	private static IWorkbenchPage getIWorkbenchPage(IWorkbenchWindow window) {
		if (window == null) {
			return null;
		}
		IWorkbenchPage page = window.getActivePage();
		if (page == null) {
			IWorkbenchPage[] pages = window.getPages();
			if (pages.length > 0) {
				return pages[0];
			}
			return null;
		}
		return page;
	}
}
