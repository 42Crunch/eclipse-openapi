package com.xliic.openapi.graphql.task;

import static com.xliic.openapi.services.AuditService.RUNNING_SECURITY_AUDIT;

import java.util.Base64;
import java.util.Objects;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.diagnostic.Logger;
import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.graphql.GraphQlService;
import com.xliic.openapi.graphql.GraphQlUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformReportPuller;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.platform.tree.node.PlatformAPI;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.Utils;

import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;

public class PlatformGraphQlAuditTask extends Task.Backgroundable {

    private static final int PAUSE = 1000;
    private static final int PULL_REPORT_DURATION = 60000;
    private static final String ERROR_MSG = "Unexpected error when trying to audit API using the platform: ";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final GraphQlService.GraphQlCallback callback;

    public PlatformGraphQlAuditTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull GraphQlService.GraphQlCallback callback) {
        super(project, RUNNING_SECURITY_AUDIT, false);
        this.project = project;
        this.file = file;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        String text = Utils.getTextFromFile(file.getPath(), true);
        if (text == null) {
            callback.reject("Failed to get text");
            return;
        }
        String apiId = null;
        String collectionId = null;
        try {
            AuditService.getInstance(project).downloadArticles(progress);
            collectionId = ScanUtils.findOrCreateTempCollection();
            PlatformAPI api = GraphQlUtils.createTempApi(collectionId, text);
            apiId = api.getId();
            Node fullReport = new PlatformReportPuller(project, apiId, PAUSE, PULL_REPORT_DURATION, true).get();
            String data = fullReport.getChildValue("report");
            if (data == null) {
                callback.reject(ERROR_MSG + "format is not valid");
                return;
            }
            Node report = Utils.getJsonAST(new String(Base64.getDecoder().decode(data)));
            SchemaParser schemaParser = new SchemaParser();
            TypeDefinitionRegistry typeDefinitionRegistry = schemaParser.parse(text);
            callback.complete(Objects.requireNonNull(report), typeDefinitionRegistry);
        } catch (Exception e) {
            if (e instanceof AuditService.KdbException) {
                callback.reject(e.getMessage());
            } else {
                String msg = e.getMessage();
                callback.reject(msg.equals(ScanUtils.LIMIT_REACHED_MSG) ? msg : ERROR_MSG + msg);
            }
            Logger.getInstance(PlatformGraphQlAuditTask.class).info(e);
        } finally {
            if (apiId != null) {
                ScanUtils.deleteAPI(apiId);
            }
            if (collectionId != null) {
                ScanUtils.clearTempApis(collectionId);
            }
            progress.cancel();
        }
    }
}
