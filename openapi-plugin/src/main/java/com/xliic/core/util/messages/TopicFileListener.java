package com.xliic.core.util.messages;

import java.util.Collections;
import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.topic.FileListener;

public class TopicFileListener<L> extends Topic<L> {
    
    public TopicFileListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
    	super(listenerClass, broadcastDirection);
    }

	@Override
    @SuppressWarnings("unchecked")
	public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	FileListener listener = (FileListener) handler;
    	List<Object> args = (List<Object>) data;
    	if (funcId == 0) {
    		listener.handleAllFilesClosed();
    	} else if (funcId == 1) {
    		listener.handleSelectedFile((VirtualFile) args.get(0));
    	} else if (funcId == 2) {
    		listener.handleFileNameChanged((VirtualFile) args.get(0), (String) args.get(1));
    	} else if (funcId == 3) {
    		listener.handleClosedFile((VirtualFile) args.get(0));
    	} else if (funcId == 4) {
    		listener.handleDocumentChanged((VirtualFile) args.get(0));
    	}
    } 

	@NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
    	return (T) new FileListener() {

    		@Override
    	    public void handleAllFilesClosed() {
    	    	eventBroker.send(getTopic(), getArgs(0, Collections.emptyList()));	
    		}

    		@Override
    		public void handleSelectedFile(@NotNull VirtualFile file) {
    	    	eventBroker.send(getTopic(), getArgs(1, List.of(file)));	
    		}

    		@Override
    		public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
    	    	eventBroker.send(getTopic(), getArgs(2, List.of(newFile, oldFileName)));
    		}

    		@Override
    		public void handleClosedFile(@NotNull VirtualFile file) {
    	    	eventBroker.send(getTopic(), getArgs(3, List.of(file)));
    		}

    		@Override
    		public void handleDocumentChanged(@NotNull VirtualFile file) {
    			eventBroker.send(getTopic(), getArgs(4, List.of(file)));
    		}
    	};
    }
}