package com.xliic.openapi.services;

import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.OpenApiBundle;
import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.services.api.ISnippetService;
import com.xliic.openapi.snippets.Snippet;
import com.xliic.openapi.snippets.SnippetIDs;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public final class SnippetService  implements ISnippetService, Disposable {

    private final List<Snippet> snippets = new LinkedList<>();;
    private final Map<String, Snippet> snippetsMap = new HashMap<>();

    public void load() {

        // Version 3
        snippets.add(new Snippet(SnippetIDs.PATH, OpenApiBundle.message("openapi.path.add")));
        snippets.add(new Snippet(SnippetIDs.PATH_YAML, OpenApiBundle.message("openapi.path.add")));

        snippets.add(new Snippet(SnippetIDs.SERVER, OpenApiBundle.message("openapi.server.add")));
        snippets.add(new Snippet(SnippetIDs.SERVER_YAML, OpenApiBundle.message("openapi.server.add")));

        snippets.add(new Snippet(SnippetIDs.SECURITY, OpenApiBundle.message("openapi.security.add")));
        snippets.add(new Snippet(SnippetIDs.SECURITY_YAML, OpenApiBundle.message("openapi.security.add")));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SCHEMA, OpenApiBundle.message("openapi.components.schema.add"), OpenApiPanelKeys.COMPONENTS_SCHEMAS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SCHEMA_YAML, OpenApiBundle.message("openapi.components.schema.add"), OpenApiPanelKeys.COMPONENTS_SCHEMAS));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_PARAMETER, OpenApiBundle.message("openapi.components.parameter.add"), OpenApiPanelKeys.PARAMETERS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_PARAMETER_YAML, OpenApiBundle.message("openapi.components.parameter.add"), OpenApiPanelKeys.PARAMETERS));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_RESPONSE, OpenApiBundle.message("openapi.components.response.add"), OpenApiPanelKeys.RESPONSES));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_RESPONSE_YAML, OpenApiBundle.message("openapi.components.response.add"), OpenApiPanelKeys.RESPONSES));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_API_KEY, OpenApiBundle.message("openapi.components.security.schema.apikey.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_API_KEY_YAML, OpenApiBundle.message("openapi.components.security.schema.apikey.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_BASIC, OpenApiBundle.message("openapi.components.security.schema.basic.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_BASIC_YAML, OpenApiBundle.message("openapi.components.security.schema.basic.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_JWT, OpenApiBundle.message("openapi.components.security.schema.jwt.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_JWT_YAML, OpenApiBundle.message("openapi.components.security.schema.jwt.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));

        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_OAUTH2_IMPLICIT, OpenApiBundle.message("openapi.components.security.schema.oauth2.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));
        snippets.add(new Snippet(SnippetIDs.COMPONENTS_SECURITY_OAUTH2_IMPLICIT_YAML, OpenApiBundle.message("openapi.components.security.schema.oauth2.add"), OpenApiPanelKeys.COMPONENTS_SECURITY_SCHEMAS));

        // Version 2
        snippets.add(new Snippet(SnippetIDs.DEFINITION_OBJECT, OpenApiBundle.message("openapi.definition.object.add")));
        snippets.add(new Snippet(SnippetIDs.DEFINITION_OBJECT_YAML, OpenApiBundle.message("openapi.definition.object.add")));

        snippets.add(new Snippet(SnippetIDs.RESPONSE, OpenApiBundle.message("openapi.response.object.add")));
        snippets.add(new Snippet(SnippetIDs.RESPONSE_YAML, OpenApiBundle.message("openapi.response.object.add")));

        snippets.add(new Snippet(SnippetIDs.INFO, OpenApiBundle.message("openapi.info.entry.add")));
        snippets.add(new Snippet(SnippetIDs.INFO_YAML, OpenApiBundle.message("openapi.info.entry.add")));

        snippets.add(new Snippet(SnippetIDs.BASE_PATH, OpenApiBundle.message("openapi.base.path.entry.add")));
        snippets.add(new Snippet(SnippetIDs.BASE_PATH_YAML, OpenApiBundle.message("openapi.base.path.entry.add")));

        snippets.add(new Snippet(SnippetIDs.HOST, OpenApiBundle.message("openapi.host.entry.add")));
        snippets.add(new Snippet(SnippetIDs.HOST_YAML, OpenApiBundle.message("openapi.host.entry.add")));

        snippets.add(new Snippet(SnippetIDs.OPERATION, OpenApiBundle.message("openapi.operation.add")));
        snippets.add(new Snippet(SnippetIDs.OPERATION_YAML, OpenApiBundle.message("openapi.operation.add")));

        snippets.add(new Snippet(SnippetIDs.PARAMETER_BODY, OpenApiBundle.message("openapi.parameter.body.add")));
        snippets.add(new Snippet(SnippetIDs.PARAMETER_BODY_YAML, OpenApiBundle.message("openapi.parameter.body.add")));

        snippets.add(new Snippet(SnippetIDs.PARAMETER_PATH, OpenApiBundle.message("openapi.parameter.path.add")));
        snippets.add(new Snippet(SnippetIDs.PARAMETER_PATH_YAML, OpenApiBundle.message("openapi.parameter.path.add")));

        snippets.add(new Snippet(SnippetIDs.PARAMETER_OTHER, OpenApiBundle.message("openapi.parameter.other.add")));
        snippets.add(new Snippet(SnippetIDs.PARAMETER_OTHER_YAML, OpenApiBundle.message("openapi.parameter.other.add")));

        snippets.add(new Snippet(SnippetIDs.SECURITY_API, OpenApiBundle.message("openapi.security.apikey.add")));
        snippets.add(new Snippet(SnippetIDs.SECURITY_API_YAML, OpenApiBundle.message("openapi.security.apikey.add")));

        snippets.add(new Snippet(SnippetIDs.SECURITY_BASIC, OpenApiBundle.message("openapi.security.basic.add")));
        snippets.add(new Snippet(SnippetIDs.SECURITY_BASIC_YAML, OpenApiBundle.message("openapi.security.basic.add")));

        snippets.add(new Snippet(SnippetIDs.SECURITY_OAUTH2_IMPLICIT, OpenApiBundle.message("openapi.security.oauth2.add")));
        snippets.add(new Snippet(SnippetIDs.SECURITY_OAUTH2_IMPLICIT_YAML, OpenApiBundle.message("openapi.security.oauth2.add")));

        for (Snippet s : snippets) {
            snippetsMap.put(s.getId(), s);
        }
    }

    public Snippet get(@NotNull String id) {
        return snippetsMap.get(id);
    }

    public static SnippetService getInstance() {
        return ApplicationManager.getApplication().getService(SnippetService.class);
    }

    @Override
    public void dispose() {
    	Project.getInstance().dispose();
    	snippets.clear();
        snippetsMap.clear();
    }
}
