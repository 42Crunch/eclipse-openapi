package com.xliic.openapi.actions;

import static com.xliic.openapi.OpenApiUtils.isToolWindowRegistered;

import org.apache.commons.lang.StringUtils;

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.ToolWindowId;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.settings.AuditConfigEmailDialogWrapper;
import com.xliic.openapi.settings.AuditKeys;

public class SecurityAuditAction extends AnAction implements DumbAware {

	@Override
	public void update(AnActionEvent event) {

		Project project = event.getProject();
		if ((project == null) || !isToolWindowRegistered(project, ToolWindowId.OPEN_API_REPORT)
				|| !isToolWindowRegistered(project, ToolWindowId.OPEN_API_HTML_REPORT)) {
			event.getPresentation().setEnabled(false);
			return;
		}
		DataService dataService = DataService.getInstance(project);
		VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		if (file == null || !dataService.getParserData(file.getPath()).isValid()) {
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
		String token = PropertiesComponent.getInstance().getValue(AuditKeys.TOKEN);
		if (StringUtils.isEmpty(token)) {
			new AuditConfigEmailDialogWrapper(project, file).showAndGet();
		} else {
			AuditService auditService = AuditService.getInstance(project);
			auditService.sendAuditRequest(token, file.getPath(), new AuditActionCallback(project, file));
		}
	}
}