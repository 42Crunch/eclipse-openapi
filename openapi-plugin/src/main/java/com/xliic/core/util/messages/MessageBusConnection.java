package com.xliic.core.util.messages;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.osgi.service.event.EventHandler;

public class MessageBusConnection {
	
	public static final String EVENT_FUNCTION_ID_PROPERTY_KEY = "funcId";
	public static final String EVENT_ARGS_PROPERTY_KEY = "args";
	
	private final IEventBroker eventBroker;
	
	public MessageBusConnection(IEventBroker eventBroker) {
		this.eventBroker = eventBroker;
	}
	
	public <L> void subscribe(@NotNull Topic<L> topic, @NotNull L handler) {
		EventHandler eventHandler = event -> {
			Integer funcId = (Integer) event.getProperty(EVENT_FUNCTION_ID_PROPERTY_KEY);
			topic.dispatch(funcId, event.getProperty(EVENT_ARGS_PROPERTY_KEY), handler);
		};
		eventBroker.subscribe(topic.getTopic(), eventHandler);
	}

    @NotNull
    public <L> L syncPublisher(@NotNull Topic<L> topic) {  	
		return topic.syncPublisher(eventBroker);
    }
}