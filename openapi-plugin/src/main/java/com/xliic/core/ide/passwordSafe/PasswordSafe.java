package com.xliic.core.ide.passwordSafe;

import org.eclipse.equinox.security.storage.ISecurePreferences;
import org.eclipse.equinox.security.storage.SecurePreferencesFactory;
import org.eclipse.equinox.security.storage.StorageException;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.diagnostic.Logger;
import com.xliic.openapi.settings.SettingsService;

public class PasswordSafe {

    private static final String NODE_ID = "token";

    private static PasswordSafe manager = new PasswordSafe();;
    private final ISecurePreferences root = SecurePreferencesFactory.getDefault();

    private PasswordSafe() {
    }

    public static PasswordSafe getInstance() {
        return manager;
    }

    public void set(@NotNull CredentialAttributes credentialAttributes, @Nullable Credentials credentials) {
        ISecurePreferences node = root.node(credentialAttributes.getServiceName());
        if (credentials == null) {
            node.remove(NODE_ID);
        } else {
            try {
            	String value = credentials.getPassword();
            	if (value == null) {
            		node.remove(NODE_ID);
            	} else {
                    node.put(NODE_ID, value, true);
            	}
            } catch (StorageException e) {
            	Logger.getInstance(PasswordSafe.class).error(e);
            }
        }
    }

    @Nullable
    public String getPassword(@NotNull CredentialAttributes credentialAttributes) {
        ISecurePreferences node = root.node(credentialAttributes.getServiceName());
        try {
            return node.get(NODE_ID, null);
        } catch (StorageException e) {
        	Logger.getInstance(PasswordSafe.class).error(e);
        }
        return null;
    }

    @Nullable
    public String tryIsPasswordOk(@NotNull String key) {
        try {
        	CredentialAttributes credentialAttributes = new CredentialAttributes(
        			CredentialAttributesKt.generateServiceName(SettingsService.SUBSYSTEM, key));
            root.node(credentialAttributes.getServiceName()).get(NODE_ID, null);
        } catch (Exception e) {
            return e.getMessage();
        }
        return null;
    }

    @Nullable
    public Credentials get(@NotNull CredentialAttributes credentialAttributes) {
    	String value = getPassword(credentialAttributes);
    	return value == null ? null : new Credentials("", value);
    }
}
