package com.xliic.openapi.tryit.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.TryItService;
import com.xliic.openapi.tryit.TryItResponseCallback;
import com.xliic.openapi.tryit.payload.TryItRequest;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SendHttpRequest extends WebAppProduce {

    @NotNull
    private final Project project;
    private final boolean tryIt;

    public SendHttpRequest(@NotNull Project project, boolean tryIt) {
        super("sendHttpRequest");
        this.project = project;
        this.tryIt = tryIt;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            Map<String, Object> config = (Map<String, Object>) map.get("config");
            Map<String, Object> https =  (Map<String, Object>) config.get("https");
            Map<String, Object> request = (Map<String, Object>) map.get("request");
            String url = (String) request.get("url");
            String method = (String) request.get("method");
            Map<String, String> headers = (Map<String, String>) request.get("headers");
            boolean rejectUnauthorized = (Boolean) https.get("rejectUnauthorized");
            Object body = request.get("body");
            String id = (String) map.get("id");
            TryItRequest tryItRequest = TryItRequest.getInstance(url, method, headers, body, id, rejectUnauthorized);
            TryItService.getInstance(project).send(tryItRequest, new TryItResponseCallback(project, tryItRequest.getId(), tryIt));
        }
    }
}
