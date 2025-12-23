package com.xliic.openapi.preview;

import static com.xliic.openapi.preview.PreviewUtils.getSecurityHandler;
import static com.xliic.openapi.settings.Settings.Preview.DEFAULT_PORT;
import static com.xliic.openapi.settings.Settings.Preview.PORT;

import java.net.BindException;
import java.util.UUID;

import org.eclipse.jetty.ee10.servlet.ServletContextHandler;
import org.eclipse.jetty.ee10.servlet.ServletHolder;
import org.eclipse.jetty.ee10.websocket.jakarta.server.config.JakartaWebSocketServletContainerInitializer;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandlerCollection;
import org.eclipse.jetty.util.component.LifeCycle;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.services.IPreviewService;
import com.xliic.openapi.settings.SettingsService;

import jakarta.websocket.server.ServerEndpointConfig;

public class PreviewService implements IPreviewService, Disposable {

    private volatile Server server;
    @NotNull
    private final String token;
    @NotNull
    private final String password;
    @NotNull
    private final PreviewConfigurator configurator;

    // This is app level service, no matter how many IDE projects are opened the jetty server will be started only once
    public PreviewService() {
        server = null;
        // Use to protect web socket channel
        token = UUID.randomUUID().toString();
        // Use to protect static server content (html, js, CSS)
        password = UUID.randomUUID().toString();
        configurator = new PreviewConfigurator();
    }

    public static PreviewService getInstance() {
        return ApplicationManager.getApplication().getService(PreviewService.class);
    }

    public boolean isServerStated() {
        return server != null && server.isStarted();
    }

    @Override
    public void sendText(String projectId, String canonicalPath, String text) {
        if (isServerStated()) {
            for (int rendererIndex = 0; rendererIndex < 2; rendererIndex++) {
                String query = PreviewUtils.getQuery(projectId, canonicalPath, rendererIndex);
                configurator.sendText(query, text);
            }
        }
    }

    @Override
    public void start(@NotNull PreviewCallback callback) {
    	runServer(callback);
    }
    
    public @NotNull String getToken() {
        return token;
    }

    public @NotNull String getPassword() {
        return password;
    }

    private void runServer(PreviewCallback callback) {
        if (server != null && !server.isStopped() && !server.isFailed()) {
            shutDownServer(callback);
        } else {
            ApplicationManager.getApplication().executeOnPooledThread(() -> createAndRunServer(getPort(), callback));
        }
    }

    private void shutDownServer(PreviewCallback callback) {
        server.addEventListener(new LifeCycle.Listener() {
            @Override
            public void lifeCycleStopped(LifeCycle event) {
            	server.removeEventListener(this);
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

            ServletContextHandler servletContextHandler = new ServletContextHandler(ServletContextHandler.SESSIONS);
            servletContextHandler.setContextPath("/preview");
            server.setHandler(servletContextHandler);

            JakartaWebSocketServletContainerInitializer.configure(servletContextHandler,
                    (servletContext, container) ->
                    container.addEndpoint(ServerEndpointConfig.Builder.create(
                            PreviewEndpoint.class, "/ws").configurator(configurator).build()));

            // Create web resources context (html, js, ...)
            ServletContextHandler contextHandler = new ServletContextHandler();
            contextHandler.setContextPath("/");
            ServletHolder holder = new ServletHolder(new PreviewServlet(token));
            contextHandler.addServlet(holder, "/*");

            ContextHandlerCollection handlerCollection = new ContextHandlerCollection();
            handlerCollection.addHandler(getSecurityHandler("/*", password, contextHandler));
            handlerCollection.addHandler(getSecurityHandler("/preview/*", token, servletContextHandler));

            server.setHandler(handlerCollection);
            server.addEventListener(new LifeCycle.Listener() {
                @Override
                public void lifeCycleStarted(LifeCycle event) {
                    server.removeEventListener(this);
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
            configurator.dispose();
        } catch (Throwable ignored) {
        }
    }
}
