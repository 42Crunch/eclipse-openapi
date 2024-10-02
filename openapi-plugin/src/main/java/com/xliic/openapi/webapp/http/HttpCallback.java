package com.xliic.openapi.webapp.http;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class HttpCallback implements Callback {

    @NotNull
    protected final Project project;
    @Nullable
    protected final String requestId;
    @NotNull
    private final String webAppId;

    public HttpCallback(@NotNull Project project, @NotNull String webAppId, @Nullable String requestId) {
        this.project = project;
        this.webAppId = webAppId;
        this.requestId = requestId;
    }

    @Override
    public void onResponse(@NotNull Call call, @NotNull Response response) {
        String httpVersion = response.protocol().toString();
        int statusCode = response.code();
        String statusMessage = response.message();
        List<List<String>> headers = new LinkedList<>();
        Headers respHeaders = response.headers();
        for (int i = 0; i < respHeaders.size(); i++) {
            headers.add(new LinkedList<>(Arrays.asList(respHeaders.name(i), respHeaders.value(i))));
        }
        try (ResponseBody body = response.body()) {
            if (body != null) {
                fireHttpResponseError(new HttpResponse(httpVersion, statusCode, statusMessage, headers, body.string(), requestId));
            }
        } catch (IOException e) {
            fireHttpErrorEvent(new HttpError(e.getMessage(), requestId, false));
        }
    }
    @Override
    public void onFailure(@NotNull Call call, @NotNull IOException e) {
        onFailure(e.getMessage(), HttpResponse.isSslError(e));
    }

    public void onFailure(@NotNull Throwable t) {
        onFailure(t.getMessage(), false);
    }

    public void onFailure(@NotNull String msg, boolean sslError) {
        fireHttpErrorEvent(new HttpError(msg, requestId, sslError));
    }

    private void fireHttpResponseError(@NotNull HttpResponse response) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(HttpResponseListener.TOPIC).showHttpResponse(webAppId, response));
    }

    private void fireHttpErrorEvent(@NotNull HttpError payload) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(HttpResponseListener.TOPIC).showHttpError(webAppId, payload));
    }
}
