package com.xliic.openapi.settings.wizard.anon;

import java.util.Set;
import java.util.regex.Pattern;

import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.settings.items.Item;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.WizardDialog;

public class AnonEmailWizardDialog extends WizardDialog {

    private static final Pattern EMAIL_REGEX = Pattern.compile("^(.+)@(.+)$");

    public AnonEmailWizardDialog(@NotNull Project project, @NotNull WizardCallback callback) {
        super(project, "Enter your email to receive the token", callback);
        setTitle("42Crunch Security Audit Token");
        init();
    }

    @Override
    protected @NotNull JTextComponent getComponent(Composite parent, @Nullable GridData gridData) {
        JTextField emailTextField = new JTextField(parent, gridData);
        emailTextField.getDocument().addDocumentListener(new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                boolean valid = EMAIL_REGEX.matcher(emailTextField.getText()).find();
                setOKActionEnabled(valid);
                Item.drawValidationStatus(component, valid ? null : "Please enter valid email address");
            }
        });
        return emailTextField;
    }

    @Override
    protected void applySettings(@NotNull Set<String> keys) {
        keys.add(Settings.Audit.EMAIL);
        SettingsService.getInstance().setValue(Settings.Audit.EMAIL, component.getText());
    }

    @Override
    protected @Nullable WizardDialog nextWizard() {
        return new AnonTokenWizardDialog(component.getText(), project, callback);
    }
}
