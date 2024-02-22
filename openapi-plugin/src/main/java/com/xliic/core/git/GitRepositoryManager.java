package com.xliic.core.git;

import java.io.File;
import java.io.IOException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

import org.eclipse.core.resources.IProject;
import org.eclipse.core.resources.IWorkspaceRoot;
import org.eclipse.core.resources.ResourcesPlugin;
import org.eclipse.core.runtime.IPath;
import org.eclipse.jgit.lib.RepositoryBuilder;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public class GitRepositoryManager implements Runnable {
	
    @NotNull
    private final Map<String, GitRepository> reposToTrack = new HashMap<>();
	
	private final @NotNull Project project;
	private final ScheduledExecutorService scheduledExecutorService = Executors.newScheduledThreadPool(1);
	private volatile ScheduledFuture<?> scheduledFuture;

	public GitRepositoryManager(@NotNull Project project) {
		this.project = project;
	}

	public @NotNull List<GitRepository> getRepositories() {
    	List<GitRepository> repos = new LinkedList<>();
    	synchronized(this) {
    		reposToTrack.clear();
    		collectAllRepos(repos);
            for (GitRepository repo : repos) {
            	reposToTrack.put(repo.getRoot().getPath(), repo);
            }
    	}
        return repos;
    }

	@Override
	public void run() {
		List<GitRepository> repos = new LinkedList<>();
		List<GitRepository> updRepos = new LinkedList<>();
		synchronized(this) {
			collectAllRepos(repos);
	        for (GitRepository repo : repos) {
     		   if (reposToTrack.containsKey(repo.getRoot().getPath())) {
        		   GitRepository prevRepo = reposToTrack.get(repo.getRoot().getPath());
    			   if (!Objects.equals(prevRepo, repo)) {
        			   updRepos.add(repo);
        			   reposToTrack.put(repo.getRoot().getPath(), repo);
    			   }
    		   } else {
    			   updRepos.add(repo);
    			   reposToTrack.put(repo.getRoot().getPath(), repo);
    		   }
	        }
		}
        for (GitRepository repo : updRepos) {
        	fireEvent(repo);
        }
	}

	public void start() {
		reposToTrack.clear();
		if (scheduledFuture == null) {
			scheduledFuture = scheduledExecutorService.scheduleWithFixedDelay(this, 1000, 3000, TimeUnit.MILLISECONDS);
		}
	}
	
	public void stop() {
		reposToTrack.clear();
		if (scheduledFuture != null) {
			scheduledFuture.cancel(true);
			scheduledFuture = null;
		}
	}
	
	private void fireEvent(GitRepository repo) {
		project.getMessageBus().syncPublisher(GitRepository.GIT_REPO_CHANGE).repositoryChanged(repo);
	}
	
	private static void collectAllRepos(List<GitRepository> repos) {
    	IWorkspaceRoot workspaceRoot = ResourcesPlugin.getWorkspace().getRoot();
        IProject[] projects = workspaceRoot.getProjects();
        for(int i = 0; i < projects.length; i++) {
           IProject project = projects[i];
           if (project.exists() && project.isOpen()) {
        	   IPath prLocPath = project.getLocation();           	   
        	   String myPath = prLocPath + "/.git";
        	   File gitFile = new File(myPath);
        	   if (gitFile.exists()) {
            	   try {
            		   repos.add(new GitRepository(new RepositoryBuilder().setGitDir(gitFile).build(), new VirtualFile(new File(gitFile.getParent()))));
				   } catch (IOException e) {
				   }
        	   }
           }
        }
	}
}
