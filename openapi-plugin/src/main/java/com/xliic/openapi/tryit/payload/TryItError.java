package com.xliic.openapi.tryit.payload;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.lang.StringUtils;

import com.xliic.openapi.Payload;

public class TryItError implements Payload {

    private static final String NO_CERT_MSG = "unable to find valid certification path to requested target";

    private final String message;
    private final String code;
    private final boolean sslError;

    public TryItError(String message, boolean sslError) {
        this.message = message;
        this.code = "";
        this.sslError = sslError;
    }

    @Override
    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("message", getMessage());
        result.put("code", code);
        result.put("sslError", sslError);
        return result;
    }

    private String getMessage() {
        if (message.endsWith(NO_CERT_MSG)) {
            return StringUtils.capitalize(NO_CERT_MSG);
        } else {
            return message;
        }
    }
}
