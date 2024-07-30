package com.xliic.openapi.webapp.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.BrowserUtil;

public class OpenLink extends WebAppProduce {

    public OpenLink() {
        super("openLink", false, false);
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            BrowserUtil.browse((String) payload);
        }
    }
}
