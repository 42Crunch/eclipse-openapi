package com.xliic.openapi.services;

import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_RENDERER_INDEX;
import static com.xliic.openapi.preview.PreviewUtils.DEFAULT_SERVER_PORT;
import static com.xliic.openapi.preview.PreviewUtils.RENDERER_REDOC;
import static com.xliic.openapi.preview.PreviewUtils.RENDERER_SWAGGERUI;

import java.io.BufferedReader;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import java.nio.charset.StandardCharsets;
import java.nio.file.Paths;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Stream;

import org.apache.commons.lang.RandomStringUtils;
import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.server.handler.ContextHandler;
import org.eclipse.jetty.server.handler.ContextHandlerCollection;
import org.eclipse.jetty.server.handler.ResourceHandler;
import org.eclipse.jetty.util.resource.PathResource;
import org.eclipse.jetty.util.resource.Resource;
import org.eclipse.ui.PlatformUI;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.PropertiesComponent;
import com.xliic.core.util.FileUtil;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewUtils;
import com.xliic.openapi.preview.PreviewWebSocket;
import com.xliic.openapi.preview.PreviewWebSocketHandler;
import com.xliic.openapi.services.api.IPreviewService;

public class PreviewService implements IPreviewService, Disposable {

	private Server server;
	private PreviewWebSocketHandler socketHandler;
	private File resourcesPath;
	private final Map<String, PreviewWebSocket> sockets;

	public PreviewService() {

		this.server = null;
		this.resourcesPath = null;
		this.sockets = new ConcurrentHashMap<>();

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
			initWebResources();
		} catch (Exception e) {
			e.printStackTrace();
			return;
		}

		// Run jetty web socket server in a thread
		ApplicationManager.getApplication().executeOnPooledThread(() -> {
			try {
				startServer();
			} catch (Exception e) {
				e.printStackTrace();
			}
		});
	}

	@Override
	public boolean isRunning() {
		return (server != null) && server.isRunning();
	}

	public static PreviewService getInstance() {
		return (PreviewService) PlatformUI.getWorkbench().getService(IPreviewService.class);
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
		try {
			// Run jetty web socket server in a thread
			ApplicationManager.getApplication().executeOnPooledThread(() -> {
				try {
					server.stop();
					startServer();
				} catch (Exception e) {
					e.printStackTrace();
				}
			});
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public void startServer() throws Exception {

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
		Resource resource = new PathResource(Paths.get(resourcesPath.getCanonicalPath()));
		context1.setBaseResource(resource);
		context1.setHandler(resourceHandler);

		server.setHandler(new ContextHandlerCollection(context1, context0));
		server.start();
		server.join();
	}

	@Override
	public void initWebResources() throws IOException {
		if (resourcesPath != null) {
			return;
		}
		String randomString = RandomStringUtils.random(10, true, false).toLowerCase();
		resourcesPath = FileUtil.createTempDirectory("preview_", randomString, true);
		create(resourcesPath, RENDERER_SWAGGERUI, ".html");
		create(resourcesPath, RENDERER_SWAGGERUI, ".js");
		create(resourcesPath, RENDERER_REDOC, ".html");
		create(resourcesPath, RENDERER_REDOC, ".js");
	}

	private void create(File dir, String prefix, String suffix) throws IOException {
		InputStream inputStream = ResourceUtil.getResourceAsStream(getClass(), "preview", prefix + suffix);
		Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
		File tmp = FileUtil.createTempFile(dir, prefix, suffix, true);
		PrintWriter writer = new PrintWriter(tmp, StandardCharsets.UTF_8);
		stream.forEach(writer::println);
		writer.close();
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
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
