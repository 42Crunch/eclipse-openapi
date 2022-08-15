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
    public final static String REF_KEY = "$ref";
    public final static String URL_KEY = "url";
    public final static String PARAMETERS_KEY = "parameters";
    public final static String RESPONSES_KEY = "responses";
    public final static String NAME_KEY = "name";
    public final static String OPENAPI_KEY = "openapi";
    public final static String SWAGGER_KEY = "swagger";
    public final static String OPERATION_ID_KEY = "operationId";

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
}
