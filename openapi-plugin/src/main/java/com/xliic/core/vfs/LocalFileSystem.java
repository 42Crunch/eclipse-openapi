package com.xliic.core.vfs;

import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.nio.file.Paths;
import java.util.Arrays;
import java.util.Comparator;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.EclipseUtil;

public class LocalFileSystem {

    private final static LocalFileSystem localFileSystem = new LocalFileSystem();

    public static LocalFileSystem getInstance() {
        return localFileSystem;
    }

    public VirtualFile findFileByIoFile(@NotNull File file) {
        if (file.exists()) {
            IFile iFile = getIFile(file.getAbsolutePath());
            return (iFile == null) ? new VirtualFile(file) : new VirtualFile(iFile);
        }
        return null;
    }

    public boolean isValidName(@NotNull String name) {
        return !name.isEmpty() && name.indexOf('\\') < 0 && name.indexOf('/') < 0;
    }

    public void refreshFiles(@NotNull Iterable<? extends VirtualFile> files) {
        for (VirtualFile file : files) {
            IProject project = EclipseUtil.getProject(file.getPath());
            if (project != null) {
                EclipseUtil.refreshProject(project);
            }
        }
    }

    @Nullable
    public VirtualFile refreshAndFindFileByPath(@NotNull String path) {
        IProject project = EclipseUtil.getProject(path);
        if (project != null) {
            EclipseUtil.refreshProject(project);
        }
        File file = new File(path);
        if (file.exists()) {
            return new VirtualFile(file);
        }
        return null;
    }
    
    @Nullable
    public VirtualFile refreshAndFindFileByIoFile(@NotNull File file) {
        IProject project = EclipseUtil.getProject(file.getAbsolutePath());
        if (project != null) {
            EclipseUtil.refreshProject(project);
        }
        if (file.exists()) {
            return new VirtualFile(file);
        }
        return null;
    }

    @NotNull
    public VirtualFile createChildFile(Object requestor, @NotNull VirtualFile vDir, @NotNull String fileName) throws IOException {
        File file = new File(Paths.get(Paths.get(vDir.getPath()).toString(), fileName).toUri());
        if (!file.exists()) {
            file.createNewFile();
        }
        return new VirtualFile(file);
    }

    @NotNull
    public VirtualFile createChildDirectory(Object requestor, @NotNull VirtualFile vDir, @NotNull String dirName) throws IOException {
        File file = new File(Paths.get(Paths.get(vDir.getPath()).toString(), dirName).toUri());
        if (!file.exists()) {
            file.mkdirs();
        }
        return new VirtualFile(file);
    }

    private static IFile getIFile(String absFileName) {

        IWorkspaceRoot root = ResourcesPlugin.getWorkspace().getRoot();
        URI uri = new org.eclipse.core.runtime.Path(absFileName).toFile().toURI();
        IFile[] files = root.findFilesForLocationURI(uri);
        if ((files != null) && (files.length > 0)) {
            if (files.length > 1) {
                // In case of several nested projects, IFile must belong to the closest parent
                // project
                Arrays.sort(files, new Comparator<IFile>() {
                    @Override
                    public int compare(IFile f1, IFile f2) {
                        return Integer.compare(f1.getFullPath().segmentCount(), f2.getFullPath().segmentCount());
                    }
                });
            }
            return files[0];
        }

        // Here project is not a part of workspace
        // API findFilesForLocationURI knows nothing about it
        IFile resultFile = null;
        int maxIndex = -1;
        final String fileName = uri.getPath();
        IProject[] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
        for (int i = 0; i < projects.length; i++) {
            IProject project = projects[i];
            if (project.exists()) {
                String projectName = project.getName();
                int index = fileName.indexOf(projectName);
                // In case of several nested projects, IFile must belong to the closest parent
                // project
                if (index > maxIndex) {
                    IFile file = project.getProject().getFile(fileName.substring(index + projectName.length() + 1));
                    if (file.exists()) {
                        maxIndex = index;
                        resultFile = file;
                    }
                }
            }
        }
        return resultFile;
    }
}
