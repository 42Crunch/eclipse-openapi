package com.xliic.core.ide.passwordSafe;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.security.GeneralSecurityException;
import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.Base64;

import javax.crypto.Cipher;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.SecretKeySpec;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class PasswordSafe {
	
	private static final String COLON = ":";
	
	private static PasswordSafe manager;
	private SecretKeySpec key;

	private PasswordSafe() {
		String pluginId = OpenAPIAbstractUIPlugin.getInstance().getPluginId();
        byte[] salt = getClass().toString().getBytes();
        try {
	        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA512");
	        PBEKeySpec keySpec = new PBEKeySpec(pluginId.toCharArray(), salt, 100, 128);
	        key = new SecretKeySpec(keyFactory.generateSecret(keySpec).getEncoded(), "AES");
		} catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
			key = null;
		}
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
		if (value == null) {
			PropertiesComponent.getInstance().unsetValue(name);	
		} else {
			if (key != null) {
				try {
					value = encrypt(value, key);
				} catch (UnsupportedEncodingException | GeneralSecurityException e) {
				}
			}
			PropertiesComponent.getInstance().setValue(name, value);	
		}
	}

	public String getPassword(@NotNull CredentialAttributes credentialAttributes) {
		String name = credentialAttributes.getServiceName();
		String value = PropertiesComponent.getInstance().getValue(name);
		if (key != null && value.contains(COLON)) {
			try {
				value = decrypt(value, key);
			} catch (IOException | GeneralSecurityException e) {
			}
		}
		return value;
	}

    private static String encrypt(String value, SecretKeySpec key) 
    		throws GeneralSecurityException, UnsupportedEncodingException {
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.ENCRYPT_MODE, key);
        IvParameterSpec spec = cipher.getParameters().getParameterSpec(IvParameterSpec.class);
        return encode(spec.getIV()) + COLON + encode(cipher.doFinal(value.getBytes("UTF-8")));
    }

    private static String decrypt(String value, SecretKeySpec key) 
    		throws GeneralSecurityException, IOException {
    	String [] items = value.split(COLON);
        Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
        cipher.init(Cipher.DECRYPT_MODE, key, new IvParameterSpec(decode(items[0])));
        return new String(cipher.doFinal(decode(items[1])), "UTF-8");
    }

    private static String encode(byte[] bytes) {
        return Base64.getEncoder().encodeToString(bytes);
    }

    private static byte[] decode(String property) throws IOException {
        return Base64.getDecoder().decode(property);
    }
}
