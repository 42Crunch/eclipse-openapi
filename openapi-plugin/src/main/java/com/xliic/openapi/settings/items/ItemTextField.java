package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JTextField;

public class ItemTextField extends Item {

    protected final JTextField component;

    public ItemTextField(JTextField component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        return !component.getText().equals(settings.getValue(key));
    }

    @Override
    public void reset() {
        component.setText(settings.getValue(key));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        super.apply(keys, prevData);
        settings.setValue(key, component.getText());
    }
}
