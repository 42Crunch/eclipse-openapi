package com.xliic.core.util.messages;

import java.util.List;
import java.util.Arrays;
import java.util.LinkedList;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;
import com.xliic.openapi.webapp.chunks.ChunksListener;

public class TopicChunksListener<L> extends Topic<L> {

    public TopicChunksListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	ChunksListener listener = (ChunksListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.parseChunk((String) args.get(0), (String) args.get(1));
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> @NotNull T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new ChunksListener() {

            @Override
            public void parseChunk(@NotNull String webAppId, @Nullable String chunk) {
                eventBroker.send(getTopic(), getArgs(0, new LinkedList<>(Arrays.asList(webAppId, chunk)))); 
            }
        };
    }
}
