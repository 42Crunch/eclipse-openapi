package com.xliic.openapi.capture.jcef.messages;

import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.File;

public class OpenFileLink extends WebAppProduce {

    @NotNull
    protected final Project project;

    public OpenFileLink(@NotNull Project project) {
        super("openLink");
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File((String) payload));
            if (file != null) {
                new OpenFileDescriptor(project, file).navigate(true);
            }
        }
    }
}
