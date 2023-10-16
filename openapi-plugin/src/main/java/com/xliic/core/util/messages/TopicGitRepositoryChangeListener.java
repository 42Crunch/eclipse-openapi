package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.git.GitRepository;
import com.xliic.core.git.GitRepositoryChangeListener;

public class TopicGitRepositoryChangeListener<L> extends Topic<L> {

    public TopicGitRepositoryChangeListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	GitRepositoryChangeListener listener = (GitRepositoryChangeListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.repositoryChanged((GitRepository) args.get(0));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new GitRepositoryChangeListener() {
			@Override
			public void repositoryChanged(@NotNull GitRepository repo) {
				eventBroker.send(getTopic(), getArgs(0, List.of(repo)));
			}
        };
    }
}