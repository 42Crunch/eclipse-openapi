package com.xliic.openapi.settings;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.ValidationInfo;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.TokenDialogDoOkActionCallback;

public class AuditConfigTokenDialogWrapper extends DialogWrapper {

    private final Project project;
    private final VirtualFile file;
    private JTextArea tokenTextArea;

    public AuditConfigTokenDialogWrapper(@NotNull Project project, @NotNull VirtualFile file) {
        super(project, 2);
        setTitle(OpenApiBundle.message("Security Audit Settings"));
        this.file = file;
        this.project = project;
    }

    @Override
    protected void create(Composite parent) {
        setOKActionEnabled(false);
        new Label(parent, SWT.LEFT).setText("Security Audit Token");
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        gridData.horizontalIndent = 10;
        gridData.widthHint = 350;
        tokenTextArea = new JTextArea(parent);

        GridData infoGridData = new GridData(GridData.FILL_BOTH);
        infoGridData.horizontalSpan = 2;
        infoGridData.verticalIndent = 5;
        infoGridData.widthHint = 350;
        Label info = new Label(parent, SWT.WRAP);
        info.setLayoutData(infoGridData);
        info.setText("API token has been sent. If you don't get the mail within a couple minutes, "
                + " check your spam folder and that the address is correct. Paste the token above.");

        registerForValidation(tokenTextArea);
        init();
    }

    @Override
    protected ValidationInfo doValidate() {
        if (StringUtils.isEmpty(tokenTextArea.getStripText())) {
            return new ValidationInfo("Invalid token format");
        }
        return super.doValidate();
    }

    @Override
    public void doOKAction() {
        super.doOKAction();
        PropertiesComponent.getInstance().setValue(SettingsKeys.TOKEN, tokenTextArea.getStripText());
        new TokenDialogDoOkActionCallback(project, file, tokenTextArea.getStripText()).setDone();
    }
}
