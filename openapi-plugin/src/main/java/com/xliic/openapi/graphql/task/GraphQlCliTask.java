package com.xliic.openapi.graphql.task;

import com.xliic.core.progress.ProgressIndicator;
import com.xliic.core.progress.Task;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.graphql.GraphQlCliResult;
import com.xliic.openapi.graphql.GraphQlService;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.AuditService;
import com.xliic.openapi.utils.Utils;
import graphql.schema.idl.SchemaParser;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

public class GraphQlCliTask extends Task.Backgroundable {

    private static final String RUNNING_GRAPHQL_AUDIT = "Running graphql audit using 42Crunch API security testing binary";
    private static final String ERROR_MSG = "Unexpected error when trying to audit API: ";

    @NotNull
    private final Project project;
    @NotNull
    private final VirtualFile file;
    @NotNull
    private final GraphQlService.GraphQlCallback callback;

    public GraphQlCliTask(@NotNull Project project, @NotNull VirtualFile file, @NotNull GraphQlService.GraphQlCallback callback) {
        super(project, RUNNING_GRAPHQL_AUDIT, false);
        this.project = project;
        this.file = file;
        this.callback = callback;
    }

    @Override
    public void run(@NotNull ProgressIndicator progress) {
        try {
            String text = Utils.getTextFromFile(file.getPath(), true);
            if (text == null) {
                callback.reject("Failed to get text");
                return;
            }
            GraphQlCliResult result = CliUtils.runGraphQlAuditWithCliBinary(project, text);
            if (result.hasError()) {
                callback.reject("Unexpected error running API Security Testing Binary Audit: " + result);
                return;
            }
            Node report = Utils.getJsonAST(Objects.requireNonNull(result.getReport()));
            SchemaParser schemaParser = new SchemaParser();
            TypeDefinitionRegistry typeDefinitionRegistry = schemaParser.parse(text);
            callback.complete(Objects.requireNonNull(report), typeDefinitionRegistry);
        } catch (Exception e) {
            callback.reject(e instanceof AuditService.KdbException ? e.getMessage() : ERROR_MSG + e);
        } finally {
            progress.cancel();
        }
    }
}
