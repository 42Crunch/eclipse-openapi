package com.xliic.openapi.settings;

import static com.xliic.openapi.settings.Settings.DEFAULTS;
import static com.xliic.openapi.settings.Settings.ExtRef.APPROVED_HOSTNAMES;
import static com.xliic.openapi.settings.Settings.ExtRef.APPROVED_HOST_CONFIG;
import static com.xliic.openapi.settings.Settings.InlinedAnnotations.ENABLE_FLAG;
import static com.xliic.openapi.settings.Settings.Log.ENABLE_MAX_LOG_LEVEL_FLAG;
import static com.xliic.openapi.settings.Settings.Internal.INTERNAL_FEATURES;
import static com.xliic.openapi.settings.Settings.Internal.INTERNAL_USE_DEV_ENDPOINTS;
import static com.xliic.openapi.settings.Settings.Outline.ABC_SORT;
import static com.xliic.openapi.settings.Settings.Outline.SHOW_OUTLINE_DEMO;
import static com.xliic.openapi.settings.Settings.Platform.TURNED_OFF;
import static com.xliic.openapi.settings.Settings.Platform.TURNED_ON;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_ANOND_TOKEN;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_API_TOKEN;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ENV_SECRETS_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.REPLACE_LOCALHOST;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.USE_HOST_NETWORK;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.HEADER;
import static com.xliic.openapi.settings.Settings.SnakeYamlSettings.CODE_POINT_LIMIT;
import static com.xliic.openapi.settings.Settings.TryIt.INSECURE_SSL_HOSTNAMES;

import java.lang.reflect.Field;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.passwordSafe.PasswordSafe;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.services.ISettingsService;

public class SettingsService implements ISettingsService, Disposable  {

    private static final String KEY_PREFIX_OLD = "openapi.";
    private static final String KEY_PREFIX = "com.xliic.openapi.settings";
    public static final String SUBSYSTEM = "xliic";
    private static final Set<String> IGNORED_KEYS = Set.of(TURNED_ON, TURNED_OFF);
    private static final Set<String> SAFE_KEYS = Set.of(API_KEY, ENV_SECRETS_KEY, HEADER, APPROVED_HOST_CONFIG);
    private static final Set<String> BOOLEAN_KEYS = Set.of(ABC_SORT, REPLACE_LOCALHOST, USE_HOST_NETWORK, 
    		SHOW_OUTLINE_DEMO, INTERNAL_FEATURES, INTERNAL_USE_DEV_ENDPOINTS, ENABLE_FLAG, ENABLE_MAX_LOG_LEVEL_FLAG);
    private static final Set<String> LIST_KEYS = Set.of(APPROVED_HOSTNAMES, INSECURE_SSL_HOSTNAMES);
    private static final Map<String, Converter> CONVERTERS = new HashMap<>();
    
    @NotNull
    private final List<String> keys = new LinkedList<>();
    @NotNull
    private final Map<String, Object> cache = new ConcurrentHashMap<>();

    public SettingsService() {
    	CONVERTERS.put(APPROVED_HOST_CONFIG, new ListConverter());
        addPropertiesKeys(Settings.class, keys);
    }

    @NotNull
    public static SettingsService getInstance() {
        return ApplicationManager.getApplication().getService(SettingsService.class);
    }

    public void loadCache() {
        synchronized (this) {
            if (cache.isEmpty()) {
                PasswordSafe passwdSafe = PasswordSafe.getInstance();
                PropertiesComponent propsComp = PropertiesComponent.getInstance();
                // Set default properties
                for (Map.Entry<String, Object> entry : DEFAULTS.entrySet()) {
                    String key = entry.getKey();
                    if (Settings.Platform.Credentials.URL.equals(key)) {
                        String value = PropertiesComponent.getInstance().getValue(key);
                        if (StringUtils.isEmpty(value)) {
                            setValue(key, (String) DEFAULTS.get(key));
                        }
                    } else if (Settings.Platform.Credentials.AUTH_TYPE.equals(key)) {
                        String value = PropertiesComponent.getInstance().getValue(key);
                        if (StringUtils.isEmpty(value)) {
                            setValue(key, getDerivedAuthType(propsComp, passwdSafe));
                        }
                    } else if (!isValueSetInIDE(key)) {
                        // System.out.println(">>> DEF: key [" + key + "] = <" + entry.getValue() + ">");
                        setPropertyValue(propsComp, passwdSafe, key, entry.getValue());
                    }
                }
                propsComp.save();
                // Load cache
                for (String key : keys) {
                    Object value = getPropertyValue(propsComp, passwdSafe, key);
                    if (value != null) {
                        cache.put(key, value);
                        // System.out.println(">>> key [" + key + "] = <" + value + ">");
                    }
                }
            }
        }
    }
    
    public boolean useDevEndpoints() {
        return getBoolean(INTERNAL_USE_DEV_ENDPOINTS);
    }

    public void save(@NotNull Set<String> updatedKeys, @NotNull Map<String, Object> prevData) {
        PasswordSafe passwordSafe = PasswordSafe.getInstance();
        PropertiesComponent propertiesComponent = PropertiesComponent.getInstance();
        for (String key : keys) {
            Object value = getPropertyValue(propertiesComponent, passwordSafe, key);
            Object newValue = cache.get(key);
            if (!Objects.equals(value, newValue) && newValue != null) {
                updatedKeys.add(key);
                prevData.put(key, value);
                setPropertyValue(propertiesComponent, passwordSafe, key, newValue);
                // System.out.println(">>> UPD: key [" + key + "] from <" + value + "> to <" + newValue + ">");
            }
        }
        propertiesComponent.save();
    }

    public boolean isValueSetInIDE(@NotNull String key) {
        // It is called before cache is loaded
        if (SAFE_KEYS.contains(key)) {
            return PasswordSafe.getInstance().get(getCredentialAttrs(key)) != null;
        } else {
            return PropertiesComponent.getInstance().isValueSet(key);
        }
    }

    public void resetToDefaultValue(@NotNull String key) {
    	Object value = DEFAULTS.get(key);
    	setCacheValue(key, value);
        PasswordSafe passwordSafe = PasswordSafe.getInstance();
        PropertiesComponent propertiesComponent = PropertiesComponent.getInstance();
        setPropertyValue(propertiesComponent, passwordSafe, key, value);
    }

    // Do not call this method (it is only used in ClearAllPropsAction)
    public void unsetValue(@NotNull String key) {
        cache.remove(key);
        if (SAFE_KEYS.contains(key)) {
            PasswordSafe.getInstance().set(getCredentialAttrs(key), null);
        } else {
            if (LIST_KEYS.contains(key)) {
                PropertiesComponent.getInstance().setList(key, null);
            } else {
                PropertiesComponent.getInstance().unsetValue(key);
            }
            PropertiesComponent.getInstance().save();
        }
    }

    @Nullable
    public Object getValueAsObject(@NotNull String key) {
        return cache.get(key);
    }

    @Nullable
    public String getValue(@NotNull String key) {
        return (String) cache.get(key);
    }

    public int getIntValue(@NotNull String key, @NotNull String defaultValue) {
        final String value = getValue(key);
        return Integer.parseInt(value == null ? defaultValue : value);
    }

    @NotNull
    public String getValue(@NotNull String key, @NotNull String defaultValue) {
        return Objects.requireNonNullElse(getValue(key), defaultValue);
    }
    
    public boolean getValue(@NotNull String key, boolean defaultValue) {
        Object value = getValueAsObject(key);
        return value != null ? (boolean) value : defaultValue;
    }

    @SuppressWarnings("unchecked")
    public @Nullable List<String> getList(@NotNull String key) {
        return (List<String>) cache.get(key);
    }

    public boolean getBoolean(@NotNull String key) {
        return (boolean) cache.get(key);
    }

    public Set<String> getSet(@NotNull String key) {
        List<String> values = getList(key);
        if (values == null) {
            return new HashSet<>();
        }
        Set<String> result = new HashSet<>();
        for (String value : values) {
            if (!StringUtils.isEmpty(value)) {
                result.add(value);
            }
        }
        return result;
    }

    public void setCacheValue(@NotNull String key, @NotNull Object value) {
        cache.put(key, value);
    }

    public void setValue(@NotNull String key, @NotNull String value) {
        setCacheValue(key, value);
        if (SAFE_KEYS.contains(key)) {
            PasswordSafe.getInstance().set(getCredentialAttrs(key), new Credentials("", value));
        } else {
            PropertiesComponent.getInstance().setValue(key, value);
            PropertiesComponent.getInstance().save();
        }
    }

    public void setValue(@NotNull String key, boolean value) {
        if (SAFE_KEYS.contains(key)) {
            throw new IllegalArgumentException("Boolean is unsupported for key: " + key);
        }
        setCacheValue(key, value);
        // Method setValue for boolean can unset the property, use direct call for string
        PropertiesComponent.getInstance().setValue(key, ((Boolean) value).toString());
        PropertiesComponent.getInstance().save();
    }

    public void setList(@NotNull String key, @Nullable List<String> value) {
        if (SAFE_KEYS.contains(key)) {
            throw new IllegalArgumentException("Collection is unsupported for key: " + key);
        }
        if (value == null) {
            cache.remove(key);
        } else {
            setCacheValue(key, value);
        }
        PropertiesComponent.getInstance().setList(key, value);
        PropertiesComponent.getInstance().save();
    }

    public @NotNull List<String> getKeys() {
        return Collections.unmodifiableList(keys);
    }
    
    public int getCodePointLimit() {
        final int value = getIntValue(CODE_POINT_LIMIT, "20");
        // Value in MB, return bytes
        return value * 1024 * 1024;
    }

    private CredentialAttributes getCredentialAttrs(@NotNull String key) {
        return new CredentialAttributes(CredentialAttributesKt.generateServiceName(SUBSYSTEM, key));
    }

    private static void addPropertiesKeys(Class<?> rootClass, List<String> keys) {
        Field[] fields = rootClass.getDeclaredFields();
        for (Field field : fields) {
            if (java.lang.reflect.Modifier.isStatic(field.getModifiers())) {
                try {
                    Object value = field.get(null);
                    if (value instanceof String) {
                        String key = (String) value;
                        if (isKey(key) && !IGNORED_KEYS.contains(key)) {
                            keys.add(key);
                        }
                    }
                } catch (IllegalAccessException ignored) {
                }
            }
        }
        for (Class<?> innerClass : rootClass.getClasses()) {
            addPropertiesKeys(innerClass, keys);
        }
    }

    private static boolean isKey(String value) {
        return value.startsWith(KEY_PREFIX_OLD) || value.startsWith(KEY_PREFIX);
    }

    private Object getSimplePropertyValue(PropertiesComponent propsComp, PasswordSafe passwdSafe, String key) {
        if (SAFE_KEYS.contains(key)) {
            return passwdSafe.getPassword(getCredentialAttrs(key));
        } else {
            if (LIST_KEYS.contains(key)) {
                return propsComp.getList(key);
            } else if (BOOLEAN_KEYS.contains(key)) {
                return Boolean.parseBoolean(propsComp.getValue(key));
            }
            // Add other types if necessary
            return propsComp.getValue(key);
        }
    }
    
    private Object getPropertyValue(PropertiesComponent propsComp, PasswordSafe passwdSafe, String key) {
        Object value = getSimplePropertyValue(propsComp, passwdSafe, key);
        if (value instanceof String && CONVERTERS.containsKey(key)) {
            return CONVERTERS.get(key).toObject((String) value);
        }
        return value;
    }

    @SuppressWarnings("unchecked")
    private void setPropertyValue(PropertiesComponent propsComp, PasswordSafe passwdSafe, String key, Object value) {
        if (SAFE_KEYS.contains(key)) {
        	String safeValue = getStringPropertyValue(key, value);
            passwdSafe.set(getCredentialAttrs(key), value == null ? null : new Credentials("", safeValue));
        } else {
            if (LIST_KEYS.contains(key)) {
                propsComp.setList(key , (Collection<String>) value);
            } else if (BOOLEAN_KEYS.contains(key)) {
                // Method setValue for boolean can unset the property, use direct call for string
                propsComp.setValue(key, ((Boolean) value).toString());
            } else {
                propsComp.setValue(key, getStringPropertyValue(key, value));
            }
            // Add other types if necessary
        }
    }

    private String getStringPropertyValue(String key, Object value) {
        if (CONVERTERS.containsKey(key)) {
            return CONVERTERS.get(key).toString(value);
        }
        return (String) value;
    }

    private String getDerivedAuthType(PropertiesComponent propsComp, PasswordSafe passwdSafe) {
        // Derived auth type is api-token only if anondToken is not set and apiToken is set, otherwise it is anond-token
        String anondToken = (String) getPropertyValue(propsComp, passwdSafe, Settings.Audit.TOKEN);
        String apiToken = (String) getPropertyValue(propsComp, passwdSafe, API_KEY);
        return StringUtils.isEmpty(anondToken) && !StringUtils.isEmpty(apiToken) ? AUTH_TYPE_API_TOKEN : AUTH_TYPE_ANOND_TOKEN;
    }

    @Override
    public void dispose() {
        keys.clear();
        cache.clear();
    }
}
