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

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.Disposable;
import com.xliic.idea.FileDocumentManager;
import com.xliic.idea.PropertiesComponent;
import com.xliic.idea.ResourceUtil;
import com.xliic.idea.document.Document;
import com.xliic.idea.file.FileUtil;
import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.listeners.PreviewDocumentListener;
import com.xliic.openapi.preview.PreviewKeys;
import com.xliic.openapi.preview.PreviewWebSocket;
import com.xliic.openapi.preview.PreviewWebSocketHandler;

public class PreviewService implements IPreviewService, Disposable {

	private Server server;
	private PreviewWebSocketHandler socketHandler;
	private File resourcesPath;

	private final Map<String, PreviewWebSocket> sockets;
	private final Map<String, Map<String, PreviewDocumentListener>> previewListeners;

	public PreviewService() {
		this.server = null;
		this.resourcesPath = null;
		this.sockets = new ConcurrentHashMap<>();
		this.previewListeners = new ConcurrentHashMap<>();

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
	public void sendText(String queue, String text) {
		if (sockets.containsKey(queue) && !StringUtils.isEmpty(text)) {
			sockets.get(queue).sendText(text);
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

		// Create web socket context
		ContextHandler context0 = new ContextHandler();
		context0.setContextPath("/preview");
		socketHandler = new PreviewWebSocketHandler(sockets, previewListeners);
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

	// todo: move to utils!!!
	private void create(File dir, String prefix, String suffix) throws IOException {
		InputStream inputStream = ResourceUtil.getResourceAsStream(getClass(), "preview", prefix + suffix);
		Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
		File tmp = FileUtil.createTempFile(dir, prefix, suffix, true);
		PrintWriter writer = new PrintWriter(tmp, StandardCharsets.UTF_8);
		stream.forEach(writer::println);
		writer.close();
	}

	@Override
	public void addListener(VirtualFile file) {

		for (Map.Entry<String, Map<String, PreviewDocumentListener>> entry : previewListeners.entrySet()) {

			String bundledFile = file.getCanonicalPath();
			Map<String, PreviewDocumentListener> listeners = entry.getValue();

			if (listeners.containsKey(bundledFile) && (listeners.get(bundledFile) == null)) {
				Document document = FileDocumentManager.getInstance().getDocument(file);
				if (document != null) {
					String query = entry.getKey();
					listeners.put(bundledFile, new PreviewDocumentListener(query, listeners));
					document.addDocumentListener(listeners.get(bundledFile));
				}
			}
		}
	}

	@Override
	public void removeListener(VirtualFile file) {

		for (Map.Entry<String, Map<String, PreviewDocumentListener>> entry : previewListeners.entrySet()) {

			String bundledFile = file.getCanonicalPath();
			Map<String, PreviewDocumentListener> listeners = entry.getValue();

			if (listeners.containsKey(bundledFile) && (listeners.get(bundledFile) != null)) {
				Document document = FileDocumentManager.getInstance().getDocument(file);
				if (document != null) {
					document.removeDocumentListener(listeners.get(bundledFile));
					listeners.put(bundledFile, null);
				}
			}
		}
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
