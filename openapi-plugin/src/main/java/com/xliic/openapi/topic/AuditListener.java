package com.xliic.openapi.topic;

import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.messages.Topic;
import com.xliic.core.util.messages.TopicAuditListener;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.Issue;

public interface AuditListener {

    Topic<AuditListener> TOPIC = new TopicAuditListener<>(AuditListener.class, Topic.BroadcastDirection.NONE);

    default void handleAuditReportClean(@NotNull Audit auditReport) {}

    default void handleAuditReportReady(@NotNull VirtualFile file) {}

    default void handleViewDetails(@NotNull VirtualFile file, @NotNull List<Issue> issues) {}

    default void handleIssuesFixed(@NotNull List<Issue> issues) {}
}
