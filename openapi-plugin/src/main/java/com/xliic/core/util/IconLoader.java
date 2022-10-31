package com.xliic.core.util;

import org.eclipse.jface.resource.ImageDescriptor;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIImages;

public class IconLoader {

    @NotNull
    public static Icon findIcon(@NotNull String path, @NotNull Class<?> aClass) {
        if (path.startsWith("/icons/property")) {
            return new Icon(OpenAPIImages.PropertyNode);
        } else if (path.startsWith("/icons/add")) {
            return new Icon(OpenAPIImages.AddSnippet);
        } else if (path.startsWith("/icons/icon_42crunch_platform")) {
            return new Icon(OpenAPIImages.Platform);
        } else if (path.startsWith("/icons/platform-all")) {
            return new Icon(OpenAPIImages.PlatformAll);
        } else if (path.startsWith("/icons/platform-favorite")) {
            return new Icon(OpenAPIImages.PlatformFavorite);
        } else if (path.startsWith("/icons/platform-folder-locked")) {
            return new Icon(OpenAPIImages.PlatformFolderLocked);
        } else if (path.startsWith("/icons/platform-folder")) {
            return new Icon(OpenAPIImages.PlatformFolder);
        } else if (path.startsWith("/icons/platform-api")) {
            return new Icon(OpenAPIImages.PlatformAPI);
        } else if (path.startsWith("/icons/platform-save")) {
            return new Icon(OpenAPIImages.PlatformSave);
        } else if (path.startsWith("/icons/platform-oas")) {
            return new Icon(OpenAPIImages.PlatformOAS);
        } else if (path.startsWith("/icons/platform-audit-verified")) {
            return new Icon(OpenAPIImages.PlatformAuditVerified);
        } else if (path.startsWith("/icons/platform-audit-unverified")) {
            return new Icon(OpenAPIImages.PlatformAuditUnverified);
        } else if (path.startsWith("/icons/progress")) {
            return new Icon(OpenAPIImages.UpdateRunningApplication);
        } else if (path.startsWith("/icons/refresh")) {
            return new Icon(OpenAPIImages.Refresh);
        } else if (path.startsWith("/icons/filter")) {
            return new Icon(OpenAPIImages.Filter);
        } else if (path.startsWith("/icons/reportError")) {
            return new Icon(OpenAPIImages.ReportError);
        } else if (path.startsWith("/icons/sorted")) {
            return new Icon(OpenAPIImages.Sort);
        } else if (path.startsWith("/icons/listFiles")) {
            return new Icon(OpenAPIImages.PanelNode);
        } else if (path.startsWith("/icons/collapseall")) {
            return new Icon(OpenAPIImages.CollapseAll);
        } else if (path.startsWith("/icons/expandall")) {
            return new Icon(OpenAPIImages.ExpandAll);
        } else if (path.startsWith("/icons/any_type")) {
            return new Icon(OpenAPIImages.Any_type);
        } else if (path.startsWith("/icons/reportError")) {
            return new Icon(OpenAPIImages.ReportError);
        } else if (path.startsWith("/icons/reportWarning")) {
            return new Icon(OpenAPIImages.ReportWarning);
        } else if (path.startsWith("/icons/reportInfo")) {
            return new Icon(OpenAPIImages.ReportInfo);
        } else if (path.startsWith("/icons/reset")) {
            return new Icon(OpenAPIImages.Reset);
        } else if (path.startsWith("/icons/text")) {
            return new Icon(OpenAPIImages.File);
        } else if (path.startsWith("/icons/platform-data-dictionary")) {
            return new Icon(OpenAPIImages.Dictionary);
        }
        return new Icon(ImageDescriptor.getMissingImageDescriptor());
    }

    @NotNull
    public static Icon findIcon(@NotNull String path) {
        return findIcon(path, IconLoader.class);
    }
}
