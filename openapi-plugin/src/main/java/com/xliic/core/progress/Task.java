package com.xliic.core.progress;

import org.eclipse.core.runtime.CoreException;
import org.eclipse.core.runtime.ICoreRunnable;
import org.eclipse.core.runtime.IProgressMonitor;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;

public abstract class Task implements ICoreRunnable {

	  public abstract static class Backgroundable extends Task {
		  
		    private final @NotNull Project project;
		    private final @NotNull String title;
		    @SuppressWarnings("unused")
			private final boolean canBeCancelled;

		    public Backgroundable(@Nullable Project project, @NotNull String title, boolean canBeCancelled) {
		      this.project = project;
		      this.title = title;
		      this.canBeCancelled = canBeCancelled;
		    }
		    
			public abstract void run(ProgressIndicator indicator) throws CoreException;
		    
		    @Override
			public void run(IProgressMonitor monitor) throws CoreException {
		    	run(new ProgressIndicator(monitor));
			}
		    
		    @Override
		    public String getTitle() {
		    	return title;
		    }
	 }
	  
	 public abstract String getTitle(); 
}
