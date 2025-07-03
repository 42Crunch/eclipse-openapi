package com.xliic.openapi.services;

import java.io.File;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.services.IInlayHintsService;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.async.AsyncTaskType;

public class InlayHintsService implements IInlayHintsService, Disposable {

	public static final String REDRAW_HINTS = "REDRAW_HINTS";

    @NotNull
    private final Project project;

    public InlayHintsService(@NotNull Project project) {
        this.project = project;
    }

    public static InlayHintsService getInstance(@NotNull Project project) {
        return project.getService(InlayHintsService.class);
    }

    public void restartHintsProvider(@NotNull String targetFileName) {
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(targetFileName));
        if (file != null) {
            ASTService astService = ASTService.getInstance(project);
            @SuppressWarnings("serial")
            Map<String, Object> props = new HashMap<>() {{
                put(REDRAW_HINTS, true);
            }};
            astService.runAsyncTask(project, AsyncTaskType.RUN_TREE_DFS, file, props);
        }
    }

    @Override
    public void dispose() {}
}
