package com.xliic.openapi.settings.wizard.platform;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

import java.util.Set;

import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.settings.items.Item;
import com.xliic.openapi.settings.items.ItemPlatformCredentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.WizardDialog;
import com.xliic.openapi.utils.NetUtils;

public class PlatformURLWizardDialog extends WizardDialog {

    public PlatformURLWizardDialog(@NotNull Project project, @NotNull WizardCallback callback) {
        super(project, "Enter 42Crunch platform URL", callback);
        setTitle("42Crunch Platform Credentials");
        init();
    }

    @Override
    protected Control createButtonBar(Composite parent) {
        parent = (Composite) super.createButtonBar(parent);
        setOKActionEnabled(true);
        component.setText("https://platform.42crunch.com/");
        return parent;
    }

    @Override
    protected @NotNull JTextComponent getComponent(Composite parent, @Nullable GridData gridData) {
        JTextField urlTextField = new JTextField(parent, gridData);
        urlTextField.getDocument().addDocumentListener(new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                boolean valid = NetUtils.isURLValid(component.getText());
                setOKActionEnabled(valid);
                Item.drawValidationStatus(component, valid ? null : ItemPlatformCredentials.ERROR_URL_TEXT);
            }
        });
        return urlTextField;
    }

    @Override
    protected void applySettings(@NotNull Set<String> keys) {
        keys.add(URL);
        PropertiesComponent.getInstance().setValue(URL, component.getText());
    }

    @Override
    protected @Nullable WizardDialog nextWizard() {
        return new PlatformTokenWizardDialog(project, callback);
    }
}
