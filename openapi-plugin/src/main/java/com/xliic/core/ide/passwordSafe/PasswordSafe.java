package com.xliic.core.ide.passwordSafe;

import org.eclipse.equinox.security.storage.ISecurePreferences;
import org.eclipse.equinox.security.storage.SecurePreferencesFactory;
import org.eclipse.equinox.security.storage.StorageException;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.Credentials;

public class PasswordSafe {
	
	private static final String NODE_ID = "token";
	
	private static PasswordSafe manager;
	private final ISecurePreferences root;

	private PasswordSafe() {
		root = SecurePreferencesFactory.getDefault();
	}

	public static PasswordSafe getInstance() {
		if (manager == null) {
			manager = new PasswordSafe();
		}
		return manager;
	}

	public void set(@NotNull CredentialAttributes credentialAttributes, @NotNull Credentials credentials) {
		String value = credentials.getPassword();
		String name = credentialAttributes.getServiceName();
	    ISecurePreferences node = root.node(name);
		if (value == null) {
			node.remove(NODE_ID);
		} else {
		    try {
		    	node.put(NODE_ID, value, true);
		    } catch (StorageException e) {
		        e.printStackTrace();
		    }
		}
	}

	@Nullable
	public String getPassword(@NotNull CredentialAttributes credentialAttributes) {
		String name = credentialAttributes.getServiceName();
	    ISecurePreferences node = root.node(name);
		try { 
			return node.get(NODE_ID, null);
		} catch (StorageException e) {
			e.printStackTrace();
		}
		return null;
	}
}
