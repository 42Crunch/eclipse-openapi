package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.ui.components.JTextField;
import com.xliic.core.ui.components.Validator;

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
        if (component instanceof Validator) {
            Validator validator = component;
            validator.setValidationListener(() -> {
                valid();
            });
        }
    }

    protected static void drawValidationStatus(JTextField component, String message) {
        if (message == null) {
            component.setValid();
        } else {
            component.setInvalid(message);
        }
    }
}
