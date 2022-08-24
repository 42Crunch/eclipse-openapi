package com.xliic.openapi.tree;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;
import com.xliic.openapi.tree.ui.OpenApiFileTreePanel;
import icons.OpenApiIcons;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.Arrays;
import java.util.List;

import static com.xliic.openapi.OpenApiPanelKeys.*;

public class OpenApiRightMouseClickHandler {

    private final OpenApiFileTreePanel panel;

    public OpenApiRightMouseClickHandler(@NotNull OpenApiFileTreePanel panel) {
        this.panel = panel;
    }

    public void handle(MouseEvent event) {

        Tree tree = panel.getTree();
        Project project = panel.getProject();
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if ((treeNode == null) || (file == null) || TempFileUtils.isExtRefFile(file)) {
            return;
        }
        PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
        if (psiFile == null) {
            return;
        }

        DefaultActionGroup actions = DefaultActionGroup.createPopupGroup(event.getMenu());
        OpenApiVersion version = ASTService.getOpenAPIVersion(panel.getProject(), file);
        BaseNode node = (BaseNode) treeNode.getUserObject();
        QuickFixService quickFixService = QuickFixService.getInstance();

        // Define what snippets to show
        if (node instanceof PanelNode) {
            if (GENERAL.equals(node.getName()) && (version == OpenApiVersion.V3)) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "info", treeNode));
            } else if (PATHS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "path", treeNode));
            } else if (SERVERS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "server", treeNode));
            } else if (SECURITY.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "security", treeNode));
            } else if (COMPONENTS.equals(node.getName())) {
                List<String> ids = Arrays.asList(
                        "componentsSchema", "componentsParameter", "componentsResponse",
                        "componentsSecurityApiKey", "componentsSecurityBasic",
                        "componentsSecurityJwt", "componentsSecurityOauth2Implicit");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            } else if (GENERAL.equals(node.getName()) && (version == OpenApiVersion.V2)) {
                List<String> ids = Arrays.asList("basePath", "host", "info");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            } else if (PARAMETERS.equals(node.getName())) {
                List<String> ids = Arrays.asList("parameterBody", "parameterPath", "parameterOther");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            } else if (RESPONSES.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "response", treeNode));
            } else if (DEFINITIONS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "definitionObject", treeNode));
            } else if (SECURITY_DEFINITIONS.equals(node.getName())) {
                List<String> ids = Arrays.asList("securityApiKey", "securityBasic", "securityOauth2Implicit");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            }
        } else {
            if ((node instanceof SimpleNode) && PATHS.equals(((SimpleNode) node).getParentName())) {
                DefaultActionGroup diffGroup = DefaultActionGroup.createPopupGroup();
                diffGroup.getTemplatePresentation().setIcon(OpenApiIcons.AddSnippet);
                diffGroup.addAll(quickFixService.getSnippetFixActions(psiFile, "operation", treeNode));
                actions.add(diffGroup);
            }
        }
    }
}
