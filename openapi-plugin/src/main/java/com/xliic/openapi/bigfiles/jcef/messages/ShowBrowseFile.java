package com.xliic.openapi.bigfiles.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class ShowBrowseFile extends WebAppConsume {

    @NotNull
    private final String file;

    public ShowBrowseFile(@NotNull String file) {
        super("showBrowseFile");
        this.file = file;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("file", file);
        return result;
    }
}
