package com.xliic.openapi.settings;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.ide.util.PropertiesComponent;

public class Settings {

    private static final ObjectMapper mapper = new ObjectMapper();
    private static final PropertiesComponent settings = PropertiesComponent.getInstance();

    public static class Platform {

        public static final String TURNED_ON = "com.xliic.openapi.settings.platform.tuned.on";
        public static final String TURNED_OFF = "com.xliic.openapi.settings.platform.tuned.off";

        public static class Credentials {

            public static final String URL = "com.xliic.openapi.settings.platform.url";
            public static final String API_KEY = "com.xliic.openapi.settings.platform.apikey";

            public static void init() {
                if (StringUtils.isEmpty(settings.getValue(URL))) {
                    settings.setValue(URL, "https://platform.42crunch.com");
                }
            }
        }

        public static class Dictionary {

            public static class PreAudit {

                public static final String CHOICE = "com.xliic.openapi.settings.platform.dictionary.pre-audit";
                public static final String ASK = "Ask";
                public static final String ALWAYS = "Always";
                public static final String NEVER = "Never";

                public static void init() {
                    if (!settings.isValueSet(CHOICE)) {
                        settings.setValue(CHOICE, ASK);
                    }
                }
            }
        }

        public static class Scan {

            public static final String IMAGE = "com.xliic.openapi.settings.platform.scan.image";
            public static final String SERVICES = "com.xliic.openapi.settings.platform.scan.services";
            public static final String ENV_DEFAULT_KEY = "com.xliic.openapi.settings.platform.scan.default.env";
            public static final String ENV_SECRETS_KEY = "com.xliic.openapi.settings.platform.scan.secrets.env";
            private static final String DEFAULT_IMAGE_VALUE = "42crunch/scand-agent:v2.0.0-rc05";
            public static final String RUNTIME = "com.xliic.openapi.settings.platform.scan.runtime";
            public static final String RUNTIME_DOCKER = "docker";

            public static class Docker {

                public static final String REPLACE_LOCALHOST = "com.xliic.openapi.settings.platform.scan.docker.replace.localhost";
                public static final String USE_HOST_NETWORK = "com.xliic.openapi.settings.platform.scan.docker.use.host.network";

                public static void init() {
                    if (!settings.isValueSet(REPLACE_LOCALHOST)) {
                        settings.setValue(REPLACE_LOCALHOST, true);
                    }
                    if (!settings.isValueSet(USE_HOST_NETWORK)) {
                        settings.setValue(USE_HOST_NETWORK, true);
                    }
                }
            }

            public static class ScandMgr {

                public static final String URL = "com.xliic.openapi.settings.platform.scan.scand.url";
                public static final String AUTH = "com.xliic.openapi.settings.platform.scan.scand.auth";
                public static final String HEADER = "com.xliic.openapi.settings.platform.scan.scand.header";
                public static final String AUTH_NONE = "none";
                public static final String AUTH_HEADER = "header";

                public static void init() {
                    if (!settings.isValueSet(URL)) {
                        settings.setValue(URL, "");
                    }
                    if (!settings.isValueSet(AUTH)) {
                        settings.setValue(AUTH, AUTH_NONE);
                    }
                }
            }

            public static void init() {
                if (!settings.isValueSet(IMAGE)) {
                    settings.setValue(IMAGE, DEFAULT_IMAGE_VALUE);
                }
                if (!settings.isValueSet(SERVICES)) {
                    settings.setValue(SERVICES, "");
                }
                if (!settings.isValueSet(RUNTIME)) {
                    settings.setValue(RUNTIME, RUNTIME_DOCKER);
                }
                ScandMgr.init();
                Docker.init();
            }
        }
    }

    public static class TryIt {
        public static final String INSECURE_SSL_HOSTNAMES = "com.xliic.openapi.settings.tryit.insecure.ssl.hostnames.key";
    }

    public static class ExtRef {
        public static final String APPROVED_HOSTNAMES = "openapi.generate.token.hosts.key";
    }

    public static class SortOutlines {

        public static final String ABC_SORT = "com.xliic.openapi.settings.sort.abc";

        public static void init() {
            if (!settings.isValueSet(ABC_SORT)) {
                settings.setValue(ABC_SORT, true);
            }
        }
    }

    public static class InlinedAnnotations {

        public static final String ENABLE_FLAG = "com.xliic.openapi.settings.inlined.annotations.enable.flag";

        public static void init() {
            if (!settings.isValueSet(ENABLE_FLAG)) {
                settings.setValue(ENABLE_FLAG, true);
            }
        }
    }

    public static class Preview {

        public static final String PORT = "com.xliic.openapi.settings.preview.port";
        public static final String DEFAULT_PORT = "61112";
        public static final String RENDERER = "com.xliic.openapi.settings.preview.renderer";
        public static final String SWAGGER_UI = "Swagger UI";
        public static final String RE_DOC = "ReDoc";

        public static void init() {
            if (!settings.isValueSet(PORT)) {
                settings.setValue(PORT, DEFAULT_PORT);
            }
            if (!settings.isValueSet(RENDERER)) {
                settings.setValue(RENDERER, SWAGGER_UI);
            }
        }

        public static int getPort() {
            String portStr = settings.getValue(PORT);
            return Integer.parseInt(portStr == null ? DEFAULT_PORT : portStr);
        }

        public static int getRendererIndex() {
            String renderer = settings.getValue(RENDERER);
            return SWAGGER_UI.equals(renderer) ? 0 : 1;
        }
    }

    public static class Audit {

        public static final String EMAIL = "openapi.generate.token.email.key";
        public static final String TOKEN = "openapi.generate.token.base64.key";

        public static void init() {
            if (!settings.isValueSet(TOKEN)) {
                settings.setValue(TOKEN, "");
            }
        }
    }

    public static boolean hasPlatformKey(@NotNull Set<String> keys) {
        return keys.contains(URL) || keys.contains(API_KEY);
    }

    public static Set<String> getValues(@NotNull String key) {
        Set<String> result = new HashSet<>();
        List<String> values = settings.getList(key);
        if ((values == null) || (values.size() == 0)) {
            return result;
        } else {
            for (String host : values) {
                if (!StringUtils.isEmpty(host)) {
                    result.add(host);
                }
            }
        }
        return result;
    }

    public static void initProperties() {
        Platform.Scan.init();
        Platform.Credentials.init();
        Platform.Dictionary.PreAudit.init();
        SortOutlines.init();
        InlinedAnnotations.init();
        Preview.init();
        Audit.init();
    }

    @Nullable
    public static String objectToString(@NotNull Object data) {
        try {
            return mapper.writeValueAsString(data);
        } catch (JsonProcessingException ignored) {
        }
        return null;
    }

    @NotNull
    @SuppressWarnings("unchecked")
    public static Map<String, String> stringToMap(@NotNull String value) {
        if (value.isEmpty()) {
            return new HashMap<>();
        }
        try {
            Map<String, Object> props = mapper.readValue(value, Map.class);
            return props.entrySet().stream().collect(Collectors.toMap(Map.Entry::getKey, e -> String.valueOf(e.getValue())));
        } catch (JsonProcessingException e) {
            return new HashMap<>();
        }
    }
}
