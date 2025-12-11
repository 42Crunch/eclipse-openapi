package com.xliic.openapi.capture.jcef.messages;

import static com.xliic.openapi.utils.FileUtils.fixWrapperExt;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.fileChooser.FileSaverDescriptor;
import com.xliic.core.fileChooser.FileSaverDialog;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.vfs.VirtualFileWrapper;
import com.xliic.openapi.capture.CaptureService;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class DownloadFile extends WebAppProduce {

    @NotNull
    protected final Project project;

    public DownloadFile(@NotNull Project project) {
        super("downloadFile");
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            FileSaverDescriptor descriptor = new FileSaverDescriptor("Save", "Save OpenAPI file", "json");
            FileSaverDialog saveDialog = FileChooserFactory.getInstance().createSaveFileDialog(descriptor, project);
            VirtualFileWrapper wrapper = saveDialog.save(null);
            if (wrapper != null) {
                VirtualFile target = fixWrapperExt(wrapper, "json").getVirtualFile(true);
                if (target != null) {
                    CaptureService.getInstance(project).downloadFile(id, target);
                } else {
                    MsgUtils.notifyError(project, "Failed to save OpenAPI file");
                }
            }
        }
    }
}
