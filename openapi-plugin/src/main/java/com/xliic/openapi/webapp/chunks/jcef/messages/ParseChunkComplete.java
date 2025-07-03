package com.xliic.openapi.webapp.chunks.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.openapi.platform.scan.ScanService;
import com.xliic.openapi.webapp.chunks.ChunksProvider;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class ParseChunkComplete extends WebAppProduce {

    @NotNull
    private final Project project;
    @NotNull
    private final String webAppId;

    public ParseChunkComplete(@NotNull Project project, @NotNull String webAppId) {
        super("parseChunkCompleted");
        this.project = project;
        this.webAppId = webAppId;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload == null) {
            ChunksProvider provider = ScanService.getInstance(project).getChunksProvider(webAppId);
            if (provider != null) {
                provider.parseChunkComplete();
            }
        }
    }
}
