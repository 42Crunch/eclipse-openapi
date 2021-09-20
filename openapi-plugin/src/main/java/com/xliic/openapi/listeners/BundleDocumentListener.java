package com.xliic.openapi.listeners;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.UIUtil;
import com.xliic.idea.document.DocumentEvent;
import com.xliic.idea.document.DocumentListener;
import com.xliic.idea.project.Project;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.PreviewService;

public class BundleDocumentListener extends DocumentListener {

	private final Project project;
	private final String rootFileName;

	public BundleDocumentListener(Project project, String rootFileName) {
		this.project = project;
		this.rootFileName = rootFileName;
	}

	@Override
	public void beforeDocumentChange(@NotNull DocumentEvent event) {
	}

	@Override
	public void documentChanged(@NotNull DocumentEvent event) {
		BundleService bundleService = BundleService.getInstance(project);
		try {
			bundleService.bundle(rootFileName);
			UIUtil.invokeLaterIfNeeded(() -> {
				String text = bundleService.getBundle(rootFileName).getJsonText();
				PreviewService.getInstance().sendText(project.getLocationHash(), rootFileName, text);
			});
		} catch (Exception exception) {
			exception.printStackTrace();
		}
	}
}
