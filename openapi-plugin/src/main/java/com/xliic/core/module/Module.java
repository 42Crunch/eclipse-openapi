package com.xliic.core.module;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public class Module {

	private static final String NAME = "defaultModule";

	@NotNull
    public Project getProject() {
        return Project.getInstance();
    }

    @NotNull
    public String getName() {
    	return NAME;
    }
}
