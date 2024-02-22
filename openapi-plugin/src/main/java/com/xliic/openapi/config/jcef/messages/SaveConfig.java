package com.xliic.openapi.config.jcef.messages;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;
import static com.xliic.openapi.settings.Settings.Platform.Scan.IMAGE;
import static com.xliic.openapi.settings.Settings.Platform.Scan.RUNTIME;
import static com.xliic.openapi.settings.Settings.Platform.Scan.SERVICES;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.REPLACE_LOCALHOST;
import static com.xliic.openapi.settings.Settings.Platform.Scan.Docker.USE_HOST_NETWORK;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveConfig extends WebAppProduce {

    @NotNull
    private final Project project;

    public SaveConfig(@NotNull Project project) {
        // Accessing security storage is slow operation, do not use avoid EDT
        super("saveConfig", false, false, 1000);
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void quickRun(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            SettingsService settingsService = SettingsService.getInstance();
            settingsService.setCacheValue(URL, map.get("platformUrl"));
            settingsService.setCacheValue(API_KEY, map.get("platformApiToken"));
            settingsService.setCacheValue(IMAGE, map.get("scanImage"));
            settingsService.setCacheValue(RUNTIME, map.get("scanRuntime"));
            Map<String, Object> docker = (Map<String, Object>) map.get("docker");
            if (docker != null) {
                settingsService.setCacheValue(REPLACE_LOCALHOST, docker.get("replaceLocalhost"));
                settingsService.setCacheValue(USE_HOST_NETWORK, docker.get("useHostNetwork"));
            }
            Map<String, Object> platformServices = (Map<String, Object>) map.get("platformServices");
            if (platformServices != null) {
                if ("manual".equals(platformServices.get("source"))) {
                    settingsService.setCacheValue(SERVICES, platformServices.get("manual"));
                } else {
                    settingsService.setCacheValue(SERVICES, "");
                }
            }
            Map<String, Object> scandManager = (Map<String, Object>) map.get("scandManager");
            if (scandManager != null) {
                settingsService.setCacheValue(ScandMgr.URL, scandManager.get("url"));
                settingsService.setCacheValue(ScandMgr.AUTH, scandManager.get("auth"));
                Map<String, Object> header = (Map<String, Object>) scandManager.get("header");
                if (header != null) {
                    settingsService.setCacheValue(ScandMgr.HEADER, Utils.serialize(header, true, ""));
                }
            }
            settingsService.setCacheValue(Settings.CliAst.REPOSITORY, map.get("repository"));
            settingsService.setCacheValue(Settings.Platform.TEMP_COLLECTION_NAME, map.get("platformTemporaryCollectionName"));
            settingsService.setCacheValue(Settings.Platform.MANDATORY_TAGS, map.get("platformMandatoryTags"));
        }
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            quickRun(payload);
            Set<String> updatedKeys = new HashSet<>();
            Map<String, Object> prevData = new HashMap<>();
            SettingsService.getInstance().save(updatedKeys, prevData);
            if (!updatedKeys.isEmpty() && !project.isDisposed()) {
                addPlatformTurnOnOffKeys(updatedKeys, prevData);
                ApplicationManager.getApplication().invokeLater(() ->
                        project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData));
            }
        }
    }

    private void addPlatformTurnOnOffKeys(Set<String> updatedKeys, Map<String, Object> prevData) {
        if (updatedKeys.contains(Platform.Credentials.API_KEY)) {
            final String prevApiKey = (String) prevData.get(Platform.Credentials.API_KEY);
            boolean wasPltEnabled = prevApiKey != null && !prevApiKey.isEmpty();
            boolean nowPltEnabled = PlatformConnection.isPlatformIntegrationEnabled();
            if (nowPltEnabled && !wasPltEnabled) {
                updatedKeys.add(Platform.TURNED_ON);
                return;
            }
            if (!nowPltEnabled && wasPltEnabled) {
                updatedKeys.add(Platform.TURNED_OFF);
            }
        }
    }
}





