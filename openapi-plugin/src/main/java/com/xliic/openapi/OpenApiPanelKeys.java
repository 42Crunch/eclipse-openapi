package com.xliic.openapi;

import java.util.Arrays;
import java.util.List;

public class OpenApiPanelKeys {

    public final static String GENERAL = "general";
    public final static String PATHS = "paths";
    public final static String SERVERS = "servers";
    public final static String COMPONENTS = "components";
    public final static String SECURITY = "security";
    public final static String PARAMETERS = "parameters";
    public final static String RESPONSES = "responses";
    public final static String REQUEST_BODY = "requestBody";
    public final static String DEFINITIONS = "definitions";
    public final static String SECURITY_DEFINITIONS = "securityDefinitions";
    public final static String OPERATION_ID = "operation id";
    public final static String TAGS = "tags";
    public final static String SCHEMAS = "schemas";
    public final static String SECURITY_SCHEMES = "securitySchemes";
    public final static String WEBHOOKS = "webhooks";
    public final static String COMPONENTS_PREFIX = getPointerPrefix(COMPONENTS);
    public final static String TAGS_PREFIX = getPointerPrefix(TAGS);
    public final static String PATHS_PREFIX = getPointerPrefix(PATHS);
    public final static String OPERATION_ID_PREFIX = getPointerPrefix(OPERATION_ID);

    public final static String REF_KEY = "$ref";
    public final static String URL_KEY = "url";
    public final static String PARAMETERS_KEY = "parameters";
    public final static String RESPONSES_KEY = "responses";
    public final static String NAME_KEY = "name";
    public final static String OPENAPI_KEY = "openapi";
    public final static String SWAGGER_KEY = "swagger";
    public final static String OPERATION_ID_KEY = "operationId";

    public static final List<String> PANELS_ORDER =
            Arrays.asList(
                    GENERAL,
                    TAGS,
                    PATHS,
                    OPERATION_ID,
                    SERVERS,
                    COMPONENTS,
                    WEBHOOKS,
                    PARAMETERS,
                    RESPONSES,
                    DEFINITIONS,
                    SECURITY,
                    SECURITY_DEFINITIONS
            );

    public final static List<String> V3_1_PANEL_KEYS =
            Arrays.asList(
                    GENERAL,
                    TAGS,
                    PATHS,
                    OPERATION_ID,
                    SERVERS,
                    COMPONENTS,
                    WEBHOOKS,
                    SECURITY
            );

    public final static List<String> V3_PANEL_KEYS =
            Arrays.asList(
                    GENERAL,
                    TAGS,
                    PATHS,
                    OPERATION_ID,
                    SERVERS,
                    COMPONENTS,
                    SECURITY
            );

    public final static List<String> V2_PANEL_KEYS =
            Arrays.asList(
                    GENERAL,
                    TAGS,
                    PATHS,
                    OPERATION_ID,
                    PARAMETERS,
                    RESPONSES,
                    DEFINITIONS,
                    SECURITY,
                    SECURITY_DEFINITIONS
            );

    private static String getPointerPrefix(String name) {
        return "/" + name + "/";
    }
}
