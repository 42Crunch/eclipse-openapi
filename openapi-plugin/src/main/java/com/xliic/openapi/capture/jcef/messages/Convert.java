package com.xliic.openapi.capture.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.openapi.capture.CaptureService;
import com.xliic.openapi.capture.payload.PrepareOptions;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.List;
import java.util.Map;

public class Convert extends WebAppProduce {

    @NotNull
    protected final Project project;

    public Convert(@NotNull Project project) {
        super("convert", false, false, -1);
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            Map<String, Object> options = (Map<String, Object>) map.get("options");
            List<String> files = (List<String>) map.get("files");
            CaptureService.getInstance(project).convert(id, files, PrepareOptions.getInstance(options));
        }
    }
}
