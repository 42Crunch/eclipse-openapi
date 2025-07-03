package com.xliic.openapi.capture.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class SaveCapture extends WebAppConsume {

    @NotNull
    private final CaptureItem item;

    public SaveCapture(@NotNull CaptureItem item) {
        super("saveCapture");
        this.item = item;
    }

    @Override
    @Nullable
    protected Object getPayload() {
        return item.getPayload();
    }
}
