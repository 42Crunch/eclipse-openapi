package com.xliic.openapi.config.jcef.messages;

import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.REPLACE_LOCALHOST;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.USE_HOST_NETWORK;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class LoadConfig extends WebAppConsume {

    @NotNull
    private final Config config;

    public LoadConfig(@NotNull Config config) {
        super("loadConfig");
        this.config = config;
    }

    @Override
    @Nullable
    protected Object getPayload() {

        Map<String, Object> result = new HashMap<>();
        result.put("platformUrl", config.getPlatformUrl());
        result.put("platformApiToken", config.getPlatformApiToken());
        result.put("scanImage", config.getScanImage());
        result.put("scanRuntime", config.getScanRuntime());

        Map<String, Object> platformServices = new HashMap<>();
        PlatformServices configPlatformServices = config.getPlatformServices();
        platformServices.put("source", configPlatformServices.getSource());
        platformServices.put("manual", configPlatformServices.getManual());
        platformServices.put("auto", configPlatformServices.getAuto());
        result.put("platformServices", platformServices);

        PropertiesComponent props = PropertiesComponent.getInstance();
        Map<String, Object> docker = new HashMap<>();
        docker.put("replaceLocalhost", props.getBoolean(REPLACE_LOCALHOST));
        docker.put("useHostNetwork", props.getBoolean(USE_HOST_NETWORK));
        result.put("docker", docker);

        Map<String, Object> scandManager = new HashMap<>();
        ScandManagerConnection configScandManager = config.getScandManager();
        scandManager.put("url", configScandManager.getUrl());
        scandManager.put("auth", configScandManager.getAuth());
        scandManager.put("header", configScandManager.getHeader());
        result.put("scandManager", scandManager);

        result.put("insecureSslHostnames", Settings.getValues(Settings.TryIt.INSECURE_SSL_HOSTNAMES));
        return result;
    }
}
