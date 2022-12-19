package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JComboBox;

public class ItemComboBox extends Item {

    private final JComboBox<String> component;

    public ItemComboBox(JComboBox<String> component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        return component.getSelectedIndex() != getIndex(settings.getValue(key));
    }

    @Override
    public void reset() {
        component.setSelectedIndex(getIndex(settings.getValue(key)));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        super.apply(keys, prevData);
        settings.setValue(key, component.getItemAt(component.getSelectedIndex()));
    }

    private int getIndex(String label) {
        for (int i = 0 ; i < component.getItemCount() ; i++) {
            if (label.equals(component.getItemAt(i))) {
                return i;
            }
        }
        return -1;
    }
}