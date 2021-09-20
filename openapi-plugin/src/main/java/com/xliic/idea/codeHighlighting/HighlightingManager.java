package com.xliic.idea.codeHighlighting;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.core.resources.IMarker;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IEditorReference;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPage;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PartInitException;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.codeInsight.HighlightInfo;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.bundler.BundleHighlightingPassFactory;
import com.xliic.openapi.report.ReportHighlightingPassFactory;

public class HighlightingManager extends TextEditorHighlightingPassRegistrar implements Runnable {

	private static HighlightingManager manager;

	private final Project project;
	private final ScheduledFuture<?> scheduledFuture;
	private final List<TextEditorHighlightingPassFactory> factories;

	private final Map<VirtualFile, Set<Marker>> markers;
	private final Map<IMarker, Marker> markersBinding;

	private HighlightingManager(@NotNull Project project) {
		this.project = project;
		factories = new LinkedList<>();
		markers = new HashMap<>();
		markersBinding = new HashMap<>();
		new BundleHighlightingPassFactory().registerHighlightingPassFactory(this, project);
		new ReportHighlightingPassFactory().registerHighlightingPassFactory(this, project);
		ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);
		scheduledFuture = scheduledExecutorService.scheduleWithFixedDelay(this, 1000, 1000, TimeUnit.MILLISECONDS);
	}

	public static HighlightingManager getInstance(@NotNull Project project) {
		if (manager == null) {
			manager = new HighlightingManager(project);
		}
		return manager;
	}

	public Marker getMarker(IMarker marker) {
		return markersBinding.get(marker);
	}

	public void dispose() {
		scheduledFuture.cancel(true);
		factories.clear();
		markers.clear();
		markersBinding.clear();
	}

	@Override
	public int registerTextEditorHighlightingPass(@NotNull TextEditorHighlightingPassFactory factory,
			final int[] runAfterCompletionOf, int[] runAfterStartingOf, boolean runIntentionsPassAfter,
			int forcedPassId) {
		factories.add(factory);
		return -1;
	}

	@Override
	public void run() {
		synchronized (this) {
			IWorkbench workbench = PlatformUI.getWorkbench();
			for (IWorkbenchWindow window : workbench.getWorkbenchWindows()) {
				for (IWorkbenchPage page : window.getPages()) {
					for (IEditorReference editor : page.getEditorReferences()) {
						try {
							IEditorInput input = editor.getEditorInput();
							if (input instanceof IFileEditorInput) {
								IFileEditorInput fileInput = (IFileEditorInput) input;
								if (isFileEditorActive(page, fileInput)) {
									Set<Marker> newMarkers = new HashSet<>();
									PsiFile psiFile = new PsiFile(project, new VirtualFile(fileInput.getFile()));
									Editor textEditor = new Editor(project, fileInput);
									for (TextEditorHighlightingPassFactory factory : factories) {
										TextEditorHighlightingPass hp = factory.createHighlightingPass(psiFile,
												textEditor);
										if (hp != null) {
											hp.doCollectInformation(null);
											newMarkers.addAll(
													convertToMarkers(textEditor, psiFile, hp.getInformationToEditor()));
										}
									}
									updateMarkers(psiFile.getVirtualFile(), newMarkers);
								}
							}
						} catch (PartInitException e) {
						}
					}
				}
			}
		}
	}

	public void close(IFileEditorInput fileInput) {
		synchronized (this) {
			VirtualFile file = new VirtualFile(fileInput.getFile());
			Set<Marker> fileMarkers = markers.get(file);
			if ((fileMarkers != null) && !fileMarkers.isEmpty()) {
				Set<Marker> newMarkers = new HashSet<>();
				PsiFile psiFile = new PsiFile(project, new VirtualFile(fileInput.getFile()));
				Editor textEditor = new Editor(project, fileInput);
				for (TextEditorHighlightingPassFactory factory : factories) {
					TextEditorHighlightingPass hp = factory.createHighlightingPass(psiFile, textEditor);
					if (hp != null) {
						hp.doCollectInformation(null);
						newMarkers.addAll(convertToMarkers(textEditor, psiFile, hp.getInformationToEditor()));
					}
				}
				updateMarkers(psiFile.getVirtualFile(), newMarkers);
			}
		}
	}

	private boolean isFileEditorActive(IWorkbenchPage page, IFileEditorInput fileInput) {
		IEditorPart editor = page.getActiveEditor();
		if (editor != null) {
			IFileEditorInput activeFileInput = (IFileEditorInput) editor.getEditorInput();
			return fileInput.equals(activeFileInput);
		}
		return false;
	}

	private Set<Marker> convertToMarkers(Editor editor, PsiFile psiFile, List<HighlightInfo> highlights) {
		Set<Marker> markers = new HashSet<>();
		for (HighlightInfo info : highlights) {
			markers.add(new Marker(editor, psiFile, info));
		}
		return markers;
	}

	private void updateMarkers(VirtualFile file, Set<Marker> newMarkers) {
		Set<Marker> myMarkers = markers.get(file);
		if (myMarkers == null) {
			markers.put(file, new HashSet<>());
			myMarkers = markers.get(file);
		}
		if (newMarkers.isEmpty()) {
			if (myMarkers.isEmpty()) {
				return;
			}
			for (Marker myMarker : myMarkers) {
				myMarker.dispose(markersBinding);
			}
			myMarkers.clear();
		} else {
			// Dispose obsolete markers
			Set<Marker> markersToRemove = new HashSet<>();
			for (Marker myMarker : myMarkers) {
				if (!newMarkers.contains(myMarker)) {
					myMarker.dispose(markersBinding);
					markersToRemove.add(myMarker);
				}
			}
			myMarkers.removeAll(markersToRemove);
			// Create new markers
			for (Marker newMarker : newMarkers) {
				if (!myMarkers.contains(newMarker)) {
					newMarker.activate(markersBinding);
					myMarkers.add(newMarker);
				}
			}
		}
		if (myMarkers.isEmpty()) {
			markers.remove(file);
		}
	}
}
