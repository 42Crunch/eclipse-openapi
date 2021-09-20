package com.xliic.openapi.actions;

import java.net.MalformedURLException;

import com.xliic.idea.DumbAware;
import com.xliic.idea.action.AnAction;
import com.xliic.idea.action.AnActionEvent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.PreviewService;

public abstract class PreviewAbstractAction extends AnAction implements DumbAware {

	@Override
	public void update(AnActionEvent event) {

		Project project = event.getProject();
		if (project == null) {
			event.getPresentation().setEnabled(false);
			return;
		}
		DataService dataService = DataService.getInstance(project);
		VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		if (file == null || !dataService.getParserData(file.getPath()).isValid()) {
			event.getPresentation().setEnabled(false);
			return;
		}
		if (!PreviewService.getInstance().isRunning()) {
			event.getPresentation().setEnabled(false);
			return;
		}
		event.getPresentation().setEnabled(true);
	}

	@Override
	public void actionPerformed(AnActionEvent e) {

		Project project = e.getProject();
		if (project == null) {
			return;
		}
		VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		if (file == null) {
			return;
		}
		String rootFileName = file.getPath();
		BundleService bundleService = BundleService.getInstance(project);
		if (!bundleService.hasBundle(rootFileName)) {
			return;
		}
		if (!bundleService.getBundle(rootFileName).isBundleComplete()) {
			bundleService.notifyOfErrors(rootFileName);
			return;
		}
		try {
			browse(project, file);
		} catch (MalformedURLException exception) {
			exception.printStackTrace();
		}
	}

	public abstract void browse(Project project, VirtualFile file) throws MalformedURLException;
}
