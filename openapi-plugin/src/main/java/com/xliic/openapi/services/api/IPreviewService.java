package com.xliic.openapi.services.api;

public interface IPreviewService {

	public void sendText(String projectId, String canonicalPath, String text);

	public void restartServer();

	public void startServer() throws Exception;
}
