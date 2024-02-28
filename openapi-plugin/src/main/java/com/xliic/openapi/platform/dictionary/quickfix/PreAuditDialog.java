package com.xliic.openapi.platform.dictionary.quickfix;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.dialogs.TrayDialog;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.swt.widgets.Text;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.util.EclipseUtil;

public class PreAuditDialog extends TrayDialog {

    private static final String MESSAGE = "Found Data Dictionary mismatch, update the document with Data Dictionary properties?";

    private static final String YES = "Update";
    private static final String NO = "Don't update";

    public static final int OK_EXIT_CODE = 0;
    public static final int NO_EXIT_CODE = 2;

    public PreAuditDialog(@NotNull Project project) {
        super(EclipseUtil.getShell());
    }

    @Override
    protected Control createDialogArea(Composite parent) {
        parent = (Composite) super.createDialogArea(parent);
        GridLayout layout = new GridLayout();
        layout.numColumns = 1;
        layout.marginHeight = 10;
        layout.marginWidth = 10;
        parent.setLayout(layout);
        create(parent);
        setTitle("Security Audit");
        return parent;
    }

    public void show() {
        open();
    }

    public int getExitCode() {
        return getReturnCode();
    }

    private void setTitle(String title) {
        Shell shell = getShell();
        if ((shell != null) && !shell.isDisposed()) {
            shell.setText(title);
        }
    }

    private void create(Composite parent) {
        GridData data = new GridData(GridData.HORIZONTAL_ALIGN_CENTER | GridData.VERTICAL_ALIGN_CENTER);
        parent.setLayoutData(data);
        Text textArea = new Text(parent, SWT.SINGLE | SWT.READ_ONLY | SWT.V_SCROLL | SWT.WRAP);
        textArea.setText(MESSAGE);
        textArea.setEditable(false);
        textArea.setBackground(parent.getBackground());
        textArea.clearSelection();
    }

    @Override
    protected void createButtonsForButtonBar(Composite parent) {
        GridData data = new GridData(GridData.HORIZONTAL_ALIGN_CENTER | GridData.VERTICAL_ALIGN_CENTER);
        parent.setLayoutData(data);
        createButton(parent, IDialogConstants.CLIENT_ID + 1, YES, true);
        createButton(parent, IDialogConstants.CLIENT_ID + 2, NO, false);
        createButton(parent, IDialogConstants.CLIENT_ID + 5, "Cancel", false);
    }

    @Override
    protected void buttonPressed(int buttonId) {
        setReturnCode(getCode(buttonId));
        close();
    }

    @Override
    public boolean isHelpAvailable() {
        return false;
    }

    private int getCode(int buttonId) {
        switch (buttonId) {
        case IDialogConstants.CLIENT_ID + 1:
            return OK_EXIT_CODE;
        case IDialogConstants.CLIENT_ID + 2:
            return NO_EXIT_CODE;
        default:
            return DialogWrapper.CANCEL_EXIT_CODE;
        }
    }
}
