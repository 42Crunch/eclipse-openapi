package com.xliic.core.git;

import java.io.IOException;
import java.util.Objects;

import org.eclipse.jgit.lib.BranchConfig;
import org.eclipse.jgit.lib.Repository;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class GitLocalBranch {

	@NotNull
	private final String name;

	public GitLocalBranch(@NotNull String name) throws IOException {
		this.name = name;
	}
	
	public @NotNull String getName() {
		return name;
	}

	public @Nullable GitRemoteBranch findTrackedBranch(@NotNull GitRepository repository) {	
		Repository repo = repository.getRepository();
		try {
			String name = new BranchConfig(repo.getConfig(), repo.getBranch()).getTrackingBranch();
			if (name != null) {
				return new GitRemoteBranch(name, repo.getConfig());
			}
		} catch (IOException e) {
		}
		return null;
	}

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        GitLocalBranch otherBranch = (GitLocalBranch) o;
        return Objects.equals(name, otherBranch.getName());
    }

    @Override
    public int hashCode() {
        int result = name.hashCode();
        return result;
    }

    @Override
    public String toString() {
        return "GitLocalBranch{name='" + name + "'}";
    }
}
