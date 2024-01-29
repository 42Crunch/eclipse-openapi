package com.xliic.openapi.report.jcef.messages;

import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.Nullable;

public class CancelAudit extends WebAppConsume {

    public CancelAudit() {
        super("cancelAudit");
    }

    @Override
    protected @Nullable Object getPayload() {
        return null;
    }
}
