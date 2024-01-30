package com.xliic.core.util.messages;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.osgi.service.event.EventHandler;

public class MessageBusConnection {

    public static final String EVENT_FUNCTION_ID_PROPERTY_KEY = "funcId";
    public static final String EVENT_ARGS_PROPERTY_KEY = "args";

    private final IEventBroker eventBroker;
    private final Map<Object, List<EventHandler>> handlers = Collections.synchronizedMap(new HashMap<>());

    public MessageBusConnection(IEventBroker eventBroker) {
        this.eventBroker = eventBroker;
    }

    public <L> void subscribe(@NotNull Topic<L> topic, @NotNull L handler) {
        EventHandler eventHandler = event -> {
            if (handlers.containsKey(handler)) {
                Integer funcId = (Integer) event.getProperty(EVENT_FUNCTION_ID_PROPERTY_KEY);
                topic.dispatch(funcId, event.getProperty(EVENT_ARGS_PROPERTY_KEY), handler);
            }
        };
        boolean status = eventBroker.subscribe(topic.getTopic(), eventHandler);
        if (status) {
            if (!handlers.containsKey(handler)) {
                handlers.put(handler, new LinkedList<>());
            }
            handlers.get(handler).add(eventHandler);
        }
    }

    @NotNull
    public <L> L syncPublisher(@NotNull Topic<L> topic) {
        return topic.syncPublisher(eventBroker);
    }

    public <L> void unsubscribe(@NotNull L handler) {
        List<EventHandler> eventHandlers = handlers.remove(handler);
        if (eventHandlers != null) {
            for (EventHandler eventHandler : eventHandlers) {
                eventBroker.unsubscribe(eventHandler);
            }
        }
    }

    public void dispose() {
        for (Object handler : new HashSet<>(handlers.keySet())) {
            unsubscribe(handler);
        }
    }

    public <L> void disconnect(@NotNull L handler) {
    	unsubscribe(handler);
    }
}