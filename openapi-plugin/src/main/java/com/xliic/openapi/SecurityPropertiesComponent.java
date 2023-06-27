package com.xliic.openapi;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr.HEADER;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.passwordSafe.PasswordSafe;

public class SecurityPropertiesComponent implements Disposable {

    private static final SecurityPropertiesComponent COMPONENT = new SecurityPropertiesComponent();
    private static final String XLIIC = "xliic";

    private final Map<String, CredentialAttributes> attributes = new HashMap<>();

    @NotNull
    public static SecurityPropertiesComponent getInstance() {
        return COMPONENT;
    }

    private CredentialAttributes getCredentialAttrsByKey(@NotNull String key) {
        if (attributes.containsKey(key)) {
            return attributes.get(key);
        }
        CredentialAttributes attr = new CredentialAttributes(CredentialAttributesKt.generateServiceName(XLIIC, key));
        attributes.put(key, attr);
        return attr;
    }

    @Nullable
    public String getValue(@NotNull String key) {
        return PasswordSafe.getInstance().getPassword(getCredentialAttrsByKey(key));
    }

    @NotNull
    public String getValue(@NotNull String key, @NotNull String defaultValue) {
        String value = getValue(key);
        return value == null ? defaultValue : value;
    }

    public void setValue(@NotNull String key, @NotNull String value) {
        PasswordSafe.getInstance().set(getCredentialAttrsByKey(key), new Credentials("", value));
    }

    public void cleanAll(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        prevData.put(API_KEY, getValue(API_KEY));
        setValue(API_KEY, "");
        keys.add(API_KEY);
        prevData.put(HEADER, getValue(HEADER));
        setValue(HEADER, "");
        keys.add(HEADER);
    }

    @Nullable
    public String tryIsSecurePreferencesOk(@NotNull String key) {
        return PasswordSafe.getInstance().tryIsPasswordOk(getCredentialAttrsByKey(key));
    }

    @Override
    public void dispose() {
        attributes.clear();
    }
}
