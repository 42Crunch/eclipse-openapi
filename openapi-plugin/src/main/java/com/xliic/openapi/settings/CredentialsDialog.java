package com.xliic.openapi.settings;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.dialogs.TrayDialog;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Shell;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.util.EclipseUtil;

public class CredentialsDialog extends TrayDialog {

    private static final String MESSAGE = "42Crunch Audit runs 300+ checks for security best practices in your API. " +
            "Use your existing platform credentials or provide an email to receive a freemium token.";

    private static final String EXISTING_USER = "I have an existing 42Crunch Platform account";
    private static final String NEW_USER = "I'm a new user, please email me the token";

    public static final int EXISTING_USER_CODE = 2;
    public static final int NEW_USER_CODE = 3;

    public CredentialsDialog(@NotNull Project project) {
        super(EclipseUtil.getShell());
    }

    @Override
    protected Control createDialogArea(Composite parent) {
        parent = (Composite) super.createDialogArea(parent);
        GridLayout layout = new GridLayout();
        layout.numColumns = 1;
        layout.marginHeight = 10;
        layout.marginWidth = 10;
        layout.horizontalSpacing = 1;
        parent.setLayout(layout);
        JTextArea textArea = new JTextArea(parent, MESSAGE);
        textArea.setEditable(false);
        textArea.setLayoutData(90);
        setTitle("IDEA Needs an API Key to Use the Service");
        return parent;
    }

    @Override
    protected void createButtonsForButtonBar(Composite parent) {
        GridLayout layout = (GridLayout) parent.getLayout();
        layout.makeColumnsEqualWidth = false;
        parent.setLayout(layout);
        GridData data = new GridData(GridData.HORIZONTAL_ALIGN_CENTER | GridData.VERTICAL_ALIGN_CENTER);
        parent.setLayoutData(data);
        createButton(parent, EXISTING_USER_CODE, EXISTING_USER, true);
        createButton(parent, NEW_USER_CODE, NEW_USER, false);
        createButton(parent, IDialogConstants.CANCEL_ID, IDialogConstants.CANCEL_LABEL, false);
    }

    @Override
    protected void buttonPressed(int buttonId) {
        if (EXISTING_USER_CODE == buttonId) {
            setReturnCode(EXISTING_USER_CODE);
            close();
        } else if (NEW_USER_CODE == buttonId) {
            setReturnCode(NEW_USER_CODE);
            close();
        } else {
            super.buttonPressed(buttonId);
        }
    }

    public void show() {
        open();
    }

    public int getExitCode() {
        return getReturnCode();
    }

    protected void setTitle(String title) {
        Shell shell = getShell();
        if ((shell != null) && !shell.isDisposed()) {
            shell.setText(title);
        }
    }

    @Override
    public boolean isHelpAvailable() {
        return false;
    }
}
