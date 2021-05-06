package com.xliic.openapi;

import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IStartup;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.internal.ide.IDEWorkbenchPlugin;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

import com.xliic.openapi.listeners.OpenAPIPartListener;
import com.xliic.openapi.report.tree.ui.ReportPanelView;
import com.xliic.openapi.services.ISnippetService;
import com.xliic.openapi.utils.WorkbenchUtils;

// IStartup helps to activate plugin without user's interaction
@SuppressWarnings("restriction")
public class OpenAPIAbstractUIPlugin extends AbstractUIPlugin implements IStartup {

	public static final String TEXT_EDITOR_STRATEGY_PREFERENCE_KEY = "org.eclipse.ui.ide.textEditor";

	private static OpenAPIAbstractUIPlugin plugin;
    private IPartListener partListener;
    private OpenAPIResourceChangeListener resourceChangeListener;

    @Override
    public void start(BundleContext context) throws Exception {
        super.start(context);	
        plugin = this;
    	ISnippetService snippetService = (ISnippetService) PlatformUI.getWorkbench().getService(ISnippetService.class);
    	snippetService.load();
    }

	@Override
	public void earlyStartup() {
		IWorkbench workbench = PlatformUI.getWorkbench();
		workbench.getDisplay().asyncExec(new Runnable() {
		public void run() {
			IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
			if (window != null) {

				partListener = new OpenAPIPartListener(plugin.getPreferenceStore());
				window.getPartService().addPartListener(partListener);

				resourceChangeListener = new OpenAPIResourceChangeListener();
				ResourcesPlugin.getWorkspace().addResourceChangeListener(resourceChangeListener, IResourceChangeEvent.POST_CHANGE);

				IWorkbenchPage page = window.getActivePage();
				if (page == null) {
					return;
				}
				IEditorPart editor = page.getActiveEditor();
				if (editor == null) {
					return;
				}
				IWorkbenchPart part = editor.getEditorSite().getPart();
				if (part == null) {
					return;
				}
				partListener.partOpened(part);
		    }
			setPreference();
		}});
	}

    @Override
    public void stop(BundleContext context) throws Exception {  
    	try {
	    	ReportPanelView.handlePluginStop();
	        if (WorkbenchUtils.getActiveWorkbenchWindow() != null) {
	        	WorkbenchUtils.getActiveWorkbenchWindow().getPartService().removePartListener(partListener);
	        }
	        if (resourceChangeListener != null) {
		        ResourcesPlugin.getWorkspace().removeResourceChangeListener(resourceChangeListener);
		        resourceChangeListener = null;
	        }
	        partListener = null;
	        plugin = null;
        }
		finally {
			super.stop(context);
		}
    }

    public static OpenAPIAbstractUIPlugin getInstance() {
        return plugin;
    }

	private void setPreference() {
    	IPreferenceStore idePreferenceStore = IDEWorkbenchPlugin.getDefault().getPreferenceStore();
    	String value = idePreferenceStore.getString(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY);    	
    	if (!TEXT_EDITOR_STRATEGY_PREFERENCE_KEY.equals(value)) {
    		idePreferenceStore.setValue(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY, TEXT_EDITOR_STRATEGY_PREFERENCE_KEY);
    	}
    }
}
