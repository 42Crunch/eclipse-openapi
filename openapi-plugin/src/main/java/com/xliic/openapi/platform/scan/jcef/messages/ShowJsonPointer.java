package com.xliic.openapi.platform.scan.jcef.messages;

import java.io.File;
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
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
            if (filePath != null) {
                VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(filePath));
                if (file != null) {
                    Utils.goToPointerInFile(project, file, (String) payload);
                }
            }
        }
    }
}
