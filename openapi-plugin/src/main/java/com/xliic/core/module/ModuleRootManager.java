package com.xliic.core.module;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;

public class ModuleRootManager {
	
	private final @NotNull Module module;
	private static @NotNull ModuleRootManager manager;

	public ModuleRootManager(@NotNull Module module) {
		this.module = module;
	}
	
	@NotNull
    public static ModuleRootManager getInstance(@NotNull Module module) {
    	if (manager == null) {
    		manager = new ModuleRootManager(module);
    	}
        return manager;
    }
    
    @NotNull
    public VirtualFile[] getContentRoots() {
    	List<VirtualFile> result = new LinkedList<>();
    	IWorkspaceRoot workspaceRoot = ResourcesPlugin.getWorkspace().getRoot();
        IProject[] projects = workspaceRoot.getProjects();
        for(int i = 0; i < projects.length; i++) {
           IProject project = projects[i];
           if (project.exists() && project.isOpen()) {
        	   IPath prLocPath = project.getLocation();
        	   File root = new File(prLocPath.toString());
        	   if (root.exists()) {
        		   result.add(new VirtualFile(root));   
        	   }
           }
        }
        VirtualFile[] array = new VirtualFile[result.size()];
        result.toArray(array);
        return array;
    }
}
