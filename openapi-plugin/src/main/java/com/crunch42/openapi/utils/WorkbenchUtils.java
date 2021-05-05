package com.crunch42.openapi.utils;

import java.util.Optional;

import org.eclipse.ui.IPerspectiveDescriptor;
import org.eclipse.ui.IViewPart;
import org.eclipse.ui.IViewReference;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.internal.Workbench;
import org.eclipse.ui.internal.WorkbenchPlugin;

import com.crunch42.openapi.OpenAPIPerspectiveFactory;

@SuppressWarnings("restriction")
public final class WorkbenchUtils {

    private WorkbenchUtils() {
    }

    public static <T extends IViewPart> T showView(String viewId, String secondaryId, int mode) {
    	
        IWorkbenchWindow activeWorkbenchWindow = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
        
        try {
            @SuppressWarnings("unchecked")
            T view = (T) activeWorkbenchWindow.getActivePage().showView(viewId, secondaryId, mode);
            return view;
        } 
        catch (PartInitException e) {
            throw new RuntimeException(String.format("Cannot show view with id %s and secondary id %s.", viewId, secondaryId), e);
        }
    }
    
    public static <T extends IViewPart> T showView2(String viewId, String secondaryId, int mode) {
    	
		Workbench workbench = Workbench.getInstance();
		IWorkbenchWindow window = (workbench.getActiveWorkbenchWindow() == null) ? workbench.getWorkbenchWindows()[0] : workbench.getActiveWorkbenchWindow();
		IWorkbenchPage page = (window.getActivePage() == null) ? window.getPages()[0] : window.getActivePage();
		
        try {
            @SuppressWarnings("unchecked")
            T view = (T) page.showView(viewId, secondaryId, mode);
    		IViewReference reference = (IViewReference) page.getReference(view);
    		page.setPartState(reference, IWorkbenchPage.STATE_RESTORED);
            return view;
        } 
        catch (PartInitException e) {
            throw new RuntimeException(String.format("Cannot show view with id %s and secondary id %s.", viewId, secondaryId), e);
        }
    }

    public static <T extends IViewPart> T hideView(String viewId, String secondaryId, int mode) {
    	
		Workbench workbench = Workbench.getInstance();
		IWorkbenchWindow window = (workbench.getActiveWorkbenchWindow() == null) ? workbench.getWorkbenchWindows()[0] : workbench.getActiveWorkbenchWindow();
		IWorkbenchPage page = (window.getActivePage() == null) ? window.getPages()[0] : window.getActivePage();
		
        @SuppressWarnings("unchecked")
		T view = (T) page.findView(viewId);
		IViewReference reference = (IViewReference) page.getReference(view);
		page.setPartState(reference, IWorkbenchPage.STATE_MINIMIZED);
		return view;
    }
    
    public static <T extends IViewPart> Optional<T> findView(String viewId) {
    	
        IWorkbenchWindow activeWorkbenchWindow = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
        @SuppressWarnings("unchecked")
        T result = (T) activeWorkbenchWindow.getActivePage().findView(viewId);
        return Optional.ofNullable(result);
    }
    
    public static IWorkbenchWindow getActiveWorkbenchWindow() {
    	return PlatformUI.getWorkbench().getActiveWorkbenchWindow();
    }

	public static <T extends IViewPart> Optional<T> findView2(String viewId) {
		
		Workbench workbench = Workbench.getInstance();
		IWorkbenchWindow window = (workbench.getActiveWorkbenchWindow() == null) ? workbench.getWorkbenchWindows()[0] : workbench.getActiveWorkbenchWindow();
		IWorkbenchPage page = (window.getActivePage() == null) ? window.getPages()[0] : window.getActivePage();
        @SuppressWarnings("unchecked")
        T result = (T) page.findView(viewId);
        return Optional.ofNullable(result);
	}
	
	public static void openPerspective() {
		
		IPerspectiveDescriptor perspective = WorkbenchPlugin.getDefault().getPerspectiveRegistry().findPerspectiveWithId(OpenAPIPerspectiveFactory.ID);
		if (perspective != null) {
			IWorkbenchPage page = EditorUtil.getActivePage();
			page.setPerspective(perspective);
		}
	}
}
