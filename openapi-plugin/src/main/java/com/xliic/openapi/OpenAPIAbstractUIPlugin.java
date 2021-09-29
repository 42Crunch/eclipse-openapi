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

import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.listeners.OpenAPIBulkFileListener;
import com.xliic.openapi.listeners.OpenAPIPartListener;

@SuppressWarnings("restriction")
public class OpenAPIAbstractUIPlugin extends AbstractUIPlugin implements IStartup {

	public static final String TEXT_EDITOR_STRATEGY_PREFERENCE_KEY = "org.eclipse.ui.ide.textEditor";

	private static OpenAPIAbstractUIPlugin plugin;
	private static Project project = new Project();

	private IPartListener partListener;
	private OpenAPIBulkFileListener resourceListener;
	private OpenAPIStartupActivity startupActivity;
	private HighlightingManager highlightingManager;

	public OpenAPIAbstractUIPlugin() {
		plugin = this;
		startupActivity = new OpenAPIStartupActivity();
		highlightingManager = HighlightingManager.getInstance(project);
		partListener = new OpenAPIPartListener(project);
		resourceListener = new OpenAPIBulkFileListener(project);
	}

	@Override
	public void start(BundleContext context) throws Exception {
		super.start(context);
		startupActivity.runActivity(project);
		highlightingManager.run();
	}

	@Override
	public void earlyStartup() {
		IWorkbench workbench = PlatformUI.getWorkbench();
		workbench.getDisplay().asyncExec(new Runnable() {
			@Override
			public void run() {
				IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
				if (window != null) {
					window.getPartService().addPartListener(partListener);
					ResourcesPlugin.getWorkspace().addResourceChangeListener(resourceListener,
							IResourceChangeEvent.POST_CHANGE);
					IWorkbenchPage page = window.getActivePage();
					if (page != null) {
						IEditorPart editor = page.getActiveEditor();
						if (editor != null) {
							IWorkbenchPart part = editor.getEditorSite().getPart();
							if (part != null) {
								partListener.partOpened(part);
							}
						}
					}
				}
				setPreference();
			}
		});
	}

	@Override
	public void stop(BundleContext context) throws Exception {
		try {
			dispose();
			removeListeners();
			partListener = null;
			resourceListener = null;
			startupActivity = null;
			highlightingManager = null;
			plugin = null;
		} finally {
			super.stop(context);
		}
	}

	private void dispose() {
		project.dispose();
		highlightingManager.dispose();
	}

	private void removeListeners() {
		IWorkbenchWindow window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
		if (window != null) {
			window.getPartService().removePartListener(partListener);
		}
		ResourcesPlugin.getWorkspace().removeResourceChangeListener(resourceListener);
	}

	public Project getProject() {
		return project;
	}

	public static OpenAPIAbstractUIPlugin getInstance() {
		return plugin;
	}

	private void setPreference() {
		IPreferenceStore idePreferenceStore = IDEWorkbenchPlugin.getDefault().getPreferenceStore();
		String value = idePreferenceStore.getString(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY);
		if (!TEXT_EDITOR_STRATEGY_PREFERENCE_KEY.equals(value)) {
			idePreferenceStore.setValue(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY,
					TEXT_EDITOR_STRATEGY_PREFERENCE_KEY);
		}
	}
}
