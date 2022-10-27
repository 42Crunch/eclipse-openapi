package com.xliic.openapi.editor;

import static com.xliic.core.codeInsight.completion.CompletionProposal.DQ;
import static com.xliic.core.codeInsight.completion.CompletionProposal.LF;
import static com.xliic.core.codeInsight.completion.CompletionProposal.SQ;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.CompletionContributor;
import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionProvider;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.ElementPattern;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;

import static com.xliic.core.codeInsight.completion.CompletionProposal.NS;

public class OpenAPIContentAssistProcessor extends CompletionContributor {

    private static final Pattern JSON_REGEX = Pattern.compile("^ *\"\\$ref\" *: *\".*$");
    private static final Pattern YAML_REGEX = Pattern.compile("^ *\\$ref *: *[\"'].*$");
    private static final Pattern YAML_DQ_REGEX = Pattern.compile("^ *\"\\$ref\" *: *[\"'].*$");
    private static final Pattern YAML_SQ_REGEX = Pattern.compile("^ *\'\\$ref\' *: *[\"'].*$");

    @SuppressWarnings("serial")
    private static final Map<Character, List<Pattern>> JSON_TRIGGER_CHARS = new HashMap<>() {{
        put(DQ, Arrays.asList(JSON_REGEX));
    }};

    @SuppressWarnings("serial")
    private static final Map<Character, List<Pattern>> YAML_TRIGGER_CHARS = new HashMap<>() {{
        put(DQ, Arrays.asList(YAML_DQ_REGEX));
        put(SQ, Arrays.asList(YAML_SQ_REGEX));
        put(LF, Arrays.asList(YAML_REGEX));
    }};

    private static final ElementPattern PATTERN = new ElementPattern() {
        @Override
        public boolean accepts(@NotNull CompletionParameters parameters) {
            VirtualFile file = parameters.getFile();
            OpenApiFileType type = OpenApiUtils.getFileType(parameters.getFile().getPath());
            if (type == OpenApiFileType.Unsupported) {
                return false;
            }
            ASTService astService = ASTService.getInstance(parameters.getProject());
            if (!astService.isKnownOpenAPIFile(file.getPath())) {
                return false;
            }
            if (type == OpenApiFileType.Json) {
                return accepts(parameters, JSON_TRIGGER_CHARS);
            } else if (type == OpenApiFileType.Yaml) {
                return accepts(parameters, YAML_TRIGGER_CHARS);
            }
            return false;
        }

        @Override
        public String getPrefix(String fragment) {
            int i = fragment.indexOf(NS);
            if (i > 0) {
                return fragment.substring(i);
            }
            i = fragment.lastIndexOf(DQ);
            return i > 0 ? fragment.substring(i + 1) : null;
        }
    };

    public OpenAPIContentAssistProcessor() {
        super("\"#", PATTERN, new CompletionProvider() {
            @Override
            public void addCompletions(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
                Node root = parameters.getRoot();
                if (root != null && parameters.getVersion() != OpenApiVersion.Unknown) {
                    Node target = root.findNodeAtOffset(parameters.getOffset());
                    if (target != null && target.isScalar() && OpenApiUtils.REF.equals(target.getKey())) {
                        parameters.setTarget(target);
                        CompletionHelper.updateResultSet(parameters, resultSet);
                    }
                }
            }
        });
    }
}