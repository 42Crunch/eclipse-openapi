package com.xliic.openapi.platform.tree.actions;

import static com.xliic.openapi.tags.TagsUtils.getMandatoryTagIds;

import java.util.Set;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.google.gson.Gson;
import com.google.gson.JsonSyntaxException;
import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.platform.callback.PlatformImportAPICallback;
import com.xliic.openapi.platform.tree.form.PlatformURLChooser;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class PlatformImportAPIFromURLAction extends AnJAction implements DumbAware {

    private static final String TITLE = "Import API from URL";
    private static final String ERROR_JSON_INVALID = "Not a valid JSON document";
    private static final String ERROR_JSON_OPENAPI_UNKNOWN = "Not a valid OpenAPI version";

    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    @NotNull
    private final Project project;
    @NotNull
    private final Tree tree;
    @NotNull
    private final String collectionId;
    @NotNull
    private final DefaultMutableTreeNode subRootDn;

    public PlatformImportAPIFromURLAction(@NotNull Project project,
                                          @NotNull Tree tree,
                                          @NotNull String collectionId,
                                          @NotNull DefaultMutableTreeNode subRootDn) {
        super("Import API from URL", "Import API from URL", null);
        this.project = project;
        this.tree = tree;
        this.collectionId = collectionId;
        this.subRootDn = subRootDn;
    }
    
    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
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
                        Node root = Utils.getJsonAST(text);
                        if (root == null) {
                            MsgUtils.error(project, ERROR_JSON_INVALID, true);
                            return;
                        }
                        OpenApiVersion version = Utils.getOpenAPIVersion(root);
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
                            name = Utils.getFileNameFromURL(href, "defaultAPI");
                        }
                        Set<String> tagIds = getMandatoryTagIds();
                        PlatformAPIs.createAPI(collectionId, name, text, tagIds,
                                new PlatformImportAPICallback(project, tree, collectionId, name, subRootDn));
                    }
                } catch (Exception e) {
                    MsgUtils.error(project, e.getMessage(), true);
                }
            }
        }
    }
}
