package com.xliic.openapi;

import static com.xliic.openapi.platform.PlatformConnection.isPlatformIntegrationEnabled;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileVisitResult;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.SimpleFileVisitor;
import java.nio.file.attribute.BasicFileAttributes;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IProduct;
import org.eclipse.core.runtime.Platform;
import org.eclipse.jface.action.IContributionItem;
import org.eclipse.jface.action.IStatusLineManager;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IPartListener;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchPart;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.ide.IDE;
import org.eclipse.ui.internal.WorkbenchWindow;
import org.eclipse.ui.internal.ide.IDEWorkbenchPlugin;
import org.eclipse.ui.plugin.AbstractUIPlugin;
import org.jetbrains.annotations.NotNull;
import org.osgi.framework.BundleContext;
import org.osgi.framework.Version;

import com.xliic.core.actionSystem.AnActionUpdater;
import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectManagerListener;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.EclipseWorkbenchUtil;
import com.xliic.core.util.MUtils;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.listeners.OpenAPIBulkFileListener;
import com.xliic.openapi.listeners.OpenAPIPartListener;
import com.xliic.openapi.listeners.OpenAPIProjectManagerListener;
import com.xliic.openapi.services.PlatformService;
import com.xliic.openapi.statusbar.AuthUserContributionItem;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.TempFileUtils;

import icons.OpenApiIcons;

@SuppressWarnings({ "restriction" })
public class OpenAPIAbstractUIPlugin extends AbstractUIPlugin {

    public static final String TEXT_EDITOR_STRATEGY_PREFERENCE_KEY = "org.eclipse.ui.ide.textEditor";
    public static final String IGNORE_SHOW_PERSPECTIVE_ONCE = "openapi.ignore.show.perspective.once1";
    public static final String XLIIC_PLUGIN_ENABLE_INTERNAL_ACTIONS = "XLIIC_PLUGIN_ENABLE_INTERNAL_ACTIONS";
    private static final String PLATFORM_MULE_PRODUCT_NAME = "Anypoint Studio";

    private static OpenAPIAbstractUIPlugin plugin;
    private static Project project = Project.getInstance();

    private IPartListener partListener;
    private OpenAPIBulkFileListener resourceListener;
    private OpenAPIStartupActivity startupActivity;
    private HighlightingManager highlightingManager;
    private ProjectManagerListener projectManagerListener;
    private AnActionUpdater actionUpdater;
    private boolean isMuleIDE;
    private Version version;
    private String pluginId;
    private final boolean pluginEnableInternalActions;

    public OpenAPIAbstractUIPlugin() {
        plugin = this;
        pluginEnableInternalActions = "true".equalsIgnoreCase(System.getenv(XLIIC_PLUGIN_ENABLE_INTERNAL_ACTIONS));
        OpenApiIcons.init();
        startupActivity = new OpenAPIStartupActivity();
        highlightingManager = HighlightingManager.getInstance(project);
        partListener = new OpenAPIPartListener(project);
        resourceListener = new OpenAPIBulkFileListener(project);
        projectManagerListener = new OpenAPIProjectManagerListener();
        actionUpdater = new AnActionUpdater();
    }

    @Override
    public void start(BundleContext context) throws Exception {
        super.start(context);
        pluginId = (context == null) ? "unknown" : context.getBundle().getSymbolicName();
        version = (context == null) ? Version.emptyVersion : context.getBundle().getVersion();
        startupActivity.runActivity(project);
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, actionUpdater);
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, actionUpdater);
    }

    // Runs after start method
    public void runAsEarlyStartup() {
        IWorkbench workbench = PlatformUI.getWorkbench();
        workbench.getDisplay().asyncExec(new Runnable() {
            @Override
            public void run() {
                IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
                if (window != null) {
                    window.getPartService().addPartListener(projectManagerListener);
                    window.getPartService().addPartListener(partListener);
                    ResourcesPlugin.getWorkspace().addResourceChangeListener(resourceListener, IResourceChangeEvent.POST_CHANGE);
                    IWorkbenchPage page = window.getActivePage();
                    if (page != null) {
                        IEditorPart editor = page.getActiveEditor();
                        if (editor != null) {
                            IWorkbenchPart part = editor.getEditorSite().getPart();
                            if (part != null) {
                            	// Listener may have missed open & activation events 
                            	// fired before window.getPartService().addPartListener
                                partListener.partOpened(part);
                                partListener.partActivated(part);
                            }
                        }
                    }
                }
                setPreference();
                EclipseUtil.closeAllWebPages();
                handleEditorsAtStartup();
                handleTempFilesAtStartup();
                MUtils.activateMenuInternalActions(pluginEnableInternalActions);
                EclipseWorkbenchUtil.updateActionBars();
                initStatusLineContributionItem();
            }
        });
        IProduct product = Platform.getProduct();
        isMuleIDE = isMuleProductName(product) && isMuleProductId(product);
    }

    @Override
    public void stop(BundleContext context) throws Exception {
        try {
            project.getMessageBus().connect().unsubscribe(actionUpdater);
            project.dispose();
            highlightingManager.dispose();
            removeListeners();
            partListener = null;
            resourceListener = null;
            startupActivity = null;
            highlightingManager = null;
            projectManagerListener = null;
            actionUpdater = null;
            version = null;
            plugin = null;
        } finally {
            super.stop(context);
        }
    }

    private void removeListeners() {
        IWorkbenchWindow window = PlatformUI.getWorkbench().getActiveWorkbenchWindow();
        if (window != null) {
            window.getPartService().removePartListener(partListener);
        }
        ResourcesPlugin.getWorkspace().removeResourceChangeListener(resourceListener);
    }

    public static OpenAPIAbstractUIPlugin getInstance() {
        return plugin;
    }

    public boolean isMuleIDE() {
        return isMuleIDE;
    }

    @NotNull
    public String getPluginId() {
        return pluginId;
    }

    @NotNull
    public Version getVersion() {
        return version;
    }

    private void setPreference() {
        IPreferenceStore idePreferenceStore = IDEWorkbenchPlugin.getDefault().getPreferenceStore();
        String value = idePreferenceStore.getString(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY);
        if (!TEXT_EDITOR_STRATEGY_PREFERENCE_KEY.equals(value)) {
            idePreferenceStore.setValue(IDE.UNASSOCIATED_EDITOR_STRATEGY_PREFERENCE_KEY, TEXT_EDITOR_STRATEGY_PREFERENCE_KEY);
        }
    }

    private static boolean isMuleProductName(IProduct product) {
        return PLATFORM_MULE_PRODUCT_NAME.equalsIgnoreCase(product.getName());
    }

    private static boolean isMuleProductId(IProduct product) {
        String id = product.getId();
        return id != null && id.contains("mule");
    }

    private static void handleTempFilesAtStartup() {
        IProject[] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
        for (IProject project : projects) {
            if (project.exists()) {
                Boolean[] projToUpdate = { false };
                File file = TempFileUtils.getProjectExtRefTempDir(project);
                if (file != null && file.exists()) {
                    try {
                        Files.walkFileTree(file.toPath(), new SimpleFileVisitor<>() {
                            @Override
                            public FileVisitResult postVisitDirectory(Path dir, IOException exc) throws IOException {
                                return FileVisitResult.CONTINUE;
                            }

                            @Override
                            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                                if (TempFileUtils.isExtRefFile(new VirtualFile(file.toFile()))) {
                                    try {
                                        file.toFile().setWritable(true);
                                        Files.delete(file);
                                        projToUpdate[0] = true;
                                    } catch (IOException e) {
                                    	Logger.getInstance(OpenAPIAbstractUIPlugin.class).error(e);
                                    }
                                }
                                return FileVisitResult.CONTINUE;
                            }
                        });
                    } catch (IOException e) {
                    	Logger.getInstance(OpenAPIAbstractUIPlugin.class).error(e);
                    }
                }
                if (projToUpdate[0]) {
                    EclipseUtil.refreshProject(project);
                }
            }
        }
    }

    private static void handleEditorsAtStartup() {
        for (IWorkbenchPage page : EclipseUtil.getAllSupportedPages()) {
            for (IEditorReference ref : page.getEditorReferences()) {
                try {
                    VirtualFile file = EclipseUtil.getVirtualFile(ref.getEditorInput());
                    if (file != null) {
	                    if (TempFileUtils.isExtRefFile(file)) {
	                        page.closeEditor(ref.getEditor(true), false);
	                    } else if (isPlatformIntegrationEnabled() && TempFileUtils.isPlatformFile(file)) {
	                        PlatformService platformService = PlatformService.getInstance(project);
	                        // Closing editor will schedule file closing routine in AST thread
	                        // Only when it is finished we can continue with reopening, so here only schedule it
	                        platformService.sheduleToReopenPlatformFile(file);
	                        page.closeEditor(ref.getEditor(true), false);
                        }
                    }
                } catch (PartInitException e) {
                	Logger.getInstance(OpenAPIAbstractUIPlugin.class).error(e);
                }
            }
        }
    }

    private static void initStatusLineContributionItem() {
        for (IWorkbenchWindow window : PlatformUI.getWorkbench().getWorkbenchWindows()) {
        	if (window instanceof WorkbenchWindow) {
              	IStatusLineManager statusLineManager = ((WorkbenchWindow) window).getStatusLineManager();
              	IContributionItem item = statusLineManager.find(AuthUserContributionItem.ID);
              	if (item == null) {
              		statusLineManager.add(new AuthUserContributionItem(project, statusLineManager));
              	}
        	}
        }
    }
}
