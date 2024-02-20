package com.xliic.openapi.settings.items;

import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JTextArea;
import com.xliic.openapi.settings.SettingsService;

public class ItemTextArea extends Item {

    protected final JTextArea component;

    public ItemTextArea(JTextArea component, String key) {
        super(key);
        this.component = component;
    }

    @Override
    public boolean isModified() {
        return !getText().equals(SettingsService.getInstance().getValue(key));
    }

    @Override
    public void reset() {
        component.setText(SettingsService.getInstance().getValue(key));
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        super.apply(keys, prevData);
        SettingsService.getInstance().setValue(key, getText());
    }

    private String getText() {
        return StringUtils.stripEnd(component.getText(), " \n");
    }
}
