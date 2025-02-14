package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.bigfiles.BigFilesListener;

public class TopicBigFilesListener<L> extends Topic<L> {

    public TopicBigFilesListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	BigFilesListener listener = (BigFilesListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.showBrowseFile((String) args.get(0));
        } else if (funcId == 1) {
            listener.sendFileSegment((String) args.get(0), (String) args.get(1), (float) args.get(2));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new BigFilesListener() {

        	@Override
            public void showBrowseFile(@NotNull String file) {
            	eventBroker.send(getTopic(), getArgs(0, List.of(file)));
            }

            @Override
            public void sendFileSegment(@NotNull String file, @NotNull String textSegment, float progress) {
            	eventBroker.send(getTopic(), getArgs(1, List.of(file, textSegment, progress)));
            }
        };
    }
}
