package com.xliic.openapi.settings.items;

import com.xliic.core.ui.components.JTextField;

public class ItemIntegerField extends ItemTextField {

    private final int maxValue;
    private final int minValue;

    public ItemIntegerField(JTextField component, String key, int minValue, int maxValue) {
        super(component, key);
        validate(component);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }

    @Override
    public boolean valid() {
        try {
            int value = Integer.parseInt(component.getText());
            boolean isInRange = (minValue <= value) && (value <= maxValue);
            drawValidationStatus(component, isInRange ? null : getError(minValue, maxValue));
            return isInRange;
        } catch (NumberFormatException ignored) {
            drawValidationStatus(component, getError(minValue, maxValue));
            return false;
        }
    }

    private static String getError(int minValue, int maxValue) {
        return "Input must be an integer between " + minValue + " and " + maxValue;
    }
}
