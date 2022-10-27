package com.xliic.openapi.platform;

import java.util.HashSet;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.callback.PlatformOASCallback;
import com.xliic.openapi.platform.tree.utils.PlatformUtils;
import com.xliic.openapi.topic.FileListener;

public class PlatformReopener implements FileListener {

    private final Project project;
    private final Set<String> files = new HashSet<>();

    public PlatformReopener(@NotNull Project project) {
        this.project = project;
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
    }

    public void sheduleToReopenPlatformFile(@NotNull VirtualFile deadFile) {
        files.add(deadFile.getPath());
    }

    public void dispose() {
        project.getMessageBus().connect().unsubscribe(this);
        files.clear();
    }

    @Override
    public void handleClosedFile(VirtualFile file) {
        if (files.contains(file.getPath())) {
            files.remove(file.getPath());
            String apiId = PlatformUtils.getApiId(file);
            PlatformAPIs.readApi(apiId, true,
                    new PlatformOASCallback(project, null, null, false, true, false));
        }
    }

    @Override
    public void handleFileNameChanged(VirtualFile newFile, String oldFileName) {}

    @Override
    public void handleAllFilesClosed() {}

    @Override
    public void handleSelectedFile(VirtualFile file) {}

    @Override
    public void handleDocumentChanged(VirtualFile file) {}
}
