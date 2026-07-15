package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.webapp.filepicker.FilePickerListener;
import com.xliic.openapi.webapp.filepicker.Base64EncodedFileContent;

public class TopicFilePickerListener<L> extends Topic<L> {

    public TopicFilePickerListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	FilePickerListener listener = (FilePickerListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.loadFile((String) args.get(0), (String) args.get(1), (Base64EncodedFileContent) args.get(2));
        } else if (funcId == 1) {
            listener.cancelFile((String) args.get(0), (String) args.get(1));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new FilePickerListener() {
        	
        	@Override
        	public void loadFile(@NotNull String webAppId, @NotNull String id, @NotNull Base64EncodedFileContent content) {
        		eventBroker.send(getTopic(), getArgs(0, List.of(webAppId, id, content)));
        	}

        	@Override
        	public void cancelFile(@NotNull String webAppId, @NotNull String id) {
        		eventBroker.send(getTopic(), getArgs(1, List.of(webAppId, id)));
        	}
        };
    }
}
