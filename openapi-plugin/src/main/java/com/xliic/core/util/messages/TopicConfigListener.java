package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.config.payload.Progress;

public class TopicConfigListener<L> extends Topic<L> {

    public TopicConfigListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	ConfigListener listener = (ConfigListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.loadConfig((Config) args.get(0));
        } else if (funcId == 1) {
            listener.showPlatformConnectionTest((boolean) args.get(0), (String) args.get(1));
        } else if (funcId == 2) {
        	listener.showOverlordConnectionTest((boolean) args.get(0), (String) args.get(1));
        } else if (funcId == 3) {
        	listener.showScandManagerConnectionTest((boolean) args.get(0), (String) args.get(1));
        } else if (funcId == 4) {
        	listener.showCliDownload((boolean) args.get(0), (String) args.get(1));
        } else if (funcId == 5) {
        	listener.showCliDownload((Progress) args.get(0));
        } else if (funcId == 6) {
        	listener.showCliTest((boolean) args.get(0), (String) args.get(1));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new ConfigListener() {

            @Override
            public void loadConfig(@NotNull Config config) {
            	eventBroker.send(getTopic(), getArgs(0, List.of(config)));
            }

            @Override
            public void showPlatformConnectionTest(boolean success, @NotNull String message) {
            	eventBroker.send(getTopic(), getArgs(1, List.of(success, message)));
            }

            @Override
            public void showOverlordConnectionTest(boolean success, @NotNull String message) {
            	eventBroker.send(getTopic(), getArgs(2, List.of(success, message)));
            }

            @Override
            public void showScandManagerConnectionTest(boolean success, @NotNull String message) {
            	eventBroker.send(getTopic(), getArgs(3, List.of(success, message)));
            }

            @Override
            public void showCliDownload(boolean success, @Nullable String value) {
            	eventBroker.send(getTopic(), getArgs(4, List.of(success, value)));            	
            }

            @Override
            public void showCliDownload(@NotNull Progress progress) {
            	eventBroker.send(getTopic(), getArgs(5, List.of(progress)));
            }

            @Override
            public void showCliTest(boolean success, @Nullable String value) {
            	eventBroker.send(getTopic(), getArgs(6, List.of(success, value)));            	
            }
        };
    }
}
