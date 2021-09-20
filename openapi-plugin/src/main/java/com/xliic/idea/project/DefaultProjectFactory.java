package com.xliic.idea.project;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class DefaultProjectFactory {
	
	private final static DefaultProjectFactory defaultProjectFactory = new DefaultProjectFactory(); 
	
	public static DefaultProjectFactory getInstance() {
		return defaultProjectFactory;
	}
	
    public Project getDefaultProject() {    	
        return OpenAPIAbstractUIPlugin.getInstance().getProject();
    }
}
