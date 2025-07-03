package com.xliic.openapi.webapp.chunks;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import org.jetbrains.annotations.NotNull;

public abstract class ChunksProvider {

    @NotNull
    protected final Project project;
    @NotNull
    protected final String webAppId;

    protected long chunkOffset;
    protected long chunkSize = 512 * 1024; // 512kb;
    protected volatile boolean aborted = false;

    public ChunksProvider(@NotNull Project project, @NotNull String webAppId) {
        this.project = project;
        this.webAppId = webAppId;
    }

    public abstract void start();

    public abstract void parseChunkComplete();

    public abstract void abort();

    protected void parseChunk(String id, String text) {
        ApplicationManager.getApplication().invokeAndWait(() ->
                project.getMessageBus().syncPublisher(ChunksListener.TOPIC).parseChunk(id, text));
    }
}
