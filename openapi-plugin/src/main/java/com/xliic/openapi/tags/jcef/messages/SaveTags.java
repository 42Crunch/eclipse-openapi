package com.xliic.openapi.tags.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.services.InlayHintsService;
import com.xliic.openapi.tags.TagsService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SaveTags extends WebAppProduce {

    public static final String TARGET_FILE_PATH = "com.xliic.openapi.tags.jcef.messages.SaveTags[TargetFilePath]";

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public SaveTags(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("saveTags", false, false);
        this.project = project;
        this.cache = cache;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> tagData = TagsService.getInstance(project).getState().tagData;
            for (Map.Entry<String, Object> entry : ((Map<String, Object>) payload).entrySet()) {
                if (entry.getValue() == null) {
                    tagData.remove(entry.getKey());
                } else {
                    tagData.put(entry.getKey(), entry.getValue());
                }
            }
            TagsService.getInstance(project).saveState();
            InlayHintsService.getInstance(project).restartHintsProvider((String) cache.get(TARGET_FILE_PATH));
        }
    }
}
