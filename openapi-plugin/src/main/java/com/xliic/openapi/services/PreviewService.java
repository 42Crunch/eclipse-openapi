package com.xliic.openapi.services;

import static com.xliic.openapi.preview.PreviewUtils.RENDERER_REDOC;
import static com.xliic.openapi.preview.PreviewUtils.RENDERER_SWAGGERUI;
import static com.xliic.openapi.settings.Settings.Preview.DEFAULT_PORT;
import static com.xliic.openapi.settings.Settings.Preview.PORT;
import static com.xliic.openapi.utils.TempFileUtils.createPluginTempDirIfMissing;
import static com.xliic.openapi.utils.TempFileUtils.createTextResource;

import java.io.File;
import java.net.BindException;
import java.nio.file.Paths;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang3.StringUtils;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.ContextHandlerCollection;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.util.component.LifeCycle;
import org.eclipse.jetty.util.resource.PathResource;
import org.eclipse.jetty.util.resource.Resource;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.services.IPreviewService;
import com.xliic.openapi.preview.PreviewCallback;
import com.xliic.openapi.preview.PreviewUtils;
import com.xliic.openapi.preview.PreviewWebSocket;
import com.xliic.openapi.preview.PreviewWebSocketHandler;
import com.xliic.openapi.settings.SettingsService;

public class PreviewService implements IPreviewService, Disposable {

    private final Map<String, PreviewWebSocket> sockets;
    private volatile Server server;
    private PreviewWebSocketHandler socketHandler;
    private File pluginTempDir;
    private boolean initComplete;

    // This is app level service, no matter how many IDE projects are opened the
    // jetty server will be started only once
    public PreviewService() {
        server = null;
        sockets = new ConcurrentHashMap<>();
        socketHandler = null;
        initComplete = false;
    }

    public static PreviewService getInstance() {
        return ApplicationManager.getApplication().getService(PreviewService.class);
    }

    public boolean isServerStated() {
        return server != null && server.isStarted();
    }

    @Override
    public void sendText(String projectId, String canonicalPath, String text) {
        for (int rendererIndex = 0; rendererIndex < 2; rendererIndex++) {
            String query = PreviewUtils.getQuery(projectId, canonicalPath, rendererIndex);
            if (sockets.containsKey(query) && !StringUtils.isEmpty(text)) {
                sockets.get(query).sendText(text);
            }
        }
    }

    @Override
    public void start(@NotNull PreviewCallback callback) {
        if (initComplete) {
            runServer(callback);
        } else {
            initServerResources(callback);
        }
    }

    private void initServerResources(PreviewCallback callback) {
        try {
            pluginTempDir = createPluginTempDirIfMissing();
            createTextResource(pluginTempDir, "preview", RENDERER_SWAGGERUI, ".html");
            createTextResource(pluginTempDir, "preview", RENDERER_SWAGGERUI, ".css");
            createTextResource(pluginTempDir, "preview", RENDERER_SWAGGERUI, ".js");
            createTextResource(pluginTempDir, "preview", RENDERER_REDOC, ".html");
            createTextResource(pluginTempDir, "preview", RENDERER_REDOC, ".js");
            initComplete = true;
            runServer(callback);
        } catch (Throwable e) {
            initComplete = false;
            callback.reject("Failed to init preview server: " + e.getMessage());
        }
    }

    private void runServer(PreviewCallback callback) {
        if (server != null && !server.isStopped() && !server.isFailed()) {
            shutDownServer(callback);
        } else {
            ApplicationManager.getApplication().executeOnPooledThread(() -> createAndRunServer(getPort(), callback));
        }
    }

    private void shutDownServer(PreviewCallback callback) {
        server.addLifeCycleListener(new LifeCycle.Listener() {
            @Override
            public void lifeCycleStopped(LifeCycle event) {
                server.removeLifeCycleListener(this);
                ApplicationManager.getApplication().executeOnPooledThread(() -> createAndRunServer(getPort(), callback));
            }
        });
        try {
            server.stop();
        } catch (Throwable e) {
            callback.reject("Failed to stop preview server: " + e.getMessage());
        }
    }

    private void createAndRunServer(int port, PreviewCallback callback) {
        try {
            server = new Server(port);
            server.setStopAtShutdown(true);

            // Create web socket context
            ContextHandler context0 = new ContextHandler();
            context0.setContextPath("/preview");
            socketHandler = new PreviewWebSocketHandler(sockets);
            context0.setHandler(socketHandler);

            // Create web resources context (html, js, ...)
            ResourceHandler resourceHandler = new ResourceHandler();
            resourceHandler.setDirectoriesListed(false);
            ContextHandler context1 = new ContextHandler();
            context1.setContextPath("/");
            Resource resource = new PathResource(Paths.get(pluginTempDir.getCanonicalPath()));
            context1.setBaseResource(resource);
            context1.setHandler(resourceHandler);

            server.setHandler(new ContextHandlerCollection(context1, context0));
            server.addLifeCycleListener(new LifeCycle.Listener() {
                @Override
                public void lifeCycleStarted(LifeCycle event) {
                    server.removeLifeCycleListener(this);
                    callback.setDone();
                }
            });
            server.start();
            server.join();
        } catch (Throwable e) {
            if (isAddressAlreadyInUseException(e)) {
                callback.setPort(port);
            }
            callback.reject("Failed to start preview server: " + e.getMessage());
        }
    }

    private static boolean isAddressAlreadyInUseException(Throwable e) {
        if (e.getCause() instanceof BindException) {
            return e.getCause().getMessage().contains("Address already in use");
        }
        return false;
    }

    private static int getPort() {
        return SettingsService.getInstance().getIntValue(PORT, DEFAULT_PORT);
    }

    @Override
    public void dispose() {
        try {
            if (server != null) {
                server.stop();
                server = null;
            }
            if (socketHandler != null) {
                socketHandler.destroy();
                socketHandler = null;
            }
        } catch (Throwable ignored) {
        }
    }
}
