package com.xliic.openapi.preview;

import static com.xliic.openapi.preview.PreviewUtils.getCanonicalPathFromQuery;
import static com.xliic.openapi.preview.PreviewUtils.getProjectIdFromQuery;

import java.io.File;
import java.io.IOException;
import java.util.Collection;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jetty.websocket.api.Session;
import org.eclipse.jetty.websocket.api.StatusCode;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketClose;
import org.eclipse.jetty.websocket.api.annotations.OnWebSocketConnect;
import org.eclipse.jetty.websocket.api.annotations.WebSocket;

import com.xliic.idea.ApplicationManager;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.project.ProjectLocator;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.services.BundleService;

@WebSocket
public class PreviewWebSocket {

	private Session session;
	private final String query;
	private final Map<String, PreviewWebSocket> sockets;

	public PreviewWebSocket(String query, Map<String, PreviewWebSocket> sockets) {
		this.sockets = sockets;
		this.query = query;
	}

	@OnWebSocketConnect
	public void onConnect(Session session) {
		this.session = session;
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
					session.close(StatusCode.BAD_DATA, null);
				} else {
					this.session.getRemote().sendString(text);
					if (sockets.containsKey(query)) {
						sockets.remove(query).session.close(StatusCode.NORMAL, null);
					}
					sockets.put(query, this);
				}
			} catch (Exception exception) {
				session.close(StatusCode.UNDEFINED, exception.getMessage());
			}
		});
	}

	@OnWebSocketClose
	public void onClose(int statusCode, String reason) {
		sockets.remove(query);
	}

	public void sendText(String text) {
		try {
			this.session.getRemote().sendString(text);
		} catch (IOException e) {
			e.printStackTrace();
		}
	}
}