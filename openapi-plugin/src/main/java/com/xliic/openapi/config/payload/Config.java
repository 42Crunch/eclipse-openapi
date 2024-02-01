package com.xliic.openapi.config.payload;

import java.util.HashMap;
import java.util.Map;
import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.utils.CliUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

import static com.xliic.openapi.platform.scan.ScanUtils.COLLECTION_TEMP_NAME;

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
    @NotNull
    private final String repository;
    @NotNull
    private final NamingConvention platformCollectionNamingConvention;
    @NotNull
    private final String platformTempCollectionName;
    @NotNull
    private final String platformMandatoryTags;
    
    public Config() {
        this(false);
    }

    public Config(boolean loadFromPlatform) {
        PropertiesComponent props = PropertiesComponent.getInstance();
        platformUrl = props.getValue(Settings.Platform.Credentials.URL, "");
        platformApiToken = SecurityPropertiesComponent.getInstance().getValue(Settings.Platform.Credentials.API_KEY, "");
        scanImage = props.getValue(Settings.Platform.Scan.IMAGE, "");
        scanRuntime = props.getValue(Settings.Platform.Scan.RUNTIME, Settings.Platform.Scan.RUNTIME_DOCKER);
        platformServices = new PlatformServices();
        scandManager = new ScandManagerConnection();
        insecureSslHostnames = new LinkedList<>(Settings.getValues(Settings.TryIt.INSECURE_SSL_HOSTNAMES));
        platform = Utils.getOs();
        repository = props.getValue(Settings.CliAst.REPOSITORY, Settings.CliAst.DEFAULT_REPOSITORY);
        platformTempCollectionName = props.getValue(Settings.Platform.TEMP_COLLECTION_NAME, COLLECTION_TEMP_NAME);
        platformMandatoryTags = props.getValue(Settings.Platform.MANDATORY_TAGS, "");
        if (loadFromPlatform) {
            platformCollectionNamingConvention = PlatformUtils.getCollectionNamingConvention();
            props.setValue(Settings.Platform.COLLECTION_NAMING_CONVENTION, platformCollectionNamingConvention.getStringPayload());
        } else {
            String value = props.getValue(Settings.Platform.COLLECTION_NAMING_CONVENTION, "");
            platformCollectionNamingConvention = NamingConvention.restoreFromStringPayload(value);
        }
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

    public @NotNull Map<String, Object> getCliProps() {
        Map<String, Object> props = new HashMap<>();
        String cli = CliUtils.getCli();
        props.put("location", cli);
        props.put("found", FileUtils.exists(cli));
        return props;
    }

    public @NotNull String getRepository() {
        return repository;
    }
    
    public @NotNull NamingConvention getPlatformCollectionNamingConvention() {
        return platformCollectionNamingConvention;
    }

    public @NotNull String getPlatformTempCollectionName() {
        return platformTempCollectionName;
    }

    public @NotNull String getPlatformMandatoryTags() {
        return platformMandatoryTags;
    }
}
