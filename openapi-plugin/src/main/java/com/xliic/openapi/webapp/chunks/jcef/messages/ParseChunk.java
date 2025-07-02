package com.xliic.openapi.webapp.chunks.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.Nullable;

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
