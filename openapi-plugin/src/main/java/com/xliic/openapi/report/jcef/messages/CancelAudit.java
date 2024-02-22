package com.xliic.openapi.report.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class CancelAudit extends WebAppConsume {

    public CancelAudit() {
        super("cancelAudit");
    }

    @Override
    protected @Nullable Object getPayload() {
        return null;
    }
}
