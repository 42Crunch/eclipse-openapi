package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JCheckBox;

public class ItemCheckBox extends Item {

    protected final JCheckBox component;

    public ItemCheckBox(JCheckBox component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        return component.isSelected() != settings.getBoolean(key);
    }

    @Override
    public void reset() {
        component.setSelected(settings.getBoolean(key));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        super.apply(keys, prevData);
        settings.setValue(key, component.isSelected());
    }
}
