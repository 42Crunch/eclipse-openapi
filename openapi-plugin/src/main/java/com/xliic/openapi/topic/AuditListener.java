package com.xliic.openapi.topic;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicAuditListener;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public interface AuditListener {

    Topic<AuditListener> TOPIC = new TopicAuditListener<>(AuditListener.class, Topic.BroadcastDirection.NONE);

    void handleAuditReportClean(@NotNull Audit auditReport);

    void handleAuditReportReady(@NotNull VirtualFile file);

    void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues);

    void handleIssuesFixed(@NotNull List<Issue> issues);
}
