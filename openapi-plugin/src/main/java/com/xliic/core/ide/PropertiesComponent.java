package com.xliic.core.ide;

import java.util.Hashtable;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.ArrayUtilRt;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.settings.AuditKeys;

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
		cache.put(AuditKeys.EMAIL, store.getString(AuditKeys.EMAIL));
		cache.put(AuditKeys.TOKEN, store.getString(AuditKeys.TOKEN));
		cache.put(AuditKeys.HOSTS, store.getString(AuditKeys.HOSTS));
		cache.put(PreviewKeys.PORT, store.getInt(PreviewKeys.PORT));
		cache.put(PreviewKeys.RENDERER, store.getInt(PreviewKeys.RENDERER));
	}
	
	public boolean isValueSet(@NotNull String name) {
		Object value = cache.get(name);
		if (value == null) {
			return false;
		} else if (value instanceof String) {
			return !StringUtils.isEmpty((String) value);
		} else if (value instanceof Integer) {
			return (Integer) value != 0;
		}
		return true;
	}

	// Integer (max positive value is not supported)
	public int getInt(@NotNull String name, int defaultValue) {
		int value = cache.containsKey(name) ? (int) cache.get(name) : store.getInt(name);
		if (value >= 0) {
			value -= 1;
		}
		return value;
	}

	public void setValue(@NotNull String name, int value, int defaultValue) {
		if (value >= 0) {
			value += 1;
		}
		store.setValue(name, value);
		cache.put(name, value);	
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
		store.setValue(name, StringUtils.EMPTY);
		cache.put(name, StringUtils.EMPTY);
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
