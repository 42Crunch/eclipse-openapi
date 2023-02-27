package com.xliic.openapi.platform.dictionary.completion;

import java.util.List;
import java.util.regex.Pattern;

import org.eclipse.jface.text.BadLocationException;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.completion.CompletionContributor;
import com.xliic.core.codeInsight.completion.CompletionParameters;
import com.xliic.core.codeInsight.completion.CompletionProvider;
import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.codeInsight.completion.ElementPattern;
import com.xliic.core.codeInsight.lookup.LookupElement;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.utils.Utils;

public class DictionaryContentAssistProcessor extends CompletionContributor {

    private static final Pattern OAS_REGEX = Pattern.compile("^(swagger *:|(openapi *: *3\\.0\\.\\d(-.+)?))");

    private static final ElementPattern PATTERN = new ElementPattern() {

        private final Pattern JSON_REGEX = Pattern.compile("^[ \t]*\"format\"[ \t]*:[ \t]*\".*$");
        private final Pattern YAML_REGEX = Pattern.compile("^[ ]+[\"']{0,1}format[\"']{0,1}[ \t]*:[ \t]+[\"']{0,1}.*$");

        @Override
        public boolean accepts(@NotNull CompletionParameters parameters) {
            if (!PlatformConnection.isPlatformIntegrationEnabled()) {
                return false;
            }
            OpenApiFileType type = Utils.getFileType(parameters.getFile().getPath());
            DictionaryService ddService = DictionaryService.getInstance(parameters.getProject());
            List<DictionaryElement> formats = ddService.getAllFormats(type == OpenApiFileType.Json);
            if (formats.isEmpty()) {
                return false;
            }
            boolean status = false;
            if (type == OpenApiFileType.Json) {
                status = accepts(parameters, List.of(JSON_REGEX));
            } else if (type == OpenApiFileType.Yaml) {
                status = accepts(parameters, List.of(YAML_REGEX));
                if (status) {
                    ASTService astService = ASTService.getInstance(parameters.getProject());
                    if (astService.getOpenAPIVersion(parameters.getFile().getPath()) == OpenApiVersion.Unknown) {
                        // If version is unknown the file may be invalid due to typing special symbols like : or -
                        // It is fine but in this case we can't parse it to know the version
                        try {
                            status = OAS_REGEX.matcher(parameters.getDocument().getText(0, 256)).find();
                        } catch (BadLocationException e) {
                            status = false;
                        }
                    }
                }
            }
            if (!status) {
                return false;
            }
            String prefix = parameters.getPrefix();
            for (DictionaryElement item : formats) {
                String dStr = LookupElement.getDisplayString(item.getElement(), item.getPresentableText());
                if (CompletionResultSet.isSubstringFoundOrderedInString(prefix, dStr)) {
                    parameters.setUseRunnable(false);
                    return true;
                }
            }
            return false;
        }
    };

    public DictionaryContentAssistProcessor() {
        super("date-imuronlhspv46fc:", PATTERN, new CompletionProvider() {
            @Override
            public void addCompletions(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet) {
                DictionaryCompletionHelper.updateResultSet(parameters, resultSet);
            }
        });
    }

    @Override
    protected boolean enableCompletionInFile(@NotNull Project project, @NotNull VirtualFile file) {
        OpenApiFileType type = Utils.getFileType(file);
        if (type == OpenApiFileType.Unsupported) {
            return false;
        }
        if (type == OpenApiFileType.Json) {
            return ASTService.getInstance(project).getOpenAPIVersion(file.getPath()) != OpenApiVersion.Unknown;
        }
        return true;
    }
}