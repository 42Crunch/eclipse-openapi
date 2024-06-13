package com.xliic.openapi.cli;

import static com.xliic.openapi.cli.CliUtils.getCliFilename;
import static com.xliic.openapi.utils.FileUtils.join;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.attribute.PosixFilePermissions;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.config.payload.Progress;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;

public class CliBinaryTask extends Task.Backgroundable {

    private final @NotNull String cliPath;
    private final @NotNull CliAstManifestEntry manifest;
    private final @NotNull CliService.Callback callback;
    private VirtualFile tmpDir = null;
    private String tempCliPath = null;

    public CliBinaryTask(@NotNull Project project,
                         @NotNull String cliPath,
                         @NotNull CliAstManifestEntry manifest,
                         @NotNull CliService.Callback callback) {
        super(project, "Downloading 42Crunch API security testing binary", false);
        this.cliPath = cliPath;
        this.manifest = manifest;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        Project project = getProject();
        try {
            tmpDir = createTempDirectory(project, "42c-ast-download");
            tempCliPath = join(tmpDir.getPath(), getCliFilename());
            String downloadUrl = manifest.getDownloadUrl();
            NetUtils.download(downloadUrl, tempCliPath, (bytesRead, contentLength, done, hash) -> {
                if (done) {
                    if (hash.equals(manifest.getSha256())) {
                        Path path = Path.of(cliPath);
                        try {
                            Files.copy(Path.of(tempCliPath), path, java.nio.file.StandardCopyOption.REPLACE_EXISTING);
                        } catch (Exception ex) {
                            callback.reject("Failed to copy to " + cliPath + " " + ex);
                        }
                        String os = Utils.getOs();
                        if (!"win32".equals(os)) {
                            try {
                                Files.setPosixFilePermissions(path, PosixFilePermissions.fromString("rwxr-xr-x"));
                            } catch (Exception ex) {
                                callback.reject("Failed to set executable permissions on " + cliPath + " " + ex);
                            }
                        }
                        callback.complete(cliPath);
                    } else {
                        callback.reject("SHA256 hash mismatch for " + downloadUrl);
                    }
                } else {
                    callback.progress(bytesRead, contentLength);
                    progress.setText("Downloading 42Crunch API Security Testing Binary: " + Progress.getPercent(bytesRead, contentLength));
                }
            });
        } catch (Exception e) {
            callback.reject("Error during download: " + e);
        } finally {
            try {
                if (tempCliPath != null) {
                    removeFile(project, tempCliPath);
                }
                if (tmpDir != null) {
                    removeDir(project, tmpDir);
                }
            } catch (IOException ignored) {
            }
        }
    }
}
