package com.xliic.openapi.settings.wizard.platform;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;

import java.util.Set;

import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.settings.items.Item;
import com.xliic.openapi.settings.items.ItemPlatformCredentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.WizardDialog;

public class PlatformTokenWizardDialog extends WizardDialog {

    public PlatformTokenWizardDialog(@NotNull Project project, @NotNull WizardCallback callback) {
        super(project, "Enter 42Crunch API token", callback);
        setTitle("42Crunch Platform Credentials");
        init();
    }

    @Override
    protected @NotNull JTextComponent getComponent(Composite parent, @Nullable GridData gridData) {
        JTextField tokenTextField = new JTextField(parent, gridData);
        tokenTextField.getDocument().addDocumentListener(new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                boolean valid = PlatformConnection.isAPIKeyValid(component.getText());
                setOKActionEnabled(valid);
                Item.drawValidationStatus(component, valid ? null : ItemPlatformCredentials.ERROR_API_KEY_TEXT);
            }
        });
        return tokenTextField;
    }

    @Override
    protected void applySettings(@NotNull Set<String> keys) {
        keys.add(API_KEY);
        keys.add(Platform.TURNED_ON);
        SecurityPropertiesComponent.getInstance().setValue(API_KEY, component.getText());
        ApplicationManager.getApplication().invokeAndWait(() ->
            project.getMessageBus().syncPublisher(ConfigListener.TOPIC).loadConfig(new Config()));
    }

    @Override
    protected @Nullable WizardDialog nextWizard() {
        return null;
    }

    @Override
    public boolean isOKActionEnabled() {
        return false;
    }
}
