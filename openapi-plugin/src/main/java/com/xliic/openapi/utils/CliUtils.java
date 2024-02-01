package com.xliic.openapi.utils;

import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.report.AuditCliResult;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import org.jetbrains.annotations.NotNull;
import org.apache.commons.lang3.StringUtils;

import java.io.IOException;

import static com.xliic.openapi.utils.FileUtils.*;
import static com.xliic.openapi.utils.TempFileUtils.createTempDirectory;

public class CliUtils {

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
        String scanRuntime = PropertiesComponent.getInstance().getValue(Settings.Platform.Scan.RUNTIME);
        return Settings.Platform.Scan.RUNTIME_CLI.equals(scanRuntime);
    }

    public static String getCliDownloadUrl(@NotNull String repository) throws Exception {
        return getRepoUrl(repository) + getRepoCliFilename();
    }

    private static String getRepoUrl(String repository) {
        return repository.endsWith("/") ? repository : repository + "/";
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

    private static String getRepoCliFilename() throws Exception {
        String os = Utils.getOs();
        String arch = Utils.getOsArch();
        if ("win32".equals(os)) {
            return "42c-ast-windows-amd64.exe";
        } else if ("darwin".equals(os) && ("arm64".equals(arch) || "aarch64".equals(arch))) {
            return "42c-ast-darwin-arm64";
        } else {
            boolean isX64 = "x64".equals(arch) || "amd64".equals(arch) || "x86_64".equals(arch);
            if ("darwin".equals(os) && isX64) {
                return "42c-ast-darwin-amd64";
            } else if ("linux".equals(os) && isX64) {
                return "42c-ast-linux-amd64";
            }
        }
        throw new Exception("Unsupported CLI environment " + os + " (" + arch +  ")");
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
}
