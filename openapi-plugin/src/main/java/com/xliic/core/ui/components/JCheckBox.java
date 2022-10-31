package com.xliic.core.ui.components;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;

public class JCheckBox {

    private Button checkBoxWidget;

    public JCheckBox(String label, JPanel parent) {
        this(label, parent.getComposite());
    }

    public JCheckBox(String label, Composite composite) {
        checkBoxWidget = new Button(composite, SWT.CHECK | SWT.LEFT);
        checkBoxWidget.setFont(composite.getFont());
        checkBoxWidget.setText(label);
        checkBoxWidget.setLayoutData(new GridData(GridData.HORIZONTAL_ALIGN_BEGINNING));
        checkBoxWidget.addDisposeListener(event -> checkBoxWidget = null);
    }

    public void setSelected(boolean selected) {
        checkBoxWidget.setSelection(selected);
    }

    public boolean isSelected() {
        return checkBoxWidget.getSelection();
    }
}
