package com.xliic.core.util;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.jface.resource.ImageDescriptor;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIImages;

public class IconLoader {
	
    @SuppressWarnings("serial")
	private static final Map<String, Icon> ICONS = new HashMap<>() {{
		put("/icons/property", new Icon(OpenAPIImages.PropertyNode));
		put("/icons/42crunch_icon", new Icon(OpenAPIImages.SecurityAudit));
		put("/icons/extref", new Icon(OpenAPIImages.ExtRef));
		put("/icons/icon_42crunch_platform", new Icon(OpenAPIImages.Platform));
		put("/icons/platform-all", new Icon(OpenAPIImages.PlatformAll));
		put("/icons/platform-favorite", new Icon(OpenAPIImages.PlatformFavorite));
		put("/icons/platform-folder-locked", new Icon(OpenAPIImages.PlatformFolderLocked));
		put("/icons/platform-folder", new Icon(OpenAPIImages.PlatformFolder));
		put("/icons/platform-api", new Icon(OpenAPIImages.PlatformAPI));
		put("/icons/platform-save", new Icon(OpenAPIImages.PlatformSave));
		put("/icons/platform-oas", new Icon(OpenAPIImages.PlatformOAS));
		put("/icons/platform-audit-verified", new Icon(OpenAPIImages.PlatformAuditVerified));
		put("/icons/platform-audit-unverified", new Icon(OpenAPIImages.PlatformAuditUnverified));
		put("/icons/progress", new Icon(OpenAPIImages.UpdateRunningApplication));
		put("/icons/refresh", new Icon(OpenAPIImages.Refresh));
		put("/icons/reportError", new Icon(OpenAPIImages.ReportError));
		put("/icons/sorted", new Icon(OpenAPIImages.Sort));
		put("/icons/collapseall", new Icon(OpenAPIImages.CollapseAll));
		put("/icons/expandall", new Icon(OpenAPIImages.ExpandAll));
		put("/icons/any_type", new Icon(OpenAPIImages.Any_type));
		put("/icons/reportError", new Icon(OpenAPIImages.ReportError));
		put("/icons/reportWarning", new Icon(OpenAPIImages.ReportWarning));
		put("/icons/reportInfo", new Icon(OpenAPIImages.ReportInfo));
		put("/icons/reset", new Icon(OpenAPIImages.Reset));
		put("/icons/text", new Icon(OpenAPIImages.File));
		put("/icons/file-symlink-file", new Icon(OpenAPIImages.PlatformFileSymLink));
		put("/icons/platform-data-dictionary", new Icon(OpenAPIImages.Dictionary));
		put("/icons/tryit", new Icon(OpenAPIImages.TryIt));
		put("/icons/tryitAnno", new Icon(OpenAPIImages.TryItAnno));
		put("/icons/tryitPanel", new Icon(OpenAPIImages.TryItPanel));
		put("/icons/scan", new Icon(OpenAPIImages.Scan));
		put("/icons/scanAnno", new Icon(OpenAPIImages.ScanAnno));
		put("/icons/scanPanel", new Icon(OpenAPIImages.ScanPanel));
		put("/icons/envPanel", new Icon(OpenAPIImages.EnvPanel));
		put("/icons/config", new Icon(OpenAPIImages.Config));
		put("/icons/configPanel", new Icon(OpenAPIImages.ConfigPanel));
		put("/icons/auditAnno", new Icon(OpenAPIImages.AuditAnno));
		put("/icons/audit", new Icon(OpenAPIImages.Audit));
		put("/icons/copy", new Icon(OpenAPIImages.Copy));
        put("/icons/light/file-lines", new Icon(OpenAPIImages.GeneralNode));
		put("/icons/dark/file-lines", new Icon(OpenAPIImages.GeneralDarkNode));
		put("/icons/light/swap-arrows", new Icon(OpenAPIImages.PathsNode));
		put("/icons/dark/swap-arrows", new Icon(OpenAPIImages.PathsDarkNode));
		put("/icons/light/server", new Icon(OpenAPIImages.ServersNode));
		put("/icons/dark/server", new Icon(OpenAPIImages.ServersDarkNode));
		put("/icons/light/key", new Icon(OpenAPIImages.SecurityNode));
		put("/icons/dark/key", new Icon(OpenAPIImages.SecurityDarkNode));
		put("/icons/light/box", new Icon(OpenAPIImages.ComponentsNode));
		put("/icons/dark/box", new Icon(OpenAPIImages.ComponentsDarkNode));
		put("/icons/light/sitemap", new Icon(OpenAPIImages.SchemasNode));
		put("/icons/dark/sitemap", new Icon(OpenAPIImages.SchemasDarkNode));
		put("/icons/light/shield-keyhole", new Icon(OpenAPIImages.SecuritySchemesNode));
		put("/icons/dark/shield-keyhole", new Icon(OpenAPIImages.SecuritySchemesDarkNode));
		put("/icons/light/response", new Icon(OpenAPIImages.ResponseNode));
		put("/icons/dark/response", new Icon(OpenAPIImages.ResponseDarkNode));
		put("/icons/light/sliders", new Icon(OpenAPIImages.ParametersNode));
		put("/icons/dark/sliders", new Icon(OpenAPIImages.ParametersDarkNode));
		put("/icons/light/id-card", new Icon(OpenAPIImages.OperationIdNode));
		put("/icons/dark/id-card", new Icon(OpenAPIImages.OperationIdDarkNode));
		put("/icons/light/tags", new Icon(OpenAPIImages.TagsNode));
		put("/icons/dark/tags", new Icon(OpenAPIImages.TagsDarkNode));
		put("/icons/light/shield-halved", new Icon(OpenAPIImages.SecurityDefinitionsNode));
		put("/icons/dark/shield-halved", new Icon(OpenAPIImages.SecurityDefinitionsDarkNode));
		put("/icons/light/line-columns", new Icon(OpenAPIImages.HeadersNode));
		put("/icons/dark/line-columns", new Icon(OpenAPIImages.HeadersDarkNode));
		put("/icons/light/link-simple", new Icon(OpenAPIImages.LinksNode));
		put("/icons/dark/link-simple", new Icon(OpenAPIImages.LinksDarkNode));
		put("/icons/light/phone-arrow-up-right", new Icon(OpenAPIImages.CallbacksNode));
		put("/icons/dark/phone-arrow-up-right", new Icon(OpenAPIImages.CallbacksDarkNode));
		put("/icons/light/message-code", new Icon(OpenAPIImages.ExamplesNode));
		put("/icons/dark/message-code", new Icon(OpenAPIImages.ExamplesDarkNode));
		put("/icons/light/request", new Icon(OpenAPIImages.RequestBodiesNode));
		put("/icons/dark/request", new Icon(OpenAPIImages.RequestBodiesDarkNode));
		put("/icons/light/memo", new Icon(OpenAPIImages.DefaultOutlineNode));
		put("/icons/dark/memo", new Icon(OpenAPIImages.DefaultOutlineDarkNode));
    }};

    @NotNull
    public static Icon findIcon(@NotNull String path, @NotNull Class<?> aClass) {
        final String key = path.substring(0, path.lastIndexOf("."));
        if (ICONS.containsKey(key)) {
        	return ICONS.get(key);
        }
        return new Icon(ImageDescriptor.getMissingImageDescriptor());
    }

    @NotNull
    public static Icon findIcon(@NotNull String path) {
        return findIcon(path, IconLoader.class);
    }
}
