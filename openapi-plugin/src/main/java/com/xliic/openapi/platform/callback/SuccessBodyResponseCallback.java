package com.xliic.openapi.platform.callback;

import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.core.util.SwingUtilities;
import com.xliic.openapi.OpenApiBundle;
import okhttp3.Call;
import okhttp3.Callback;
import okhttp3.Response;
import okhttp3.ResponseBody;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;

public abstract class SuccessBodyResponseCallback implements Callback {

    protected final Project project;
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
            SwingUtilities.invokeLater(() -> Messages.showMessageDialog(project, reason,
                    OpenApiBundle.message("openapi.error.title"), Messages.getErrorIcon()));
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
