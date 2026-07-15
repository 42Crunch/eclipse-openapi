package com.xliic.openapi.webapp.filepicker;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.Nullable;

import java.util.HashMap;
import java.util.Map;

public class CancelFile extends WebAppConsume {

    @Nullable
    protected final String id;

    public CancelFile(@Nullable String id) {
        super("cancelFile");
        this.id = id;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        return result;
    }
}
