package com.xliic.core.codeHighlighting;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.ListIterator;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.core.resources.IMarker;
import org.eclipse.jface.text.source.IAnnotationModel;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.texteditor.MarkerAnnotation;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.HighlightInfo;
import com.xliic.core.codeInsight.IntentionAction;
import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleHighlightingPassFactory;
import com.xliic.openapi.report.ReportHighlightingPassFactory;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;

public class HighlightingManager extends TextEditorHighlightingPassRegistrar implements Runnable {

	private static HighlightingManager manager;

	private final Project project;
	private final ScheduledFuture<?> scheduledFuture;
	private final List<TextEditorHighlightingPassFactory> factories;

	private final Map<VirtualFile, Set<Marker>> markers;
	private final Map<IMarker, Marker> markersBinding;

	private final AuditService auditService;
	private final BundleService bundleService;

	private HighlightingManager(@NotNull Project project) {
		this.project = project;
		factories = new LinkedList<>();
		markers = new HashMap<>();
		markersBinding = new HashMap<>();
		new BundleHighlightingPassFactory().registerHighlightingPassFactory(this, project);
		new ReportHighlightingPassFactory().registerHighlightingPassFactory(this, project);
		ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);
		scheduledFuture = scheduledExecutorService.scheduleWithFixedDelay(this, 1000, 1000, TimeUnit.MILLISECONDS);
		auditService = AuditService.getInstance(project);
		bundleService = BundleService.getInstance(project);
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
		try {
			safeRun();
		} catch (Throwable t) {
			t.printStackTrace();
		}
	}

	private void safeRun() {
		synchronized (this) {
			for (IEditorInput input : EclipseUtil.getAllSupportedActiveEditorInputs()) {
				Set<Marker> newMarkers = new HashSet<>();
				Map<String, List<IntentionAction>> newFixActions = new HashMap<>();
				PsiFile psiFile = new PsiFile(project, EclipseUtil.getVirtualFile(input));
				Editor editor = new Editor(project, input);
				for (TextEditorHighlightingPassFactory factory : factories) {
					TextEditorHighlightingPass hp = factory.createHighlightingPass(psiFile, editor);
					if (hp != null) {
						hp.doCollectInformation(null);
						List<HighlightInfo> infos = hp.getInformationToEditor();
						if ((infos != null) && !infos.isEmpty()) {
							newMarkers.addAll(convertToMarkers(editor, psiFile, infos));
							Map<String, List<IntentionAction>> actions = hp.getActionsToEditor();
							if ((actions != null) && !actions.isEmpty()) {
								mergeActions(actions, newFixActions);
							}
						}
					}
				}
				updateMarkers(editor, psiFile.getVirtualFile(), newMarkers, newFixActions);
			}		
			for (Map.Entry<VirtualFile, Set<Marker>> entry : markers.entrySet()) {
				String fileName = entry.getKey().getPath();
				if (!auditService.isFileBeingAudited(fileName) && !bundleService.isFileBeingBundled(fileName)) {
					for (Marker myMarker : entry.getValue()) {
						myMarker.dispose(markersBinding);
					}
					entry.getValue().clear();
				}
			}
			markers.values().removeIf(value -> value.isEmpty());
		}
	}

	public void close(VirtualFile file) {
		synchronized (this) {
			Set<Marker> fileMarkers = markers.remove(file);
			if ((fileMarkers != null) && !fileMarkers.isEmpty()) {
				for (Marker marker : fileMarkers) {
					if (marker.exists()) {
						marker.dispose(markersBinding);
					}
				}
			}
		}
	}

	private Set<Marker> convertToMarkers(Editor editor, PsiFile psiFile, List<HighlightInfo> highlights) {
		Set<Marker> markers = new HashSet<>();
		for (HighlightInfo info : highlights) {
			markers.add(new Marker(editor, psiFile, info));
		}
		return markers;
	}

	private static void mergeActions(Map<String, List<IntentionAction>> from, Map<String, List<IntentionAction>> to) {
		for (Map.Entry<String, List<IntentionAction>> entry : from.entrySet()) {
			String key = entry.getKey();
			if (to.containsKey(key)) {
				to.get(key).addAll(entry.getValue());
			} else {
				to.put(key, entry.getValue());
			}
		}
	}

	private void updateMarkers(Editor editor, VirtualFile file, Set<Marker> newMarkers,
			Map<String, List<IntentionAction>> actions) {
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
		} else {
			updateIntentionActions(editor, myMarkers, actions);
		}
	}

	private void updateIntentionActions(Editor editor, Set<Marker> markers, Map<String, List<IntentionAction>> actions) {
		for (Marker marker : markers) {
			marker.clearActions();
		}
		IAnnotationModel annotationModel = editor.getModel();
		if (annotationModel != null) {
			annotationModel.getAnnotationIterator().forEachRemaining(annotation -> {
				if (annotation instanceof MarkerAnnotation) {
					Marker marker = markersBinding.get(((MarkerAnnotation) annotation).getMarker());
					if (marker != null) {
						List<IntentionAction> markerActionsList = actions.get(marker.getPointer());
						if (markerActionsList != null) {
							ListIterator<IntentionAction> iter = markerActionsList.listIterator();
							while (iter.hasNext()) {
								IntentionAction action = iter.next();
								if (action.isResponsibleFor(marker.getPointer(), marker.getMessage())) {
									marker.addAction(action);
									iter.remove();
								}
							}
						}
					}
				}
			});
		}
	}
}
