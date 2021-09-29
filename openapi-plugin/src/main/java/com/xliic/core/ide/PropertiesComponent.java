package com.xliic.core.ide;

import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class PropertiesComponent {

	private final static PropertiesComponent propertiesComponent = new PropertiesComponent();

	public static PropertiesComponent getInstance() {
		return propertiesComponent;
	}

	public int getInt(@NotNull String name, int defaultValue) {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		return store.getInt(name);
	}

	public boolean isValueSet(@NotNull String name) {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		String value = store.getString(name);
		return (value != null) && !value.isEmpty();

	}

	public void setValue(@NotNull String name, String value) {
		setValue(name, value, value);
	}

	public void setValue(@NotNull String name, String value, String defaultValue) {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		store.setValue(name, value);
	}

	public void setValue(@NotNull String name, int value, int defaultValue) {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		store.setValue(name, value);
	}

	public String getValue(@NotNull String name) {
		IPreferenceStore store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
		return store.getString(name);
	}

	public void unsetValue(@NotNull String name) {
		setValue(name, "");
	}
}
