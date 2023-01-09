package com.xliic.openapi.report.task;

import static com.xliic.openapi.OpenApiBundle.message;
import static com.xliic.openapi.utils.Utils.getJsonAST;
import static com.xliic.openapi.utils.Utils.getStatus;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.EmailDialogDoOkActionCallback;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.ResponseStatus;
import com.xliic.openapi.services.AuditService;

import okhttp3.FormBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class TokenTask extends Task.Backgroundable {

    private static final String TOKEN_URL = "https://stateless.42crunch.com/api/v1/anon/token";
    private static final String USER_AGENT = "Eclipse/" + ApplicationInfo.getInstance().getFullVersion();
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    private final Project project;
    private final String email;
    private final EmailDialogDoOkActionCallback callback;

    public TokenTask(@NotNull Project project, @NotNull String email, @NotNull EmailDialogDoOkActionCallback callback) {
        super(project, OpenApiBundle.message("openapi.audit.token.progress.title"), false);
        this.project = project;
        this.email = email;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progressIndicator) {
        try {
            progressIndicator.setText(OpenApiBundle.message("openapi.audit.token.progress.indicator"));
            Request request = getGenerateTokenRequest(email);
            Response response = client.newCall(request).execute();
            ResponseBody body = response.body();
            if (body != null) {
                String text = body.string();
                Node node = getJsonAST(text);
                if (getStatus(node) == ResponseStatus.SUCCESS) {
                    callback.setDone();
                } else {
                    callback.reject(message("openapi.error.token.response.unexpected", text));
                }
            } else {
                callback.reject(message("openapi.error.token.response.empty"));
            }
        } catch (Exception e) {
            callback.reject(message("openapi.error.token.unexpected", e.getMessage()));
        } finally {
            AuditService.getInstance(project).notifyTaskComplete();
        }
    }

    private static Request getGenerateTokenRequest(String email) {
        RequestBody formBody = new FormBody.Builder().add("email", email).build();

        return new Request.Builder().url(TOKEN_URL).addHeader("User-Agent", USER_AGENT).post(formBody).build();
    }
}
