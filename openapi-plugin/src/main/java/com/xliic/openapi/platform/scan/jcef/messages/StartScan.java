package com.xliic.openapi.platform.scan.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class StartScan extends WebAppConsume {

    public StartScan() {
        super("startScan");
    }

    @Override
    protected @Nullable Object getPayload() {
        return null;
    }
}
