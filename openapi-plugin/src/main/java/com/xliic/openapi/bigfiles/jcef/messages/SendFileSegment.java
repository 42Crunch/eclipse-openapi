package com.xliic.openapi.bigfiles.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class SendFileSegment extends WebAppConsume {

    @NotNull
    private final String file;
    @NotNull
    private final String textSegment;
    private final float progress;

    public SendFileSegment(@NotNull String file, @NotNull String textSegment, float progress) {
        super("sendFileSegment");
        this.file = file;
        this.textSegment = textSegment;
        this.progress = progress;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("file", file);
        result.put("textSegment", textSegment);
        result.put("progress", progress);
        return result;
    }
}
