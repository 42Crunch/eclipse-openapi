package com.xliic.openapi;

import com.xliic.openapi.settings.SettingsService;

public class Endpoints {

    private static final String DEV_FREEMIUMD_URL = "https://stateless.dev.42crunch.com";
    private static final String DEV_CLI_FREEMIUMD_HOST = "stateless.dev.42crunch.com:443";
    private static final String DEV_KDB_URL = "https://platform-community.dev.42crunch.com/kdb/audit-with-yaml.json";

    private static final String FREEMIUMD_URL = "https://stateless.42crunch.com";
    private static final String CLI_FREEMIUMD_HOST = "stateless.42crunch.com:443";
    private static final String KDB_URL = "https://platform.42crunch.com/kdb/audit-with-yaml.json";

    public static String getFreemiumdUrl() {
        return SettingsService.getInstance().useDevEndpoints() ? DEV_FREEMIUMD_URL : FREEMIUMD_URL;
    }

    public static String getCliFreemiumdHost() {
        return SettingsService.getInstance().useDevEndpoints() ? DEV_CLI_FREEMIUMD_HOST : CLI_FREEMIUMD_HOST;
    }

    public static String getKdbUrl() {
        return SettingsService.getInstance().useDevEndpoints() ? DEV_KDB_URL: KDB_URL;
    }
}
