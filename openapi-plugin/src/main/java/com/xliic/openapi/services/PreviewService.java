package com.xliic.openapi.services;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;
import static com.xliic.openapi.preview.PreviewUtils.RENDERER_REDOC;
import static com.xliic.openapi.preview.PreviewUtils.RENDERER_SWAGGERUI;

import java.io.File;
import java.net.BindException;
import java.nio.file.Paths;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.ContextHandlerCollection;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.util.resource.PathResource;
import org.eclipse.jetty.util.resource.Resource;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewUtils;
import com.xliic.openapi.preview.PreviewWebSocket;
import com.xliic.openapi.preview.PreviewWebSocketHandler;
import com.xliic.openapi.services.api.IPreviewService;

import static com.xliic.openapi.TempFileUtils.createPluginTempDirIfMissing;
import static com.xliic.openapi.TempFileUtils.createTextResource;

public class PreviewService implements IPreviewService, Disposable {

	private Server server;
	private PreviewWebSocketHandler socketHandler;
	private File pluginTempDir;
	private final Map<String, PreviewWebSocket> sockets;
	private Exception error;

	public PreviewService() {

        server = null;
        sockets = new ConcurrentHashMap<>();
        error = null;
        
		// Set plugin properties
		PropertiesComponent pc = PropertiesComponent.getInstance();
		if (!pc.isValueSet(PreviewKeys.PORT)) {
			pc.setValue(PreviewKeys.PORT, DEFAULT_SERVER_PORT, DEFAULT_SERVER_PORT);
		}
		if (!pc.isValueSet(PreviewKeys.RENDERER)) {
			pc.setValue(PreviewKeys.RENDERER, DEFAULT_RENDERER_INDEX, DEFAULT_RENDERER_INDEX);
		}

		// Create web server resources
		try {
            pluginTempDir = createPluginTempDirIfMissing();
            createTextResource(pluginTempDir, "preview", RENDERER_SWAGGERUI, ".html");
            createTextResource(pluginTempDir, "preview", RENDERER_SWAGGERUI, ".js");
            createTextResource(pluginTempDir, "preview", RENDERER_REDOC, ".html");
            createTextResource(pluginTempDir, "preview", RENDERER_REDOC, ".js");
		} 
		catch (Exception e) {
			e.printStackTrace();
			return;
		}

		// Run jetty web socket server in a thread
		ApplicationManager.getApplication().executeOnPooledThread(() -> {
			try {
				startServer();
			} catch (Exception e) {
				error = e;
				e.printStackTrace();
			}
		});
	}

	public static PreviewService getInstance() {
		return ApplicationManager.getApplication().getService(PreviewService.class);
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
    public void restartServer() {
        // Restart jetty web socket server in a thread
        ApplicationManager.getApplication().executeOnPooledThread(() -> {
            try {
                server.stop();
                startServer();
            }
            catch (Exception e) {
                e.printStackTrace();
                error = e;
            }
        });
    }

	@Override
	public void startServer() throws Exception {

		error = null;
		int port = PropertiesComponent.getInstance().getInt(PreviewKeys.PORT, DEFAULT_SERVER_PORT);
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
		server.start();
		server.join();
	}
	
    public boolean isServerStateInProgress() {
        return (server == null) || server.isStarting() || server.isStopping();
    }

    public boolean isServerStarted() {
        return server.isStarted();
    }

    public String getErrorMessage() {
        String msg = "Current server state is " + server.getState() + ".";
        if (error != null) {
            if (isAddressAlreadyInUseException(error)) {
                String port = PropertiesComponent.getInstance().getValue(PreviewKeys.PORT);
                msg += " Failed to bind to port " + port + ".";
            }
            else {
                msg += (" " + StringUtils.stripEnd(error.getMessage(), ".") + ".");
            }
        }
        return msg + " Please go to File > Settings > Tools > OpenAPI (Swagger) Editor and change the server port." +
                " The server will be restarted automatically after the settings get applied.";
    }

    private boolean isAddressAlreadyInUseException(Exception e) {
        if (e.getCause() instanceof BindException) {
            return e.getCause().getMessage().contains("Address already in use");
        }
        return false;
    }

	@Override
	public void dispose() {
		Project.getInstance().dispose();
		try {
			if (server != null) {
				server.stop();
				server = null;
			}
			if (socketHandler != null) {
				socketHandler.destroy();
				socketHandler = null;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
