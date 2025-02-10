package com.xliic.openapi.platform.scan.config.task.update;

import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.File;
import java.io.IOException;
import java.util.Collections;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.Utils;

public class ScanUpdateCliConfTask extends ScanUpdateConfTask {

    private static final String OPENAPI_JSON = "openapi.json";
    private static final String SCANCONF_JSON = "scanconfig.json";

    private VirtualFile tmpDir = null;

    public ScanUpdateCliConfTask(@NotNull Project project, @NotNull BundleResult bundle, @NotNull Callback callback) {
        super(project, bundle, callback);
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            String oas = bundle.getJsonText();
            tmpDir = createTempDirectory(project, "scanconf-update");
            writeFile(project, tmpDir, OPENAPI_JSON, oas);
            VirtualFile tmpScanConfFile = writeFile(project, tmpDir, SCANCONF_JSON, "");
            String scanConfPath = tmpScanConfFile.getPath();
            String cli = CliUtils.getCli();
            ExecUtils.asyncExecFile(cli,
            	List.of(
                    "scan",
                    "conf",
                    "generate",
                    "--output-format",
                    "json",
                    "--output",
                    SCANCONF_JSON,
                    OPENAPI_JSON
                ), tmpDir);
            // Must always refresh before reading if files are updated externally
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(tmpDir));
            VirtualFile scanFile = LocalFileSystem.getInstance().findFileByIoFile(new File(scanConfPath));
            if (scanFile == null) {
                throw new Exception("Failed to find config " + scanConfPath);
            }
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
                    removeFile(project, tmpDir, OPENAPI_JSON);
                    removeFile(project, tmpDir, SCANCONF_JSON);
                    removeDir(project, tmpDir);
                }
            } catch (IOException ignored) {
            }
            progress.cancel();
        }
    }
}
