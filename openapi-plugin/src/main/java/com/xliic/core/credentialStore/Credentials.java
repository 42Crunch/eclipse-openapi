package com.xliic.core.credentialStore;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class Credentials {

    private final String user;
    private final String password;

    public Credentials(@NotNull String user, @Nullable String password) {
        this.user = user;
        this.password = password;
    }

    public String getUser() {
        return user;
    }

    public String getPassword() {
        return password;
    }

    public String getUserName() {
        return user;
    }

    public String getPasswordAsString() {
        return password;
    }
}
