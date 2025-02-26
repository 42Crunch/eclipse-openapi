package com.xliic.openapi.capture.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.openapi.capture.CaptureService;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Map;

public class DeleteJob extends WebAppProduce {

    @NotNull
    protected final Project project;

    public DeleteJob(@NotNull Project project) {
        super("deleteJob", false, false, -1);
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            String quickgenId = (String) map.get("quickgenId");
            CaptureService.getInstance(project).deleteJob(id, quickgenId);
        }
    }
}
