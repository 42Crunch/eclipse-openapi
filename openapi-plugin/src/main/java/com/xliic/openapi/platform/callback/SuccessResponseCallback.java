package com.xliic.openapi.platform.callback;

import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiBundle;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

public abstract class SuccessResponseCallback implements Callback {

    protected final Project project;

    public SuccessResponseCallback(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        SwingUtilities.invokeLater(() -> Messages.showMessageDialog(project, e.getMessage(),
                OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon()));
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
                SwingUtilities.invokeLater(() -> Messages.showMessageDialog(project, msg,
                        OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon()));
            }
        }
    }
}
