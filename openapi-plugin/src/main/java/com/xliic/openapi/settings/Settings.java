package com.xliic.openapi.settings;

import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import static com.xliic.openapi.platform.scan.ScanUtils.COLLECTION_TEMP_NAME;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

public class Settings {

    public static final Map<String, Object> DEFAULTS = new HashMap<>();

    public static class Platform {

        public static final String TURNED_ON = "com.xliic.openapi.settings.platform.tuned.on";
        public static final String TURNED_OFF = "com.xliic.openapi.settings.platform.tuned.off";
        public static final String MANDATORY_TAGS = "com.xliic.openapi.settings.platform.mandatory.tags";
        public static final String TEMP_COLLECTION_NAME = "com.xliic.openapi.settings.platform.temp.collection.name";
        public static final String COLLECTION_NAMING_CONVENTION = "com.xliic.openapi.settings.platform.collection.naming.convention";

        public static class Credentials {

            public static final String URL = "com.xliic.openapi.settings.platform.url";
            public static final String API_KEY = "com.xliic.openapi.settings.platform.apikey";

            static {
                DEFAULTS.put(URL, "https://platform.42crunch.com");
                DEFAULTS.put(API_KEY, "");
            }
        }

        public static class Dictionary {

            public static class PreAudit {

                public static final String CHOICE = "com.xliic.openapi.settings.platform.dictionary.pre-audit";
                public static final String ASK = "Ask";
                public static final String ALWAYS = "Always";
                public static final String NEVER = "Never";

                static {
                    DEFAULTS.put(CHOICE, ASK);
                }
            }
        }

        public static class Scan {

            public static final String IMAGE = "com.xliic.openapi.settings.platform.scan.image";
            public static final String SERVICES = "com.xliic.openapi.settings.platform.scan.services";
            public static final String ENV_DEFAULT_KEY = "com.xliic.openapi.settings.platform.scan.default.env";
            public static final String ENV_SECRETS_KEY = "com.xliic.openapi.settings.platform.scan.secrets.env";
            private static final String DEFAULT_IMAGE_VALUE = "42crunch/scand-agent:v2.0.0";
            public static final String RUNTIME = "com.xliic.openapi.settings.platform.scan.runtime";
            public static final String RUNTIME_DOCKER = "docker";
            public static final String RUNTIME_CLI = "cli";

            public static class Docker {

                public static final String REPLACE_LOCALHOST = "com.xliic.openapi.settings.platform.scan.docker.replace.localhost";
                public static final String USE_HOST_NETWORK = "com.xliic.openapi.settings.platform.scan.docker.use.host.network";

                static {
                    DEFAULTS.put(REPLACE_LOCALHOST, true);
                    DEFAULTS.put(USE_HOST_NETWORK, true);
                }
            }

            public static class ScandMgr {

                public static final String URL = "com.xliic.openapi.settings.platform.scan.scand.url";
                public static final String AUTH = "com.xliic.openapi.settings.platform.scan.scand.auth";
                public static final String HEADER = "com.xliic.openapi.settings.platform.scan.scand.header";
                public static final String AUTH_NONE = "none";
                public static final String AUTH_HEADER = "header";
                @SuppressWarnings("serial")
				private static final String HEADER_DEFAULT = Utils.serialize(new HashMap<>() {{
                    put("name", "");
                    put("value", "");
                }}, true, "");

                static {
                    DEFAULTS.put(URL, "");
                    DEFAULTS.put(AUTH, AUTH_NONE);
                    DEFAULTS.put(HEADER, HEADER_DEFAULT);
                }
            }

            static {
                DEFAULTS.put(IMAGE, DEFAULT_IMAGE_VALUE);
                DEFAULTS.put(SERVICES, "");
                DEFAULTS.put(RUNTIME, RUNTIME_DOCKER);
            }
        }

        static {
            DEFAULTS.put(MANDATORY_TAGS, "");
            DEFAULTS.put(TEMP_COLLECTION_NAME, COLLECTION_TEMP_NAME);
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

        static {
            DEFAULTS.put(ABC_SORT, true);
        }
    }

    public static class Preview {

        public static final String PORT = "com.xliic.openapi.settings.preview.port";
        public static final String DEFAULT_PORT = "61112";
        public static final String RENDERER = "com.xliic.openapi.settings.preview.renderer";
        public static final String SWAGGER_UI = "Swagger UI";
        public static final String RE_DOC = "ReDoc";

        static {
            DEFAULTS.put(PORT, DEFAULT_PORT);
            DEFAULTS.put(RENDERER, SWAGGER_UI);
        }

        public static int getPort() {
            String portStr = SettingsService.getInstance().getValue(PORT);
            return Integer.parseInt(portStr == null ? DEFAULT_PORT : portStr);
        }

        public static int getRendererIndex() {
            String renderer = SettingsService.getInstance().getValue(RENDERER);
            return SWAGGER_UI.equals(renderer) ? 0 : 1;
        }
    }

    public static class Audit {

        public static final String EMAIL = "openapi.generate.token.email.key";
        public static final String TOKEN = "openapi.generate.token.base64.key";

        static {
            DEFAULTS.put(TOKEN, "");
        }
    }

    public static class CliAst {

        public static final String REPOSITORY = "com.xliic.openapi.settings.cli.ast.repository";
        public static final String DEFAULT_REPOSITORY = "https://repo.42crunch.com/downloads";

        static {
            DEFAULTS.put(REPOSITORY, DEFAULT_REPOSITORY);
        }
    }

    public static class InlinedAnnotations {

        public static final String ENABLE_FLAG = "com.xliic.openapi.settings.inlined.annotations.enable.flag";

        static {
        	DEFAULTS.put(ENABLE_FLAG, true);
        }
    }
    
    public static boolean hasPlatformKey(@NotNull Set<String> keys) {
        return keys.contains(URL) || keys.contains(API_KEY);
    }
}
