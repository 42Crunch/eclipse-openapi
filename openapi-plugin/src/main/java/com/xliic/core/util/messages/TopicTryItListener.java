package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.preferences.Preferences;
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
            listener.tryOperation((TryItOperation) args.get(0), (Preferences) args.get(1), (Environment) args.get(2));
        } else if (funcId == 1) {
            listener.showOperationResponse((TryItResponse) args.get(0));
        } else if (funcId == 2) {
            listener.showOperationError((TryItError) args.get(0));
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> @NotNull T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new TryItListener() {

            @Override
            public void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs, @NotNull Environment env) {
                eventBroker.send(getTopic(), getArgs(0, List.of(payload, prefs, env)));
            }

            @Override
            public void showOperationResponse(@NotNull TryItResponse payload) {
                eventBroker.send(getTopic(), getArgs(1, List.of(payload)));
            }

            @Override
            public void showOperationError(@NotNull TryItError payload) {
                eventBroker.send(getTopic(), getArgs(2, List.of(payload)));
            }
        };
    }
}