package com.xliic.openapi.platform.tree.form;

import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.DialogWrapper;
import com.xliic.core.ui.ValidationInfo;
import com.xliic.core.ui.components.JTextField;

public abstract class PlatformNameChooser extends DialogWrapper {

    protected JTextField myValueEditor;
    protected PlatformNameConvention convention;
    protected final String currentName;

    public PlatformNameChooser(@NotNull Project project, @NotNull String title, @NotNull String currentName) {
        super(project, 1);
        setTitle(title);
        this.currentName = currentName;
        convention = null;
        init();
    }

    @Override
    public void create(Composite parent) {
        GridData gridData = new GridData(GridData.FILL_HORIZONTAL);
        myValueEditor = new JTextField(parent, gridData);
        myValueEditor.setEnabled(false);
        myValueEditor.setText(currentName);
        registerForValidation(myValueEditor);
    }

    public String getValue() {
        return myValueEditor.getText();
    }

    @Nullable
    @Override
    protected ValidationInfo doValidate() {
        try {
            if (convention != null) {
                String pattern = convention.getPattern();
                if (!StringUtils.isEmpty(pattern)) {
                    if (!Pattern.compile(pattern, Pattern.CASE_INSENSITIVE).matcher(getValue()).find()) {
                        String example = convention.getExample();
                        String description = convention.getDescription();
                        return new ValidationInfo(getMessage(description, example), myValueEditor);
                    }
                }
            }
            String defaultPattern = getDefaultPattern();
            if (!StringUtils.isEmpty(defaultPattern)) {
                if (!Pattern.compile(defaultPattern, Pattern.CASE_INSENSITIVE).matcher(getValue()).find()) {
                    return new ValidationInfo(getMessage(defaultPattern), myValueEditor);
                }
            }
        } catch (PatternSyntaxException e) {
            return new ValidationInfo(getMessage(e), myValueEditor);
        }
        return null;
    }

    protected abstract String getDefaultPattern();

    protected void enable() {
        setOKActionEnabled(true);
        myValueEditor.setEnabled(true);
    }

    protected void enable(String example) {
        if (convention != null && !StringUtils.isEmpty(example)) {
            myValueEditor.setText(example);
        }
        enable();
    }

    protected void disable() {
        setOKActionEnabled(false);
        myValueEditor.setEnabled(false);
    }

    private String getMessage(PatternSyntaxException e) {
        return "Pattern syntax exception " + e.getMessage();
    }

    private String getMessage(String pattern) {
        return "The input does not match the expected pattern " + pattern;
    }

    private String getMessage(String description, String example) {
        return "The input does not match the expected pattern " + description + " defined in your organization. Example of the expected value: "
                + example;
    }
}
