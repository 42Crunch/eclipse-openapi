package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
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
