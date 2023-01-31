package com.xliic.core.util.messages;

import java.util.Collections;
import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.scan.Environment;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

public class TopicScanListener<L> extends Topic<L> {

    public TopicScanListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        ScanListener listener = (ScanListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.scanOperation((ScanOperation) args.get(0), (Environment) args.get(1), (Preferences) args.get(2));
        } else if (funcId == 1) {
            listener.showScanReport((ScanReport) args.get(0));
        } else if (funcId == 2) {
            listener.scanLastOperation();
        } else if (funcId == 3) {
            listener.showOperationResponse((TryItResponse) args.get(0));
        } else if (funcId == 4) {
            listener.showOperationError((TryItError) args.get(0));
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> @NotNull T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new ScanListener() {

            @Override
            public void scanOperation(@NotNull ScanOperation payload, @NotNull Environment env, @NotNull Preferences prefs) {
                eventBroker.send(getTopic(), getArgs(0, List.of(payload, env, prefs)));
            }

            @Override
            public void showScanReport(@NotNull ScanReport report) {
                eventBroker.send(getTopic(), getArgs(1, List.of(report)));
            }

            @Override
            public void scanLastOperation() {
                eventBroker.send(getTopic(), getArgs(2, Collections.emptyList()));
            }

            @Override
            public void showOperationResponse(@NotNull TryItResponse payload) {
                eventBroker.send(getTopic(), getArgs(3, List.of(payload)));
            }

            @Override
            public void showOperationError(@NotNull TryItError payload) {
                eventBroker.send(getTopic(), getArgs(4, List.of(payload)));
            }
        };
    }
}
