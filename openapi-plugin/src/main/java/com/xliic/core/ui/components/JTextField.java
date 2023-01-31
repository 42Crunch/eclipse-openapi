package com.xliic.core.ui.components;

import java.util.EventListener;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.swt.SWT;
import org.eclipse.swt.events.FocusListener;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.eclipse.swt.graphics.Color;
import org.eclipse.swt.layout.GridData;
import org.eclipse.swt.widgets.Composite;
import org.eclipse.swt.widgets.Text;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class JTextField implements Validator {

    private Text textWidget;
    private String text;
    private List<EventListener> validators = new LinkedList<>();

    public JTextField(@NotNull JPanel parent) {
        this(parent.getComposite(), null);
        text = null;
    }

    public JTextField(Composite parent, @Nullable GridData gridData) {
        textWidget = new Text(parent, SWT.SINGLE | SWT.BORDER);
        textWidget.setFont(parent.getFont());
        if (gridData == null) {
            gridData = new GridData(GridData.FILL_HORIZONTAL);
            gridData.horizontalIndent = 10;
        }
        textWidget.setLayoutData(gridData);
        textWidget.addDisposeListener(event -> {
            text = getText();
            if (!validators.isEmpty()) {
                removeValidationListener();
            }
            textWidget = null;
        });
    }

    public void setToolTipText(String text) {
        textWidget.setToolTipText(text);
    }

    public void forceFocus() {
        textWidget.forceFocus();
    }

    public void setEchoChar() {
        textWidget.setEchoChar('*');
    }

    public void setText(String t) {
        textWidget.setText(t);
    }

    public String getText() {
        return textWidget == null ? text : textWidget.getText();
    }

    public void setEnabled(boolean enabled) {
        textWidget.setEnabled(enabled);
    }

    public void addModifyListener(ModifyListener listener) {
        textWidget.addModifyListener(listener);
    }

    public void removeModifyListener(ModifyListener listener) {
        textWidget.removeModifyListener(listener);
    }

    public void addFocusListener(FocusListener listener) {
        textWidget.addFocusListener(listener);
    }

    public void removeFocusListener(FocusListener listener) {
        textWidget.removeFocusListener(listener);
    }

    @Override
    public void setValid() {
        textWidget.setBackground(null);
        textWidget.setToolTipText(null);
    }

    @Override
    public void setInvalid(String message) {
        textWidget.setBackground(new Color(VALIDATION_ERROR_BACKGROUND));
        textWidget.setToolTipText(message);
    }

    @Override
    public void setValidationListener(ValidationListener listener) {
        if (!validators.isEmpty()) {
            return;
        }
        ModifyListener modifyListener = new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent e) {
                listener.validate();
            }
        };
        validators.add(modifyListener);
        addModifyListener(modifyListener);
    }

    @Override
    public void removeValidationListener() {
        for (EventListener listener : validators) {
            if (listener instanceof ModifyListener) {
                removeModifyListener((ModifyListener) listener);
            }
        }
        validators.clear();
    }
}
