package com.xliic.openapi.config.payload;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.util.SystemInfoRt;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.settings.Settings;

public class Config {

    @NotNull
    private final String platformUrl;
    @NotNull
    private final String platformApiToken;
    @NotNull
    private final String scanImage;
    @NotNull
    private final String scanRuntime;
    @NotNull
    private final PlatformServices platformServices;
    @NotNull
    private final ScandManagerConnection scandManager;
    @NotNull
    private final List<String> insecureSslHostnames;
    @NotNull
    private final String platform;

    public Config() {
        PropertiesComponent props = PropertiesComponent.getInstance();
        platformUrl = props.getValue(Settings.Platform.Credentials.URL, "");
        platformApiToken = SecurityPropertiesComponent.getInstance().getValue(Settings.Platform.Credentials.API_KEY, "");
        scanImage = props.getValue(Settings.Platform.Scan.IMAGE, "");
        scanRuntime = props.getValue(Settings.Platform.Scan.RUNTIME, Settings.Platform.Scan.RUNTIME_DOCKER);
        platformServices = new PlatformServices();
        scandManager = new ScandManagerConnection();
        insecureSslHostnames = new LinkedList<>(Settings.getValues(Settings.TryIt.INSECURE_SSL_HOSTNAMES));
        platform = getPlatformArch();
    }

    public @NotNull String getPlatformUrl() {
        return platformUrl;
    }

    public @NotNull String getPlatformApiToken() {
        return platformApiToken;
    }

    public @NotNull String getScanImage() {
        return scanImage;
    }

    public @NotNull String getScanRuntime() {
        return scanRuntime;
    }

    public @NotNull PlatformServices getPlatformServices() {
        return platformServices;
    }

    public @NotNull ScandManagerConnection getScandManager() {
        return scandManager;
    }

    public @NotNull List<String> getInsecureSslHostnames() {
        return insecureSslHostnames;
    }

    public @NotNull String getPlatform() {
        return platform;
    }

    private String getPlatformArch() {
        if (SystemInfoRt.isWindows) {
            return "win32";
        } else if (SystemInfoRt.isLinux) {
            return "linux";
        } else if (SystemInfoRt.isMac) {
            return "darwin";
        } else if (SystemInfoRt.isFreeBSD) {
            return "freebsd";
        } else if (SystemInfoRt.isSolaris) {
            return "sunos";
        } else if (SystemInfoRt.isUnix) {
            return "aix";
        }
        return "";
    }
}
