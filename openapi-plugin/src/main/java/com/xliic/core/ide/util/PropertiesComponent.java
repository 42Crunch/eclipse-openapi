package com.xliic.core.ide.util;

import java.util.Collection;
import java.util.Collections;
import java.util.List;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class PropertiesComponent {

    private static final String ARRAY_DELIMETER = ",";
    private static final PropertiesComponent propertiesComponent = new PropertiesComponent();

    private final IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();

    public static PropertiesComponent getInstance() {
        return propertiesComponent;
    }

	private PropertiesComponent() {
    }

    public boolean isValueSet(@NotNull String name) {
        return !StringUtils.isEmpty(getValue(name));
    }

    public boolean getBoolean(@NotNull String name) {
        String value = getValue(name);
        // Assert.isTrue(!StringUtils.isEmpty(value));
        return StringUtils.isEmpty(value) ? false : Boolean.valueOf(value);
    }

    public void setValue(@NotNull String name, boolean value) {
        setValue(name, Boolean.toString(value));
    }

    public void setValue(@NotNull String name, String value) {
        setValue(name, value, value);
    }

    public void setValue(@NotNull String name, String value, String defaultValue) {
        store.setValue(name, value);
    }

    public String getValue(@NotNull String name) {
        return store.getString(name);
    }

    public String getValue(@NotNull String name, @NotNull String defaultValue) {
    	String value = getValue(name);
        return value == null ? defaultValue : value;
    }

    public void unsetValue(@NotNull String name) {
        setValue(name, StringUtils.EMPTY);
    }

    // Array
//    public void setValues(@NotNull String name, String[] values) {
//        if (values == null || values.length == 0) {
//            unsetValue(name);
//        } else {
//            setValue(name, String.join(ARRAY_DELIMETER, values));
//        }
//    }
//
//    public String[] getValues(@NotNull String name) {
//        String values = getValue(name);
//        return values == null ? ArrayUtilRt.EMPTY_STRING_ARRAY : values.split(ARRAY_DELIMETER);
//    }

    // List
    public void setList(@NotNull String name, Collection<String> values) {
        if (values == null || values.isEmpty()) {
            setValue(name, "");
        } else {
            setValue(name, String.join(ARRAY_DELIMETER, values));
        }
    }

    public List<String> getList(@NotNull String name) {
        String values = getValue(name);
        return StringUtils.isEmpty(values) ? Collections.emptyList() : List.of(values.split(ARRAY_DELIMETER));
    }
}
