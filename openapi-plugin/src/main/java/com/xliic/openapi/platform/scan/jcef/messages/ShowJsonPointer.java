package com.xliic.openapi.platform.scan.jcef.messages;

import java.io.File;
import java.net.URI;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class ShowJsonPointer extends WebAppProduce {

    @NotNull Project project;
    @NotNull Map<String, Object> cache;

    public ShowJsonPointer(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("showJsonPointer");
        this.project = project;
        this.cache = cache;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String uri = (String) map.get("document");
            if (uri != null) {
                String filePath = URI.create(uri).getPath();
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                if (file == null) {
                    // The file might have been renamed or even deleted, thus its uri from web app is invalid
                    // Get cache file path value as it is always up-to-date
                    filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
                    if (filePath != null) {
                        file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                    }
                }
                if (file != null) {
                    String pointer = (String) map.get("jsonPointer");
                    if (pointer != null) {
                        Utils.goToPointerInFile(project, file, pointer);
                    }
                }
            }
        }
    }
}
