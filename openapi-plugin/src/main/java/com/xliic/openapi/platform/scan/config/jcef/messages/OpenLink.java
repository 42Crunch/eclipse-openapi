package com.xliic.openapi.platform.scan.config.jcef.messages;

import com.xliic.core.ide.BrowserUtil;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.Nullable;

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
