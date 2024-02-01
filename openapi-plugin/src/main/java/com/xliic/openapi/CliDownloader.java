package com.xliic.openapi;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.ui.Messages;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.utils.CliUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.NetUtils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.settings.Settings.CliAst.DEFAULT_REPOSITORY;
import static com.xliic.openapi.settings.Settings.CliAst.REPOSITORY;

public class CliDownloader {

    @NotNull
    private final Project project;

    public CliDownloader(@NotNull Project project) {
        this.project = project;
    }

    public interface Callback {
        void complete();
        void reject(@NotNull String error);
    }

    public void download(@NotNull Callback callback) {
        String cliPath = CliUtils.getCli();
        if (FileUtils.exists(cliPath)) {
            callback.complete();
            return;
        }
        final int rc = Messages.showOkCancelDialog(project, "42Crunch CLI is not found, download?",
                "Download", "Download", "Cancel", Messages.getQuestionIcon());
        if (rc != Messages.OK) {
            return;
        }
        ProgressManager.getInstance().run(new Task.Backgroundable(project, "Downloading 42Crunch CLI", false) {
            @Override
            public void run(@NotNull ProgressIndicator progress) {
                String repository = PropertiesComponent.getInstance().getValue(REPOSITORY, DEFAULT_REPOSITORY);
                if (StringUtils.isEmpty(repository)) {
                    callback.reject("Repository URL is not set");
                    return;
                }
                try {
                    String downloadUrl = CliUtils.getCliDownloadUrl(repository);
                    NetUtils.download(downloadUrl, cliPath, (bytesRead, contentLength, done) -> {
                        if (done) {
                            callback.complete();
                        } else {
                            progress.setText("Downloading 42Crunch CLI: " + Progress.getPercent(bytesRead, contentLength));
                        }
                    });
                } catch (Exception e) {
                    callback.reject(e.toString());
                }
            }
        });
    }
}
