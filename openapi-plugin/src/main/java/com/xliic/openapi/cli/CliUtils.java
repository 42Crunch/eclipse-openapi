package com.xliic.openapi.cli;

import static com.xliic.openapi.utils.FileUtils.join;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
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
import com.xliic.openapi.utils.NetUtils;
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
                                                       boolean isFullAudit,
                                                       @NotNull ProgressIndicator progress) {
        try {
            progress.setText("Running security audit using 42Crunch API security testing binary");
            VirtualFile dir = createTempDirectory(project, "audit");
            writeFile(project, dir, "openapi.json", oas);
            progress.setText("Wrote Audit configuration to: " + dir.getPath());
            String cli = getCli();
            progress.setText("Running Security Audit using: " + cli);
            List<String> args = new LinkedList<>(Arrays.asList(
                    "audit",
                    "run",
                    "openapi.json",
                    "--output",
                    "report.json",
                    "--output-format",
                    "json",
//                  "--freemium-host",
//                  "stateless.dev.42crunch.com:443",
                    "--verbose",
                    "error",
                    "--user-agent",
                    Utils.getUserAgent(),
                    "--enrich=false"));
                if (!isFullAudit) {
                    args.add("--is-operation");
                }
                final Map<String, String> env = new HashMap<>();
                final Credentials.Type type = Credentials.getCredentialsType();
                if (type == Credentials.Type.AnondToken) {
                    args.add("--token");
                    args.add(Credentials.getAnonCredentials());
                } else {
                    PlatformConnection con = PlatformConnection.getOptions();
                    env.put("API_KEY", con.getApiToken());
                    env.put("PLATFORM_HOST", con.getPlatformUrl());
                }
                String httpProxy = NetUtils.getProxyString();
                if (httpProxy != null) {
                    env.put("HTTPS_PROXY", httpProxy);
                }
                String output = ExecUtils.asyncExecFile(cli, args, dir, env);
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

    public static void ensureDirectories(@NotNull Project project) throws Exception {
        String binDir = getBinDirectory();
        if (!FileUtils.exists(binDir)) {
            String errorDesc = WriteCommandAction.runWriteCommandAction(project, (Computable<String>) () -> {
                try {
                    // Directory is created recursively
                    VfsUtil.createDirectoryIfMissing(binDir);
                } catch (Exception e) {
                    return e.toString();
                }
                return null;
            });
            if (errorDesc != null) {
                throw new Exception(errorDesc);
            }
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

    public static String getBinDirectory() {
        String downloadPath = SettingsService.getInstance().getValue(Settings.CliAst.CLI_DIRECTORY_OVERRIDE);
        if (StringUtils.isEmpty(downloadPath)) {
            return join(getCrunchDirectory(), "bin");
        }
        return downloadPath;
    }

    public static String getCliFilename() {
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
