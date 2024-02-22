package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JCheckBox;
import com.xliic.openapi.settings.SettingsService;

public class ItemCheckBox extends Item {

    protected final JCheckBox component;

    public ItemCheckBox(JCheckBox component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        return component.isSelected() != SettingsService.getInstance().getBoolean(key);
    }

    @Override
    public void reset() {
        component.setSelected(SettingsService.getInstance().getBoolean(key));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        super.apply(keys, prevData);
        SettingsService.getInstance().setValue(key, component.isSelected());
    }
}
