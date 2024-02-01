package com.xliic.openapi.config.jcef.messages;

import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class ShowCliDownload extends WebAppConsume {

    private final boolean completed;
    private final boolean success;
    @Nullable
    private final String value;
    @Nullable
    private final Progress progress;

    public ShowCliDownload(boolean success, @Nullable String value) {
        super("showCliDownload");
        this.completed = true;
        this.success = success;
        this.value = value;
        this.progress = null;
    }
    public ShowCliDownload(@NotNull Progress progress) {
        super("showCliDownload");
        this.completed = false;
        this.progress = progress;
        this.success = false;
        this.value = null;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("completed", completed);
        if (completed) {
            result.put("success", success);
            result.put(success ? "location" : "error", value);
        } else {
            if (progress != null) {
                result.put("progress", progress.getProgress());
            }
        }
        return result;
    }
}
