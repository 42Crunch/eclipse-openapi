package com.xliic.openapi;

import java.util.Arrays;
import java.util.List;

public class OpenApiPanelKeys {

    // Main panels
    public final static String GENERAL = "general";
    public final static String PATHS = "paths";
    public final static String SERVERS = "servers";
    public final static String COMPONENTS = "components";
    public final static String SECURITY = "security";
    public final static String PARAMETERS = "parameters";
    public final static String RESPONSES = "responses";
    public final static String DEFINITIONS = "definitions";
    public final static String SECURITY_DEFINITIONS = "securityDefinitions";
    public final static String OPERATION_ID = "operation id";

    // Keys
    public final static String INFO = "info";
    public final static String HOST = "host";
    public final static String BASE_PATH = "basePath";
    public final static String COMPONENTS_SCHEMAS = "schemas";
    public final static String COMPONENTS_SECURITY_SCHEMAS = "securitySchemes";
    public final static String REF_KEY = "$ref";
    public final static String URL_KEY = "url";
    public final static String PARAMETERS_KEY = "parameters";
    public final static String RESPONSES_KEY = "responses";
    public final static String NAME_KEY = "name";
    public final static String OPENAPI_KEY = "openapi";
    public final static String SWAGGER_KEY = "swagger";
    public final static String OPERATION_ID_KEY = "operationId";

    // Pointers
    public final static String INFO_POINTER = OpenApiUtils.pointer(INFO);
    public final static String HOST_POINTER = OpenApiUtils.pointer(HOST);
    public final static String BASE_PATH_POINTER = OpenApiUtils.pointer(BASE_PATH);

    public final static String OPENAPI_POINTER = OpenApiUtils.pointer("openapi");
    public final static String SWAGGER_POINTER = OpenApiUtils.pointer("swagger");

    public final static List<String> V3_PANEL_KEYS =
            Arrays.asList(
                    GENERAL,
                    PATHS,
                    OPERATION_ID,
                    SERVERS,
                    COMPONENTS,
                    SECURITY
            );

    public final static List<String> V2_PANEL_KEYS =
            Arrays.asList(
                    GENERAL,
                    PATHS,
                    OPERATION_ID,
                    PARAMETERS,
                    RESPONSES,
                    DEFINITIONS,
                    SECURITY,
                    SECURITY_DEFINITIONS
            );

    public static boolean isPanelMap(String panelKey) {
        return !(SERVERS.equals(panelKey) || SECURITY.equals(panelKey));
    }

    public static String getMainPathKey(OpenApiVersion version) {
        return (version == OpenApiVersion.V3) ? OPENAPI_POINTER : SWAGGER_POINTER;
    }
}
