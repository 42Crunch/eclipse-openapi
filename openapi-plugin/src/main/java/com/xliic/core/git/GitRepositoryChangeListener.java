package com.xliic.core.git;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicGitRepositoryChangeListener;

public interface GitRepositoryChangeListener {

    Topic<GitRepositoryChangeListener> TOPIC = new TopicGitRepositoryChangeListener<>(GitRepositoryChangeListener.class, Topic.BroadcastDirection.NONE);

    void repositoryChanged(@NotNull GitRepository repo);
}
