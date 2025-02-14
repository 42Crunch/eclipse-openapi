package com.xliic.openapi.bigfiles.jcef.messages;

import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bigfiles.BigFilesService;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.LinkedList;
import java.util.List;

public class BrowseFile extends WebAppProduce {

    @NotNull
    private final Project project;

    public BrowseFile(@NotNull Project project) {
        super("browseFile");
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        FileChooserDescriptor descriptor = new FileChooserDescriptor(
                true, false, false, false, false, false);
        descriptor.withExtensionFilter("", "json");
        VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(
                descriptor, project, null).choose(null, VirtualFile.EMPTY_ARRAY);
        List<String> files = new LinkedList<>();
        for (VirtualFile file : choose) {
            files.add(file.getPath());
        }
        BigFilesService.getInstance(project).browseFile(files.get(0));
    }
}
