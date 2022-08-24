package com.xliic.core.util.messages;

import java.util.List;

import org.eclipse.e4.core.services.events.IEventBroker;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import com.xliic.openapi.topic.AuditListener;

public class TopicAuditListener<L> extends Topic<L> {

    public TopicAuditListener(@NotNull Class<L> listenerClass, @NotNull BroadcastDirection broadcastDirection) {
        super(listenerClass, broadcastDirection);
    }

    @Override
    @SuppressWarnings("unchecked")
    public <T> void dispatch(int funcId, @NotNull Object data, @NotNull T handler) {
        AuditListener listener = (AuditListener) handler;
        List<Object> args = (List<Object>) data;
        if (funcId == 0) {
            listener.handleAuditReportClean((Audit) args.get(0));
        } else if (funcId == 1) {
            listener.handleAuditReportReady((VirtualFile) args.get(0));
        } else if (funcId == 2) {
            listener.handleViewDetails((VirtualFile) args.get(0), (List<Issue>) args.get(1));
        } else if (funcId == 3) {
            listener.handleIssuesFixed((List<Issue>) args.get(0));
        }
    }

    @Override
    @NotNull
    @SuppressWarnings("unchecked")
    public <T> T syncPublisher(@NotNull IEventBroker eventBroker) {
        return (T) new AuditListener() {

            @Override
            public void handleAuditReportClean(@NotNull Audit auditReport) {
                eventBroker.send(getTopic(), getArgs(0, List.of(auditReport)));
            }

            @Override
            public void handleAuditReportReady(@NotNull VirtualFile file) {
                eventBroker.send(getTopic(), getArgs(1, List.of(file)));
            }

            @Override
            public void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues) {
                eventBroker.send(getTopic(), getArgs(2, List.of(file, issues)));
            }

            @Override
            public void handleIssuesFixed(@NotNull List<Issue> issues) {
                eventBroker.send(getTopic(), getArgs(3, List.of(issues)));
            }
        };
    }
}
