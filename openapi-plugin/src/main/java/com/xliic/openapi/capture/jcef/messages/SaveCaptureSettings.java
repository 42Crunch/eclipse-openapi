package com.xliic.openapi.capture.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.capture.CaptureService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveCaptureSettings extends WebAppProduce {

    @NotNull
    private final Project project;

    public SaveCaptureSettings(@NotNull Project project) {
        super("saveCaptureSettings");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            Map<String, Object> settings = (Map<String, Object>) map.get("settings");
            CaptureService.getInstance(project).saveCaptureSettings(id, settings);
        }
    }
}

