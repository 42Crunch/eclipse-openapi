package com.xliic.core.util.messages;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

public class MessageBus {
	
	private final MessageBusConnection connection;
	
	public MessageBus(IEventBroker eventBroker) {
		this.connection = new MessageBusConnection(eventBroker);
	}
	
    @NotNull 
    public MessageBusConnection connect() {
    	return connection;
    }
    
    @NotNull
    public <L> L syncPublisher(@NotNull Topic<L> topic) {
		return connection.syncPublisher(topic);
    }
}
