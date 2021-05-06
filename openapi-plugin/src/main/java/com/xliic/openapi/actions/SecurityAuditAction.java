package com.xliic.openapi.actions;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.resources.IFile;
import org.eclipse.e4.core.services.events.IEventBroker;
import org.eclipse.jface.action.IAction;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.jface.text.ITextSelection;
import org.eclipse.jface.viewers.ISelection;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.IWorkbenchWindowActionDelegate;
import org.eclipse.ui.PlatformUI;
import org.osgi.service.event.EventHandler;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.bundler.ReferenceResolutionException;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.services.IAuditService;
import com.xliic.openapi.settings.AuditConfigEmailDialogWrapper;
import com.xliic.openapi.settings.AuditKeys;
import com.xliic.openapi.utils.OpenAPIUtils;

public class SecurityAuditAction implements IWorkbenchWindowActionDelegate {
	
	public static final String TOPIC_OPENAPI_VALIDATION_CHANGED = "TOPIC_OPENAPI_VALIDATION_CHANGED";
	
	private IWorkbenchWindow window;
	private IEventBroker eventBroker;
	private IAction action;
	private EventHandler eventHandler;
	
	public SecurityAuditAction() {
		action = null;
	}

	@Override
	public void run(IAction action) {
		
		IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
        if (file == null) {
            return;
        }
		
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
	public void selectionChanged(IAction action, ISelection selection) {
		
		this.action = action;
		if (selection instanceof ITextSelection) {
			IFile file = OpenAPIUtils.getSelectedOpenAPIFile();
			action.setEnabled(file != null);
		}
		else {
			action.setEnabled(false);	
		}
	}

	@Override
	public void dispose() {
		eventBroker.unsubscribe(eventHandler);
	}

	@Override
	public void init(IWorkbenchWindow window) {
		this.window = window;
		eventBroker = window.getWorkbench().getService(IEventBroker.class);
		eventHandler = event -> {
			if (action != null) {
				action.setEnabled((boolean) event.getProperty(IEventBroker.DATA));				
			}
		}; 
		eventBroker.subscribe(TOPIC_OPENAPI_VALIDATION_CHANGED, eventHandler);
	}
}
