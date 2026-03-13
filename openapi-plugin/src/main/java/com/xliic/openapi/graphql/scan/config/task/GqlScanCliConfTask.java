package com.xliic.openapi.graphql.scan.config.task;

import static com.xliic.openapi.cli.CliUtils.applyFreemiumHost;
import static com.xliic.openapi.cli.CliUtils.applyProxyAndCredentials;
import static com.xliic.openapi.tags.TagsUtils.applyTags;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.platform.scan.config.ScanConfigUtils;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.tags.TagsUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

public class GqlScanCliConfTask extends GqlScanConfTask {

    private static final String INPUT_GRAPHQL = "input.graphql";
    private static final String SCANCONF_JSON = "scanconfig.json";

    private VirtualFile tmpDir = null;
    private VirtualFile scanConfigDir = null;
    @NotNull
    private final Credentials.Type type;

    public GqlScanCliConfTask(@NotNull Project project,
                              @NotNull VirtualFile file,
                              @NotNull String scanConfPath,
                              @NotNull Credentials.Type type,
                              @NotNull Callback callback) {
        super(project, file, scanConfPath, callback);
        this.type = type;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            String text = Utils.getTextFromFile(file.getPath(), true);
            if (text == null) {
                throw new Exception("Failed to read text from graphql file " + file.getPath());
            }
            tmpDir = createTempDirectory(project, "scan");
            writeFile(project, tmpDir, INPUT_GRAPHQL, text);
            String cli = CliUtils.getCli();
            Set<String> tags = TagsUtils.getFullTagNames(project, type, file.getPath());
            List<String> args = new LinkedList<>(Arrays.asList(
                "scan",
                "conf",
                "generate",
                "--graphql",
                INPUT_GRAPHQL,
                "--hosts",
                "http://localhost:4000",
                "--output",
                SCANCONF_JSON
            ));
            applyTags(args, tags);
            applyFreemiumHost(args);
            Map<String, String> env = new HashMap<>();
            applyProxyAndCredentials(args, env);
            ExecUtils.asyncExecFile(cli, args, tmpDir, env);

            // Copy scanconfig to the destination
            if (!FileUtils.exists(scanConfPath)) {
                scanConfigDir = ScanConfigUtils.createScanConf(project, scanConfPath, "");
            }
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(tmpDir));
            Path src = Paths.get(tmpDir.getPath(), SCANCONF_JSON);
            Path dst = Paths.get(scanConfPath);
            Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING);

            // Read scanconfig
            LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(scanConfigDir));
            VirtualFile scanFile = LocalFileSystem.getInstance().findFileByIoFile(new File(scanConfPath));
            if (scanFile == null) {
                throw new Exception("Failed to find config " + scanConfPath);
            }
            String config = Utils.getTextFromFile(scanFile.getPath(), true);
            if (config == null) {
                throw new Exception("Failed to read config " + scanConfPath);
            }
            callback.setDone(text, config, true);
        } catch (Exception e) {
            callback.setRejected(e);
        } finally {
            try {
                if (tmpDir != null) {
                    removeFile(project, tmpDir, SCANCONF_JSON);
                    removeFile(project, tmpDir, INPUT_GRAPHQL);
                    removeDir(project, tmpDir);
                }
            } catch (IOException ignored) {
            }
            progress.cancel();
        }
    }
}
