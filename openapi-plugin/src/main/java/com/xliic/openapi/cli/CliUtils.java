package com.xliic.openapi.cli;

import static com.xliic.openapi.utils.FileUtils.join;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.zafarkhaja.semver.Version;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.utils.Utils;

import okhttp3.Response;
import okhttp3.ResponseBody;

public class CliUtils {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @Nullable
    @SuppressWarnings("unchecked")
    public static CliAstManifestEntry getCliUpdate(@NotNull String repository,
                                                   @NotNull String currentVersion,
                                                   @NotNull String platform) throws Exception {
        try (Response response = CliAPIs.Sync.getManifest(repository)) {
            try (ResponseBody body = response.body()) {
                if (body != null && response.code() == 200) {
                    List<Map<String, String>> manifest = OBJECT_MAPPER.readValue(body.string(), List.class);
                    if (manifest != null) {
                        Version current = Version.parse(currentVersion);
                        for (Map<String, String> entry : manifest) {
                            if (entry.get("architecture").equals(platform)) {
                                Version latest = Version.parse(entry.get("version"));
                                if (latest.isHigherThan(current)) {
                                    return new CliAstManifestEntry(entry);
                                }
                            }
                        }
                    }
                }
            }
        }
        return null;
    }

    @NotNull
    public static AuditCliResult runAuditWithCliBinary(@NotNull Project project,
                                                       @NotNull String oas,
                                                       boolean isSingleOperationAudit,
                                                       @NotNull ProgressIndicator progress) {
        try {
            progress.setText("Running Security Audit using 42Crunch CLI");
            VirtualFile dir = createTempDirectory(project, "audit");
            writeFile(project, dir, "openapi.json", oas);
            progress.setText("Wrote Audit configuration to: " + dir.getPath());
            String cli = getCli();
            progress.setText("Running Security Audit using: " + cli);
            String token = Credentials.getAnonCredentials();
            if (token == null) {
                PlatformConnection con = PlatformConnection.getOptions();
                token = con.getApiToken();
            }
            String output = ExecUtils.asyncExecFile(
                cli,
                new String[] {
                    "audit",
                    "run",
                    "openapi.json",
                    "--output",
                    "report.json",
                    "--output-format",
                    "json",
                    "--verbose",
                    "error",
                    "--enrich=false",
                    isSingleOperationAudit ? "--is-operation" : "",
                    "--token",
                    token
                }, dir);
            String report = FileUtils.readFile(dir, "report.json");
            removeFile(project, dir, "report.json");
            removeFile(project, dir,"openapi.json");
            removeDir(project, dir);
            return new AuditCliResult(report, output);
        } catch (ExecUtils.ExecException ex) {
            return new AuditCliResult(ex);
        } catch (IOException ex) {
            return new AuditCliResult(ex.toString());
        }
    }

    @NotNull
    public static String getCli() {
        return join(getBinDirectory(), getCliFilename());
    }

    public static boolean hasCli() {
        String scanRuntime = SettingsService.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        return Settings.Platform.Scan.RUNTIME_CLI.equals(scanRuntime);
    }

    public static void ensureDirectories(@NotNull Project project) {
        String binDir = getBinDirectory();
        if (!FileUtils.exists(binDir)) {
            // It is recursive by default
            WriteCommandAction.runWriteCommandAction(project, (Computable<Void>) () -> {
                try {
                    VfsUtil.createDirectoryIfMissing(binDir);
                } catch (IOException ignored) {
                }
                return null;
            });
        }
    }

    private static String getCrunchDirectory() {
        String os = Utils.getOs();
        if ("win32".equals(os)) {
            String dir = System.getenv("APPDATA");
            if (StringUtils.isEmpty(dir)) {
                dir = getHomeDir();
            }
            return join(dir, "42Crunch");
        } else {
            return join(getHomeDir(), ".42crunch");
        }
    }

    private static String getBinDirectory() {
        return join(getCrunchDirectory(), "bin");
    }

    private static String getCliFilename() {
        String os = Utils.getOs();
        if ("win32".equals(os)) {
            return "42c-ast.exe";
        } else {
            return "42c-ast";
        }
    }

    private static String getHomeDir() {
        return System.getProperty("user.home");
    }

    public static String getCliAstPlatform() {
        String os = Utils.getOs();
        if ("win32".equals(os)) {
            return "windows-amd64";
        } else if ("darwin".equals(os) && Utils.isArm64()) {
            return "darwin-arm64";
        } else if ("darwin".equals(os) && Utils.isX64()) {
            return "darwin-amd64";
        } else if ("linux".equals(os) && Utils.isX64()) {
            return "linux-amd64";
        }
        return null;
    }
}
