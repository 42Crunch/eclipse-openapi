package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.topic.WindowListener;

public class TopicWindowListener<L> extends Topic<L> {
    
    public TopicWindowListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
    	super(listenerClass, broadcastDirection);
    }

	@Override
    @SuppressWarnings("unchecked")
	public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
		WindowListener listener = (WindowListener) handler;
    	List<Object> args = (List<Object>) data;
    	if (funcId == 0) {
    		listener.handleToolWindowOpened((String) args.get(0));
    	} else if (funcId == 1) {
    		listener.handleToolWindowOpened((String) args.get(0));
    	}
    } 

	@NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
    	return (T) new WindowListener() {

    		@Override
    	    public void handleToolWindowOpened(String id) {
    	    	eventBroker.send(getTopic(), getArgs(0, List.of(id)));	
    		}

    		@Override
    		public void handleToolWindowRegistered(String id) {
    	    	eventBroker.send(getTopic(), getArgs(1, List.of(id)));
    		}
    	};
    }
}
