package com.xliic.openapi.platform.scan.config.task.update;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

import java.io.File;
import java.io.IOException;
import java.util.Collections;

import static com.xliic.openapi.utils.FileUtils.*;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

public class ScanUpdateCliConfTask extends ScanUpdateConfTask {

    private VirtualFile tmpDir = null;

    public ScanUpdateCliConfTask(@NotNull Project project, @NotNull BundleResult bundle, @NotNull Callback callback) {
        super(project, bundle, callback);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            String oas = bundle.getJsonText();
            tmpDir = createTempDirectory(project, "scanconf-update");
            VirtualFile tmpFile = writeFile(project, tmpDir, "openapi.json", oas);
            VirtualFile tmpScanConfFile = writeFile(project, tmpDir, "scanconf.json", "");
            String scanConfPath = tmpScanConfFile.getPath();
            String cli = CliUtils.getCli();
            ExecUtils.asyncExecFile(cli,
                new String[] {
                    "scan",
                    "conf",
                    "generate",
                    "--output-format",
                    "json",
                    "--output",
                    scanConfPath,
                    tmpFile.getPath()
                }, tmpDir);
            VirtualFile scanFile = LocalFileSystem.getInstance().findFileByIoFile(new File(scanConfPath));
            if (scanFile == null) {
                throw new Exception("Failed to find config " + scanConfPath);
            }
            // Must always refresh before reading if files are updated externally
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(scanFile));
            String config = Utils.getTextFromFile(scanFile.getPath(), true);
            if (config == null) {
                throw new Exception("Failed to read config " + scanConfPath);
            }
            callback.setDone(oas, config);
        } catch (Exception e) {
            callback.setRejected(e);
        } finally {
            try {
                if (tmpDir != null) {
                    removeFile(project, tmpDir,"openapi.json");
                    removeFile(project, tmpDir,"scanconf.json");
                    removeDir(project, tmpDir);
                }
            } catch (IOException ignored) {
            }
            progress.cancel();
        }
    }
}
