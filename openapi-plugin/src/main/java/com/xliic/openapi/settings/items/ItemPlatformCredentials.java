package com.xliic.openapi.settings.items;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.components.JTextField;
import com.xliic.openapi.platform.PlatformConnection;

public class ItemPlatformCredentials extends Item {

    private static final String ERROR_URL_TEXT = "Must be a valid URL";
    private static final String ERROR_API_KEY_TEXT = "Must be a valid API Token";

    protected final JTextField login;
    protected final JTextField password;

    public ItemPlatformCredentials(JTextField login, JTextField password) {
        super("");
        this.login = login;
        this.password = password;
        reset();
        validate(login);
        validate(password);
    }

    @Override
    public boolean valid() {
        boolean isURLValid = true;
        if (login.getText().isEmpty()) {
            drawValidationStatus(login, null);
        } else {
            isURLValid = PlatformConnection.isURLValid(login.getText());
            drawValidationStatus(login, isURLValid ? null : ERROR_URL_TEXT);
        }
        boolean isAPIKeyValid = true;
        if (password.getText().isEmpty()) {
            drawValidationStatus(password, null);
        } else {
            isAPIKeyValid = PlatformConnection.isAPIKeyValid(password.getText());
            drawValidationStatus(password, isAPIKeyValid ? null : ERROR_API_KEY_TEXT);
        }
        return isURLValid & isAPIKeyValid;
    }

    @Override
    public boolean isModified() {
        return isLoginChanged() || isPasswordChanged();
    }

    @Override
    public void reset() {
        login.setText(settings.getValue(URL));
        password.setText(PlatformConnection.getPlatformAPIKey());
    }

    @Override
    public void apply(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (isLoginChanged()) {
            keys.add(URL);
            prevData.put(URL, settings.getValue(URL));
            settings.setValue(URL, login.getText());
        }
        if (isPasswordChanged()) {
            keys.add(API_KEY);
            prevData.put(API_KEY, PlatformConnection.getPlatformAPIKey());
            PlatformConnection.setPlatformAPIKey(password.getText());
        }
    }

    private boolean isLoginChanged() {
        return !login.getText().equals(settings.getValue(URL));
    }
    private boolean isPasswordChanged() {
        return !password.getText().equals(PlatformConnection.getPlatformAPIKey());
    }
}
