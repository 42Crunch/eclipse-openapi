package com.xliic.core.util.messages;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.preferences.Preferences;
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
            listener.showScanConfOperation((String) args.get(0), (ScanConfOperation) args.get(1), (Environment) args.get(2), (Preferences) args.get(3));
        } else if (funcId == 1) {
            listener.showScanReport((String) args.get(0), (ScanReport) args.get(1));
        } else if (funcId == 2) {
            listener.showOperationResponse((String) args.get(0), (TryItResponse) args.get(1));
        } else if (funcId == 3) {
            listener.showOperationError((String) args.get(0), (TryItError) args.get(1));
        } else if (funcId == 4) {
            listener.showGeneralError((String) args.get(0), (String) args.get(1), (String) args.get(2), (String) args.get(3));
        } else if (funcId == 5) {
            listener.startScan((String) args.get(0));
        } else if (funcId == 6) {
            listener.sendLogMessage((String) args.get(0), (String) args.get(1), (String) args.get(2));
        }
    }

    @SuppressWarnings("unchecked")
    @Override
    public <T> @NotNull T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new ScanListener() {

            @Override
            public void showScanConfOperation(@NotNull String toId, @NotNull ScanConfOperation payload, @NotNull Environment env, @NotNull Preferences prefs) {
                eventBroker.send(getTopic(), getArgs(0, List.of(toId, payload, env, prefs)));
            }

            @Override
            public void showScanReport(@NotNull String toId, @NotNull ScanReport report) {
                eventBroker.send(getTopic(), getArgs(1, List.of(toId, report)));
            }

            @Override
            public void showOperationResponse(@NotNull String toId, @NotNull TryItResponse payload) {
                eventBroker.send(getTopic(), getArgs(2, List.of(toId, payload)));
            }

            @Override
            public void showOperationError(@NotNull String toId, @NotNull TryItError payload) {
                eventBroker.send(getTopic(), getArgs(3, List.of(toId ,payload)));
            }

            @Override
            public void showGeneralError(@NotNull String toId, @NotNull String message, @Nullable String code, @Nullable String details) {
                // List.of(...) does not accept null inputs
                List<Object> args = new LinkedList<>();
                args.add(toId);
                args.add(message);
                args.add(code);
                args.add(details);
                eventBroker.send(getTopic(), getArgs(4, args));
            }

            @Override
            public void startScan(@NotNull String toId) {
                eventBroker.send(getTopic(), getArgs(5, List.of(toId)));
            }

            @Override
            public void sendLogMessage(@NotNull String toId, @NotNull String level, @NotNull String message) {
                eventBroker.send(getTopic(), getArgs(6, List.of(toId, level, message)));
            }
        };
    }
}
