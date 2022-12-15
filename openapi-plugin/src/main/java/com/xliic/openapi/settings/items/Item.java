package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.eclipse.swt.events.FocusListener;
import org.eclipse.swt.events.ModifyEvent;
import org.eclipse.swt.events.ModifyListener;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.ui.components.JTextField;

public abstract class Item {

    protected static final PropertiesComponent settings = PropertiesComponent.getInstance();

    protected final String key;

    public Item(String key) {
        this.key = key;
    }

    public boolean valid() {
        return true;
    }

    public abstract boolean isModified();

    public abstract void reset();

    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        keys.add(key);
        prevData.put(key, settings.getValue(key));
    }

    protected void validate(@NotNull JTextField component) {
        component.addModifyListener(new ModifyListener() {
            @Override
            public void modifyText(ModifyEvent e) {
                valid();
            }
        });
        component.addFocusListener(new FocusListener() {
            @Override
            public void focusGained(org.eclipse.swt.events.FocusEvent e) {
              valid();
            }

            @Override
            public void focusLost(org.eclipse.swt.events.FocusEvent e) {
                valid();
            }
        });
    }

    protected static void drawValidationStatus(JTextField component, String message) {
        if (message == null) {
            component.setValid();
        } else {
            component.setInvalid(message);
        }
    }
}
