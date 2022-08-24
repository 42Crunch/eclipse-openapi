package com.xliic.openapi.platform.tree.filter;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.components.JTextField;
import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;

public class PlatformTreeFilter extends DialogWrapper {

    protected JTextField myValueEditor;
    private boolean updated;

    public PlatformTreeFilter(@NotNull Project project, @NotNull String title) {
        super(project, 2);
        setTitle(title);
        setOKButtonText("Apply");
        init();
    }

    @Override
    public void create(Composite parent) {
        new Label(parent, SWT.NULL).setText("Name");
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        myValueEditor = new JTextField(parent, gridData);
        myValueEditor.setEnabled(true);
        registerForValidation(myValueEditor);
    }


    @Override
    public void doOKAction() {
        updated = !StringUtils.isEmpty(getValue());
        super.doOKAction();
    }

    public boolean isUpdated() {
        return updated;
    }

    public String getValue() {
        return myValueEditor.getText();
    }
}
