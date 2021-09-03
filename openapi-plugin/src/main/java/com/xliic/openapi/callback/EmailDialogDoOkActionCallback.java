package com.xliic.openapi.callback;

import org.jetbrains.annotations.NotNull;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Display;
import org.eclipse.swt.widgets.Shell;

import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.settings.AuditConfigTokenDialogWrapper;

public class EmailDialogDoOkActionCallback extends ActionCallback {

    private final IFile file;
    private final Shell shell;

    public EmailDialogDoOkActionCallback(@NotNull Shell shell, @NotNull IFile file) {
        this.file = file;
        this.shell = shell;
    }

    @Override
    public void setDone() {
    	Display.getDefault().asyncExec(new Runnable() {
    	    public void run() {
                new AuditConfigTokenDialogWrapper(shell, file).open();
    	    }
    	});
    }

    @Override
    public void setRejected() {
    	Display.getDefault().asyncExec(new Runnable() {
    	    public void run() {
    	    	MessageDialog.openError(shell, OpenApiBundle.message("openapi.error.title"), getError());
            }
        });
    }
}
