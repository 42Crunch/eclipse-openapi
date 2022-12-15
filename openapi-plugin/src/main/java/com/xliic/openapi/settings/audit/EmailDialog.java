package com.xliic.openapi.settings.audit;

import java.util.regex.Pattern;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.ValidationInfo;
import com.xliic.core.ui.components.JTextField;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.settings.Settings;

public class EmailDialog extends DialogWrapper {

    // Week, but compact regexp to avoid dummy emails
    private final static Pattern EMAIL_REGEX = Pattern.compile("^(.+)@(.+)$");

    private final Project project;
    private final VirtualFile file;
    private JTextField emailTextField;

    public EmailDialog(@NotNull Project project, @NotNull VirtualFile file) {
        super(project, 2);
        setTitle(OpenApiBundle.message("Remote Audit Settings"));
        this.file = file;
        this.project = project;
    }

    @Override
    public void create(Composite parent) {
        setOKActionEnabled(false);
        new Label(parent, SWT.LEFT).setText("Email");
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        gridData.horizontalIndent = 10;
        gridData.widthHint = 350;
        emailTextField = new JTextField(parent, gridData);

        GridData infoGridData = new GridData(GridData.FILL_BOTH);
        infoGridData.horizontalSpan = 2;
        infoGridData.verticalIndent = 5;
        infoGridData.widthHint = 350;
        Label info = new Label(parent, SWT.WRAP);
        info.setLayoutData(infoGridData);
        info.setText("Security Audit from 42Crunch runs ~200 checks for security best practices in your API. "
                + "Eclipse needs an API key to use the service. Enter your email to receive the token.");

        String previousEmail = PropertiesComponent.getInstance().getValue(Settings.EMAIL);
        if (previousEmail != null && !previousEmail.isEmpty()) {
            emailTextField.setText(previousEmail);
            setOKActionEnabled(EMAIL_REGEX.matcher(previousEmail).find());
        }
        registerForValidation(emailTextField);
        init();
    }

    @Override
    protected ValidationInfo doValidate() {
        if (!EMAIL_REGEX.matcher(emailTextField.getText()).find()) {
            return new ValidationInfo("Invalid email format");
        }
        return super.doValidate();
    }

    @Override
    public void doOKAction() {
        super.doOKAction();
        PropertiesComponent.getInstance().setValue(Settings.EMAIL, emailTextField.getText());
        ApplicationManager.getApplication().invokeLater(() -> {
            AuditService auditService = AuditService.getInstance(project);
            auditService.sendGenerateTokenRequest(emailTextField.getText(), new EmailDialogDoOkActionCallback(project, file));
        });
    }
}
