package com.xliic.openapi.tags.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.Map;

public class LoadTags extends WebAppConsume {

    @NotNull
    private final String targetFileName;
    @NotNull
    private final Map<String, Object> data;

    public LoadTags(@NotNull String targetFileName, @NotNull Map<String, Object> tagData) {
        super("loadTags");
        this.targetFileName = targetFileName;
        this.data = tagData;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        if (!data.containsKey(targetFileName)) {
            data.put(targetFileName, new LinkedList<>());
        }
        result.put("targetFileName", targetFileName);
        result.put("data", data);
        return result;
    }
}
