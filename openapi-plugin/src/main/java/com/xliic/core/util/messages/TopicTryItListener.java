package com.xliic.core.util.messages;

import java.util.Collections;
import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.tryit.payload.TryItResponse;

public class TopicTryItListener<L> extends Topic<L> {

    public TopicTryItListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        TryItListener listener = (TryItListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.tryOperation((TryItOperation) args.get(0), (Preferences) args.get(1));
        } else if (funcId == 1) {
            listener.tryLastOperation();
        } else if (funcId == 2) {
            listener.showOperationResponse((TryItResponse) args.get(0));
        } else if (funcId == 3) {
            listener.showOperationError((TryItError) args.get(0));
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> @NotNull T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new TryItListener() {

            @Override
            public void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs) {
                eventBroker.send(getTopic(), getArgs(0, List.of(payload, prefs)));
            }

            @Override
            public void tryLastOperation() {
                eventBroker.send(getTopic(), getArgs(1, Collections.emptyList()));
            }

            @Override
            public void showOperationResponse(@NotNull TryItResponse payload) {
                eventBroker.send(getTopic(), getArgs(2, List.of(payload)));
            }

            @Override
            public void showOperationError(@NotNull TryItError payload) {
                eventBroker.send(getTopic(), getArgs(3, List.of(payload)));
            }
        };
    }
}