package com.xliic.core.ide.util;

import java.util.Hashtable;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.ArrayUtilRt;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.settings.SettingsKeys;

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
		cache.put(SettingsKeys.EMAIL, store.getString(SettingsKeys.EMAIL));
		cache.put(SettingsKeys.TOKEN, store.getString(SettingsKeys.TOKEN));
		cache.put(SettingsKeys.HOSTS, store.getString(SettingsKeys.HOSTS));
		cache.put(PreviewKeys.PORT, store.getString(PreviewKeys.PORT));
		cache.put(PreviewKeys.RENDERER, store.getString(PreviewKeys.RENDERER));
		cache.put(SettingsKeys.ABC_SORT, store.getString(SettingsKeys.ABC_SORT));
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
}
