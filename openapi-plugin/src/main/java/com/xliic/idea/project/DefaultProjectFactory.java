package com.xliic.idea.project;

public class DefaultProjectFactory {
	
	private final static DefaultProjectFactory defaultProjectFactory = new DefaultProjectFactory(); 
	
	public static DefaultProjectFactory getInstance() {
		return defaultProjectFactory;
	}
	
    public Project getDefaultProject() {    	
        return new Project();
    }
}
