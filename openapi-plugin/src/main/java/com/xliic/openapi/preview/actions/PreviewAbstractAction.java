package com.xliic.openapi.preview.actions;

import java.net.MalformedURLException;
import java.util.Collection;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.BundleResult;
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
        Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
        if (projects.isEmpty() || !PreviewService.getInstance().isRunning()) {
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
		BundleResult bundleResult = bundleService.getBundle(rootFileName);
		if (bundleResult == null) {
			return;
		}
		if (!bundleResult.isBundleComplete()) {
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
