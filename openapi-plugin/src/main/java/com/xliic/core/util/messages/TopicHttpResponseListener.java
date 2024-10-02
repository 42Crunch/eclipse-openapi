package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;
import com.xliic.openapi.webapp.http.HttpResponseListener;

public class TopicHttpResponseListener<L> extends Topic<L> {

    public TopicHttpResponseListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	HttpResponseListener listener = (HttpResponseListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.showHttpResponse((String) args.get(0), (HttpResponse) args.get(1));
        } else if (funcId == 1) {
            listener.showHttpError((String) args.get(0), (HttpError) args.get(1));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new HttpResponseListener() {
        	
        	@Override
        	public void showHttpResponse(@NotNull String webAppId, @NotNull HttpResponse payload) {
        		eventBroker.send(getTopic(), getArgs(0, List.of(webAppId, payload)));
        	}

        	@Override
        	public void showHttpError(@NotNull String webAppId, @NotNull HttpError payload) {
        		eventBroker.send(getTopic(), getArgs(1, List.of(webAppId, payload)));
        	}
        };
    }
}
