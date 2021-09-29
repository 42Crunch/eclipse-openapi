package com.xliic.core.vfs;

import java.util.List;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IResourceChangeEvent;
import org.eclipse.core.resources.IResourceChangeListener;
import org.eclipse.core.resources.IResourceDelta;
import org.eclipse.core.resources.IResourceDeltaVisitor;
import org.eclipse.core.runtime.CoreException;
import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

public abstract class BulkFileListener implements IResourceChangeListener {

	private IFile fromFile;
	private IFile toFile;

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
					if ((delta.getMovedFromPath() == null) && (delta.getMovedToPath() != null)) {
						fromFile = (IFile) delta.getResource();
					}
					if ((delta.getMovedFromPath() != null) && (delta.getMovedToPath() == null)) {
						toFile = (IFile) delta.getResource();
					}
				}
				return !refactored();
			}
		});
	}

	private void clear() {
		fromFile = null;
		toFile = null;
	}

	private boolean refactored() {
		return (fromFile != null) && (toFile != null);
	}

	private void update(IFile newFile, IFile oldFile) {
		after(List.of(new VFilePropertyChangeEvent(new VirtualFile(newFile), new VirtualFile(oldFile))));
	}

	protected abstract void after(@NotNull List<? extends VFileEvent> events);
}