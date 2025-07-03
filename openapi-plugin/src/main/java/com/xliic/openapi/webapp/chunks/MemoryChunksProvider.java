package com.xliic.openapi.webapp.chunks;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class MemoryChunksProvider extends ChunksProvider {

    @NotNull
    private String report;

    public MemoryChunksProvider(@NotNull Project project, @NotNull String webAppId, @NotNull String report) {
        super(project, webAppId);
        this.report = report;
    }

    @Override
    public void start() {
        chunkOffset = 0;
        if (report.length() <= chunkSize) {
            chunkSize = report.length();
        }
        String textSegment = report.substring((int) chunkOffset, (int) (chunkOffset + chunkSize));
        chunkOffset += chunkSize;
        parseChunk(webAppId, textSegment);
    }

    @Override
    public void parseChunkComplete() {
        if (aborted) {
            return;
        }
        if (chunkOffset < report.length()) {
            if (report.length() - chunkOffset < chunkSize) {
                chunkSize = report.length() - chunkOffset;
            }
            String textSegment = report.substring((int) chunkOffset, (int) (chunkOffset + chunkSize));
            chunkOffset += chunkSize;
            parseChunk(webAppId, textSegment);
        } else {
            // Last parse chunk with null triggers parseChunkComplete response, abort will ignore it
            abort();
            parseChunk(webAppId, null);
        }
    }

    @Override
    public void abort() {
        aborted = true;
        // Do not keep large string into memory after all chunks have been sent
        report = "";
    }
}
