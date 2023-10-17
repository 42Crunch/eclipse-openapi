package com.xliic.core.git;

import java.util.List;

import org.jetbrains.annotations.NotNull;

public class GitRemote {

    private final @NotNull List<String> myUrls;
    
	public GitRemote(@NotNull List<String> myUrls) {
		this.myUrls = myUrls;
	}

	public @NotNull List<String> getUrls() {
		return myUrls;
	}
}
