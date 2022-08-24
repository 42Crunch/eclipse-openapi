package com.xliic.core.ui.components;

import org.eclipse.swt.SWT;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Combo;
import org.eclipse.swt.widgets.Composite;

public class JComboBox<T> {

    private Combo comboWidget;

    public JComboBox(JPanel parent) {
        Composite composite = parent.getComposite();
        comboWidget = new Combo(composite, SWT.READ_ONLY);
        comboWidget.setFont(composite.getFont());
        GridData gd = new GridData(GridData.FILL_HORIZONTAL);
        gd.horizontalIndent = 10;
        comboWidget.setLayoutData(gd);
        comboWidget.addDisposeListener(event -> comboWidget = null);
    }

    public int getSelectedIndex() {
        return comboWidget.getSelectionIndex();
    }

    public void setSelectedIndex(int index) {
        comboWidget.select(index);
    }

    public void insertItemAt(T item, int index) {
        comboWidget.add((String) item, index);
    }
}
