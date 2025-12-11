package com.xliic.openapi.capture.jcef.messages;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.capture.CaptureService;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SelectFiles extends WebAppProduce {

    @NotNull
    private final Project project;

    public SelectFiles(@NotNull Project project) {
        super("selectFiles");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            FileChooserDescriptor descriptor = new FileChooserDescriptor(
                    true, false, false, false, false, true);
            descriptor.withExtensionFilter("*.json; *.har", "json", "har");
            VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(
                    descriptor, project, null).choose(null, VirtualFile.EMPTY_ARRAY);
            List<String> files = new LinkedList<>();
            for (VirtualFile file : choose) {
                files.add(file.toNioPath().toUri().toString());
            }
            CaptureService.getInstance(project).selectFiles(id, files);
        }
    }
}

