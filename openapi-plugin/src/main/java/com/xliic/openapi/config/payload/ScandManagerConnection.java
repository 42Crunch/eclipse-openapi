package com.xliic.openapi.config.payload;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;

public class ScandManagerConnection {

    @NotNull
    private final String url;
    @NotNull
    private final String auth;
    @NotNull
    private final Map<String, String> header = new HashMap<>();

    @SuppressWarnings("unchecked")
    public ScandManagerConnection() {
    	SettingsService settingsService = SettingsService.getInstance();
        url = settingsService.getValue(Settings.Platform.Scan.ScandMgr.URL, "");
        auth = settingsService.getValue(Settings.Platform.Scan.ScandMgr.AUTH, Settings.Platform.Scan.ScandMgr.AUTH_NONE);
        header.put("name", "");
        header.put("value", "");
        String propHeader = settingsService.getValue(Settings.Platform.Scan.ScandMgr.HEADER);
        if (propHeader != null) {
            Map<String, Object> mapHeader = (Map<String, Object>) Utils.deserialize(propHeader);
            if (mapHeader != null) {
                header.put("name", (String) mapHeader.getOrDefault("name", ""));
                header.put("value", (String) mapHeader.getOrDefault("value", ""));
            }
        }
    }

    public @NotNull String getUrl() {
        return url;
    }

    public @NotNull String getAuth() {
        return auth;
    }

    public @NotNull Map<String, String> getHeader() {
        return header;
    }

    public boolean isHeaderAvailable() {
        return !header.getOrDefault("name", "").isEmpty() && !header.getOrDefault("value", "").isEmpty();
    }
}
