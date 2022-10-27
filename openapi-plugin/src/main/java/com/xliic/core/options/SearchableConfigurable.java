package com.xliic.core.options;

import org.eclipse.jface.preference.PreferencePage;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.IWorkbenchPreferencePage;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.module.Module;
import com.xliic.core.project.Project;
import com.xliic.core.ui.components.JComponent;

public abstract class SearchableConfigurable extends PreferencePage implements IWorkbenchPreferencePage {

    protected final PropertiesComponent settings;

    public SearchableConfigurable(@Nullable Module module, @NotNull Project project) {
        super();
        settings = PropertiesComponent.getInstance();
    }

    @Override
    public void init(IWorkbench workbench) {}

    @Override
    protected void performDefaults() {
        super.performDefaults();
        reset();
    }


    @Override
    public boolean performOk() {
        if (isModified()) {
            apply();
        }
        return super.performOk();
    }

    protected Composite createComposite(Composite parent) {
        GridLayout gridLayout = new GridLayout();
        gridLayout.numColumns = 1;
        parent.setLayout(gridLayout);
        parent.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_FILL));
        return parent;
    }

    public abstract String getDisplayName();
    public abstract String getHelpTopic();
    public abstract JComponent createComponent();
    public abstract boolean isModified();
    public abstract void reset();
    public abstract void apply();
}
