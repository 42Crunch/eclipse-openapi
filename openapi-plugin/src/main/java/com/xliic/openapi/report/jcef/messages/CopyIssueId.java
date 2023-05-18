package com.xliic.openapi.report.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class CopyIssueId extends WebAppProduce {

    public CopyIssueId() {
        super("copyIssueId");
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
        	Utils.onCopyIssueId((String) payload);
        }
    }
}
