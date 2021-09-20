package com.xliic.openapi.services;

import java.io.IOException;

public interface IPreviewService {

	public boolean isRunning();

	public void sendText(String projectId, String canonicalPath, String text);

	public void restartServer();

	public void startServer() throws Exception;

	public void initWebResources() throws IOException;
}
