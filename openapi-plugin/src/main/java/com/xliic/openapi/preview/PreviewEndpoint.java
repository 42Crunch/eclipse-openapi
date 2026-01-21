package com.xliic.openapi.preview;

import static com.xliic.openapi.preview.PreviewConfigurator.USER_PROP_QUERY_KEY;
import static com.xliic.openapi.preview.PreviewUtils.*;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.project.Project;
import com.xliic.core.project.ProjectLocator;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.services.BundleService;

import jakarta.websocket.CloseReason;
import jakarta.websocket.Endpoint;
import jakarta.websocket.EndpointConfig;
import jakarta.websocket.Session;
import jakarta.websocket.server.ServerEndpoint;

@ServerEndpoint(value = "/ws")
public class PreviewEndpoint extends Endpoint {

    private final static int IDLE_TIMEOUT_MS = 15 * 60 * 1000;

    @Nullable
    private Session session;
    @NotNull
    private final String sessionId;
    @NotNull
    private final Map<String, PreviewEndpoint> endpoints;

    public PreviewEndpoint(@NotNull Map<String, PreviewEndpoint> endpoints) {
        this.endpoints = endpoints;
        sessionId = PreviewService.getInstance().getSessionId();
    }

    @Override
    public void onOpen(Session session, EndpointConfig config) {
        this.session = session;
        session.setMaxIdleTimeout(IDLE_TIMEOUT_MS);
        final String query = (String) config.getUserProperties().get(USER_PROP_QUERY_KEY);
        if (query == null) {
            close(CloseReason.CloseCodes.CANNOT_ACCEPT, "Query is not defined");
            return;
        }
        if (!sessionId.equals(getSessionIdFromQuery(query))) {
            close(CloseReason.CloseCodes.CANNOT_ACCEPT, "Query session is not valid");
            return;
        }
        ApplicationManager.getApplication().runReadAction(() -> {
            try {
                String text = null;
                String rootFileName = getCanonicalPathFromQuery(query);
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(rootFileName));
                if (file != null) {
                    String projectId = getProjectIdFromQuery(query);
                    Collection<Project> projects = ProjectLocator.getInstance().getProjectsForFile(file);
                    for (Project project : projects) {
                        if (project.getLocationHash().equals(projectId)) {
                            BundleService bundleService = BundleService.getInstance(project);
                            if (bundleService != null) {
                                final BundleResult bundleResult = bundleService.getBundle(rootFileName);
                                if (bundleResult != null) {
                                    text = bundleResult.getJsonText();
                                }
                            }
                        }
                    }
                }
                if (StringUtils.isEmpty(text)) {
                    close(CloseReason.CloseCodes.CANNOT_ACCEPT, "Empty text from " + rootFileName);
                } else {
                    session.getBasicRemote().sendText(text);
                    PreviewEndpoint endpoint = endpoints.remove(query);
                    if (endpoint != null) {
                        endpoint.dispose();
                    }
                    endpoints.put(query, this);
                }
            } catch (Exception exception) {
                close(CloseReason.CloseCodes.UNEXPECTED_CONDITION, exception.getMessage());
            }
        });
    }

    @Override
    public void onClose(Session session, CloseReason closeReason) {
        Logger.getInstance(PreviewEndpoint.class).info("Session closed due to " + closeReason);
    }

    @Override
    public void onError(Session session, Throwable thr) {
        Logger.getInstance(PreviewEndpoint.class).warn(thr);
    }

    public void sendText(@NotNull String text) {
        try {
            if (session != null) {
                session.getBasicRemote().sendText(text);
            }
        } catch (IOException e) {
            Logger.getInstance(PreviewEndpoint.class).warn(e);
        }
    }

    public void dispose() {
        try {
            if (session != null) {
                session.close();
            }
        } catch (IOException e) {
            Logger.getInstance(PreviewEndpoint.class).warn(e);
        }
    }

    private void close(CloseReason.CloseCode closeCode, String reasonPhrase) {
        try {
            if (session != null) {
                session.close(new CloseReason(closeCode, reasonPhrase));
            }
        } catch (IOException e) {
            Logger.getInstance(PreviewEndpoint.class).warn(e);
        }
    }
}
