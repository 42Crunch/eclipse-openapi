package com.xliic.core.ide.util;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.HEADER;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Hashtable;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.preference.IPreferenceStore;
import org.jetbrains.annotations.NotNull;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.util.ArrayUtilRt;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.utils.Utils;

public class PropertiesComponent {

    private static final String ARRAY_DELIMETER = ",";
	private static final String ALL_SET_KEYS = "com.xliic.core.ide.util.properties.component.all.set.keys";

    private final IPreferenceStore store;
    private final Map<String, Object> cache;

    // If string prop is not set the store returns ""
    // thus it is impossible to say if it is not set or set with ""
	// All set keys are tracked using this collection
    private final Set<String> allSetKeys;

    private final static PropertiesComponent propertiesComponent = new PropertiesComponent();

    public static PropertiesComponent getInstance() {
        return propertiesComponent;
    }

    @SuppressWarnings("unchecked")
	public PropertiesComponent() {
    	store = OpenAPIAbstractUIPlugin.getInstance().getPreferenceStore();
        cache = new Hashtable<>();
        allSetKeys = new HashSet<>();
        // Collect all property keys ignoring security ones (they are stored in security storage)
    	List<String> keys = new LinkedList<>();
        addSettingsKeys(Settings.class, keys, Set.copyOf(List.of(API_KEY, HEADER)));
        // Restore current property values into the local cache
        Set<String> myCurrentSetKeys = new HashSet<>();
        for (String key : keys) {
        	String value = store.getString(key);
        	cache.put(key, value);
        	if (value != null && !value.isEmpty()) {
        		myCurrentSetKeys.add(key);
        	}
        }
        // Mark all existing keys as set
        String strSetKeys = getValue(ALL_SET_KEYS);
        boolean isFreshInstall = myCurrentSetKeys.isEmpty();
        boolean isCleanAllSetKeys = (strSetKeys == null || strSetKeys.isEmpty());
        if (!isFreshInstall && isCleanAllSetKeys) {
  			updateAllSetKeys(keys);
  			return;
        }
        // Restore keys that have already been set
        if (!isCleanAllSetKeys) {
            try {
            	Object objSetKeys = new ObjectMapper().readValue(strSetKeys, Set.class);
    			allSetKeys.addAll((Collection<? extends String>) objSetKeys);
            } catch (JsonProcessingException ignored) {
            }
        }
    }

    public boolean isValueSet(@NotNull String name) {
        return allSetKeys.contains(name);
    }

    // Boolean
    public boolean getBoolean(@NotNull String name) {
        String value = getValue(name);
        // Assert.isTrue(!StringUtils.isEmpty(value));
        return StringUtils.isEmpty(value) ? false : Boolean.valueOf(value);
    }

    public void setValue(@NotNull String name, boolean value) {
        setValue(name, Boolean.toString(value));
    }

    // Integer
    public int getInt(@NotNull String name, int defaultValue) {
        String value = getValue(name);
        // Assert.isTrue(!StringUtils.isEmpty(value));
        return StringUtils.isEmpty(value) ? 0 : Integer.valueOf(value);
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
        updateAllSetKeys(name);
    }

    public String getValue(@NotNull String name) {
        return cache.containsKey(name) ? (String) cache.get(name) : store.getString(name);
    }

    public String getValue(@NotNull String name, @NotNull String defaultValue) {
    	String value = getValue(name);
        return value == null ? defaultValue : value;
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

    private void updateAllSetKeys(String key) {
    	if (!allSetKeys.contains(key)) {
        	allSetKeys.add(key);
        	setValue(ALL_SET_KEYS, Utils.serialize(allSetKeys, true));
    	}
    }

    private void updateAllSetKeys(List<String> keys) {
    	if (!keys.isEmpty()) {
    		allSetKeys.addAll(keys);
    		setValue(ALL_SET_KEYS, Utils.serialize(allSetKeys, true));
    	}
    }

    private static void addSettingsKeys(Class<?> rootClass, List<String> keys, Set<String> securityKeys) {
        Field[] fields = rootClass.getDeclaredFields();
        for (Field field : fields) {
            if (java.lang.reflect.Modifier.isStatic(field.getModifiers())) {
                try {
                    Object value = field.get(null);
                    if (value instanceof String) {
                        String strValue = (String) value;
                        if (isKey(strValue) && !securityKeys.contains(strValue)) {
                            keys.add((String) value);
                        }
                    }
                } catch (IllegalAccessException ignored) {
                }
            }
        }
        for (Class<?> innerClass : rootClass.getClasses()) {
            addSettingsKeys(innerClass, keys, securityKeys);
        }
    }

    private static boolean isKey(String value) {
        return value.startsWith("openapi.") || value.startsWith("com.xliic.openapi.settings");
    }
}
