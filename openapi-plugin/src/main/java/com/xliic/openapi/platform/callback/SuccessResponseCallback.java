package com.xliic.openapi.platform.callback;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.MsgUtils;

import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;
import okhttp3.ResponseBody;

public abstract class SuccessResponseCallback implements Callback {

    protected final Project project;

    public SuccessResponseCallback(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        MsgUtils.error(project, e.getMessage(), true);
    }

    public abstract void onCode200Response();

    @Override
    public void onResponse(@NotNull Call call, @NotNull Response response) {
        try (ResponseBody ignored = response.body()) {
            int code = response.code();
            if (code == 200) {
                onCode200Response();
            } else {
                String msg = "Response code " + code + " message " + response.message();
                MsgUtils.error(project, msg, true);
            }
        }
    }
}
