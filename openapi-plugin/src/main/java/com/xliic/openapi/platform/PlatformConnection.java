package com.xliic.openapi.platform;

import com.xliic.core.ide.passwordSafe.PasswordSafe;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.credentialStore.CredentialAttributes;
import com.xliic.core.credentialStore.CredentialAttributesKt;
import com.xliic.core.credentialStore.Credentials;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.settings.SettingsKeys;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.net.URISyntaxException;
import java.util.regex.Pattern;

public class PlatformConnection {

    private static final String USER_AGENT = "IntelliJ/" + ApplicationInfo.getInstance().getFullVersion();
    private static final Pattern UUID_REGEX =
            Pattern.compile("^(ide_)?[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$");

    private static final CredentialAttributes credentialAttributes = createCredentialAttributes();

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

    public static boolean isEmpty() {
        String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
        String apiToken = getPlatformAPIKey();
        return StringUtils.isEmpty(platformURL) || StringUtils.isEmpty(apiToken);
    }

    public static boolean isAPIKeyValid(@NotNull String apiKey) {
        return UUID_REGEX.matcher(apiKey).matches();
    }

    public static PlatformConnection getOptions() {
        String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
        if (!StringUtils.isEmpty(platformURL) && platformURL.endsWith("/")) {
            platformURL = StringUtils.strip(platformURL, "/");
        }
        String apiToken = getPlatformAPIKey();
        return new PlatformConnection(apiToken, USER_AGENT, "", platformURL);
    }

    public static void setDefaultPlatformURL() {
        String platformURL = PropertiesComponent.getInstance().getValue(SettingsKeys.PLATFORM);
        if (StringUtils.isEmpty(platformURL)) {
            PropertiesComponent.getInstance().setValue(SettingsKeys.PLATFORM, "https://platform.42crunch.com");
        }
    }

    private static CredentialAttributes createCredentialAttributes() {
        return new CredentialAttributes(
                CredentialAttributesKt.generateServiceName("xliic", SettingsKeys.API_KEY));
    }

    public static String getPlatformAPIKey() {
        String password = PasswordSafe.getInstance().getPassword(credentialAttributes);
        return StringUtils.isEmpty(password) ? StringUtils.EMPTY : password;
    }

    public static void setPlatformAPIKey(String apiKey) {
        Credentials credentials = new Credentials("username", apiKey);
        PasswordSafe.getInstance().set(credentialAttributes, credentials);
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

    public String getDomainName(@NotNull String defaultName) {
        try {
            return OpenApiUtils.getDomainName(platformUrl);
        } catch (URISyntaxException e) {
            return defaultName;
        }
    }
}