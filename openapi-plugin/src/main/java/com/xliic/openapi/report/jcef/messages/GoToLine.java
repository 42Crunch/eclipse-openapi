package com.xliic.openapi.report.jcef.messages;

import java.io.File;
import java.net.URI;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.refs.external.ExtRef;
import com.xliic.openapi.refs.external.ExtRefService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class GoToLine extends WebAppProduce {

    @NotNull
    private final Project project;

    public GoToLine(@NotNull Project project) {
        super("goToLine");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, String> map = (Map<String, String>) payload;
            String uri = map.get("uri");
            String pointer = map.get("pointer");
            if (uri != null && pointer != null) {
                if (ExtRef.isInternalURI(uri)) {
                    uri = ExtRef.toURI(uri);
                }
                onGoToLine(uri, pointer);
            }
        }
    }

    private void onGoToLine(@NotNull String uri, @NotNull String pointer) {
        URI uriObj = URI.create(uri); // Will be decoded internally
        ExtRefService extRefService = ExtRefService.getInstance(project);
        ExtRef extRef = extRefService.get(uriObj);
        String path = extRef == null ? uriObj.getPath() : extRef.getVirtualFile().getPath();
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(path));
        if (file != null) {
            Utils.goToPointerInFile(project, file, pointer);
        }
    }
}
