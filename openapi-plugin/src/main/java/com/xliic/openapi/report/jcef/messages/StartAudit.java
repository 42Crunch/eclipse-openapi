package com.xliic.openapi.report.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class StartAudit extends WebAppConsume {

    public StartAudit() {
        super("startAudit");
    }

    @Override
    protected @Nullable Object getPayload() {
        return null;
    }
}
