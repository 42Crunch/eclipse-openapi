package com.xliic.core.module;

import com.xliic.core.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class Module {
	
	public Project getProject() {
		return OpenAPIAbstractUIPlugin.getInstance().getProject();
	}
}
