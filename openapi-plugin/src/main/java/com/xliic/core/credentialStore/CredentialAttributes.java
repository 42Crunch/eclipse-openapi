package com.xliic.core.credentialStore;

import org.jetbrains.annotations.NotNull;

public class CredentialAttributes {

    private final String serviceName;

    public CredentialAttributes(@NotNull String serviceName) {
        this.serviceName = serviceName;
    }

    public String getServiceName() {
        return serviceName;
    }
}
