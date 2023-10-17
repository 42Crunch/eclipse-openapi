package com.xliic.core.vfs;

import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Objects;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.SystemUtils;
import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.jetbrains.annotations.NonNls;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.io.FileUtil;

public class VirtualFile {

    public static final VirtualFile[] EMPTY_ARRAY = new VirtualFile[0];

    private final File file;
    private final IFile ifile;
    private final String path;

    public VirtualFile(@NotNull IFile ifile) {
        this.file = getUnderlyingFile(ifile);
        this.ifile = ifile;
        this.path = filePathToIdeaFormat(file);
    }

    public VirtualFile(@NotNull File file) {
        this.file = file;
        this.ifile = null;
        this.path = filePathToIdeaFormat(file);
    }

    @Override
    public int hashCode() {
        return path.hashCode();
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;
        if (obj == null)
            return false;
        if (getClass() != obj.getClass())
            return false;
        return Objects.equals(path, ((VirtualFile) obj).getPath());
    }

    @NotNull
    public String getName() {
        return file.getName();
    }

    public boolean hasProject() {
        if (ifile != null) {
            return true;
        }
        return isValid() && EclipseUtil.getWorkspaceFile(file.toURI()) != null && EclipseUtil.getProject(file) != null;
    }

    public boolean setReadOnly(boolean isReadOnly) {
        if (isReadOnly) {
            return file.setReadOnly();
        } else {
            return file.setWritable(true);
        }
    }

    public File getFile() {
        return file;
    }

    public IFile getIFile() {
        return ifile;
    }

    public String getPath() {
        return path;
    }

    public String getCanonicalPath() {
        return path;
    }

    public String getExtension() {
        return isDirectory() ? null : FilenameUtils.getExtension(path);
    }

    private static File getUnderlyingFile(IFile ifile) {
        String fileName = ifile.getFullPath().toString();
        IPath projectLocation = ifile.getProject().getLocation();
        File rootPath = projectLocation.uptoSegment(projectLocation.segmentCount() - 1).toFile();
        File file = new File(rootPath, fileName);
        if (!file.exists()) {
            // Here project is not a part of workspace
            // Eclipse will add project name to the beginning of the file name
            // Thus the file name will become invalid and needs to be reconstructed
            // For example: fileName = /EclipseProjects/tmp/multifile-petstore/openapi.yaml
            IProject[] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
            for (int i = 0; i < projects.length; i++) {
                IProject project = projects[i];
                if (project.exists()) {
                    String projectPrefix = "/" + project.getName();
                    if (fileName.startsWith(projectPrefix)) {
                        rootPath = projectLocation.toFile();
                        fileName = fileName.replace(projectPrefix, "");
                        file = new File(rootPath, fileName);
                        break;
                    }
                }
            }
        }
        return file;
    }

    private static String filePathToIdeaFormat(File file) {
        try {
            return filePathToIdeaFormat(file.getCanonicalPath());
        } catch (IOException e) {
        }
        return filePathToIdeaFormat(file.getPath());
    }

    public static String filePathToIdeaFormat(@NotNull String fileName) {
        fileName = FileUtil.toSystemIndependentName(fileName);
        if (SystemUtils.IS_OS_WINDOWS && fileName.startsWith("/")) {
            fileName = fileName.substring(1);
        }
        return fileName;
    }

    public void delete(Object requestor) throws IOException {
        if (isDirectory()) {
            FileUtil.delete(path);
        } else {
            if (!file.canWrite()) {
                setReadOnly(false);
            }
            file.delete();
        }
    }

    public @NotNull LocalFileSystem getFileSystem() {
        return LocalFileSystem.getInstance();
    }

    public @NotNull Charset getCharset() {
        return Charset.defaultCharset();
    }

    public @Nullable VirtualFile findChild(@NotNull @NonNls String name) {
        Path parent = Paths.get(path);
        Path child = parent.resolve(name);
        if (child == null) {
            return null;
        }
        File file = child.toFile();
        if (file.exists()) {
            return new VirtualFile(file);
        }
        return null;
    }

    public boolean isDirectory() {
        return file.isDirectory();
    }

    public boolean isValid() {
        return file.exists();
    }

    public @NotNull VirtualFile createChildDirectory(Object requestor, @NotNull @NonNls String name) throws IOException {
        if (!isDirectory()) {
            throw new IOException("Create child directory in wrong parent error " + path);
        }
        if (!isValid()) {
            throw new IOException("Create child directory invalid directory " + path);
        }
        if (!getFileSystem().isValidName(name)) {
            throw new IOException("Create child directory invalid name error " + name);
        }
        if (findChild(name) != null) {
            throw new IOException("Create child directory already exists error " + path + " name " + name);
        }
        return getFileSystem().createChildDirectory(requestor, this, name);
    }

    public @NotNull VirtualFile createChildData(Object requestor, @NotNull @NonNls String name) throws IOException {
        if (!isDirectory()) {
            throw new IOException("Create child data in wrong parent error " + path);
        }
        if (!isValid()) {
            throw new IOException("Create child data invalid directory " + path);
        }
        if (!getFileSystem().isValidName(name)) {
            throw new IOException("Create child data invalid name error " + name);
        }
        VirtualFile child = findChild(name);
        return child != null ? child : getFileSystem().createChildFile(requestor, this, name);
    }
}
