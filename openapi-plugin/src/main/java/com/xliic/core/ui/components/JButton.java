package com.xliic.core.ui.components;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import org.eclipse.swt.events.SelectionAdapter;
import org.eclipse.swt.events.SelectionEvent;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Button;
import org.eclipse.swt.widgets.Composite;

public class JButton {

    private Button buttonWidget;

    public JButton(String name, int style, JPanel parent) {
        Composite composite = parent.getComposite();
        buttonWidget = new Button(composite, style);
        buttonWidget.setFont(composite.getFont());
        buttonWidget.setText(name);
        buttonWidget.setLayoutData(new GridData(GridData.FILL_HORIZONTAL));
        buttonWidget.addDisposeListener(event -> buttonWidget = null);
    }

    public void setLayoutData(Object layoutData) {
        buttonWidget.setLayoutData(layoutData);
    }

    public void setEnabled(boolean enabled) {
        buttonWidget.setEnabled(enabled);
    }

    public void addActionListener(ActionListener listener) {
        buttonWidget.addSelectionListener(new SelectionAdapter() {
            @Override
            public void widgetSelected(SelectionEvent e) {
                listener.actionPerformed(new ActionEvent(this, -1, ""));
            }
        });
    }
}
