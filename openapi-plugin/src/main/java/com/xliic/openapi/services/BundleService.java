package com.xliic.openapi.services;

import java.io.File;
import java.util.Collection;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.Disposable;
import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.Messages;
import com.xliic.idea.UIUtil;
import com.xliic.idea.document.Document;
import com.xliic.idea.editor.FileEditorManager;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.project.ProjectLocator;
import com.xliic.idea.project.ProjectView;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.listeners.BundleDocumentListener;
import com.xliic.openapi.parser.pointer.Location;

public class BundleService implements IBundleService, Disposable {

	private final Project project;
	private Map<String, BundleResult> bundleResultMap;
	private Map<String, Map<String, BundleDocumentListener>> bundleListenersMap;
	private Map<String, Set<BundleError>> bundleErrorsMap;

	public BundleService(@NotNull final Project project) {
		this.project = project;
		this.bundleResultMap = new HashMap<>();
		this.bundleListenersMap = new HashMap<>();
		this.bundleErrorsMap = new HashMap<>();
	}

	public static BundleService getInstance(@NotNull Project project) {
		return (BundleService) PlatformUI.getWorkbench().getService(IBundleService.class);
	}

	@Override
	public void bundle(@NotNull String rootFileName) {
		BundleResult result = new BundleResult(rootFileName);
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
		refreshProjectViewTree();
	}

	@Override
	public boolean hasBundles() {
		return bundleResultMap.size() > 0;
	}

	@Override
	public void removeBundle(@NotNull String rootFileName) {
		bundleResultMap.remove(rootFileName);
		removeListeners(rootFileName);
		clearBundleErrorsMap(rootFileName);
		refreshProjectViewTree();
	}

	private void refreshProjectViewTree() {
		UIUtil.invokeLaterIfNeeded(() -> {
			if (project.isDisposed())
				return;
			ProjectView.getInstance(project).refresh();
		});
	}

	private void clearBundleErrorsMap(String rootFileName) {
		for (Map.Entry<String, Set<BundleError>> entry : bundleErrorsMap.entrySet()) {
			entry.getValue().removeIf(error -> rootFileName.equals(error.getRootFileName()));
		}
		bundleErrorsMap.entrySet().removeIf(entry -> entry.getValue().isEmpty());
	}

	@Override
	public boolean hasBundle(@NotNull String rootFileName) {
		return bundleResultMap.containsKey(rootFileName);
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
		for (String bundledFile : bundledFiles) {
			Document document = getOpenedDocument(bundledFile);
			if (document != null) {
				BundleDocumentListener listener = new BundleDocumentListener(project, rootFileName);
				listeners.put(bundledFile, listener);
				document.addDocumentListener(listener);
			}
		}
	}

	private void removeListeners(String rootFileName) {
		final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
		for (String bundledFile : Set.copyOf(listeners.keySet())) {
			Document document = getOpenedDocument(bundledFile);
			if (document != null) {
				document.removeDocumentListener(listeners.remove(bundledFile));
			}
		}
		bundleListenersMap.remove(rootFileName);
	}

	private void updateListeners(String rootFileName, Set<String> newBundledFiles) {
		final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFileName);
		// New bundled file appeared => add listener
		for (String newBundledFile : newBundledFiles) {
			if (!listeners.containsKey(newBundledFile)) {
				Document document = getOpenedDocument(newBundledFile);
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
				Document document = getOpenedDocument(oldBundledFile);
				if (document != null) {
					document.removeDocumentListener(listeners.remove(oldBundledFile));
				}
			}
		}
	}

	@Override
	public void addBundleDocumentListener(@NotNull VirtualFile file) {
		for (String rootFile : bundleResultMap.keySet()) {
			final String bundledFile = file.getPath();
			if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
				final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
				if (!listeners.containsKey(bundledFile)) {
					Document document = getOpenedDocument(bundledFile);
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
		for (String rootFile : bundleResultMap.keySet()) {
			final String bundledFile = file.getPath();
			if (bundleResultMap.get(rootFile).getBundledFiles().contains(bundledFile)) {
				final Map<String, BundleDocumentListener> listeners = bundleListenersMap.get(rootFile);
				if (listeners.containsKey(bundledFile)) {
					Document document = getOpenedDocument(bundledFile);
					if (document != null) {
						document.removeDocumentListener(listeners.remove(bundledFile));
					}
				}
			}
		}
	}

	private Document getOpenedDocument(String fileName) {
		VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
		if (file != null && isFileOpenedAnywhere(file)) {
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
			ParserService parserService = ParserService.getInstance(project);
			String text = OpenApiUtils.getTextFromFile(be.getSourceFileName());
			OpenApiFileType fileType = OpenApiUtils.getFileType(be.getSourceFileName());
			Map<String, Location> pointerToLocationMap = parserService.parsePointerToLocationMap(text, fileType);
			Location location = pointerToLocationMap.get(be.getSourcePointer());
			VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(be.getSourceFileName()));
			if (file != null) {
				OpenApiUtils.getOpenFileDescriptor(project, file, location).navigate(true);
			}
		}
	}

	@Override
	public void dispose() {
		bundleResultMap = null;
		for (String rootFile : Set.copyOf(bundleListenersMap.keySet())) {
			removeListeners(rootFile);
		}
		bundleListenersMap = null;
		bundleErrorsMap = null;
	}
}
