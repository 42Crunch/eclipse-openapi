package com.xliic.core.vfs;

import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.IPath;
import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeHighlighting.HighlightingManager;
import com.xliic.core.project.Project;

public abstract class BulkFileListener implements IResourceChangeListener {

	private IFile fromFile;
	private IFile toFile;
	private Set<IFile> removedFiles = new HashSet<>();
	protected final Project project;
	
	public BulkFileListener(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void resourceChanged(IResourceChangeEvent event) {
		IResourceDelta delta = event.getDelta();
		if (delta.getKind() != IResourceDelta.CHANGED) {
			return;
		}
		clear();
		try {
			visitDelta(delta);
			if (refactored()) {
				Display.getDefault().asyncExec(new Runnable() {
					@Override
					public void run() {
						update(toFile, fromFile);
						clear();
					}
				});
			} else if (!removedFiles.isEmpty()) {
				Display.getDefault().asyncExec(new Runnable() {
					@Override
					public void run() {
						delete(removedFiles.stream().map((file) -> new VirtualFile(file)).collect(Collectors.toSet()));
						clear();
					}
				});
			}
		} catch (CoreException e) {
			clear();
		}
	}

	private void visitDelta(IResourceDelta delta) throws CoreException {
		delta.accept(new IResourceDeltaVisitor() {
			@Override
			public boolean visit(IResourceDelta delta) throws CoreException {
				if (delta.getResource() instanceof IFile) {
					IPath from = delta.getMovedFromPath();
					IPath to = delta.getMovedToPath();
					if (from == null && to != null) {
						fromFile = (IFile) delta.getResource();
					} else if (from != null && to == null) {
						toFile = (IFile) delta.getResource();
					} else if (delta.getKind() == IResourceDelta.REMOVED && from == null && to == null) {
						IFile file = (IFile) delta.getResource();
						if (file.getProject().getLocation() != null) {
							removedFiles.add((IFile) delta.getResource());
						}
					}
				}
				return !refactored();
			}
		});
	}

	private void clear() {
		fromFile = null;
		toFile = null;
		removedFiles.clear();
	}

	private boolean refactored() {
		return (fromFile != null) && (toFile != null);
	}

	private void update(IFile newFile, IFile oldFile) {
		after(List.of(new VFilePropertyChangeEvent(new VirtualFile(newFile), new VirtualFile(oldFile))));
		HighlightingManager.getInstance(project).update(newFile, oldFile);
	}

	protected abstract void after(@NotNull List<? extends VFileEvent> events);
	
	protected abstract void delete(@NotNull Set<VirtualFile> files);
}