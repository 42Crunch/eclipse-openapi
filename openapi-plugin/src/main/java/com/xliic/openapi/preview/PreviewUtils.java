package com.xliic.openapi.preview;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;

public class PreviewUtils {

    public final static String RENDERER_SWAGGERUI = "swaggerui";
    public final static String RENDERER_REDOC = "redoc";

    public static String getQuery(String projectId, String canonicalPath, int rendererIndex) {
        return "project=" + projectId + "&filename=" + canonicalPath + "&renderer=" + rendererIndex;
    }

    public static String getProjectIdFromQuery(String query) {
        return query.split("&")[0].split("=")[1];
    }

    public static String getCanonicalPathFromQuery(String query) {
        return URLDecoder.decode(query.split("&")[1].split("=")[1], StandardCharsets.UTF_8);
    }

    public static boolean isPortInRange(int port) {
        return (port >= 0) && (port <= 65535);
    }

    public static URL getURL(Project project, VirtualFile file, int rendererIndex) throws MalformedURLException {
        String port = SettingsService.getInstance().getValue(Settings.Preview.PORT);
        String renderer = (rendererIndex == 0) ? RENDERER_SWAGGERUI : RENDERER_REDOC;
        String query = getQuery(project.getLocationHash(), file.getCanonicalPath(), rendererIndex);
        return new URL("http://localhost:" + port + "/" + renderer + ".html?" + query);
    }
}
