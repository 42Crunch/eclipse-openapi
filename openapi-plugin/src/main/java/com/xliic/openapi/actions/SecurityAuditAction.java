package com.xliic.openapi.actions;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.resources.IFile;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.bundler.ReferenceResolutionException;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.idea.DumbAware;
import com.xliic.idea.action.AnAction;
import com.xliic.idea.action.AnActionEvent;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.IAuditService;
import com.xliic.openapi.settings.AuditConfigEmailDialogWrapper;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.utils.OpenAPIUtils;

public class SecurityAuditAction extends AnAction implements DumbAware {

	@Override
	public void actionPerformed(AnActionEvent event) {
		
		IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
		IWorkbench workbench = PlatformUI.getWorkbench();
        IWorkbenchWindow window = workbench.getActiveWorkbenchWindow();
		
        IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
        String token = store.getString(AuditKeys.TOKEN);
        if (StringUtils.isEmpty(token)) {
        	new AuditConfigEmailDialogWrapper(window.getShell(), file).open();
        }
        else {
            OpenAPIBundler bundler;
            try {
                bundler = new OpenAPIBundler(file);
            } 
            catch (ReferenceResolutionException re) {
            	MessageDialog.openError(window.getShell(), OpenApiBundle.message("openapi.error.title"),
            			"Error in file " + re.sourceFile + " for pointer " + re.sourcePointer);
                return;
            }
            catch (Exception exception) {
            	MessageDialog.openError(window.getShell(), OpenApiBundle.message("openapi.error.title"), exception.getMessage());
                return;
            }
            IAuditService auditService = (IAuditService) PlatformUI.getWorkbench().getService(IAuditService.class);
            auditService.sendAuditRequest(token, bundler, new AuditActionCallback(window.getShell(), file));
        }
	}

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
        event.getPresentation().setEnabled(true);
	}
}
