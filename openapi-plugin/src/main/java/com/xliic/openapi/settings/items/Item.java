package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.DocumentAdapter;
import com.xliic.core.ui.DocumentEvent;
import com.xliic.core.ui.components.JTextComponent;
import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.settings.SettingsService;

public abstract class Item {

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
        prevData.put(key, SettingsService.getInstance().getValueAsObject(key));
    }

    protected void validate(@NotNull JTextField component) {
        component.getDocument().addDocumentListener(new DocumentAdapter() {
            @Override
            public void textChanged(@NotNull DocumentEvent e) {
                valid();
            }
        });
    }

    public static void drawValidationStatus(JTextComponent component, String message) {
        if (message == null) {
            component.setValid();
        } else {
            component.setInvalid(message);
        }
    }
}
