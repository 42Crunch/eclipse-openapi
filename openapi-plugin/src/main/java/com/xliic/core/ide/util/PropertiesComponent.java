package com.xliic.core.ide.util;

import java.util.Collection;
import java.util.Collections;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.ArrayUtilRt;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.settings.Settings;

public class PropertiesComponent {

    private static final String ARRAY_DELIMETER = ",";

    private final IPreferenceStore store;
    private final Map<String, Object> cache;

    private final static PropertiesComponent propertiesComponent = new PropertiesComponent();

    public static PropertiesComponent getInstance() {
        return propertiesComponent;
    }

    public PropertiesComponent() {
        store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
        cache = new Hashtable<>();
        cache.put(Settings.EMAIL, store.getString(Settings.EMAIL));
        cache.put(Settings.TOKEN, store.getString(Settings.TOKEN));
        cache.put(Settings.HOSTS, store.getString(Settings.HOSTS));
        cache.put(PreviewKeys.PORT, store.getString(PreviewKeys.PORT));
        cache.put(PreviewKeys.RENDERER, store.getString(PreviewKeys.RENDERER));
        cache.put(Settings.ABC_SORT, store.getString(Settings.ABC_SORT));
    }

    // We store everything as strings to know if a property is set or not
    public boolean isValueSet(@NotNull String name) {
        Object value = cache.get(name);
        if (value == null) {
            return false;
        } else if (value instanceof String) {
            return !StringUtils.isEmpty((String) value);
        }
        return false;
    }

    // Boolean
    public boolean getBoolean(@NotNull String name) {
        String value = getValue(name);
        Assert.isTrue(!StringUtils.isEmpty(value));
        return Boolean.valueOf(value);
    }

    public void setValue(@NotNull String name, boolean value) {
        setValue(name, Boolean.toString(value));
    }

    // Integer
    public int getInt(@NotNull String name, int defaultValue) {
        String value = getValue(name);
        Assert.isTrue(!StringUtils.isEmpty(value));
        return Integer.valueOf(value);
    }

    public void setValue(@NotNull String name, int value, int defaultValue) {
        setValue(name, Integer.toString(value));
    }

    // String
    public void setValue(@NotNull String name, String value) {
        setValue(name, value, value);
    }

    public void setValue(@NotNull String name, String value, String defaultValue) {
        store.setValue(name, value);
        cache.put(name, value);
    }

    public String getValue(@NotNull String name) {
        return cache.containsKey(name) ? (String) cache.get(name) : store.getString(name);
    }

    public void unsetValue(@NotNull String name) {
        setValue(name, StringUtils.EMPTY);
    }

    // Array
    public void setValues(@NotNull String name, String[] values) {
        if (values == null || values.length == 0) {
            unsetValue(name);
        } else {
            setValue(name, String.join(ARRAY_DELIMETER, values));
        }
    }

    public String[] getValues(@NotNull String name) {
        String values = getValue(name);
        return values == null ? ArrayUtilRt.EMPTY_STRING_ARRAY : values.split(ARRAY_DELIMETER);
    }

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
