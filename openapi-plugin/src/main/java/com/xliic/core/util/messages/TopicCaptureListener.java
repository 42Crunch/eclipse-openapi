package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.capture.CaptureListener;
import com.xliic.openapi.capture.payload.CaptureItem;

public class TopicCaptureListener<L> extends Topic<L> {

    public TopicCaptureListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
    	CaptureListener listener = (CaptureListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.showCaptureWindow((List<CaptureItem>) args.get(0));
        } else if (funcId == 1) {
            listener.saveCapture((CaptureItem) args.get(0));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new CaptureListener() {
        	
        	@Override
        	public void showCaptureWindow(@NotNull List<CaptureItem> items) {
        		eventBroker.send(getTopic(), getArgs(0, List.of(items)));
        	}

        	@Override
        	public void saveCapture(@NotNull CaptureItem item) {
        		eventBroker.send(getTopic(), getArgs(1, List.of(item)));
        	}
        };
    }
}
