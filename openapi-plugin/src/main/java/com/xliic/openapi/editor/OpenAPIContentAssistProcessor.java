package com.xliic.openapi.editor;

import java.util.List;
import java.util.regex.Pattern;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.CompletionContributor;
import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionProvider;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.ElementPattern;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.Utils;

public class OpenAPIContentAssistProcessor extends CompletionContributor {

    private static final ElementPattern PATTERN = new ElementPattern() {

        private final Pattern JSON_REGEX = Pattern.compile("^[ \t]*\"\\$ref\"[ \t]*:[ \t]*\".*$");
        private final Pattern YAML_REGEX = Pattern.compile("^[ \t]*[\"']{0,1}\\$ref[\"']{0,1}[ \t]*:[ \t]*[\"'].*$");

        @Override
        public boolean accepts(@NotNull CompletionParameters parameters) {
            OpenApiFileType type = Utils.getFileType(parameters.getFile().getPath());
            if (type == OpenApiFileType.Json) {
                return accepts(parameters, List.of(JSON_REGEX));
            } else if (type == OpenApiFileType.Yaml) {
                return accepts(parameters, List.of(YAML_REGEX));
            }
            return false;
        }
    };

    public OpenAPIContentAssistProcessor() {
        super("#/", PATTERN, new CompletionProvider() {
            @Override
            public void addCompletions(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
                Node root = parameters.getRoot();
                if (root != null && parameters.getVersion() != OpenApiVersion.Unknown) {
                    Node target = root.findNodeAtOffset(parameters.getOffset());
                    if (target != null && target.isScalar() && Utils.REF.equals(target.getKey())) {
                        parameters.setTarget(target);
                        CompletionHelper.updateResultSet(parameters, resultSet);
                    }
                }
            }
        });
    }

    @Override
    protected boolean enableCompletionInFile(@NotNull Project project, @NotNull VirtualFile file) {
        if (Utils.getFileType(file) == OpenApiFileType.Unsupported) {
            return false;
        }
        return ASTService.getInstance(project).getOpenAPIVersion(file.getPath()) != OpenApiVersion.Unknown;
    }
}