package com.xliic.openapi.platform.dictionary;

import static com.xliic.openapi.platform.PlatformConnection.isPlatformIntegrationEnabled;
import static com.xliic.openapi.platform.dictionary.types.DataFormat.FORMAT;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.DfsHandler;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.DictionaryService;

public class DictionaryDfsHandler extends DfsHandler<Node> {

    @NotNull
    private final Project project;
    private boolean runDfs;

    public DictionaryDfsHandler(@NotNull Project project) {
        this.project = project;
        runDfs = false;
    }

    @Override
    public void init(@NotNull String fileName, @NotNull OpenApiVersion version) {
        super.init(fileName, version);
        runDfs = isPlatformIntegrationEnabled() && version != OpenApiVersion.Unknown
                && !DictionaryService.getInstance(project).getDictionaries().isEmpty();
    }

    @Override
    public boolean visit(@NotNull Node node) {
        if (!runDfs) {
            return false;
        }
        if (FORMAT.equals(node.getKey()) && node.getTypedValue() instanceof String && !isNodeInExample(node.getJsonPointer())) {
            data.add(node);
        }
        return true;
    }

    @Override
    public void finish(boolean success) {
        DictionaryService ddService = DictionaryService.getInstance(project);
        if (success) {
            if (data.isEmpty()) {
                ddService.removeFormatNodes(fileName);
            } else {
                ddService.setFormatNodes(fileName, data);
            }
        }
        if (!success || version == OpenApiVersion.Unknown) {
            ddService.removeFormatNodes(fileName);
        }
    }

    private static boolean isNodeInExample(String pointer) {
        return pointer.contains("/example/") || pointer.contains("/examples/") || pointer.contains("/x-42c-sample/");
    }
}