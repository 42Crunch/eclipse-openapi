package com.xliic.openapi.config.jcef.messages;

import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.REPLACE_LOCALHOST;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.USE_HOST_NETWORK;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.config.payload.PlatformServices;
import com.xliic.openapi.config.payload.ScandManagerConnection;
import com.xliic.openapi.settings.SettingsService;
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
        result.put("anondToken", config.getAnondToken());
        result.put("platformAuthType", config.getPlatformAuthType());
        result.put("scanImage", config.getScanImage());
        result.put("scanRuntime", config.getScanRuntime());

        Map<String, Object> platformServices = new HashMap<>();
        PlatformServices configPlatformServices = config.getPlatformServices();
        platformServices.put("source", configPlatformServices.getSource());
        platformServices.put("manual", configPlatformServices.getManual());
        platformServices.put("auto", configPlatformServices.getAuto());
        result.put("platformServices", platformServices);

        SettingsService settingsService = SettingsService.getInstance();
        Map<String, Object> docker = new HashMap<>();
        docker.put("replaceLocalhost", settingsService.getBoolean(REPLACE_LOCALHOST));
        docker.put("useHostNetwork", settingsService.getBoolean(USE_HOST_NETWORK));
        result.put("docker", docker);

        Map<String, Object> scandManager = new HashMap<>();
        ScandManagerConnection configScandManager = config.getScandManager();
        scandManager.put("url", configScandManager.getUrl());
        scandManager.put("auth", configScandManager.getAuth());
        scandManager.put("timeout", configScandManager.getTimeout());
        scandManager.put("header", configScandManager.getHeader());
        result.put("scandManager", scandManager);

        result.put("insecureSslHostnames", config.getInsecureSslHostnames());
        result.put("platform", config.getPlatform());
        result.put("cli", config.getCliProps());
        result.put("repository", config.getRepository());
        
        result.put("platformCollectionNamingConvention", config.getPlatformCollectionNamingConvention().getPayload());
        result.put("platformTemporaryCollectionName", config.getPlatformTempCollectionName());
        result.put("platformMandatoryTags", config.getPlatformMandatoryTags());

        return result;
    }
}
