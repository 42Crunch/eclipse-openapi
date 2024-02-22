package com.xliic.openapi.report.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowNoReport extends WebAppConsume {

    public ShowNoReport() {
        super("showNoReport");
    }

    @Override
    protected @Nullable Map<String, Object> getPayload() {
        return null;
    }
}
