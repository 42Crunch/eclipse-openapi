package com.xliic.openapi.platform.tree.form;

import java.net.URISyntaxException;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.ValidationInfo;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.utils.NetUtils;

public class PlatformURLChooser extends DialogWrapper {

    private JTextField myValueEditor;
    protected final String currentURL;

    public PlatformURLChooser(@NotNull Project project, @NotNull String title, @NotNull String currentURL) {
        super(project, 1);
        setTitle(title);
        this.currentURL = currentURL;
        init();
    }

    @Override
    public void create(Composite parent) {
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        myValueEditor = new JTextField(parent, gridData);
        myValueEditor.setEnabled(true);
        myValueEditor.setText(currentURL);
        registerForValidation(myValueEditor);
    }

    @Override
    protected ValidationInfo doValidate() {
        try {
            String value = getValue();
            if (!StringUtils.isEmpty(value) && StringUtils.isEmpty(NetUtils.getDomainName(value))) {
                return new ValidationInfo("Please enter valid URL");
            }
        } catch (URISyntaxException e) {
            return new ValidationInfo("Please enter valid URL");
        }
        return super.doValidate();
    }

    public String getValue() {
        return myValueEditor.getText();
    }
}
