package com.xliic.core.util.messages;

import java.util.Collections;
import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import com.xliic.openapi.platform.PlatformListener;

public class TopicPlatformListener<L> extends Topic<L> {

    public TopicPlatformListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        PlatformListener listener = (PlatformListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.reloadAll();
        } else if (funcId == 1) {
            listener.auditReportForAPIUpdated((String) args.get(0), (float) args.get(1), (boolean) args.get(2));
        } else if (funcId == 2) {
            listener.reloadDictionary();
        } else if (funcId == 3) {
            listener.collectionsLoaded();
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new PlatformListener() {

            @Override
            public void reloadAll() {
                eventBroker.send(getTopic(), getArgs(0, Collections.emptyList()));
            }

            @Override
            public void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid) {
                eventBroker.send(getTopic(), getArgs(1, List.of(apiId, grade, isValid)));
            }

            @Override
            public void reloadDictionary() {
                eventBroker.send(getTopic(), getArgs(2, Collections.emptyList()));
            }

            @Override
            public void collectionsLoaded() {
                eventBroker.send(getTopic(), getArgs(3, Collections.emptyList()));
            }
        };
    }
}
