package com.xliic.openapi.capture.jcef.messages;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.webapp.messages.WebAppConsume;

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
        Map<String, Object> result = new HashMap<>();
        List<Map<String, Object>> itemsPayload = new LinkedList<>();
        for (CaptureItem item : items) {
            itemsPayload.add(item.getPayload());
        }
        result.put("items", itemsPayload);
        return result;
    }
}
