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
import com.xliic.openapi.settings.Settings.Audit;
import com.xliic.openapi.settings.Settings.ExtRef;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.settings.Settings.Preview;
import com.xliic.openapi.settings.Settings.SortOutlines;
import com.xliic.openapi.settings.Settings.TryIt;

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
        cache.put(Audit.EMAIL, store.getString(Audit.EMAIL));
        cache.put(Audit.TOKEN, store.getString(Audit.TOKEN));
        cache.put(ExtRef.APPROVED_HOSTNAMES, store.getString(ExtRef.APPROVED_HOSTNAMES));
        cache.put(TryIt.INSECURE_SSL_HOSTNAMES, store.getString(TryIt.INSECURE_SSL_HOSTNAMES));
        cache.put(Preview.PORT, store.getString(Preview.PORT));
        cache.put(Preview.RENDERER, store.getString(Preview.RENDERER));
        cache.put(SortOutlines.ABC_SORT, store.getString(SortOutlines.ABC_SORT));
        cache.put(Platform.Credentials.URL, store.getString(Platform.Credentials.URL));
        cache.put(Platform.Dictionary.PreAudit.CHOICE, store.getString(Platform.Dictionary.PreAudit.CHOICE));
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
