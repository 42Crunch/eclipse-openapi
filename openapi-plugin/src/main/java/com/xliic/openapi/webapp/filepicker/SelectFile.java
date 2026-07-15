package com.xliic.openapi.webapp.filepicker;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.fileChooser.FileChooserDescriptor;
import com.xliic.core.fileChooser.FileChooserFactory;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.List;
import java.util.Map;

public class SelectFile extends WebAppProduce {

    @NotNull
    protected final Project project;
    @NotNull
    private final String webAppId;

    public SelectFile(@NotNull Project project, @NotNull String webAppId) {
        super("selectFile");
        this.project = project;
        this.webAppId = webAppId;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Map<String, Object> map = (Map<String, Object>) payload;
            String id = (String) map.get("id");
            String title = (String) map.get("title");
            List<String> extensions = (List<String>) map.get("extensions");
            FileChooserDescriptor descriptor = new FileChooserDescriptor(true, false, false, false, false, true);
            if (!StringUtils.isEmpty(title)) {
                descriptor.setTitle(title);
            }
            if (!extensions.isEmpty()) {
                descriptor.withExtensionFilter(extensions.toArray(new String[0]));
            }
            VirtualFile[] choose = FileChooserFactory.getInstance().createFileChooser(descriptor, project, null).choose(null, VirtualFile.EMPTY_ARRAY);
            if (choose.length > 0) {
                VirtualFile file = choose[0];
                try {
                    Base64EncodedFileContent content;
                    boolean isBinary = file.getFileType().isBinary();
                    if (isBinary) {
                        byte[] bytes = file.contentsToByteArray();
                        content = new Base64EncodedFileContent(file.getName(), bytes);
                    } else {
                        String text = new String(file.contentsToByteArray(), StandardCharsets.UTF_8);
                        content = new Base64EncodedFileContent(file.getName(), text);
                    }
                    ApplicationManager.getApplication().invokeLater(() ->
                            project.getMessageBus().syncPublisher(FilePickerListener.TOPIC).loadFile(webAppId, id, content));
                } catch (IOException e) {
                    cancelFile(id);
                    MsgUtils.notifyError(project, "Failed to select file: " + e.getMessage());
                }
            } else {
                cancelFile(id);
            }
        }
    }

    private void cancelFile(String id) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(FilePickerListener.TOPIC).cancelFile(webAppId, id));
    }
}
