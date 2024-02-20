package com.xliic.openapi.config.payload;

import java.net.URISyntaxException;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.NetUtils;

public class PlatformServices {

    private static final String AUTO = "auto";
    private static final String MANUAL = "manual";

    @NotNull
    private final String source;
    @NotNull
    private final String manual;
    @NotNull
    private final String auto;

    public PlatformServices() {
        String services = SettingsService.getInstance().getValue(Settings.Platform.Scan.SERVICES, "");
        source = services.isEmpty() ? AUTO : MANUAL;
        manual = services;
        auto = deriveServices();
    }

    public @NotNull String getSource() {
        return source;
    }

    public @NotNull String getManual() {
        return manual;
    }

    public @NotNull String getAuto() {
        return auto;
    }

    @NotNull
    public String getServices() {
        return AUTO.equals(getSource()) ? getAuto() : getManual();
    }

    private static String deriveServices() {
        String url = SettingsService.getInstance().getValue(Settings.Platform.Credentials.URL, "");
        if (!url.isEmpty()) {
            try {
                String host = NetUtils.getDomainName(url);
                if (host != null && host.toLowerCase().startsWith("platform")) {
                    return host.replaceFirst("platform", "services") + ":8001";
                }
                return "services." + host + ":8001";
            } catch (URISyntaxException ignored) {
            }
        }
        return "";
    }
}
