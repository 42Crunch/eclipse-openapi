package com.xliic.openapi.platform.callback;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.utils.MsgUtils;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;
import okhttp3.ResponseBody;

public abstract class SuccessBodyResponseCallback implements Callback {

    protected final @NotNull Project project;
    protected final boolean showDialogOnFailure;

    public SuccessBodyResponseCallback(@NotNull Project project) {
        this(project, true);
    }

    public SuccessBodyResponseCallback(@NotNull Project project, boolean showDialogOnFailure) {
        this.project = project;
        this.showDialogOnFailure = showDialogOnFailure;
    }

    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        onFailure(e.getMessage());
    }

    public void onFailure(@NotNull String reason) {
        if (showDialogOnFailure) {
            MsgUtils.error(project, reason, true);
        }
    }

    public abstract void onCode200WithBodyTextResponse(@NotNull String text);

    @Override
    public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
        try (ResponseBody body = response.body()) {
            String msg = null;
            int code = response.code();
            if (code == 200) {
                if (body != null) {
                    String text = body.string().trim();
                    if (StringUtils.isEmpty(text)) {
                        msg = "Response body content is empty";
                    } else {
                        if (text.endsWith("</html>")) {
                            msg = "Response body content is HTML instead of JSON";
                        } else {
                            onCode200WithBodyTextResponse(text);
                        }
                    }
                } else {
                    msg = "Response body is not set";
                }
            } else {
                msg = "Response code " + code + " message " + response.message();
            }
            if (msg != null) {
                onFailure(msg);
            }
        }
    }
}
