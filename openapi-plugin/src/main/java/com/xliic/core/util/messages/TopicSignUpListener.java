package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.signup.SignUpListener;

public class TopicSignUpListener<L> extends Topic<L> {

    public TopicSignUpListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	SignUpListener listener = (SignUpListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.showAnondTokenResponse((boolean) args.get(0), (String) args.get(1));
        } else if (funcId == 1) {
            listener.showPlatformConnectionTestError((String) args.get(0));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new SignUpListener() {

            @Override
            public void showAnondTokenResponse(boolean success, @NotNull String message) {
            	eventBroker.send(getTopic(), getArgs(0, List.of(success, message)));
            }

            @Override
            public void showPlatformConnectionTestError(@NotNull String error) {
            	eventBroker.send(getTopic(), getArgs(1, List.of(error)));
            }
        };
    }
}
