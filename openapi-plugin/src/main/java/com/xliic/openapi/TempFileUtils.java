package com.xliic.openapi;

import com.xliic.core.util.io.FileUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VfsUtil;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.platform.PlatformConnection;

import org.eclipse.core.resources.IContainer;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspace;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.CoreException;
import org.jetbrains.annotations.NotNull;

import java.io.*;
import java.net.URISyntaxException;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

public class TempFileUtils {

    private static final String PROJECT_TMP_DIR = "tmp-xliic";
    private static final String PLATFORM_SUB_DIR = "platform";
    private static final String EXT_REF_SUB_DIR = "refs";
    private static final String AUDIT_SUB_DIR = "audit";
    private static final String DICTIONARY_SUB_DIR = "dictionary";

    public static VirtualFile createPlatformFile(@NotNull Object requestor,
            @NotNull String subDirName, @NotNull String fileName, @NotNull String text) {
        try {
            IProject project = EclipseUtil.getTempProject();
            if (project == null) {
                // Eclipse Development Note
                // The project creation might have been failed due to an unexpected reason
                // Try to recreate it here on demand to not prevent platform file management
                EclipseUtil.createTempProject();
                project = EclipseUtil.getTempProject();
                if (project == null) {
                    return null;
                }
            }
            File pluginTempDir = createProjectTempDirIfMissing(project, true);
            final VirtualFile rootDir = VfsUtil.createDirectoryIfMissing(pluginTempDir.getAbsolutePath());
            if (rootDir != null) {
                final VirtualFile rootSubDir = VfsUtil.createDirectoryIfMissing(
                        Paths.get(rootDir.getPath(), PLATFORM_SUB_DIR).toString());
                if (rootSubDir != null) {
                    VirtualFile platformDomainDir = VfsUtil.createDirectoryIfMissing(
                            Paths.get(rootSubDir.getPath(), subDirName).toString());
                    if (platformDomainDir != null) {
                        VirtualFile tmpFile = platformDomainDir.createChildData(requestor, fileName);
                        Charset charset = tmpFile.getCharset();
                        try (OutputStream stream = new FileOutputStream(tmpFile.getPath(), false)) {
                            stream.write(text.getBytes(charset));
                            return tmpFile;
                        }
                    }
                }
            }
        } catch (IOException | CoreException e) {
        }
        return null;
    }

    public static VirtualFile createExtRefFile(@NotNull Object requestor, @NotNull String fileName, @NotNull String text) {
        try {
            File pluginTempDir = createProjectTempDirIfMissing((IProject) requestor, false);
            final VirtualFile rootDir = VfsUtil.createDirectoryIfMissing(pluginTempDir.getAbsolutePath());
            if (rootDir != null) {
                final VirtualFile rootSubDir = VfsUtil.createDirectoryIfMissing(
                        Paths.get(rootDir.getPath(), EXT_REF_SUB_DIR).toString());
                if (rootSubDir != null) {
                    VirtualFile tmpFile = rootSubDir.createChildData(requestor, fileName);
                    tmpFile.setReadOnly(false);
                    Charset charset = tmpFile.getCharset();
                    try (OutputStream stream = new FileOutputStream(tmpFile.getPath(), false)) {
                        stream.write(text.getBytes(charset));
                        return tmpFile;
                    }
                }
            }
        } catch (IOException ignored) {
        }
        return null;
    }

    public static File createPluginTempDirIfMissing() throws IOException {
        String tempDir = OpenAPIStartupActivity.PluginTempDir;
        File dir = new File(FileUtil.getTempDirectory(), tempDir);
        if (dir.exists()) {
            return dir;
        } else {
            return FileUtil.createTempDirectory(tempDir, "", true);
        }
    }

    public static boolean isExtRefFile(@NotNull VirtualFile file) {
        return isTempFileInSubDir(file, EXT_REF_SUB_DIR);
    }

    public static boolean isPlatformFile(@NotNull VirtualFile file) {
        return isTempFileInSubDir(file, PLATFORM_SUB_DIR);
    }

    // Eclipse Development Note
    // No dead files exist, thus always return false
    // Handle all actions with temporary files at startup time
    public static boolean isPluginTempDeadFile(@NotNull VirtualFile file) {
        return false;
    }

    public static boolean isPluginPlatformTempDeadFile(@NotNull VirtualFile file) {
        return false;
    }

    public static void createTextResource(@NotNull File dir,
            @NotNull String basePath,
            @NotNull String prefix,
            @NotNull String suffix) throws IOException {
        ClassLoader loader = OpenApiUtils.class.getClassLoader();
        InputStream inputStream = ResourceUtil.getResourceAsStream(loader, basePath, prefix + suffix);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        File tmp = FileUtil.createTempFile(dir, prefix, suffix, true);
        PrintWriter writer = new PrintWriter(tmp, StandardCharsets.UTF_8);
        stream.forEach(writer::println);
        writer.close();
    }

    public static VirtualFile getPlatformVirtualFile(@NotNull String id, boolean isJson) {
        Path path;
        PlatformConnection options = PlatformConnection.getOptions();
        try {
            String domain = OpenApiUtils.getDomainName(options.getPlatformUrl());
            path = Paths.get(FileUtil.getTempDirectory(),
                    OpenAPIStartupActivity.PluginTempDir, domain, id + (isJson ? ".json" : ".yaml"));
        } catch (URISyntaxException e) {
            path = Paths.get(FileUtil.getTempDirectory(), OpenAPIStartupActivity.PluginTempDir, id);
        }
        return LocalFileSystem.getInstance().findFileByIoFile(path.toFile());
    }

    public static VirtualFile createAuditIndexJsFile(@NotNull Object requestor, @NotNull String text) {
        try {
            File pluginTempDir = createPluginTempDirIfMissing();
            final VirtualFile rootDir = VfsUtil.createDirectoryIfMissing(pluginTempDir.getAbsolutePath());
            if (rootDir != null) {
                final VirtualFile rootSubDir = VfsUtil.createDirectoryIfMissing(
                        Paths.get(rootDir.getPath(), AUDIT_SUB_DIR).toString());
                if (rootSubDir != null) {
                    VirtualFile tmpFile = rootSubDir.createChildData(requestor, "index.js");
                    Charset charset = tmpFile.getCharset();
                    try (OutputStream stream = new FileOutputStream(tmpFile.getPath(), false)) {
                        stream.write(text.getBytes(charset));
                        return tmpFile;
                    }
                }
            }
        } catch (IOException ignored) {
        }
        return null;
    }

    public static VirtualFile createDictionaryIndexJsFile(@NotNull Object requestor, @NotNull String text) {
        try {
            File pluginTempDir = createPluginTempDirIfMissing();
            final VirtualFile rootDir = VfsUtil.createDirectoryIfMissing(pluginTempDir.getAbsolutePath());
            if (rootDir != null) {
                final VirtualFile rootSubDir = VfsUtil.createDirectoryIfMissing(
                        Paths.get(rootDir.getPath(), DICTIONARY_SUB_DIR).toString());
                if (rootSubDir != null) {
                    VirtualFile tmpFile = rootSubDir.createChildData(requestor, "index.js");
                    Charset charset = tmpFile.getCharset();
                    try (OutputStream stream = new FileOutputStream(tmpFile.getPath(), false)) {
                        stream.write(text.getBytes(charset));
                        return tmpFile;
                    }
                }
            }
        } catch (IOException ignored) {
        }
        return null;
    }

    private static boolean isTempFileInSubDir(@NotNull VirtualFile file, @NotNull String subDir) {
        if (PLATFORM_SUB_DIR.equals(subDir)) {
            try {
                IProject project = EclipseUtil.getTempProject();
                if (project != null) {
                    String tempDir = getProjectTempDir(project, true);
                    tempDir = Paths.get(tempDir, PLATFORM_SUB_DIR).toString();
                    tempDir = VirtualFile.filePathToIdeaFormat(tempDir);
                    return file.getPath().startsWith(tempDir);
                }
            } catch (IOException | CoreException e) {
            }
        } else if (EXT_REF_SUB_DIR.equals(subDir)) {
            IWorkspace workspace = ResourcesPlugin.getWorkspace();
            IProject [] projects = workspace.getRoot().getProjects(IContainer.INCLUDE_HIDDEN);
            try {
                for (IProject project : projects) {
                    String tempDir = getProjectTempDir(project, false);
                    tempDir = Paths.get(tempDir, EXT_REF_SUB_DIR).toString();
                    tempDir = VirtualFile.filePathToIdeaFormat(tempDir);
                    if (file.getPath().startsWith(tempDir)) {
                        return true;
                    }
                }
            } catch (IOException e) {
            }
        }
        return false;
    }

    private static String getProjectTempDir(IProject project, boolean skipTmpSubDir) throws IOException {
        String tempProjectPath;
        if (skipTmpSubDir) {
            tempProjectPath = new File(project.getLocationURI()).getAbsolutePath();
        } else {
            String projectPath = new File(project.getLocationURI()).getAbsolutePath();
            tempProjectPath = new File(Paths.get(projectPath, PROJECT_TMP_DIR).toUri()).getAbsolutePath();
        }
        return tempProjectPath;
    }

    private static File createProjectTempDirIfMissing(IProject project, boolean skipTmpSubDir) throws IOException {
        String tempProjectPath = getProjectTempDir(project, skipTmpSubDir);
        File file = VfsUtil.createDirectoryIfMissing(tempProjectPath).getFile();
        EclipseUtil.refreshProject(project);
        return file;
    }

    public static File getProjectExtRefTempDir(IProject project) {
        try {
            return new File(Paths.get(getProjectTempDir(project, false), EXT_REF_SUB_DIR).toUri());
        } catch (IOException e) {
        }
        return null;
    }
}
