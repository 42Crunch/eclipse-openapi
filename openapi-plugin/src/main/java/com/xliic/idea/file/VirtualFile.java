package com.xliic.idea.file;

import java.io.File;
import java.io.IOException;

import org.eclipse.core.resources.IFile;
import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;

public class VirtualFile {
	
	private final IFile file;
	
	public VirtualFile(IFile file) {
		this.file = file;
	}
	
	//todo: remove later?
	public IFile getIFile() {
		return file;
	}
	
	public String getPath() {
		return file.getFullPath().toPortableString();
	}
	
    public String getCanonicalPath() {
        return getAbsoluteFullFilePath().replace("\\", "/");
    }
    
    public boolean equalsToIFile(IFile file2) {
    	return getPath().equals(file2.getFullPath().toPortableString());
    }
    
    public String getExtension() {
    	return file.getFileExtension();
    }
    
    public String getAbsoluteFullFilePath() {
		
		String fileName = file.getFullPath().toString();
		IPath projectLocation = file.getProject().getLocation(); 
		File rootPath = projectLocation.uptoSegment(projectLocation.segmentCount() - 1).toFile();	
		File ioFile = new File(rootPath, fileName);
		
		if (!ioFile.exists()) {
			// Here project is not a part of workspace
			// Eclipse will add project name to the beginning of the file name
			// Thus the file name will become invalid and needs to be reconstructed
			// For example: fileName = /EclipseProjects/tmp/multifile-petstore/openapi.yaml
			IProject [] projects = ResourcesPlugin.getWorkspace().getRoot().getProjects();
			for (int i = 0 ; i < projects.length ; i++) {
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
			return ioFile.getCanonicalPath();
		} 
		catch (IOException e) {
		}
		return ioFile.getPath();
	}
}
