package com.xliic.openapi.platform;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

import java.util.regex.Pattern;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.Utils;

public class PlatformConnection {

    private static final Pattern UUID_REGEX = Pattern
            .compile("^((ide_)|(api_))?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$");

    private final String apiToken;
    private final String userAgent;
    private final String referer;
    private final String platformUrl;

    public PlatformConnection(String apiToken, String userAgent, String referer, String platformUrl) {
        this.apiToken = apiToken;
        this.userAgent = userAgent;
        this.referer = referer;
        this.platformUrl = platformUrl;
    }

    public static boolean isPlatformIntegrationEnabled() {
        String url = SettingsService.getInstance().getValue(URL);
        if (StringUtils.isEmpty(url)) {
            return false;
        }
        String key = SettingsService.getInstance().getValue(API_KEY, "");
        return !StringUtils.isEmpty(key);
    }

    public static boolean isAPIKeyValid(@NotNull String apiKey) {
        return UUID_REGEX.matcher(apiKey).matches();
    }

    public static PlatformConnection getOptions() {
        String platformURL = SettingsService.getInstance().getValue(URL);
        if (!StringUtils.isEmpty(platformURL) && platformURL.endsWith("/")) {
            platformURL = StringUtils.strip(platformURL, "/");
        }
        String apiToken = SettingsService.getInstance().getValue(API_KEY, "");
        return new PlatformConnection(apiToken, Utils.getUserAgent(), "", platformURL);
    }

    public String getApiToken() {
        return apiToken;
    }

    public String getUserAgent() {
        return userAgent;
    }

    public String getReferer() {
        return referer;
    }

    public String getPlatformUrl() {
        return platformUrl;
    }
}
