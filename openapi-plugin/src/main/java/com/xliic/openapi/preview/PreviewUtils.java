package com.xliic.openapi.preview;

import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public class PreviewUtils {

    public final static int DEFAULT_SERVER_PORT = 61112;
    public final static int DEFAULT_RENDERER_INDEX = 0;

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

    public static boolean isPortValid(int port) {
        return (0 < port) && (port <= 65535);
    }

    public static boolean isPortValid(@NotNull String port) {
        try {
            return isPortValid(Integer.parseInt(port));
        } catch (NumberFormatException ignored) {
            return false;
        }
    }

    public static URL getURL(Project project, VirtualFile file, int rendererIndex) throws MalformedURLException {

        int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
        String renderer = (rendererIndex == 0) ? RENDERER_SWAGGERUI : RENDERER_REDOC;
        String query = getQuery(project.getLocationHash(), file.getCanonicalPath(), rendererIndex);

        return new URL("http://localhost:" + port + "/" + renderer + ".html?" + query);
    }
}
