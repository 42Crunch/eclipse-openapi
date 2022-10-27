package com.xliic.openapi.services;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.services.api.IKDBService;
import com.xliic.openapi.topic.AuditListener;
import okhttp3.*;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.util.Collections;
import java.util.LinkedList;
import java.util.List;

public class KDBService implements IKDBService, Disposable {

    private static final String ARTICLES_URL = "https://platform.42crunch.com/kdb/audit-with-yaml.json";
    private volatile String text;
    private final List<Project> projects = Collections.synchronizedList(new LinkedList<>());

    public KDBService() {
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        Request request = new Request.Builder().url(ARTICLES_URL).build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                try (ResponseBody body = response.body()) {
                    if (response.code() == 200) {
                        if (body != null) {
                            String text = body.string().trim();
                            if (text.startsWith("{") && text.endsWith("}")) {
                                setText(text);
                                for (Project project : projects) {
                                    project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleKDBReady(text);
                                }
                                projects.clear();
                            }
                        }
                    }
                }
            }
            @Override
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
                projects.clear();
                e.printStackTrace();
            }
        });
    }

    public static KDBService getInstance() {
        return ApplicationManager.getApplication().getService(KDBService.class);
    }

    @Override
    public String getText() {
        return text;
    }

    @Override
    public void setText(String text) {
        this.text = text;
    }

    @Override
    public void notifyWhenKDBReady(@NotNull Project project) {
        if (text == null) {
            projects.add(project);
        } else {
            project.getMessageBus().syncPublisher(AuditListener.TOPIC).handleKDBReady(text);
        }
    }

    @Override
    public void dispose() {
        text = null;
        projects.clear();
    }
}
