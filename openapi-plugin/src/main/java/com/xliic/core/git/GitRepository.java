package com.xliic.core.git;

import java.io.IOException;
import java.util.Objects;

import org.eclipse.jgit.lib.Repository;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.vfs.VirtualFile;

public class GitRepository {

	public static final Topic<GitRepositoryChangeListener> GIT_REPO_CHANGE = GitRepositoryChangeListener.TOPIC;

	@NotNull
	private final Repository repo;
	@NotNull
	private final VirtualFile root;
	@NotNull
	private final GitLocalBranch branch;

	public GitRepository(@NotNull Repository repo, @NotNull VirtualFile root) {
		this.repo = repo;
		this.root = root;
		branch = createAndGetCurrentBranch();
	}

	public @Nullable GitLocalBranch getCurrentBranch() {
		return branch;
	}

	public @NotNull VirtualFile getRoot() {
		return root;
	}

	public @NotNull Repository getRepository() {
		return repo;
	}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GitRepository otherRepo = (GitRepository) o;       
        if (!Objects.equals(root.getPath(), otherRepo.getRoot().getPath())) return false;
        return Objects.equals(branch, otherRepo.getCurrentBranch());
    }

    @Override
    public int hashCode() {
        int result = root.hashCode();
        if (branch != null) { 
        	result = 31 * result + branch.hashCode();
        }
        return result;
    }

    @Override
    public String toString() {
        return "GitRepository{root='" + root.getPath() + "', branch='" + branch + '}';
    }

	private @Nullable GitLocalBranch createAndGetCurrentBranch() {
		try {
			return new GitLocalBranch(repo.getBranch());
		} catch (IOException e) {
			return null;
		}
	}
}
