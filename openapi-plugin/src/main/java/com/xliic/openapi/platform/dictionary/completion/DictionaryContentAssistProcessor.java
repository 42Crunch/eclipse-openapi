package com.xliic.openapi.platform.dictionary.completion;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.eclipse.jface.text.BadLocationException;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.CompletionContributor;
import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionProvider;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.ElementPattern;
import com.xliic.core.editor.Document;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.services.DictionaryService;

import static com.xliic.core.codeInsight.completion.CompletionProposal.*;

public class DictionaryContentAssistProcessor extends CompletionContributor {

    private static final Pattern JSON_REGEX = Pattern.compile("^ *\"format\" *: *\"o:.*$");

    // Value is single or double quoted
    private static final Pattern YAML_DQ_NP_REGEX = Pattern.compile("^ *\"format\" *: *[\"']o:.*$");
    private static final Pattern YAML_SQ_NP_REGEX = Pattern.compile("^ *'format' *: *[\"']o:.*$");
    private static final Pattern YAML_PL_NP_REGEX = Pattern.compile("^ *format *: *[\"']o:.*$");

    // Value is plain
    private static final Pattern YAML_DQ_PL_REGEX = Pattern.compile("^ *\"format\" *: *o:.*$");
    private static final Pattern YAML_SQ_PL_REGEX = Pattern.compile("^ *'format' *: *o:.*$");
    private static final Pattern YAML_PL_PL_REGEX = Pattern.compile("^ *format *: *o:.*$");

    private static final Pattern OAS_REGEX = Pattern.compile("^(swagger *:|(openapi *: *3\\.0\\.\\d(-.+)?))");

    @SuppressWarnings("serial")
    private static final Map<Character, List<Pattern>> JSON_TRIGGER_CHARS = new HashMap<>() {{
        put(DQ, Arrays.asList(JSON_REGEX));
    }};

    @SuppressWarnings("serial")
    private static final Map<Character, List<Pattern>> YAML_TRIGGER_CHARS = new HashMap<>() {{
        put(DQ, Arrays.asList(YAML_DQ_PL_REGEX, YAML_DQ_NP_REGEX));
        put(SQ, Arrays.asList(YAML_SQ_PL_REGEX, YAML_SQ_NP_REGEX));
        put(LF, Arrays.asList(YAML_PL_PL_REGEX, YAML_PL_NP_REGEX));
    }};

    private static final ElementPattern PATTERN = new ElementPattern() {

        @Override
        public boolean accepts(@NotNull CompletionParameters parameters) {
            if (!PlatformConnection.isPlatformUsed()) {
                return false;
            }
            DictionaryService ddService = DictionaryService.getInstance(parameters.getProject());
            if (ddService.getAllFormats().isEmpty()) {
                return false;
            }
            OpenApiFileType type = OpenApiUtils.getFileType(parameters.getFile().getPath());
            if (type == OpenApiFileType.Json) {
                return accepts(parameters, JSON_TRIGGER_CHARS);
            } else if (type == OpenApiFileType.Yaml) {
                return accepts(parameters, YAML_TRIGGER_CHARS);
            }
            return false;
        }

        @Override
        public String getPrefix(String fragment) {
            int i = fragment.indexOf("o:");
            if (i > 0) {
                return fragment.substring(i);
            }
            return null;
        }
    };

    public DictionaryContentAssistProcessor() {
        super(":", PATTERN, new CompletionProvider() {
            @Override
            public void addCompletions(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
                Node root = parameters.getRoot();
                if (root == null) {
                    OpenApiFileType type = OpenApiUtils.getFileType(parameters.getFile().getPath());
                    if (type == OpenApiFileType.Yaml && isPlainPattern(parameters.getPattern())) {
                        try {
                            int offset = parameters.getOffset();
                            Document document = parameters.getDocument();
                            if (document.getChar(offset - 1) == ':') {
                                String text = document.getText();
                                if (OAS_REGEX.matcher(text).find()) {
                                    DictionaryCompletionHelper.updateResultSet(parameters, resultSet);
                                }
                            }
                        } catch (BadLocationException e) {
                        }
                    }
                } else if (parameters.getVersion() != OpenApiVersion.Unknown) {
                    Node target = root.findNodeAtOffset(parameters.getOffset());
                    if (target != null && target.isScalar() && "format".equals(target.getKey())) {
                        DictionaryCompletionHelper.updateResultSet(parameters, resultSet);
                    }
                }
            }
        });
    }

    private static boolean isPlainPattern(Pattern pattern) {
        return pattern == YAML_DQ_PL_REGEX || pattern == YAML_SQ_PL_REGEX || pattern == YAML_PL_PL_REGEX;
    }
}