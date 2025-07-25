package com.xliic.openapi.cli;

import static com.xliic.openapi.utils.FileUtils.join;
import static com.xliic.openapi.utils.FileUtils.removeDir;
import static com.xliic.openapi.utils.FileUtils.removeFile;
import static com.xliic.openapi.utils.FileUtils.writeFile;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;
import static com.xliic.openapi.utils.NetUtils.getProxyString;

import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.github.zafarkhaja.semver.Version;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Endpoints;
import com.xliic.openapi.graphql.GraphQlCliResult;
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

    private static final String REPORT_JSON = "report.json";
    private static final String INPUT_GRAPHQL = "input.graphql";
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
    public static GraphQlCliResult runGraphQlAuditWithCliBinary(@NotNull Project project, @NotNull String text) {
        try {
            VirtualFile dir = createTempDirectory(project, "graphql-audit");
            writeFile(project, dir, INPUT_GRAPHQL, text);
            String cli = getCli();
            List<String> args = new LinkedList<>(Arrays.asList(
                "graphql",
                "audit",
                INPUT_GRAPHQL,
                "--output",
                REPORT_JSON
            ));
            final Map<String, String> env = new HashMap<>();
            String output = ExecUtils.asyncExecFile(cli, args, dir, env, false);
            String report = FileUtils.readFile(dir, REPORT_JSON);
            removeFile(project, dir, REPORT_JSON);
            removeFile(project, dir, INPUT_GRAPHQL);
            removeDir(project, dir);
            return new GraphQlCliResult(report, text, output);
        } catch (ExecUtils.ExecException ex) {
            return new GraphQlCliResult(ex);
        } catch (IOException ex) {
            return new GraphQlCliResult(ex.toString());
        }
    }

    @NotNull
    public static AuditCliResult runAuditWithCliBinary(@NotNull Project project,
                                                       @NotNull String oas,
                                                       @NotNull Set<String> tags,
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
                "--verbose",
                "error",
                "--user-agent",
                Utils.getUserAgent(),
                "--enrich=false"));
            if (SettingsService.getInstance().useDevEndpoints()) {
                args.add("--freemium-host");
                args.add(Endpoints.getCliFreemiumdHost());
            }
            if (!isFullAudit) {
                args.add("--is-operation");
            }
            if (!tags.isEmpty()) {
                args.add("--tag");
                args.add(String.join(",", tags));
            }
            final Map<String, String> env = new HashMap<>();
            final Credentials.Type type = Credentials.getCredentialsType();
            String serverUrl;
            if (type == Credentials.Type.AnondToken) {
                args.add("--token");
                args.add(Credentials.getAnonCredentials());
                serverUrl = Endpoints.getFreemiumdUrl();
            } else {
                PlatformConnection con = PlatformConnection.getOptions();
                env.put("API_KEY", con.getApiToken());
                env.put("PLATFORM_HOST", con.getPlatformUrl());
                serverUrl = con.getPlatformUrl();
                Logger.getInstance(CliUtils.class).debug("Setting PLATFORM_HOST environment variable to: " + serverUrl);
            }
            String httpProxy = getProxyString(serverUrl);
            if (httpProxy != null) {
                env.put("HTTPS_PROXY", httpProxy);
                Logger.getInstance(CliUtils.class).debug("Setting HTTPS_PROXY environment variable to: " + httpProxy);
            }
            String output = ExecUtils.asyncExecFile(cli, args, dir, env);
            String report = FileUtils.readFile(dir, "report.json");
            String todo = FileUtils.readFile(dir, "todo.json");
            String sqg = FileUtils.readFile(dir, "sqg.json");
            removeFile(project, dir, "report.json");
            removeFile(project, dir,"openapi.json");
            removeFile(project, dir,"todo.json");
            removeFile(project, dir,"sqg.json");
            removeDir(project, dir);
            return new AuditCliResult(report, todo, sqg, output);
        } catch (ExecUtils.ExecException ex) {
        	Logger.getInstance(CliUtils.class).error("Error running Security Audit: " + ex);
            return new AuditCliResult(ex);
        } catch (IOException ex) {
        	Logger.getInstance(CliUtils.class).error("Error running Security Audit: " + ex);
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
