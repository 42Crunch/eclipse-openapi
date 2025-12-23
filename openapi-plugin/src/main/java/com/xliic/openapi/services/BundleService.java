package com.xliic.openapi.services;

import java.io.File;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.codeInsight.daemon.DaemonCodeAnalyzer;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.projectView.ProjectView;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.services.IBundleService;
import com.xliic.core.util.Computable;
import com.xliic.core.util.ui.UIUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncService;
import com.xliic.openapi.async.AsyncTask;
import com.xliic.openapi.async.AsyncTaskType;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.listeners.BundleDocumentListener;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.preview.PreviewService;
import com.xliic.openapi.refs.external.ExtRefService;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

public class BundleService extends AsyncService implements SettingsListener, IBundleService, Disposable {

    public static final String ROOT_FILE_NAME_KEY = "ROOT_FILE_NAME_KEY";
    public static final String DO_HIGHLIGHTING_KEY = "DO_HIGHLIGHTING_KEY";

    private static final int DELAY = 1000;
    private static final int INIT_DELAY = 1000;

    private final Map<String, BundleResult> bundleResultMap;
    private final Map<String, Map<String, BundleDocumentListener>> bundleListenersMap;
    private final Map<String, Set<BundleError>> bundleErrorsMap;

    public BundleService(@NotNull final Project project) {
        super(project, DELAY, INIT_DELAY);
        bundleResultMap = new ConcurrentHashMap<>();
        bundleListenersMap = new HashMap<>();
        bundleErrorsMap = new HashMap<>();
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static BundleService getInstance(@NotNull Project project) {
        return project.getService(BundleService.class);
    }

    @Override
    public boolean isPartOfBundleWithExtRefs(@NotNull String fileName) {
        for (BundleResult result : bundleResultMap.values()) {
            if (result.getBundledFiles().contains(fileName) && !result.getActiveURLs().isEmpty()) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean isFileBeingBundled(@NotNull String fileName) {
        if (bundleErrorsMap.containsKey(fileName)) {
            return true;
        }
        for (BundleResult result : bundleResultMap.values()) {
            if (result.getBundledFiles().contains(fileName)) {
                return true;
            }
        }
        return false;
    }

    @Override
    protected void onRunComplete() {
        // Monitor active URLs to clean unused ones
        Set<String> activeURLs = new HashSet<>();
        for (BundleResult result : bundleResultMap.values()) {
            activeURLs.addAll(result.getActiveURLs());
        }
        ExtRefService extRefService = ExtRefService.getInstance(project);
        extRefService.clear(activeURLs);
    }

    @Override
    protected void beforeFileOpened(AsyncTask task) {
        final String bundledFile = task.getFile().getPath();
        bundle(bundledFile, true);
        for (String rootFile : new HashSet<>(bundleResultMap.keySet())) {
            if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
                final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
                if ((listeners != null) && !listeners.containsKey(bundledFile)) {
                    ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
                        Document document = getOpenedDocument(bundledFile, false);
                        if (document != null) {
                            BundleDocumentListener listener = new BundleDocumentListener(project, rootFile);
                            listeners.put(bundledFile, listener);
                            document.addDocumentListener(listener);
                        }
                        return null;
                    });
                }
            }
        }
    }

    @Override
    protected void documentChanged(AsyncTask task) {
        String rootFileName = (String) task.get(ROOT_FILE_NAME_KEY);
        bundle(rootFileName, false);
        // If files are changed in the editor highlighting is done by default
        // Otherwise we have to force re-highlighting after bundling is complete
        Object value = task.get(DO_HIGHLIGHTING_KEY);
        if ((value != null) && (Boolean) value) {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(rootFileName));
            if (file != null) {
                ApplicationManager.getApplication().runReadAction(() -> {
                    PsiFile psiFile = Utils.findPsiFile(project, file);
                    if (psiFile != null) {
                        DaemonCodeAnalyzer.getInstance(project).restart(psiFile);
                    }
                });
            }
        }
    }

    @Override
    protected void selectionChanged(AsyncTask task) {
    }

    @Override
    protected void beforeFileClosed(AsyncTask task) {
        remove(task.getFile().getPath());
    }

    @Override
    protected void allFilesClosed(AsyncTask task) {
    }

    @Override
    public void refactorRename(AsyncTask task) {
        String oldFileName = (String) task.get(OLD_FILE_NAME_KEY);
        if (bundleResultMap.containsKey(oldFileName)) {
            remove(oldFileName);
            beforeFileOpened(task);
        }
    }

    @Override
    protected void treeDfs(AsyncTask task) {
    }

    @Override
    public void scheduleToBundleByHost(@NotNull String hostname) {
        for (BundleResult result : bundleResultMap.values()) {
            if (result.hasBundleHost(hostname)) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(result.getFile()));
                if (file != null) {
                    Map<String, Object> asyncTaskData = new HashMap<>();
                    asyncTaskData.put(DO_HIGHLIGHTING_KEY, true);
                    asyncTaskData.put(ROOT_FILE_NAME_KEY, file.getPath());
                    runAsyncTask(project, AsyncTaskType.DOCUMENT_CHANGED, file, asyncTaskData);
                }
            }
        }
    }

    @Override
    public void scheduleToBundleByHosts(@NotNull Set<String> hostnames) {
        Set<String> filesToBundle = new HashSet<>();
        for (String hostname : hostnames) {
            for (BundleResult result : bundleResultMap.values()) {
                if (result.hasBundleHost(hostname)) {
                    filesToBundle.add(result.getFile());
                }
            }
        }
        for (String fileToBundle : filesToBundle) {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileToBundle));
            if (file != null) {
                Map<String, Object> asyncTaskData = new HashMap<>();
                asyncTaskData.put(DO_HIGHLIGHTING_KEY, true);
                asyncTaskData.put(ROOT_FILE_NAME_KEY, file.getPath());
                runAsyncTask(project, AsyncTaskType.DOCUMENT_CHANGED, file, asyncTaskData);
            }
        }
    }

    private void bundle(@NotNull String rootFileName, boolean isOpenBefore) {
        BundleResult result = new BundleResult(project, rootFileName);
        if (isOpenBefore && result.isBundleComplete()) {
            if (!result.isOpenAPIBundle()) {
                return;
            }
        }
        String text = result.getJsonText();
        ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
            if (bundleResultMap.containsKey(rootFileName)) {
                updateListeners(rootFileName, result.getBundledFiles());
                clearBundleErrorsMap(rootFileName);
            } else {
                bundleListenersMap.put(rootFileName, new HashMap<>());
                addListeners(rootFileName, result.getBundledFiles());
            }
            Set<String> rootFileNames = new HashSet<>(bundleResultMap.keySet());
            rootFileNames.remove(rootFileName);
            for (String rootFile : rootFileNames) {
                if (bundleResultMap.get(rootFile).getBundledFiles().contains(rootFileName)) {
                    final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
                    if ((listeners != null) && !listeners.containsKey(rootFileName)) {
                        Document document = getOpenedDocument(rootFileName, false);
                        if (document != null) {
                            BundleDocumentListener listener = new BundleDocumentListener(project, rootFile);
                            listeners.put(rootFileName, listener);
                            document.addDocumentListener(listener);
                        }
                    }
                }
            }
            return null;
        });
        bundleResultMap.put(rootFileName, result);
        if (!result.isBundleComplete()) {
            for (BundleError error : result.getBundleErrors()) {
                if (!bundleErrorsMap.containsKey(error.getSourceFileName())) {
                    bundleErrorsMap.put(error.getSourceFileName(), new HashSet<>());
                }
                bundleErrorsMap.get(error.getSourceFileName()).add(error);
            }
        }
        ApplicationManager.getApplication().invokeLater(() -> {
            if (!project.isDisposed()) {
                ProjectView.getInstance(project).refresh();
                project.getMessageBus().syncPublisher(FileListener.TOPIC).handleDocumentBundled(rootFileName);
                PreviewService.getInstance().sendText(project.getLocationHash(), rootFileName, text);
            }
        });
    }

    @Override
    public boolean hasBundles() {
        return bundleResultMap.size() > 0;
    }

    private void remove(String bundledFile) {
        if (bundleResultMap.containsKey(bundledFile)) {
            removeListeners(bundledFile);
            bundleResultMap.remove(bundledFile);
        }
        for (String rootFile : new HashSet<>(bundleResultMap.keySet())) {
            if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
                final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
                if ((listeners != null) && listeners.containsKey(bundledFile)) {
                    ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
                        Document document = getOpenedDocument(bundledFile, false);
                        if (document != null) {
                            document.removeDocumentListener(listeners.remove(bundledFile));
                        }
                        return null;
                    });
                }
            }
        }
        clearBundleErrorsMap(bundledFile);
        UIUtil.invokeLaterIfNeeded(() -> {
            if (!project.isDisposed()) {
                ProjectView.getInstance(project).refresh();
            }
        });
    }

    private void clearBundleErrorsMap(String rootFileName) {
        for (Map.Entry<String, Set<BundleError>> entry : bundleErrorsMap.entrySet()) {
            entry.getValue().removeIf(error -> rootFileName.equals(error.getRootFileName()));
        }
        bundleErrorsMap.entrySet().removeIf(entry -> entry.getValue().isEmpty());
    }

    @Override
    public BundleResult getBundle(@NotNull String rootFileName) {
        return bundleResultMap.get(rootFileName);
    }

    @Override
    public Map<String, Set<BundleError>> getBundleErrorsMap() {
        return bundleErrorsMap;
    }

    private void addListeners(String rootFileName, Set<String> bundledFiles) {
        final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
        if (listeners != null) {
            for (String bundledFile : bundledFiles) {
                if (!listeners.containsKey(bundledFile)) {
                    Document document = getOpenedDocument(bundledFile, true);
                    if (document != null) {
                        BundleDocumentListener listener = new BundleDocumentListener(project, rootFileName);
                        listeners.put(bundledFile, listener);
                        document.addDocumentListener(listener);
                    }
                }
            }
        }
    }

    private void removeListeners(String rootFileName) {
        final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
        if (listeners != null) {
            ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
                for (String bundledFile : Set.copyOf(listeners.keySet())) {
                    Document document = getOpenedDocument(bundledFile, false);
                    if (document != null) {
                        document.removeDocumentListener(listeners.remove(bundledFile));
                    }
                }
                return null;
            });
            bundleListenersMap.remove(rootFileName);
        }
    }

    private void updateListeners(String rootFileName, Set<String> newBundledFiles) {
        final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
        if (listeners != null) {
            // New bundled file appeared => add listener
            for (String newBundledFile : newBundledFiles) {
                if (!listeners.containsKey(newBundledFile)) {
                    Document document = getOpenedDocument(newBundledFile, true);
                    if (document != null) {
                        BundleDocumentListener listener = new BundleDocumentListener(project, rootFileName);
                        document.addDocumentListener(listener);
                        listeners.put(newBundledFile, listener);
                    }
                }
            }
            // Previously bundled file disappeared => remove listener
            for (String oldBundledFile : Set.copyOf(listeners.keySet())) {
                if (!newBundledFiles.contains(oldBundledFile)) {
                    Document document = getOpenedDocument(oldBundledFile, true);
                    if (document != null) {
                        document.removeDocumentListener(listeners.remove(oldBundledFile));
                    }
                }
            }
        }
    }

    private Document getOpenedDocument(String fileName, boolean checkIfOpened) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        if (file != null) {
            if (checkIfOpened) {
                if (isFileOpenedAnywhere(file)) {
                    return FileDocumentManager.getInstance().getDocument(file);
                }
                return null;
            }
            return FileDocumentManager.getInstance().getDocument(file);
        }
        return null;
    }

    private static boolean isFileOpenedAnywhere(VirtualFile file) {
        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        for (Project project : projects) {
            for (VirtualFile openFile : FileEditorManager.getInstance(project).getOpenFiles()) {
                if (Objects.equals(file.getPath(), openFile.getPath())) {
                    return true;
                }
            }
        }
        return false;
    }

    @Override
    public void notifyOfErrors(@NotNull String rootFileName) {
        BundleResult br = bundleResultMap.get(rootFileName);
        Set<BundleError> bundleErrors = br.getBundleErrors();
        if (bundleErrors.isEmpty()) {
            MsgUtils.error(project, br.getExceptionReason(), false);
        } else {
            BundleError be = (BundleError) bundleErrors.toArray()[0];
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(be.getSourceFileName()));
            if (file != null) {
                ASTService astService = ASTService.getInstance(project);
                Node root = astService.getRootNode(file);
                if (root != null) {
                    Node target = root.find(be.getSourcePointer());
                    if (target != null) {
                        Utils.getOpenFileDescriptor(project, file, target).navigate(true);
                        return;
                    }
                }
                new OpenFileDescriptor(project, file).navigate(true);
            }
        }
    }

    @Override
    @SuppressWarnings("unchecked")
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(Settings.ExtRef.APPROVED_HOSTNAMES) && !project.isDisposed()) {
            Object prevValue = prevData.get(Settings.ExtRef.APPROVED_HOSTNAMES);
            if (prevValue instanceof List) {
                Set<String> prevHosts = new HashSet<>((List<String>) prevValue);
                Set<String> hosts = SettingsService.getInstance().getSet(Settings.ExtRef.APPROVED_HOSTNAMES);
                if (!prevHosts.equals(hosts)) {
                    Set<String> removedHosts = new HashSet<>(prevHosts);
                    removedHosts.removeAll(hosts);
                    Set<String> addedHosts = new HashSet<>(hosts);
                    addedHosts.removeAll(prevHosts);
                    Set<String> changedHosts = new HashSet<>(addedHosts);
                    changedHosts.addAll(removedHosts);
                    if (!changedHosts.isEmpty()) {
                        BundleService bundleService = BundleService.getInstance(project);
                        bundleService.scheduleToBundleByHosts(changedHosts);
                    }
                }
            }
        }
    }

    @Override
    public void dispose() {
        super.dispose();
        bundleResultMap.clear();
        bundleListenersMap.clear();
        bundleErrorsMap.clear();
    }
}
