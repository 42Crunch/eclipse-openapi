package com.xliic.openapi.bigfiles;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.IBigFilesService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.utils.WindowUtils;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.webapp.editor.WebFileEditor.BIG_FILES_EDITOR_ID;

public final class BigFilesService implements IBigFilesService {

    private static final String BIG_FILES = "bigfiles";

    @NotNull
    private final Project project;

    public BigFilesService(@NotNull Project project) {
        this.project = project;
    }

    public static BigFilesService getInstance(@NotNull Project project) {
        return project.getService(BigFilesService.class);
    }

    public void createAndOpenBigFilesWindow() {
        WindowUtils.openWebTab(project, BIG_FILES_EDITOR_ID, BIG_FILES, () -> {});
    }

    public void browseFile(@NotNull String file) {
        ApplicationManager.getApplication().invokeLater(() -> project.getMessageBus().syncPublisher(BigFilesListener.TOPIC).showBrowseFile(file));
    }

    public void convert(@NotNull String file) {

        String report = Utils.getTextFromFile(file, true);
        assert report != null;
        final int n = 10;
        int offset = 0;
        int chunkSize = (int) Math.ceil((double) report.length() / n);

        for (int i = 1; i <= n; i++) {
            if (report.length() - offset < chunkSize) {
                chunkSize = report.length() - offset;
            }
            final String textSegment = report.substring(offset, offset + chunkSize);
            offset += chunkSize;
            final float p =  (float) i / n;
            ApplicationManager.getApplication().invokeLater(() ->
                    project.getMessageBus().syncPublisher(BigFilesListener.TOPIC).sendFileSegment(file, textSegment, p));
        }
    }
}
