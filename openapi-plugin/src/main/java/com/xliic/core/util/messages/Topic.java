package com.xliic.core.util.messages;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

public abstract class Topic<L> {

    private final String name;

    public Topic(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        this.name = listenerClass.getSimpleName();
    }

    public String getTopic() {
        return name;
    }

    public abstract <T> void dispatch(int funcId, @NotNull Object args, @NotNull T handler);

    @NotNull
    public abstract <T> T syncPublisher(@NotNull IEventBroker eventBroker);

    public Map<String, Object> getArgs(int funcId, List<Object> args) {
        Map<String, Object> argsMap = new HashMap<>();
        argsMap.put(MessageBusConnection.EVENT_FUNCTION_ID_PROPERTY_KEY, funcId);
        argsMap.put(MessageBusConnection.EVENT_ARGS_PROPERTY_KEY, args);
        return argsMap;
    }

    public static enum BroadcastDirection {

        TO_CHILDREN,
        TO_DIRECT_CHILDREN,
        NONE,
        TO_PARENT;

        private BroadcastDirection() {
        }
    }
}