package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.PlatformUI;

import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.bundler.OpenAPIBundler;
import com.xliic.openapi.services.IAuditService;

public class TokenDialogDoOkActionCallback extends ActionCallback {

    private final Shell shell;
    private final String token;
    private final IFile file;

    public TokenDialogDoOkActionCallback(@NotNull Shell shell, @NotNull IFile file, @NotNull String token) {
        this.shell = shell;
        this.token = token;
        this.file = file;
    }

    @Override
    public void setDone() {
        OpenAPIBundler bundler;
        try {
            bundler = new OpenAPIBundler(file);
        }
        catch (Exception ioException) {
        	MessageDialog.openError(shell, OpenApiBundle.message("openapi.error.title"), ioException.getMessage());	
            return;
        }
        IAuditService auditService = (IAuditService) PlatformUI.getWorkbench().getService(IAuditService.class);
        auditService.sendAuditRequest(token, bundler, new AuditActionCallback(shell, file));
    }

	@Override
	protected void setRejected() {}
}
