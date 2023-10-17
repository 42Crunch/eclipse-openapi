package com.xliic.core.git;

import java.util.Set;
import java.util.List;
import java.util.LinkedList;

import org.eclipse.jgit.lib.Config;
import org.jetbrains.annotations.NotNull;

public class GitRemoteBranch {

	@NotNull
	private final String name;
	@NotNull
	private final Config config;

	public GitRemoteBranch(@NotNull String name, @NotNull Config config) {
		this.name = name;
		this.config = config;
	}

	public @NotNull GitRemote getRemote() {
		List<String> urls = new LinkedList<>();
        Set<String> remotes = config.getSubsections("remote");
        for (String remoteName : remotes) {
        	if (name.contains("/" + remoteName + "/")) {
                String url = config.getString("remote", remoteName, "url");
                if (url != null) {
              	  urls.add(url);
                }
        	}
        }
		return new GitRemote(urls);
	}
}
