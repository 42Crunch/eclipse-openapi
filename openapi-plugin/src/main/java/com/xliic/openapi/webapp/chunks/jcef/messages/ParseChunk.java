package com.xliic.openapi.webapp.chunks.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ParseChunk extends WebAppConsume {

    @Nullable
    private final String chunk;

    public ParseChunk(@Nullable String chunk) {
        super("parseChunk");
        this.chunk = chunk;
    }

    @Override
    protected @Nullable Object getPayload() {
        return chunk;
    }
}
