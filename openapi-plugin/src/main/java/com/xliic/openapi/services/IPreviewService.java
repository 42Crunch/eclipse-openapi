package com.xliic.openapi.services;

import java.io.IOException;

import com.xliic.idea.file.VirtualFile;

public interface IPreviewService {

    public boolean isRunning();
    public void sendText(String queue, String text);
    public void restartServer();
    public void startServer() throws Exception;
    public void initWebResources() throws IOException;
    public void addListener(VirtualFile file);
    public void removeListener(VirtualFile file);
}
