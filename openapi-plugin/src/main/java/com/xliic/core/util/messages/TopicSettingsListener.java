package com.xliic.core.util.messages;

import java.util.List;
import java.util.Map;
import java.util.Set;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.topic.SettingsListener;

public class TopicSettingsListener<L> extends Topic<L> {

    public TopicSettingsListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        SettingsListener listener = (SettingsListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.propertiesUpdated((Set<String>) args.get(0), (Map<String, Object>) args.get(1));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new SettingsListener() {
            @Override
            public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
                eventBroker.send(getTopic(), getArgs(0, List.of(keys, prevData)));
            }
        };
    }
}
