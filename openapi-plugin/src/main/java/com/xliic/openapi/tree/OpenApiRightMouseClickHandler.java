package com.xliic.openapi.tree;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.OPERATION_ID;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY_DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.SERVERS;

import java.util.Arrays;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;
import com.xliic.openapi.tree.ui.OpenApiFileTreePanel;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.TempFileUtils;
import com.xliic.openapi.utils.Utils;

import icons.OpenApiIcons;

public class OpenApiRightMouseClickHandler {

    private final OpenApiFileTreePanel panel;

    public OpenApiRightMouseClickHandler(@NotNull OpenApiFileTreePanel panel) {
        this.panel = panel;
    }

    public void handle(MouseEvent event) {

        Tree tree = panel.getTree();
        Project project = panel.getProject();
        VirtualFile file = Utils.getSelectedOpenAPIFile(project);
        DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if ((treeNode == null) || (file == null) || TempFileUtils.isExtRefFile(file)) {
            return;
        }
        PsiFile psiFile = Utils.findPsiFile(project, file);
        if (psiFile == null) {
            return;
        }

        DefaultActionGroup actions = DefaultActionGroup.createPopupGroup(event.getMenu());
        OpenApiVersion version = ASTService.getOpenAPIVersion(panel.getProject(), file);
        BaseNode node = (BaseNode) treeNode.getUserObject();
        QuickFixService quickFixService = QuickFixService.getInstance();

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
                List<String> ids = Arrays.asList("componentsSchema", "componentsParameter", "componentsResponse", "componentsSecurityApiKey",
                        "componentsSecurityBasic", "componentsSecurityJwt", "componentsSecurityOauth2Implicit");
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
        } else if (isPath(node)) {
            DefaultActionGroup diffGroup = DefaultActionGroup.createPopupGroup();
            diffGroup.getTemplatePresentation().setIcon(OpenApiIcons.AddSnippet);
            diffGroup.addAll(quickFixService.getSnippetFixActions(psiFile, "operation", treeNode));
            actions.add(diffGroup);
        } else if (isOperation(treeNode)) {
            TryItUtils.setActionsForOperation(psiFile, node.getNode(), actions);
            ScanUtils.setActionsForOperation(psiFile, node.getNode(), actions);
        } else if (isOperationId(treeNode)) {
            TryItUtils.setActionsForOperation(psiFile, node.getNode().getParent(), actions);
            ScanUtils.setActionsForOperation(psiFile, node.getNode().getParent(), actions);
        }
    }

    private static boolean isPath(BaseNode path) {
        return path instanceof SimpleNode && isPath(path.getNode());
    }

    private static boolean isPath(Node path) {
        return path != null && path.getDepth() == 2 && PATHS.equals(path.getParent().getKey());
    }

    private static boolean isOperation(DefaultMutableTreeNode opNode) {
        BaseNode op = (BaseNode) opNode.getUserObject();
        return op instanceof SimpleNode && isOperation(op.getNode());
    }

    private static boolean isOperation(Node op) {
        return op != null && op.getDepth() == 3 && isPath(op.getParent());
    }

    private static boolean isOperationId(DefaultMutableTreeNode opIdNode) {
        BaseNode opId = (BaseNode) opIdNode.getUserObject();
        BaseNode opIds = opId.getParent();
        return opIds instanceof PanelNode && OPERATION_ID.equals(opIds.getName()) && isOperation(opId.getNode().getParent());
    }
}











