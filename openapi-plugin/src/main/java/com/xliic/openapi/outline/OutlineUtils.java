package com.xliic.openapi.outline;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.Icon;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.webapp.messages.ChangeTheme;

import icons.OpenApiIcons;

public class OutlineUtils {

    private static final Map<String, String> TITLES = new HashMap<>();
    private static final Map<String, Icon> LIGHT_THEME_ICONS = new HashMap<>();
    private static final Map<String, Icon> DARK_THEME_ICONS = new HashMap<>();
	private static final Icon DEFAULT_OUTLINE_ICON = new Icon(OpenAPIImages.DefaultOutlineNode);
	private static final Icon DEFAULT_OUTLINE_DARK_ICON = new Icon(OpenAPIImages.DefaultOutlineDarkNode);
	
    static {
        TITLES.put("parameters", "Parameters");
        TITLES.put("responses", "Responses");
        TITLES.put("securitySchemes", "Security Schemes");
        TITLES.put("schemas", "Schemas");
        TITLES.put("requestBodies", "Request Bodies");
        TITLES.put("headers", "Headers");
        TITLES.put("links", "Links");
        TITLES.put("callbacks", "Callbacks");
        TITLES.put("examples", "Examples");
        TITLES.put("definitions", "Definitions");
        TITLES.put("securityDefinitions", "Security Definitions");
        TITLES.put("components", "Components");
        TITLES.put("general", "General");
        TITLES.put("operation id", "Operation ID");
        TITLES.put("paths", "Paths");
        TITLES.put("servers", "Servers");
        TITLES.put("tags", "Tags");
        TITLES.put("security", "Security");
        TITLES.put("webhooks", "Webhooks");
        
        LIGHT_THEME_ICONS.put("parameters", OpenApiIcons.ParametersNode);
        LIGHT_THEME_ICONS.put("responses", OpenApiIcons.ResponseNode);
        LIGHT_THEME_ICONS.put("securitySchemes", OpenApiIcons.SecuritySchemesNode);
        LIGHT_THEME_ICONS.put("schemas", OpenApiIcons.SchemasNode);
        LIGHT_THEME_ICONS.put("requestBodies", OpenApiIcons.RequestBodiesNode);
        LIGHT_THEME_ICONS.put("requestBody", OpenApiIcons.RequestBodiesNode);
        LIGHT_THEME_ICONS.put("headers", OpenApiIcons.HeadersNode);
        LIGHT_THEME_ICONS.put("links", OpenApiIcons.LinksNode);
        LIGHT_THEME_ICONS.put("callbacks", OpenApiIcons.CallbacksNode);
        LIGHT_THEME_ICONS.put("examples", OpenApiIcons.ExamplesNode);
        LIGHT_THEME_ICONS.put("definitions", OpenApiIcons.SchemasNode);
        LIGHT_THEME_ICONS.put("securityDefinitions", OpenApiIcons.SecurityDefinitionsNode);
        LIGHT_THEME_ICONS.put("components", OpenApiIcons.ComponentsNode);
        LIGHT_THEME_ICONS.put("general", OpenApiIcons.GeneralNode);
        LIGHT_THEME_ICONS.put("operation id", OpenApiIcons.OperationIdNode);
        LIGHT_THEME_ICONS.put("paths", OpenApiIcons.PathsNode);
        LIGHT_THEME_ICONS.put("servers", OpenApiIcons.ServersNode);
        LIGHT_THEME_ICONS.put("tags", OpenApiIcons.TagsNode);
        LIGHT_THEME_ICONS.put("security", OpenApiIcons.SecurityNode);
        LIGHT_THEME_ICONS.put("webhooks", OpenApiIcons.WebhookNode);
        
        DARK_THEME_ICONS.put("parameters", OpenApiIcons.ParametersDarkNode);
        DARK_THEME_ICONS.put("responses", OpenApiIcons.ResponseDarkNode);
        DARK_THEME_ICONS.put("securitySchemes", OpenApiIcons.SecuritySchemesDarkNode);
        DARK_THEME_ICONS.put("schemas", OpenApiIcons.SchemasDarkNode);
        DARK_THEME_ICONS.put("requestBodies", OpenApiIcons.RequestBodiesDarkNode);
        DARK_THEME_ICONS.put("requestBody", OpenApiIcons.RequestBodiesDarkNode);
        DARK_THEME_ICONS.put("headers", OpenApiIcons.HeadersDarkNode);
        DARK_THEME_ICONS.put("links", OpenApiIcons.LinksDarkNode);
        DARK_THEME_ICONS.put("callbacks", OpenApiIcons.CallbacksDarkNode);
        DARK_THEME_ICONS.put("examples", OpenApiIcons.ExamplesDarkNode);
        DARK_THEME_ICONS.put("definitions", OpenApiIcons.SchemasDarkNode);
        DARK_THEME_ICONS.put("securityDefinitions", OpenApiIcons.SecurityDefinitionsDarkNode);
        DARK_THEME_ICONS.put("components", OpenApiIcons.ComponentsDarkNode);
        DARK_THEME_ICONS.put("general", OpenApiIcons.GeneralDarkNode);
        DARK_THEME_ICONS.put("operation id", OpenApiIcons.OperationIdDarkNode);
        DARK_THEME_ICONS.put("paths", OpenApiIcons.PathsDarkNode);
        DARK_THEME_ICONS.put("servers", OpenApiIcons.ServersDarkNode);
        DARK_THEME_ICONS.put("tags", OpenApiIcons.TagsDarkNode);
        DARK_THEME_ICONS.put("security", OpenApiIcons.SecurityDarkNode);
        DARK_THEME_ICONS.put("webhooks", OpenApiIcons.WebhookDarkNode);
    }

    @Nullable
    public static String getTitle(@NotNull String id) {
        return TITLES.get(id);
    }

    @NotNull
    public static Icon getIcon(@NotNull String id) {
    	// For eclipse we always return icons to prevent visual gap in the tree view UI
    	boolean isLightTheme = ChangeTheme.isLightTheme();
    	Icon icon = isLightTheme ? LIGHT_THEME_ICONS.get(id) : DARK_THEME_ICONS.get(id);
    	if (icon == null) {
    		return isLightTheme ? DEFAULT_OUTLINE_ICON : DEFAULT_OUTLINE_DARK_ICON;
    	}
        return icon;
    }
}
