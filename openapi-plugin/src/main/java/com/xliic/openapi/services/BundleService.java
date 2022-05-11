package com.xliic.openapi.services;

import java.io.File;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.concurrency.JobScheduler;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.ide.ProjectView;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.Computable;
import com.xliic.core.util.UIUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.listeners.BundleDocumentListener;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.api.IBundleService;

public class BundleService implements IBundleService, Runnable, Disposable {

	private static final int DELAY = 1000;
	private static final int INIT_DELAY = 1000;

	private final Project project;
	private final Map<String, BundleResult> bundleResultMap;
	private final Map<String, Map<String, BundleDocumentListener>> bundleListenersMap;
	private final Map<String, Set<BundleError>> bundleErrorsMap;
	private final Map<String, Set<String>> filesToBundle;
	private final Set<String> filesToRemove;
	private final ScheduledFuture<?> scheduledFuture;

	public BundleService(@NotNull final Project project) {
		this.project = project;
		bundleResultMap = new ConcurrentHashMap<>();
		bundleListenersMap = new HashMap<>();
		bundleErrorsMap = new HashMap<>();
		filesToBundle = new HashMap<>();
		filesToRemove = new HashSet<>();
		ScheduledExecutorService scheduler = JobScheduler.getScheduler();
		scheduledFuture = scheduler.scheduleWithFixedDelay(this, INIT_DELAY, DELAY, TimeUnit.MILLISECONDS);
	}

	public static BundleService getInstance(@NotNull Project project) {
		return (BundleService) PlatformUI.getWorkbench().getService(IBundleService.class);
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
	public void run() {
		try {
			safeRun();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	private void safeRun() {
		if (project.isDisposed()) {
			return;
		}
		// Synchronized block must be as fast as possible
		Map<String, Set<String>> safeFilesToBundle;
		Set<String> safeFilesToRemove;
		synchronized (this) {
			safeFilesToBundle = new HashMap<>(filesToBundle);
			safeFilesToRemove = new HashSet<>(filesToRemove);
			filesToBundle.clear();
			filesToRemove.clear();
		}
		// Remove files first, cancel further re-bundling
		for (String rootFileName : safeFilesToRemove) {
			try {
				removeBundle(rootFileName);
			} catch (Exception ignored) {
			} finally {
				safeFilesToBundle.remove(rootFileName);
			}
		}
		ASTService astService = ASTService.getInstance(project);
		for (Map.Entry<String, Set<String>> entry : safeFilesToBundle.entrySet()) {
			try {
				bundle(entry.getKey());
			} catch (Exception ignored) {
			} finally {
				// Changed file is a part of the bundle and may not have OAS
				// Thus AST service does not know about it, just inform here
				Set<String> changes = entry.getValue();
				if (!changes.isEmpty()) {
					astService.bundleDocumentChanged(changes);
				}
			}
		}
	}

	@Override
	public void scheduleToBundle(@NotNull String rootFileName, String changedFileName) {
		synchronized (this) {
			if (filesToBundle.containsKey(rootFileName)) {
				if (changedFileName != null) {
					filesToBundle.get(rootFileName).add(changedFileName);
				}
			} else {
				Set<String> changes = new HashSet<>();
				if (changedFileName != null) {
					changes.add(changedFileName);
				}
				filesToBundle.put(rootFileName, changes);
			}
		}
	}

	private void bundle(@NotNull String rootFileName) {
		BundleResult result = new BundleResult(rootFileName);
		String text = result.getJsonText();
		ApplicationManager.getApplication().runReadAction((Computable<Void>) () -> {
			if (bundleResultMap.containsKey(rootFileName)) {
				updateListeners(rootFileName, result.getBundledFiles());
				clearBundleErrorsMap(rootFileName);
			} else {
				bundleListenersMap.put(rootFileName, new HashMap<>());
				addListeners(rootFileName, result.getBundledFiles());
			}
			bundleResultMap.put(rootFileName, result);
			if (!result.isBundleComplete()) {
				for (BundleError error : result.getBundleErrors()) {
					if (!bundleErrorsMap.containsKey(error.getSourceFileName())) {
						bundleErrorsMap.put(error.getSourceFileName(), new HashSet<>());
					}
					bundleErrorsMap.get(error.getSourceFileName()).add(error);
				}
			}
			UIUtil.invokeLaterIfNeeded(() -> {
				if (!project.isDisposed()) {
					ProjectView.getInstance(project).refresh();
					PreviewService.getInstance().sendText(project.getLocationHash(), rootFileName, text);
				}
			});
			return null;
		});
	}

	@Override
	public boolean hasBundles() {
		return bundleResultMap.size() > 0;
	}

	@Override
	public void scheduleToRemoveBundle(@NotNull String rootFileName) {
		synchronized (this) {
			filesToRemove.add(rootFileName);
		}
	}

	private void removeBundle(@NotNull String rootFileName) {
		bundleResultMap.remove(rootFileName);
		ApplicationManager.getApplication().invokeLater(() -> {
			removeListeners(rootFileName);
		});
		clearBundleErrorsMap(rootFileName);
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
				Document document = getOpenedDocument(bundledFile, true);
				if (document != null) {
					BundleDocumentListener listener = new BundleDocumentListener(project, rootFileName);
					listeners.put(bundledFile, listener);
					document.addDocumentListener(listener);
				}
			}
		}
	}

	private void removeListeners(String rootFileName) {
		final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
		if (listeners != null) {
			for (String bundledFile : Set.copyOf(listeners.keySet())) {
				Document document = getOpenedDocument(bundledFile, false);
				if (document != null) {
					document.removeDocumentListener(listeners.remove(bundledFile));
				}
			}
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

	@Override
	public void addBundleDocumentListener(@NotNull VirtualFile file) {
		final String bundledFile = file.getPath();
		Set<String> rootFileNames = new HashSet<>(bundleResultMap.keySet());
		rootFileNames.remove(bundledFile);
		for (String rootFile : rootFileNames) {
			if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
				final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
				if ((listeners != null) && !listeners.containsKey(bundledFile)) {
					Document document = getOpenedDocument(bundledFile, false);
					if (document != null) {
						BundleDocumentListener listener = new BundleDocumentListener(project, rootFile);
						listeners.put(bundledFile, listener);
						document.addDocumentListener(listener);
					}
				}
			}
		}
	}

	@Override
	public void removeBundleDocumentListener(@NotNull VirtualFile file) {
		final String bundledFile = file.getPath();
		if (bundleResultMap.containsKey(bundledFile)) {
			removeListeners(bundledFile);
		}
		Set<String> rootFileNames = new HashSet<>(bundleResultMap.keySet());
		rootFileNames.remove(bundledFile);
		for (String rootFile : rootFileNames) {
			if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
				final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
				if ((listeners != null) && listeners.containsKey(bundledFile)) {
					Document document = getOpenedDocument(bundledFile, false);
					if (document != null) {
						document.removeDocumentListener(listeners.remove(bundledFile));
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
			Messages.showMessageDialog(project, br.getExceptionReason(), OpenApiBundle.message("openapi.error.title"),
					Messages.getErrorIcon());
		} else {
			BundleError be = (BundleError) bundleErrors.toArray()[0];
			VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(be.getSourceFileName()));
			if (file != null) {
				ASTService astService = ASTService.getInstance(project);
                Node root = astService.getRootNode(file);
                if (root != null) {
                    Node target = root.find(be.getSourcePointer());
                    if (target != null) {
                        OpenApiUtils.getOpenFileDescriptor(project, file, target.getRange()).navigate(true);
                        return;
                    }
                }
                new OpenFileDescriptor(project, file).navigate(true);
			}
		}
	}

	@Override
	public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {
		if (bundleResultMap.containsKey(oldFileName)) {
			scheduleToRemoveBundle(oldFileName);
			scheduleToBundle(newFile.getPath(), null);
		}
	}

	@Override
	public void dispose() {
		scheduledFuture.cancel(true);
		bundleResultMap.clear();
		bundleListenersMap.clear();
		bundleErrorsMap.clear();
		filesToBundle.clear();
		filesToRemove.clear();
	}
}
