package com.xliic.openapi.tryit.payload;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.Settings;

public class TryItConfig {

    @NotNull
    public Map<String, List<String>> getProperties() {
        Map<String, List<String>> config = new HashMap<>();
        config.put("insecureSslHostnames", new LinkedList<>(Settings.getValues(Settings.TryIt.INSECURE_SSL_HOSTNAMES)));
        return config;
    }
}
