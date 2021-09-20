package com.xliic.idea;

import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class Module {
	
	public Project getProject() {
		return OpenAPIAbstractUIPlugin.getInstance().getProject();
	}
}
