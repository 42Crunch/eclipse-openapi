package com.xliic.openapi.quickfix.schema;

import java.util.Set;

import javax.swing.JComponent;
import javax.swing.JPanel;

import org.apache.commons.lang.StringUtils;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.ValidationInfo;
import com.xliic.core.ui.components.JTextField;

public class SchemaNameChooser extends DialogWrapper {

    private JTextField myValueEditor;
    private JPanel myWholePanel;
    private final String defaultSchemaName;
    private final Set<String> existingSchemaNames;

    public SchemaNameChooser(@NotNull Project project, @NotNull String defaultSchemaName, @NotNull Set<String> existingSchemaNames) {
        super(project, 1);
        setTitle("Enter New Schema Name");
        this.defaultSchemaName = defaultSchemaName;
        this.existingSchemaNames = existingSchemaNames;
        init();
    }

    @Override
    public void create(Composite parent) {
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        myValueEditor = new JTextField(parent, gridData);
        myValueEditor.setEnabled(true);
        myValueEditor.setText(defaultSchemaName);
        registerForValidation(myValueEditor);
    }

    @Override
    protected ValidationInfo doValidate() {
        if (StringUtils.isEmpty(getValue()) || existingSchemaNames.contains(getValue())) {
            return new ValidationInfo("Please enter unique schema name");
        }
        return super.doValidate();
    }

    public String getValue() {
        return myValueEditor.getText();
    }

    @Override
    protected boolean postponeValidation() {
        return false;
    }

    @Override
    protected JComponent createCenterPanel() {
        return myWholePanel;
    }
}
