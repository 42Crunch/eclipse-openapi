package com.xliic.openapi.report.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.Nullable;

import java.util.Map;

public class ShowNoReport extends WebAppConsume {

    public ShowNoReport() {
        super("showNoReport");
    }

    @Override
    protected @Nullable Map<String, Object> getPayload() {
        return null;
    }
}
