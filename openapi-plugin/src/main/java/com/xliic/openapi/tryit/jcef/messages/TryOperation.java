package com.xliic.openapi.tryit.jcef.messages;

import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;

public class TryOperation extends WebAppConsume {

    @NotNull
    private final TryItOperation payload;

    public TryOperation(@NotNull TryItOperation payload) {
        super("tryOperation");
        this.payload = payload;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("oas", Utils.deserialize(payload.getOas(), Collections.EMPTY_MAP));
        result.put("path", payload.getPath());
        result.put("method", payload.getMethod());
        String mediaType = payload.getPreferredMediaType();
        if (mediaType != null) {
            result.put("preferredMediaType", mediaType);
        }
        String bodyValue = payload.getPreferredBodyValue();
        if (bodyValue != null) {
            result.put("preferredBodyValue", Utils.deserialize(bodyValue, bodyValue));
        }
        Map<String, List<String>> config = new HashMap<>();
        config.put("insecureSslHostnames", new LinkedList<>(Settings.getValues(Settings.TryIt.INSECURE_SSL_HOSTNAMES)));
        result.put("config", config);
        return result;
    }
}
