package com.xliic.idea.file;

import java.io.File;
import java.io.IOException;
import java.net.URI;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.jetbrains.annotations.NotNull;

public class VirtualFile {

	private final IFile file;

	public VirtualFile(IFile file) {
		this.file = file;
	}

	// todo: remove later?
	public IFile getIFile() {
		return file;
	}

	public String getPath() {
		return getAbsoluteFullFilePath(file);
	}

	public String getCanonicalPath() {
		return getAbsoluteFullFilePath(file);
	}

	public boolean equalsToIFile(IFile file2) {
		return getPath().equals(getAbsoluteFullFilePath(file2));
	}

	public String getExtension() {
		return file.getFileExtension();
	}

	private String getAbsoluteFullFilePath(IFile inputFile) {

		String fileName = inputFile.getFullPath().toString();
		IPath projectLocation = inputFile.getProject().getLocation();
		File rootPath = projectLocation.uptoSegment(projectLocation.segmentCount() - 1).toFile();
		File ioFile = new File(rootPath, fileName);

		if (!ioFile.exists()) {
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
						ioFile = new File(rootPath, fileName);
						break;
					}
				}
			}
		}
		try {
			return filePathToIdeaFormat(ioFile.getCanonicalPath());
		} catch (IOException e) {
		}
		return filePathToIdeaFormat(ioFile.getPath());
	}

	public static String filePathToIdeaFormat(@NotNull String fileName) {
		if (fileName.contains("\\")) {
			fileName = fileName.replace("\\", "/");
		}
		if (fileName.startsWith("/")) {
			fileName = fileName.substring(1);
		}
		return fileName;
	}

	public boolean equalsToURI(@NotNull URI uri) {
		return getPath().equals(VirtualFile.filePathToIdeaFormat(uri.getPath()));
	}
}
