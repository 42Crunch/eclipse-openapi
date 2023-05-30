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
import java.util.Objects;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.Settings.Platform;
import com.xliic.openapi.settings.Settings.Platform.Scan.ScandMgr;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveConfig extends WebAppProduce {

    @NotNull
    private static final PropertiesComponent props = PropertiesComponent.getInstance();
    @NotNull
    private static final SecurityPropertiesComponent secProps = SecurityPropertiesComponent.getInstance();

    @NotNull
    private final Project project;
    @NotNull
    private final Set<String> updatedKeys = new HashSet<>();
    @NotNull
    private final Map<String, Object> prevData = new HashMap<>();

    public SaveConfig(@NotNull Project project) {
        super("saveConfig");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            updatedKeys.clear();
            prevData.clear();
            Map<String, Object> map = (Map<String, Object>) payload;
            updateIfNotEqual(URL, "platformUrl", map);
            secureUpdateIfNotEqual(API_KEY, (String) map.get("platformApiToken"));
            updateIfNotEqual(IMAGE,"scanImage", map);
            updateIfNotEqual(RUNTIME,"scanRuntime", map);
            Map<String, Object> docker = (Map<String, Object>) map.get("docker");
            if (docker != null) {
                updateIfNotEqual(REPLACE_LOCALHOST,"replaceLocalhost", docker, true);
                updateIfNotEqual(USE_HOST_NETWORK,"useHostNetwork", docker, true);
            }
            Map<String, Object> platformServices = (Map<String, Object>) map.get("platformServices");
            if (platformServices != null) {
                if ("manual".equals(platformServices.get("source"))) {
                    updateIfNotEqual(SERVICES,"manual", platformServices);
                } else {
                    updateByKeyIfNotEqual(SERVICES, props.getValue(SERVICES), "", false);
                }
            }
            Map<String, Object> scandManager = (Map<String, Object>) map.get("scandManager");
            if (scandManager != null) {
                updateIfNotEqual(ScandMgr.URL,"url", scandManager);
                updateIfNotEqual(ScandMgr.AUTH,"auth", scandManager);
                Map<String, Object> header = (Map<String, Object>) scandManager.get("header");
                if (header != null) {
                    secureUpdateIfNotEqual(ScandMgr.HEADER, Utils.serialize(header, true));
                }
            }
            if (!updatedKeys.isEmpty() && !project.isDisposed()) {
                addPlatformTurnOnOffKeys(updatedKeys, prevData);
                project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData);
            }
        }
    }

    private void updateIfNotEqual(String key, String mapKey, Map<String, Object> map) {
        updateIfNotEqual(key, mapKey, map, false);
    }

    private void updateIfNotEqual(String key, String mapKey, Map<String, Object> map, boolean asBool) {
        updateByKeyIfNotEqual(key, asBool ? props.getBoolean(key) : props.getValue(key), map.getOrDefault(mapKey, ""), false);
    }

    private void secureUpdateIfNotEqual(String key, String newValue) {
        updateByKeyIfNotEqual(key, secProps.getValue(key), newValue, true);
    }

    private void updateByKeyIfNotEqual(String key, Object value, Object newValue, boolean isSecProps) {
        // System.out.println(">>> [" + key + "] old=" + value + " new=" + newValue + " equals=" + Objects.equals(value, newValue));
        if (!Objects.equals(value, newValue)) {
            if (isSecProps) {
                secProps.setValue(key, (String) newValue);
            } else {
                if (newValue instanceof Boolean) {
                    props.setValue(key, (Boolean) newValue);
                } else {
                    props.setValue(key, (String) newValue);
                }
            }
            updatedKeys.add(key);
            prevData.put(key, value);
        }
    }

    private void addPlatformTurnOnOffKeys(Set<String> updatedKeys, Map<String, Object> prevData) {
        final String prevApiKey = (String) prevData.get(Settings.Platform.Credentials.API_KEY);
        boolean wasPltEnabled = !prevApiKey.isEmpty();
        boolean nowPltEnabled = PlatformConnection.isPlatformIntegrationEnabled();
        if (nowPltEnabled && !wasPltEnabled) {
            updatedKeys.add(Platform.TURNED_ON);
            return;
        }
        if (!nowPltEnabled && wasPltEnabled) {
            updatedKeys.add(Platform.TURNED_OFF);
            return;
        }
    }
}





