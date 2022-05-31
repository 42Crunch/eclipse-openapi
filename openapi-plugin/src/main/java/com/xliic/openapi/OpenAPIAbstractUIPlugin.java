package com.xliic.openapi;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IProduct;
import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IStartup;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.internal.ide.IDEWorkbenchPlugin;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.osgi.framework.BundleContext;

import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.listeners.OpenAPIBulkFileListener;
import com.xliic.openapi.listeners.OpenAPIPartListener;

@SuppressWarnings("restriction")
public class OpenAPIAbstractUIPlugin extends AbstractUIPlugin implements IStartup {

	public static final String TEXT_EDITOR_STRATEGY_PREFERENCE_KEY = "org.eclipse.ui.ide.textEditor";
	private static final String PLATFORM_MULE_PRODUCT_NAME = "Anypoint Studio";

	private static OpenAPIAbstractUIPlugin plugin;
	private static Project project = new Project();

	private IPartListener partListener;
	private OpenAPIBulkFileListener resourceListener;
	private OpenAPIStartupActivity startupActivity;
	private HighlightingManager highlightingManager;
	private boolean isMuleIDE;

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
				disposeAllExtRefEditors();
				disposeAllExtRefFiles();
			}
		});
    	IProduct product = Platform.getProduct();
    	isMuleIDE = isMuleProductName(product) && isMuleProductId(product);
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

	public boolean isMuleIDE() {
		return isMuleIDE;
	}

	private void setPreference() {
		IPreferenceStore idePreferenceStore = IDEWorkbenchPlugin.getDefault().getPreferenceStore();
		String value = idePreferenceStore.getString(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY);
		if (!TEXT_EDITOR_STRATEGY_PREFERENCE_KEY.equals(value)) {
			idePreferenceStore.setValue(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY,
					TEXT_EDITOR_STRATEGY_PREFERENCE_KEY);
		}
	}

	private static boolean isMuleProductName(IProduct product) {
    	return PLATFORM_MULE_PRODUCT_NAME.equalsIgnoreCase(product.getName());
	}

	private static boolean isMuleProductId(IProduct product) {
		String id = product.getId();
    	return id != null && id.contains("mule");
	}
	
	private static void disposeAllExtRefFiles() {
		IProject[] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
		for (IProject project : projects) {
			if (project.exists()) {
				Boolean[] projToUpdate = { false };
				Path projPath = new File(project.getLocationURI()).toPath();
				File file = new File(Paths.get(projPath.toString(), OpenApiUtils.PROJECT_TMP_DIR).toUri());
				if (file.exists()) {
			    	try {
				        Files.walkFileTree(file.toPath(), new SimpleFileVisitor<>() {
				            @Override
				            public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
				                return FileVisitResult.CONTINUE;
				            }
				            @Override
				            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
								if (EclipseUtil.isExtRefFile(new VirtualFile(file.toFile()))) {
					            	try {
			            				file.toFile().setWritable(true);
					            		Files.delete(file);
					            		projToUpdate[0] = true;
					            	}
					            	catch (IOException e) {
					            		e.printStackTrace();
					            	}
								}
				            	return FileVisitResult.CONTINUE;
				            }
				        });
			    	}
			    	catch (IOException e) {
			    		e.printStackTrace();
			    	}
				}
				if (projToUpdate[0]) {
					EclipseUtil.refreshProject(project);
				}
			}
		}	
	}

	private static void disposeAllExtRefEditors() {
		IWorkbench workbench = PlatformUI.getWorkbench();
		IWorkbenchWindow[] windows = workbench.getWorkbenchWindows();
		for (IWorkbenchWindow window : windows) {
			for (IWorkbenchPage page : window.getPages()) {
				for (IEditorReference ref : page.getEditorReferences()) {
					try {
						IEditorInput input = ref.getEditorInput();
						if (EclipseUtil.isSupported(input)) {
							VirtualFile file = EclipseUtil.getVirtualFile(input);
							if (EclipseUtil.isExtRefFile(file)) {
								page.closeEditor(ref.getEditor(false), false);
							}
						}
					} catch (PartInitException e) {
						e.printStackTrace();
					}
				}
			}
		}
	}
}
