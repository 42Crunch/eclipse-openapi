package com.xliic.openapi.webapp.chunks;

import java.nio.MappedByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;

public class FileChunksProvider extends ChunksProvider {

    @NotNull
    private final Path filePath;
    @Nullable
    private FileChannel channel;
    private long fileSize;

    public FileChunksProvider(@NotNull Project project, @NotNull String webAppId, @NotNull Path filePath) {
        super(project, webAppId);
        this.filePath = filePath;
    }

    @Override
    public void start() {
        chunkOffset = 0;
        try {
            channel = FileChannel.open(filePath, StandardOpenOption.READ);
            fileSize = channel.size();
            if (chunkOffset < fileSize) {
                parseChunk(webAppId, getNextChunk());
            } else {
                abort();
                parseChunk(webAppId, null);
            }
        } catch (Exception e) {
            abort();
            parseChunk(webAppId, null);
        }
    }

    @Override
    public void parseChunkComplete() {
        if (aborted) {
            return;
        }
        try {
            if (chunkOffset < fileSize) {
                parseChunk(webAppId, getNextChunk());
            } else {
                abort();
                parseChunk(webAppId, null);
            }
        } catch (Exception e) {
            abort();
            parseChunk(webAppId, null);
        }
    }

    @Override
    public void abort() {
        aborted = true;
        if (channel != null) {
            try {
                channel.close();
            } catch (Exception ignored) {
            }
            channel = null;
        }
    }

    private String getNextChunk() throws Exception {
        long size = Math.min(chunkSize, fileSize - chunkOffset);
        MappedByteBuffer buffer = Objects.requireNonNull(channel).map(FileChannel.MapMode.READ_ONLY, chunkOffset, size);
        chunkOffset += size;
        return StandardCharsets.UTF_8.decode(buffer).toString();
    }
}
