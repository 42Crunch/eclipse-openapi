package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.event.DocumentEvent;
import com.xliic.core.editor.event.DocumentListener;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.services.BundleService;

public class BundleDocumentListener extends DocumentListener {

	private final String rootFileName;
	private final BundleService bundleService;
	private final FileDocumentManager fileDocumentManager;

	public BundleDocumentListener(Project project, String rootFileName) {
		this.rootFileName = rootFileName;
		this.bundleService = BundleService.getInstance(project);
		this.fileDocumentManager = FileDocumentManager.getInstance();
	}

	@Override
	public void beforeDocumentChange(@NotNull DocumentEvent event) {
	}

	@Override
	public void documentChanged(@NotNull DocumentEvent event) {
		VirtualFile file = fileDocumentManager.getFile(event.getDocument());
		bundleService.scheduleToBundle(rootFileName, (file == null) ? null : file.getPath());
	}
}
