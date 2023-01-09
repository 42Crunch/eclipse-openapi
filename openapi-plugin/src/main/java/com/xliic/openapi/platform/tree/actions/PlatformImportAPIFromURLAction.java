package com.xliic.openapi.platform.tree.actions;

import java.io.IOException;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.MsgUtils;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.platform.tree.form.PlatformURLChooser;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class PlatformImportAPIFromURLAction extends AnJAction implements DumbAware {

    private static final String TITLE = "Import API from URL";
    private static final String ERROR_JSON_INVALID = "Not a valid JSON document";
    private static final String ERROR_JSON_OPENAPI_UNKNOWN = "Not a valid OpenAPI version";

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    private final Project project;
    private final Tree tree;
    private final String collectionId;

    public PlatformImportAPIFromURLAction(@NotNull Project project, @NotNull Tree tree, @NotNull String collectionId) {
        super("Import API from URL", "Import API from URL", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent event) {
        final PlatformURLChooser chooser = new PlatformURLChooser(project, TITLE, "");
        if (chooser.showAndGet()) {
            String href = chooser.getValue();
            if (!StringUtils.isEmpty(href)) {
                Request request = new Request.Builder().url(href).build();
                try (Response response = client.newCall(request).execute()) {
                    ResponseBody body = response.body();
                    if (body != null) {
                        String text = body.string().trim();
                        if (StringUtils.isEmpty(text) || !(text.startsWith("{") && text.endsWith("}"))) {
                            MsgUtils.error(project, ERROR_JSON_INVALID, true);
                            return;
                        }
                        try {
                            new Gson().fromJson(text, Object.class);
                        } catch (JsonSyntaxException ex) {
                            MsgUtils.error(project, ERROR_JSON_INVALID, true);
                            return;
                        }
                        Node root = OpenApiUtils.getJsonAST(text);
                        if (root == null) {
                            MsgUtils.error(project, ERROR_JSON_INVALID, true);
                            return;
                        }
                        OpenApiVersion version = OpenApiUtils.getOpenAPIVersion(root);
                        if (version == OpenApiVersion.Unknown) {
                            MsgUtils.error(project, ERROR_JSON_OPENAPI_UNKNOWN, true);
                            return;
                        }
                        String name = "";
                        Node titleNode = root.find("/info/title");
                        if (titleNode != null) {
                            name = titleNode.getValue();
                        }
                        if (StringUtils.isEmpty(name)) {
                            name = OpenApiUtils.getFileNameFromURL(href, "defaultAPI");
                        }
                        PlatformAPIs.createAPI(collectionId, name, text, new PlatformImportAPICallback(project, tree, collectionId, name));
                    }
                } catch (IOException e) {
                    MsgUtils.error(project, e.getMessage(), true);
                }
            }
        }
    }
}
