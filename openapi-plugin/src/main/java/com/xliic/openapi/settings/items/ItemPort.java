package com.xliic.openapi.settings.items;

import static com.xliic.openapi.preview.PreviewUtils.isPortInRange;

import com.xliic.core.ui.components.JTextField;

public class ItemPort extends ItemTextField {

    private static final String ERROR_TEXT = "Must be a valid port number";

    public ItemPort(JTextField component, String key) {
        super(component, key);
        validate(component);
    }

    @Override
    public boolean valid() {
        try {
            boolean isPort = isPortInRange(Integer.parseInt(component.getText()));
            drawValidationStatus(component, isPort ? null : ERROR_TEXT);
            return isPort;
        } catch (NumberFormatException ignored) {
            drawValidationStatus(component, ERROR_TEXT);
            return false;
        }
    }
}
