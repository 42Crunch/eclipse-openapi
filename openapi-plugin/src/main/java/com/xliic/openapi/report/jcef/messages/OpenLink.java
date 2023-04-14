package com.xliic.openapi.report.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.BrowserUtil;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class OpenLink extends WebAppProduce {

    public OpenLink() {
        super("openLink");
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            BrowserUtil.browse((String) payload);
        }
    }
}
