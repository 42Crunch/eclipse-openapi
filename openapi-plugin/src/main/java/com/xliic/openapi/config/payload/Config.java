package com.xliic.openapi.config.payload;

import static com.xliic.openapi.platform.scan.ScanUtils.COLLECTION_TEMP_NAME;
import static com.xliic.openapi.settings.Settings.ExtRef.APPROVED_HOST_CONFIG;
import static com.xliic.openapi.settings.Settings.Internal.INTERNAL_FEATURES;
import static com.xliic.openapi.settings.Settings.Internal.INTERNAL_USE_DEV_ENDPOINTS;
import static com.xliic.openapi.settings.Settings.Internal.INTERNAL_DISABLE_LOG_REDACTION;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.platform.NamingConvention;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.refs.external.ApprovedHostConfig;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

public class Config {

    @NotNull
    private final String platformUrl;
    @NotNull
    private final String platformApiToken;
    @NotNull
    private final String platformAuthType;
    @NotNull
    private final String anondToken;
    @NotNull
    private final String scanImage;
    @NotNull
    private final String scanProxy;
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
    @NotNull
    private final List<ApprovedHostConfig> approvedHosts;
    @NotNull
    private final String cliDirectoryOverride;
    @NotNull
    private final String auditRuntime;
    private final boolean internalFeatures;
    private final boolean internalUseDevEndpoints;
    private final boolean internalDisableLogRedaction;
    
    public Config() {
        this(false);
    }

    public Config(boolean loadFromPlatform) {
    	SettingsService settingsService = SettingsService.getInstance();
        platformUrl = settingsService.getValue(Settings.Platform.Credentials.URL, "");
        platformApiToken = settingsService.getValue(Settings.Platform.Credentials.API_KEY, "");
        platformAuthType  = settingsService.getValue(Settings.Platform.Credentials.AUTH_TYPE, "");
        anondToken = settingsService.getValue(Settings.Audit.TOKEN, "");
        scanImage = settingsService.getValue(Settings.Platform.Scan.IMAGE, "");
        scanProxy = settingsService.getValue(Settings.Platform.Scan.PROXY, "");
        scanRuntime = settingsService.getValue(Settings.Platform.Scan.RUNTIME, Settings.Platform.Scan.RUNTIME_DOCKER);
        platformServices = new PlatformServices();
        scandManager = new ScandManagerConnection();
        insecureSslHostnames = new LinkedList<>(settingsService.getSet(Settings.TryIt.INSECURE_SSL_HOSTNAMES));
        platform = Utils.getOs();
        repository = settingsService.getValue(Settings.CliAst.REPOSITORY, Settings.CliAst.DEFAULT_REPOSITORY);
        platformTempCollectionName = settingsService.getValue(Settings.Platform.TEMP_COLLECTION_NAME, COLLECTION_TEMP_NAME);
        platformMandatoryTags = settingsService.getValue(Settings.Platform.MANDATORY_TAGS, "");
        if (loadFromPlatform) {
            platformCollectionNamingConvention = PlatformUtils.getCollectionNamingConvention();
            settingsService.setValue(Settings.Platform.COLLECTION_NAMING_CONVENTION, platformCollectionNamingConvention.getStringPayload());
        } else {
            String value = settingsService.getValue(Settings.Platform.COLLECTION_NAMING_CONVENTION, "");
            platformCollectionNamingConvention = NamingConvention.restoreFromStringPayload(value);
        }
        approvedHosts = getApprovedHostsConfiguration();
        cliDirectoryOverride = settingsService.getValue(Settings.CliAst.CLI_DIRECTORY_OVERRIDE, "");
        auditRuntime = settingsService.getValue(Settings.Audit.AUDIT_RUNTIME, "");
        internalFeatures  = settingsService.getValue(INTERNAL_FEATURES, false);
        internalUseDevEndpoints = settingsService.getValue(INTERNAL_USE_DEV_ENDPOINTS, false);
        internalDisableLogRedaction = settingsService.getValue(INTERNAL_DISABLE_LOG_REDACTION, false);
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
    
    public @NotNull String getScanProxy() {
        return scanProxy;
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
    
    public @NotNull String getPlatformAuthType() {
        return platformAuthType;
    }

    public @NotNull String getAnondToken() {
        return anondToken;
    }
    
    public @NotNull List<ApprovedHostConfig> getApprovedHosts() {
        return approvedHosts;
    }

    @SuppressWarnings("unchecked")
    private static List<ApprovedHostConfig> getApprovedHostsConfiguration() {
        List<ApprovedHostConfig> result = new LinkedList<>();
        List<String> hostnames = SettingsService.getInstance().getList(Settings.ExtRef.APPROVED_HOSTNAMES);
        if (hostnames != null && !hostnames.isEmpty()) {
            Map<String, Map<String, Object>> configMap = new HashMap<>();
            List<Object> config = (List<Object>) SettingsService.getInstance().getValueAsObject(APPROVED_HOST_CONFIG);
            if (config != null) {
                for (Object item : config) {
                    final Map<String, Object> itemMap = (Map<String, Object>) item;
                    configMap.put((String) itemMap.get("host"), itemMap);
                }
            }
            for (String hostname : hostnames) {
                String header = "";
                String prefix = "";
                String token = "";
                if (configMap.containsKey(hostname)) {
                    Map<String, Object> hostConfig = configMap.get(hostname);
                    header = (String) hostConfig.getOrDefault("header", "");
                    prefix = (String) hostConfig.getOrDefault("prefix", "");
                    token = (String) hostConfig.getOrDefault("token", "");
                }
                result.add(new ApprovedHostConfig(hostname, header, prefix, token));
            }
        }
        return result;
    }
    
    public @NotNull String getCliDirectoryOverride() {
        return cliDirectoryOverride;
    }
    
    public @NotNull String getAuditRuntime() {
        return auditRuntime;
    }
    
    public boolean isInternalFeatures() {
        return internalFeatures;
    }

    public boolean isInternalUseDevEndpoints() {
        return internalUseDevEndpoints;
    }
    
    public boolean isInternalDisableLogRedaction() {
        return internalDisableLogRedaction;
    }
}
