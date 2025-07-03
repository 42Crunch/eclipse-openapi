package com.xliic.core.util.messages;

import java.util.List;
import java.util.Map;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.tags.TagsListener;

public class TopicTagsListener<L> extends Topic<L> {

    public TopicTagsListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	TagsListener listener = (TagsListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.showTags((Config) args.get(0), (String) args.get(1), (Map<String, Object>) args.get(2));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new TagsListener() {

            @Override
            public void showTags(@NotNull Config config, @NotNull String targetFileName, @NotNull Map<String, Object> tagData) {
            	eventBroker.send(getTopic(), getArgs(0, List.of(config, targetFileName, tagData)));
            }
        };
    }
}
