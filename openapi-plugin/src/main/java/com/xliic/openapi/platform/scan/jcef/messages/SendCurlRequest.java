package com.xliic.openapi.platform.scan.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.CopyPasteManager;
import com.xliic.core.ide.StringSelection;
import com.xliic.core.project.Project;
import com.xliic.core.util.SystemInfoRt;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SendCurlRequest extends WebAppProduce {

    @NotNull
    private final Project project;

    public SendCurlRequest(@NotNull Project project) {
        super("sendCurlRequest");
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            String cmd = (String) payload;
            if (SystemInfoRt.isWindows && cmd.contains("curl")) {
                cmd = cmd.replace("curl", "curl.exe");
            }
            cmd = cmd.replace("'", "\"");
            onSendCurlRequest(cmd);
        }
    }

    private void onSendCurlRequest(@NotNull String cmd) {
        try {
          CopyPasteManager.getInstance().setContents(new StringSelection(cmd));
        } catch (Exception ignore) {
        }
    }
}

