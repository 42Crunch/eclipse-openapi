package com.xliic.openapi;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ENV_SECRETS_KEY;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.concurrent.ConcurrentHashMap;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.passwordSafe.PasswordSafe;
import com.xliic.openapi.settings.Settings;

public class SecurityPropertiesComponent implements Disposable {

    @NotNull
    private static final SecurityPropertiesComponent COMPONENT = new SecurityPropertiesComponent();
    @NotNull
    private final Map<String, CredentialAttributes> attributes = new HashMap<>();
    @NotNull
    private final Map<String, String> cache = new ConcurrentHashMap<>();
    private volatile boolean ready = false;    
    private static final String XLIIC = "xliic";

    @NotNull
    public static SecurityPropertiesComponent getInstance() {
        return COMPONENT;
    }
    
    public void initCache() {
        cache.put(API_KEY, getPasswordSafeValue(API_KEY));
        cache.put(ENV_SECRETS_KEY, getPasswordSafeValue(ENV_SECRETS_KEY));
        cache.put(Settings.Platform.Scan.ScandMgr.HEADER, getPasswordSafeValue(Settings.Platform.Scan.ScandMgr.HEADER));
        ready = true;
    }

    public boolean isReady() {
        return ready;
    }

    private CredentialAttributes getCredentialAttrsByKey(@NotNull String key) {
        if (attributes.containsKey(key)) {
            return attributes.get(key);
        }
        CredentialAttributes attr = new CredentialAttributes(CredentialAttributesKt.generateServiceName(XLIIC, key));
        attributes.put(key, attr);
        return attr;
    }


    private String getPasswordSafeValue(@NotNull String key) {
        String res = PasswordSafe.getInstance().getPassword(getCredentialAttrsByKey(key));
        if (res == null) {
            return "";
        }
        return res;
    }
    
    @Nullable
    public String getValue(@NotNull String key) {
        return cache.get(key);
    }

    @NotNull
    public String getValue(@NotNull String key, @NotNull String defaultValue) {
        String value = getValue(key);
        return value == null ? defaultValue : value;
    }

    public void setValue(@NotNull String key, @NotNull String value) {
        PasswordSafe.getInstance().set(getCredentialAttrsByKey(key), new Credentials("", value));
        cache.put(key, value);
    }

    public void cleanAll(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
    	clean(API_KEY, keys, prevData);
    	clean(ENV_SECRETS_KEY, keys, prevData);
    	clean(Settings.Platform.Scan.ScandMgr.HEADER, keys, prevData);
    }

    private void clean(@NotNull String key, @NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        prevData.put(key, getValue(key));
        setValue(key, "");
        keys.add(key);
    }

    @Nullable
    public String tryIsSecurePreferencesOk(@NotNull String key) {
        return PasswordSafe.getInstance().tryIsPasswordOk(getCredentialAttrsByKey(key));
    }

    @Override
    public void dispose() {
        ready = false;
        cache.clear();
        attributes.clear();
    }
}
