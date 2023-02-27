package com.xliic.openapi.settings.wizard;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Set;

import org.eclipse.jface.dialogs.IDialogConstants;
import org.eclipse.jface.dialogs.TrayDialog;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Control;
import org.eclipse.swt.widgets.Shell;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.ui.components.JTextArea;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.topic.SettingsListener;

public abstract class WizardDialog extends TrayDialog {

    @NotNull
    protected final Project project;
    @NotNull
    protected final String prompt;
    @NotNull
    protected String title;
    @NotNull
    protected JTextComponent component;
    @NotNull
    protected WizardCallback callback;
    @NotNull
    protected JTextArea promptComponent;

    public WizardDialog(@NotNull Project project, @NotNull String prompt, @NotNull WizardCallback callback) {
        super(EclipseUtil.getShell());
        title = null;
        this.prompt = prompt;
        this.project = project;
        this.callback = callback;
    }

    protected void init() {
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
        GridData gd = new GridData(GridData.FILL_HORIZONTAL);
        gd.widthHint = 500;
        parent.setLayoutData(gd);
        component = getComponent(parent, gd);
        promptComponent = new JTextArea(parent, prompt);
        promptComponent.setEditable(false);
        promptComponent.setLayoutData(90);
        setTitle(title);
        return parent;
    }

    @Override
    protected Control createButtonBar(Composite parent) {
        parent = (Composite) super.createButtonBar(parent);
        setOKActionEnabled(false);
        return parent;
    }

    @NotNull
    protected abstract JTextComponent getComponent(@NotNull Composite parent, @Nullable GridData gridData);

    protected abstract void applySettings(@NotNull Set<String> keys);

    @Nullable
    protected abstract WizardDialog nextWizard();

    protected boolean isOKActionEnabled() {
        Button btn = getButton(IDialogConstants.OK_ID);
        return btn == null ? false : btn.isEnabled();
    }

    protected void setOKActionEnabled(boolean isEnabled) {
        Button btn = getButton(IDialogConstants.OK_ID);
        if (btn != null) {
            btn.setEnabled(isEnabled);
        }
    }

    @Override
    protected void okPressed() {
        super.okPressed();
        callback.getWizardChain().add(this);
        WizardDialog nextDialog = nextWizard();
        if (nextDialog == null) {
            Set<String> updatedKeys = new HashSet<>();
            for (WizardDialog dialog : callback.getWizardChain()) {
                dialog.applySettings(updatedKeys);
            }
            project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, new HashMap<>());
            callback.getWizardChain().clear();
            callback.complete();
        } else {
            ApplicationManager.getApplication().invokeLater(nextDialog::showAndGet);
        }
    }

    @Override
    protected void cancelPressed() {
        super.cancelPressed();
        callback.getWizardChain().clear();
    }

    public boolean showAndGet() {
        return open() == 0;
    }

    public void show() {
        open();
    }

    protected void setTitle(String title) {
        this.title = title;
        Shell shell = getShell();
        if ((shell != null) && !shell.isDisposed()) {
            shell.setText(this.title);
        }
    }

    @Override
    public boolean isHelpAvailable() {
        return false;
    }
}
