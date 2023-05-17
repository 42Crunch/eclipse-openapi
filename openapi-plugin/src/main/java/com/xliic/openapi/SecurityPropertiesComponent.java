package com.xliic.openapi;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.passwordSafe.PasswordSafe;

public class SecurityPropertiesComponent implements Disposable {

    @NotNull
    private static final SecurityPropertiesComponent COMPONENT = new SecurityPropertiesComponent();

    @NotNull
    private final Map<String, CredentialAttributes> attributes = new HashMap<>();

    @NotNull
    public static SecurityPropertiesComponent getInstance() {
        return COMPONENT;
    }

    private CredentialAttributes getCredentialAttrsByKey(@NotNull String key) {
        if (attributes.containsKey(key)) {
            return attributes.get(key);
        }
        CredentialAttributes attr = new CredentialAttributes(CredentialAttributesKt.generateServiceName("xliic", key));
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

    @Override
    public void dispose() {
        attributes.clear();
    }
}
