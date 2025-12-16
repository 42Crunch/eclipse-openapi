package com.xliic.openapi.graphql;

import static com.xliic.openapi.ToolWindowId.OPEN_API_HTML_REPORT;
import static com.xliic.openapi.settings.Settings.Audit.AUDIT_RUNTIME_CLI;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.progress.ProgressManager;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.services.IGraphQlService;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.graphql.task.GraphQlCliTask;
import com.xliic.openapi.graphql.task.PlatformGraphQlAuditTask;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.AuditListener;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.WindowUtils;

import graphql.schema.idl.TypeDefinitionRegistry;

public class GraphQlService implements IGraphQlService, Disposable {

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, TypeDefinitionRegistry> cache = new HashMap<>();
    @NotNull
    private final Map<String, Boolean> pendingAudits = new HashMap<>();

    public interface GraphQlCallback {
        void complete(@NotNull Node report, @NotNull TypeDefinitionRegistry reg);
        void reject(@NotNull String error);
    }

    public GraphQlService(@NotNull Project project) {
        this.project = project;
    }

    public static GraphQlService getInstance(@NotNull Project project) {
        return project.getService(GraphQlService.class);
    }

    public void actionPerformed(@NotNull Project project, @NotNull VirtualFile file, @NotNull Credentials.Type type) {
        runCliAudit(project, file, type);
    }

    public void runCliAudit(@NotNull Project project, @NotNull VirtualFile file, @NotNull Credentials.Type type) {
        if (isGraphQlAuditAlreadyInProgress(file)) {
            MsgUtils.notifyInfo(project, "Graph QL audit API of " + file.getPath() + " is in progress");
            return;
        }
        final GraphQlCallback callback = new GraphQlCallback() {

            @Override
            public void complete(@NotNull Node report, @NotNull TypeDefinitionRegistry reg) {
                pendingAudits.remove(file.getPath());
                cache.put(file.getPath(), reg);
                AuditService.getInstance(project).processAuditReport(file, report, null, null);
            }

            @Override
            public void reject(@NotNull String error) {
                pendingAudits.remove(file.getPath());
                ApplicationManager.getApplication().invokeLater(() ->
                        project.getMessageBus().syncPublisher(AuditListener.TOPIC).cancelAudit());
                MsgUtils.notifyError(project, error);
            }
        };
        if (type == Credentials.Type.AnondToken) {
            CliService.getInstance().downloadOrUpdateIfNecessary(project, new CliService.Callback() {
                @Override
                public void complete(@NotNull String cliPath) {
                    startAuditTask(file, new GraphQlCliTask(project, file, callback));
                }
                @Override
                public void reject(@NotNull String error) {
                    callback.reject(error);
                }
                @Override
                public void cancel() {
                    pendingAudits.remove(file.getPath());
                    MsgUtils.notifyInfo(project, "42Crunch API Security Testing Binary is required to run Audit.");
                }
            }, true);
        } else if (type == Credentials.Type.ApiToken) {
            String auditRuntime = SettingsService.getInstance().getValue(Settings.Audit.AUDIT_RUNTIME);
            if (Objects.equals(auditRuntime, AUDIT_RUNTIME_CLI)) {
                startAuditTask(file, new GraphQlCliTask(project, file, callback));
            } else {
                startAuditTask(file, new PlatformGraphQlAuditTask(project, file, callback));            }
        }
    }

    private void startAuditTask(VirtualFile file, Task.Backgroundable task) {
        ApplicationManager.getApplication().invokeLater(() -> {
            AuditService.getInstance(project).cleanAuditReport(file);
            WindowUtils.activateToolWindow(project, OPEN_API_HTML_REPORT, () -> {
                project.getMessageBus().syncPublisher(AuditListener.TOPIC).startAudit();
                pendingAudits.put(file.getPath(), Boolean.TRUE);
                ProgressManager.getInstance().run(task);
            });
        });
    }

    @Nullable
    public TypeDefinitionRegistry getTypeDefinitionRegistry(@NotNull String file) {
        return cache.get(file);
    }

    public boolean isGraphQlAuditAlreadyInProgress(@NotNull VirtualFile file) {
        return Boolean.TRUE.equals(pendingAudits.get(file.getPath()));
    }

    @Override
    public void dispose() {
        cache.clear();
        pendingAudits.clear();
    }
}
