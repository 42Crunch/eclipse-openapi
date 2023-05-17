package com.xliic.openapi.platform.scan.jcef.messages;

import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.SystemInfoRt;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SendCurlRequest extends WebAppProduce {

    public SendCurlRequest() {
        super("sendCurlRequest");
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            String cmd = (String) payload;
            if (SystemInfoRt.isWindows && cmd.contains("curl")) {
                cmd = cmd.replace("curl", "curl.exe");
            }
            Utils.onCopyIssueId(cmd);
        }
    }
}
