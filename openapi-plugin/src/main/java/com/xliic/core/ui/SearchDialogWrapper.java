package com.xliic.core.ui;

import java.util.Objects;
import java.util.regex.Pattern;
import java.util.regex.PatternSyntaxException;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.layout.GridLayout;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Label;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.ui.components.JCheckBox;
import com.xliic.core.ui.components.JTextField;

public class SearchDialogWrapper extends DialogWrapper {

    private String text;
    private boolean caseSensitive;
    private boolean regex;
    private boolean wholeWords;
    private boolean updated;

    private JTextField textField;
    private JCheckBox caseSensitiveCheckBox;
    private JCheckBox regexCheckBox;
    private JCheckBox wholeWordsCheckBox;

    public SearchDialogWrapper(@NotNull Project project, @Nullable String text, boolean caseSensitive, boolean regex, boolean wholeWords) {
        super(project, 2);
        this.text = text == null ? "" : text;
        this.caseSensitive = caseSensitive;
        this.regex = regex;
        this.wholeWords = wholeWords;
        updated = false;
        setTitle("Search");
    }

    @Override
    public void create(Composite parent) {

        GridData headerData = new GridData(SWT.BEGINNING, SWT.CENTER, false, false);
        headerData.horizontalSpan = 2;
        Label header = new Label(parent, SWT.LEFT);
        header.setLayoutData(headerData);
        header.setText("Containing text:");

        GridData gridData = new GridData(SWT.FILL, SWT.BEGINNING, true, false);
        gridData.widthHint = 320;
        textField = new JTextField(parent, gridData);
        textField.setText(text);

        createCheckBoxes(parent);
        registerForValidation(textField);
        init();
    }

    @Override
    public boolean isResizable() {
        return true;
    }

    @Override
    public boolean isHelpAvailable() {
        return false;
    }

    @Override
    protected ValidationInfo doValidate() {
        if (regexCheckBox.isSelected()) {
            try {
                Pattern.compile(textField.getText());
            } catch (PatternSyntaxException pe) {
                return new ValidationInfo("Regular expression pattern is invalid");
            }
        }
        return super.doValidate();
    }

    @Override
    public void doOKAction() {
        super.doOKAction();
        if (!Objects.equals(text, textField.getText()) || isCheckBoxesUpdated()) {
            updated = true;
        }
        text = textField.getText();
        caseSensitive = caseSensitiveCheckBox.isSelected();
        regex = regexCheckBox.isSelected();
        wholeWords = wholeWordsCheckBox.isSelected();
    }

    @NotNull
    public String getText() {
        return text;
    }

    public boolean isCaseSensitive() {
        return caseSensitive;
    }

    public boolean isRegex() {
        return regex;
    }

    public boolean isWholeWords() {
        return wholeWords;
    }

    public boolean isUpdated() {
        return updated;
    }

    private void createCheckBoxes(Composite top) {
        Composite boxes = new Composite(top, SWT.NONE);
        GridLayout layout = new GridLayout();
        layout.numColumns = 1;
        layout.marginHeight = 0;
        layout.marginWidth = 0;
        boxes.setLayout(layout);
        GridData gridData = new GridData(GridData.HORIZONTAL_ALIGN_FILL | GridData.VERTICAL_ALIGN_FILL);
        gridData.widthHint = 120;
        boxes.setLayoutData(gridData);
        boxes.setFont(top.getFont());
        caseSensitiveCheckBox = new JCheckBox("Case sensitive", boxes);
        caseSensitiveCheckBox.setSelected(caseSensitive);
        regexCheckBox = new JCheckBox("Regular exression", boxes);
        regexCheckBox.setSelected(regex);
        wholeWordsCheckBox = new JCheckBox("Whole word", boxes);
        wholeWordsCheckBox.setSelected(wholeWords);
    }

    private boolean isCheckBoxesUpdated() {
        return caseSensitive != caseSensitiveCheckBox.isSelected() || regex != regexCheckBox.isSelected()
                || wholeWords != wholeWordsCheckBox.isSelected();
    }
}
