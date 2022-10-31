package com.xliic.openapi.report.task;

import static com.xliic.openapi.OpenApiBundle.message;
import static com.xliic.openapi.OpenApiUtils.getJsonAST;
import static com.xliic.openapi.OpenApiUtils.getStatus;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.util.TimeoutUtil;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.callback.AuditActionCallback;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.ResponseStatus;
import com.xliic.openapi.services.AuditService;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class AuditTask extends Task.Backgroundable {

    private static final int ATTEMPT_DELAY = 5000;
    private static final int MAX_RETRY_ATTEMPTS = 20;
    private static final String ASSESS_URL = "https://stateless.42crunch.com/api/v1/anon/assess/vscode";
    private static final String USER_AGENT = "Eclipse/" + ApplicationInfo.getInstance().getFullVersion();
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    private final Project project;
    private final String token;
    private final String fileName;
    private final String text;
    private final AuditActionCallback callback;

    public AuditTask(@Nullable Project project, @Nullable String token, @Nullable String fileName, @Nullable String text,
            @Nullable AuditActionCallback callback) {
        super(project, OpenApiBundle.message("openapi.audit.report.progress.title"), false);
        this.project = project;
        this.token = token;
        this.fileName = fileName;
        this.text = text;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progressIndicator) {
        try {
            progressIndicator.setText(OpenApiBundle.message("openapi.audit.report.progress.indicator"));
            Request request = getSubmitAuditRequest(token, fileName, text);
            Response response = client.newCall(request).execute();
            ResponseBody body = response.body();
            if (body != null) {
                String text = body.string();
                Node node = getJsonAST(text);
                if (getStatus(node) == ResponseStatus.IN_PROGRESS) {
                    progressIndicator.setText(message("openapi.audit.token.progress.indicator.wait"));
                    retry(node);
                } else if (getStatus(node) == ResponseStatus.PROCESSED) {
                    callback.setDone(node, false);
                } else if (response.code() == 403) {
                    callback.reject(message("openapi.error.response.403"));
                } else if (response.code() == 429) {
                    callback.reject(message("openapi.error.response.429"));
                } else {
                    callback.reject(message("openapi.error.response.unexpected", text));
                }
            } else {
                callback.reject(message("openapi.error.token.response.empty"));
            }
        } catch (Exception e) {
            callback.reject(message("openapi.error.unexpected", e.getMessage()));
        } finally {
            AuditService.getInstance(project).notifyTaskComplete();
        }
    }

    private void retry(Node node) throws IOException {
        for (int n = 1; n < MAX_RETRY_ATTEMPTS; n++) {
            TimeoutUtil.sleep(ATTEMPT_DELAY);
            Request request = getRetryAuditRequest(getResponseToken(node), token);
            Response response = client.newCall(request).execute();
            ResponseBody body = response.body();
            if (body != null) {
                node = getJsonAST(body.string());
                if (getStatus(node) == ResponseStatus.PROCESSED) {
                    callback.setDone(node, false);
                    return;
                }
            } else {
                callback.reject(message("openapi.error.token.response.empty"));
                return;
            }
        }
        callback.reject("Failed to audit after " + MAX_RETRY_ATTEMPTS + " attempts");
    }

    private static String getResponseToken(Node node) {
        return node.getChildValue("token");
    }

    private static Request getSubmitAuditRequest(String token, String fileName, String text) {

        RequestBody body = new MultipartBody.Builder().setType(MultipartBody.FORM)
                .addFormDataPart("specfile", fileName, RequestBody.create(text, MediaType.parse("application/json"))).build();

        return new Request.Builder().url(ASSESS_URL).method("POST", body).addHeader("X-API-TOKEN", token).addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT).build();
    }

    private static Request getRetryAuditRequest(String token, String apiToken) {

        return new Request.Builder().url(ASSESS_URL + "?token=" + token).addHeader("X-API-TOKEN", apiToken).addHeader("Accept", "application/json")
                .addHeader("User-Agent", USER_AGENT).build();
    }
}
