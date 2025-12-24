package com.xliic.openapi.preview;

import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

import org.eclipse.jetty.ee10.servlet.security.ConstraintMapping;
import org.eclipse.jetty.ee10.servlet.security.ConstraintSecurityHandler;
import org.eclipse.jetty.security.Constraint;
import org.eclipse.jetty.security.DefaultIdentityService;
import org.eclipse.jetty.security.HashLoginService;
import org.eclipse.jetty.security.UserStore;
import org.eclipse.jetty.security.authentication.BasicAuthenticator;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.util.security.Credential;
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
    public static String getQuery(String projectId, String canonicalPath, int rendererIndex) {
        return "project=" + projectId + "&filename=" + canonicalPath + "&renderer=" + rendererIndex;
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
    public static URL getURL(@NotNull Project project, @NotNull VirtualFile file, int rendererIndex) throws Exception {
        String port = SettingsService.getInstance().getValue(Settings.Preview.PORT);
        String renderer = (rendererIndex == 0) ? RENDERER_SWAGGERUI : RENDERER_REDOC;
        String query = getQuery(project.getLocationHash(), Objects.requireNonNull(file.getCanonicalPath()), rendererIndex);
        String password = PreviewService.getInstance().getPassword();
        return new URL("http://" + PREVIEW_USER + ":" + password + "@localhost:" + port + "/" + renderer + ".html?" + query);
    }

    @NotNull
    public static ConstraintSecurityHandler getSecurityHandler(@NotNull String pathSpec,
                                                               @NotNull String password,
                                                               @NotNull ContextHandler context) {
        ConstraintSecurityHandler handler = new ConstraintSecurityHandler();
        handler.setAuthenticator(new BasicAuthenticator());
        handler.setHandler(context);
        // Configure constraint mapping
        ConstraintMapping mapping = new ConstraintMapping();
        mapping.setPathSpec(pathSpec);
        mapping.setConstraint(Constraint.from(PREVIEW_USER));
        handler.addConstraintMapping(mapping);
        // Configure login service
        HashLoginService loginService = new HashLoginService();
        UserStore userStore = new UserStore();
        userStore.addUser(PREVIEW_USER, Credential.getCredential(password), new String[]{ PREVIEW_USER });
        loginService.setUserStore(userStore);
        loginService.setIdentityService(new DefaultIdentityService());
        handler.setLoginService(loginService);
        return handler;
    }
}