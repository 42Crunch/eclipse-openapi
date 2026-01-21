package com.xliic.openapi.preview;

import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;

public class PreviewUtils {

    public final static String PREVIEW_USER = "preview";
    public final static String RENDERER_SWAGGERUI = "swaggerui";
    public final static String RENDERER_REDOC = "redoc";

    @NotNull
    public static String getQuery(@NotNull String projectId, @NotNull String canonicalPath, int rendererIndex, @NotNull String sessionId) {
        return "project=" + projectId + "&filename=" + canonicalPath + "&renderer=" + rendererIndex + "&session=" + sessionId;
    }

    @NotNull
    public static String getProjectIdFromQuery(@NotNull String query) {
        return query.split("&")[0].split("=")[1];
    }

    @NotNull
    public static String getCanonicalPathFromQuery(@NotNull String query) {
        return URLDecoder.decode(query.split("&")[1].split("=")[1], StandardCharsets.UTF_8);
    }

    public static boolean isPortInRange(int port) {
        return (port >= 0) && (port <= 65535);
    }
    
    @NotNull
    public static String getSessionIdFromQuery(@NotNull String query) {
        return query.split("&")[3].split("=")[1];
    }

    @NotNull
    public static URL getURL(@NotNull Project project, @NotNull VirtualFile file, int rendererIndex) throws Exception {
        String port = SettingsService.getInstance().getValue(Settings.Preview.PORT);
        String renderer = (rendererIndex == 0) ? RENDERER_SWAGGERUI : RENDERER_REDOC;
        String sessionId = PreviewService.getInstance().getSessionId();
        String query = getQuery(project.getLocationHash(), Objects.requireNonNull(file.getCanonicalPath()), rendererIndex, sessionId);
        return new URL("http://localhost:" + port + "/" + renderer + ".html?" + query);
    }
}