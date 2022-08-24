package com.xliic.core.util.messages;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.osgi.service.event.EventHandler;

import com.xliic.core.Disposable;

public class MessageBusConnection implements Disposable {

    public static final String EVENT_FUNCTION_ID_PROPERTY_KEY = "funcId";
    public static final String EVENT_ARGS_PROPERTY_KEY = "args";

    private final IEventBroker eventBroker;
    private final Map<Object, EventHandler> handlers = new HashMap<>();

    public MessageBusConnection(IEventBroker eventBroker) {
        this.eventBroker = eventBroker;
    }

    public <L> void subscribe(@NotNull Topic<L> topic, @NotNull L handler) {
        EventHandler eventHandler = event -> {
            Integer funcId = (Integer) event.getProperty(EVENT_FUNCTION_ID_PROPERTY_KEY);
            topic.dispatch(funcId, event.getProperty(EVENT_ARGS_PROPERTY_KEY), handler);
        };
        eventBroker.subscribe(topic.getTopic(), eventHandler);
        handlers.put(handler, eventHandler);
    }

    @NotNull
    public <L> L syncPublisher(@NotNull Topic<L> topic) {
        return topic.syncPublisher(eventBroker);
    }

    public <L> void unsubscribe(@NotNull L handler) {
        EventHandler eventHandler = handlers.remove(handler);
        if (eventHandler != null) {
            eventBroker.unsubscribe(eventHandler);
        }
    }

    @Override
    public void dispose() {
        for (EventHandler eventHandler : handlers.values()) {
            eventBroker.unsubscribe(eventHandler);
        }
        handlers.clear();
    }
}