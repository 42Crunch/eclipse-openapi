package com.xliic.openapi.webapp.http.payload;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Base64;
import java.util.Map;

public class MtlsConfig {

    private final byte[] clientCrt;
    @NotNull
    private final String clientCrtPwd;
    private final byte[] caServerCrt;

    public MtlsConfig(@NotNull String clientCrt, @NotNull String clientCrtPwd, @Nullable String caServerCrt) {
        this.clientCrt = Base64.getDecoder().decode(clientCrt);
        this.clientCrtPwd = clientCrtPwd;
        this.caServerCrt = caServerCrt != null ? Base64.getDecoder().decode(caServerCrt) : null;
    }

    @Nullable
    public static MtlsConfig getInstance(Map<String, Object> mtlsConfigPayload) {
        if (mtlsConfigPayload == null) {
            return null;
        }
        String clientCrt = (String) mtlsConfigPayload.get("clientCertificate");
        String clientCrtPwd = (String)  mtlsConfigPayload.get("clientCertificatePassword");
        String caServerCrt = (String) mtlsConfigPayload.get("caServerCertificate");
        return new MtlsConfig(clientCrt, clientCrtPwd, caServerCrt);
    }

    public byte[] getClientCertificate() {
        return clientCrt;
    }

    @NotNull
    public String getClientCertificatePassword() {
        return clientCrtPwd;
    }

    public byte[] getCaServerCertificate() {
        return caServerCrt;
    }
}
