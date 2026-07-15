package com.xliic.openapi.webapp.filepicker;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class LoadFile extends WebAppConsume {

    @Nullable
    protected final String id;
    @NotNull
    private final Base64EncodedFileContent content;

    public LoadFile(@Nullable String id, @NotNull Base64EncodedFileContent content) {
        super("loadFile");
        this.id = id;
        this.content = content;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        Map<String, Object> fileContent = new HashMap<>();
        fileContent.put("filename", content.getFileName());
        fileContent.put("content", content.getContent());
        result.put("file", fileContent);
        return result;
    }
}
