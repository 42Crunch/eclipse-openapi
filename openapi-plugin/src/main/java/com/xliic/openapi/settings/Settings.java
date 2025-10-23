package com.xliic.openapi.settings;

import static com.xliic.openapi.platform.scan.ScanUtils.COLLECTION_TEMP_NAME;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;

import java.util.HashMap;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.utils.Utils;

public class Settings {

    public static final Map<String, Object> DEFAULTS = new HashMap<>();

    public static class Plugin {
        public static final String VERSION = "com.xliic.openapi.settings.plugin.version";

        static {
            DEFAULTS.put(VERSION, "");
        }
    }

    public static class Platform {

        public static final String TURNED_ON = "com.xliic.openapi.settings.platform.tuned.on";
        public static final String TURNED_OFF = "com.xliic.openapi.settings.platform.tuned.off";
        public static final String MANDATORY_TAGS = "com.xliic.openapi.settings.platform.mandatory.tags";
        public static final String TEMP_COLLECTION_NAME = "com.xliic.openapi.settings.platform.temp.collection.name";
        public static final String COLLECTION_NAMING_CONVENTION = "com.xliic.openapi.settings.platform.collection.naming.convention";

        public static class Credentials {

            public static final String URL = "com.xliic.openapi.settings.platform.url";
            public static final String API_KEY = "com.xliic.openapi.settings.platform.apikey";
            public static final String AUTH_TYPE = "com.xliic.openapi.settings.platform.auth-type";
            public static final String AUTH_TYPE_API_TOKEN = "api-token";
            public static final String AUTH_TYPE_ANOND_TOKEN = "anond-token";
            
            static {
                DEFAULTS.put(URL, "https://platform.42crunch.com");
                DEFAULTS.put(API_KEY, "");
                DEFAULTS.put(AUTH_TYPE, "");
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
            public static final String PROXY = "com.xliic.openapi.settings.platform.scan.proxy";
            public static final String SERVICES = "com.xliic.openapi.settings.platform.scan.services";
            public static final String ENV_DEFAULT_KEY = "com.xliic.openapi.settings.platform.scan.default.env";
            public static final String ENV_SECRETS_KEY = "com.xliic.openapi.settings.platform.scan.secrets.env";
            private static final String DEFAULT_IMAGE_VALUE = "42crunch/scand-agent:v2";
            public static final String RUNTIME = "com.xliic.openapi.settings.platform.scan.runtime";
            public static final String RUNTIME_DOCKER = "docker";
            public static final String RUNTIME_CLI = "cli";
            public static final String RUNTIME_SCAND_MANAGER = "scand-manager";

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
                public static final String TIMEOUT = "com.xliic.openapi.settings.platform.scan.scand.timeout";
                public static final String HEADER = "com.xliic.openapi.settings.platform.scan.scand.header";
                public static final String AUTH_NONE = "none";
                public static final String AUTH_HEADER = "header";
                public static final String TIMEOUT_DEFAULT = "300";
                @SuppressWarnings("serial")
				private static final String HEADER_DEFAULT = Utils.serialize(new HashMap<>() {{
                    put("name", "");
                    put("value", "");
                }}, true, "");

                static {
                    DEFAULTS.put(URL, "");
                    DEFAULTS.put(AUTH, AUTH_NONE);
                    DEFAULTS.put(TIMEOUT, TIMEOUT_DEFAULT);
                    DEFAULTS.put(HEADER, HEADER_DEFAULT);
                }
            }

            static {
                DEFAULTS.put(IMAGE, DEFAULT_IMAGE_VALUE);
                DEFAULTS.put(SERVICES, "");
                DEFAULTS.put(RUNTIME, RUNTIME_CLI);
            }
        }

        static {
            DEFAULTS.put(MANDATORY_TAGS, "");
            DEFAULTS.put(TEMP_COLLECTION_NAME, COLLECTION_TEMP_NAME);
            DEFAULTS.put(COLLECTION_NAMING_CONVENTION, "");
        }
    }

    public static class TryIt {
        public static final String INSECURE_SSL_HOSTNAMES = "com.xliic.openapi.settings.tryit.insecure.ssl.hostnames.key";
    }

    public static class ExtRef {
        public static final String APPROVED_HOSTNAMES = "openapi.generate.token.hosts.key";
        public static final String APPROVED_HOST_CONFIG = "com.xliic.openapi.settings.extref.approved.host.config";
    }

    public static class Outline {

        public static final String ABC_SORT = "com.xliic.openapi.settings.sort.abc";
        public static final String SHOW_OUTLINE_DEMO = "openapi.show.key";
        
        static {
            DEFAULTS.put(ABC_SORT, true);
            DEFAULTS.put(SHOW_OUTLINE_DEMO, true);
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
    }

    public static class Audit {

        public static final String EMAIL = "openapi.generate.token.email.key";
        public static final String TOKEN = "openapi.generate.token.base64.key";
        public static final String AUDIT_RUNTIME = "com.xliic.openapi.settings.audit.runtime";
        public static final String AUDIT_RUNTIME_PLATFORM = "platform";
        public static final String AUDIT_RUNTIME_CLI = "cli";
        
        static {
            DEFAULTS.put(TOKEN, "");
            DEFAULTS.put(AUDIT_RUNTIME, AUDIT_RUNTIME_PLATFORM);
        }
    }

    public static class CliAst {

    	public static final String CLI_DIRECTORY_OVERRIDE = "com.xliic.openapi.settings.cli.ast.directory.override";
        public static final String REPOSITORY = "com.xliic.openapi.settings.cli.ast.repository";
        public static final String DEFAULT_REPOSITORY = "https://repo.42crunch.com/downloads";

        static {
            DEFAULTS.put(REPOSITORY, DEFAULT_REPOSITORY);
            DEFAULTS.put(CLI_DIRECTORY_OVERRIDE, "");
        }
    }

    public static class InlinedAnnotations {

        public static final String ENABLE_FLAG = "com.xliic.openapi.settings.inlined.annotations.enable.flag";

        static {
        	DEFAULTS.put(ENABLE_FLAG, true);
        }
    }

    public static class Log {

        public static final String ENABLE_MAX_LOG_LEVEL_FLAG = "com.xliic.openapi.settings.log.enable.max.log.level.flag";

        static {
        	DEFAULTS.put(ENABLE_MAX_LOG_LEVEL_FLAG, false);
        }
    }

    public static class SnakeYamlSettings {

        public static final String CODE_POINT_LIMIT = "com.xliic.openapi.settings.snake.yaml.settings.code.point.limit";

        static {
            DEFAULTS.put(CODE_POINT_LIMIT, "20");
        }
    }

    public static class Internal {

        public static final String INTERNAL_FEATURES = "com.xliic.openapi.settings.internal.features";
        public static final String INTERNAL_USE_DEV_ENDPOINTS = "com.xliic.openapi.settings.internal.use.dev.endpoints";

        static {
            DEFAULTS.put(INTERNAL_FEATURES, false);
            DEFAULTS.put(INTERNAL_USE_DEV_ENDPOINTS, false);
        }
    }
    
    public static boolean hasPlatformKey(@NotNull Set<String> keys) {
        return keys.contains(URL) || keys.contains(API_KEY) || keys.contains(Platform.Credentials.AUTH_TYPE);
    }
}
