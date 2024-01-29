package com.xliic.core.module;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class ModuleManager {

	private final @NotNull Project project;
	private static @NotNull ModuleManager manager;

	public ModuleManager(@NotNull Project project) {
		this.project = project;
	}
	
	@NotNull
    public static ModuleManager getInstance(@NotNull Project project) {
    	if (manager == null) {
    		manager = new ModuleManager(project);
    	}
        return manager;
    }
    
    @NotNull
    public List<Module> getModules() {
    	return List.of(new Module());
    }
}
