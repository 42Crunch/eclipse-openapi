package com.xliic.openapi.capture.jcef.messages;

import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class ShowCaptureWindow extends WebAppConsume {

    @NotNull
    private final List<CaptureItem> items;

    public ShowCaptureWindow(@NotNull List<CaptureItem> items) {
        super("showCaptureWindow");
        this.items = items;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        List<Map<String, Object>> result = new LinkedList<>();
        for (CaptureItem item : items) {
            result.add(item.getPayload());
        }
        return result;
    }
}
