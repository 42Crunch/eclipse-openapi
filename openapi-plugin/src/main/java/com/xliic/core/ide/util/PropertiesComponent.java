package com.xliic.core.ide.util;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jface.preference.IPreferenceStore;
import org.eclipse.ui.preferences.ScopedPreferenceStore;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.diagnostic.Logger;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class PropertiesComponent {

    private static final String ARRAY_DELIMETER = ",";
    private static final PropertiesComponent propertiesComponent = new PropertiesComponent();

    private final IPreferenceStore prefStore = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();

    public static PropertiesComponent getInstance() {
        return propertiesComponent;
    }

	private PropertiesComponent() {
    }

    public boolean isValueSet(@NotNull String name) {
        return prefStore.contains(name);
    }

    public boolean getBoolean(@NotNull String name) {
        return prefStore.getBoolean(name);
    }

    public void setValue(@NotNull String name, boolean value) {
    	prefStore.setValue(name, value);
    }

    public void setValue(@NotNull String name, String value) {
    	prefStore.setValue(name, value);
    }

    public String getValue(@NotNull String name) {
        return prefStore.getString(name);
    }

    public String getValue(@NotNull String name, @NotNull String defaultValue) {
        return Objects.requireNonNullElse(getValue(name), defaultValue);
    }

    public void unsetValue(@NotNull String name) {
    	// It will implicitly removes the name
        prefStore.setToDefault(name);
    }

    public void setList(@NotNull String name, @Nullable Collection<String> values) {
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

	public void save() {
		try {
			if (prefStore.needsSaving() && prefStore instanceof ScopedPreferenceStore) {
				((ScopedPreferenceStore) prefStore).save();
			}
		} catch (Exception e) {
			Logger.getInstance(PropertiesComponent.class).error(e);
		}
	}
}
