package com.xliic.openapi.settings;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

public class SettingsKeys {

    public static class Platform {
        public static class Dictionary {
            public static class PreAudit {
                public static final String KEY = "com.xliic.openapi.settings.platform.dictionary.pre-audit";
                public static final String ASK = "Ask";
                public static final String ALWAYS = "Always";
                public static final String NEVER = "Never";
                public static final List<String> OPTIONS = new LinkedList<>(Arrays.asList(ASK, ALWAYS, NEVER));
            }
        }
    }

    public static final String EMAIL = "openapi.generate.token.email.key";
    public static final String TOKEN = "openapi.generate.token.base64.key";
    public static final String HOSTS = "openapi.generate.token.hosts.key";
    public static final String ABC_SORT = "com.xliic.openapi.settings.sort.abc";
    public static final String PLATFORM = "com.xliic.openapi.settings.platform.url";
    public static final String API_KEY = "com.xliic.openapi.settings.platform.apikey";
    public static final String PLATFORM_ALL = "com.xliic.openapi.settings.platform.all";

    public static boolean isPlatformKey(@NotNull String key) {
        return (PLATFORM.equals(key) || API_KEY.equals(key) || PLATFORM_ALL.equals(key));
    }
}
