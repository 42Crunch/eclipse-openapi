package com.xliic.openapi.bigfiles.jcef.messages;

import com.xliic.core.project.Project;
import com.xliic.openapi.bigfiles.BigFilesService;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

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
            String file = (String) map.get("file");
            BigFilesService.getInstance(project).convert(file);
        }
    }
}
