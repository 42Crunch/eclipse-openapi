package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.Environment;

public class TopicEnvListener<L> extends Topic<L> {

    public TopicEnvListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        EnvListener listener = (EnvListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.loadEnv((Environment) args.get(0));
        } else if (funcId == 1) {
            listener.updateEnv((Environment) args.get(0));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new EnvListener() {

            @Override
            public void loadEnv(@NotNull Environment env) {
                eventBroker.send(getTopic(), getArgs(0, List.of(env)));
            }

            @Override
            public void updateEnv(@NotNull Environment env) {
                eventBroker.send(getTopic(), getArgs(1, List.of(env)));
            }
        };
    }
}
