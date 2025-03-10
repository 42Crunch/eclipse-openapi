package com.xliic.openapi.outline;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES;
import static com.xliic.openapi.OpenApiPanelKeys.SCHEMAS;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY_DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY_SCHEMES;
import static com.xliic.openapi.OpenApiPanelKeys.SERVERS;
import static com.xliic.openapi.utils.TempFileUtils.isPlatformFile;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.outline.actions.CopyPointerAction;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.OpIdNode;
import com.xliic.openapi.outline.node.PanelNode;
import com.xliic.openapi.outline.node.SimpleNode;
import com.xliic.openapi.outline.node.TagChildNode;
import com.xliic.openapi.outline.ui.OutlinePanel;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.scan.ScanUtils;
import com.xliic.openapi.report.AuditUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.utils.Utils;

public class OutlineRightClickHandler {

    private final OutlinePanel panel;

    public OutlineRightClickHandler(@NotNull OutlinePanel panel) {
        this.panel = panel;
    }

    public void handle(MouseEvent event) {
        Tree tree = panel.getTree();
        Project project = panel.getProject();
        DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if (treeNode == null) {
            return;
        }
        String fileName = panel.getModelFileName();
        if (fileName == null) {
        	return;
        }
        VirtualFile file = LocalFileSystem.getInstance().findFileByIoFile(new File(fileName));
        if (file == null) {
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
        final boolean addAuditActions = !isPlatformFile(file);
        final boolean addScanActions = !isPlatformFile(file) && (version != OpenApiVersion.V3_1);
        final boolean addTryItActions = (version != OpenApiVersion.V3_1);
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
        } else if (node instanceof SimpleNode && node.getLevel() == 2) {
            if (COMPONENTS.equals(((SimpleNode) node).getParentName())) {
                if (SCHEMAS.equals(node.getName())) {
                    actions.addAll(quickFixService.getSnippetFixActions(psiFile, "componentsSchema", treeNode));
                } else if (PARAMETERS.equals(node.getName())) {
                    actions.addAll(quickFixService.getSnippetFixActions(psiFile, "componentsParameter", treeNode));
                } else if (RESPONSES.equals(node.getName())) {
                    actions.addAll(quickFixService.getSnippetFixActions(psiFile, "componentsResponse", treeNode));
                } else if (SECURITY_SCHEMES.equals(node.getName())) {
                    List<String> ids = Arrays.asList("componentsSecurityApiKey", "componentsSecurityBasic",
                            "componentsSecurityJwt", "componentsSecurityOauth2Implicit");
                    actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
                }
            }
            if (PATHS.equals(((SimpleNode) node).getParentName())) {
                DefaultActionGroup diffGroup = DefaultActionGroup.createPopupGroup("Add Operation");
                diffGroup.addAll(quickFixService.getSnippetFixActions(psiFile, "operation", treeNode));
                actions.add(diffGroup);
                actions.add(quickFixService.getPathOpDeleteFixAction(psiFile, treeNode));
            }
            if (node instanceof TagChildNode) {
                Node operation = ((TagChildNode) node).getOperation();
                if (addAuditActions) {
                	AuditUtils.setActionsForOperation(psiFile, operation, actions);
                }
                if (addScanActions) {
                	ScanUtils.setActionsForOperation(psiFile, operation, actions);
                }
                if (addTryItActions) {
                	TryItUtils.setActionsForOperation(psiFile, operation, actions);
                }
            } else if (node instanceof OpIdNode) {
                Node operation = ((OpIdNode) node).getOperation().getNode();
                if (operation != null) {
                	if (addAuditActions) {
                		AuditUtils.setActionsForOperation(psiFile, operation, actions);
                	}
                	if (addScanActions) {
                		ScanUtils.setActionsForOperation(psiFile, operation, actions);
                	}
                	if (addTryItActions) {
                		TryItUtils.setActionsForOperation(psiFile, operation, actions);
                	}
                }
            }
        } else if (isOperation(treeNode)) {
            Node operation = node.getNode();
            if (operation != null) {
            	if (addAuditActions) {
            		AuditUtils.setActionsForOperation(psiFile, operation, actions);
            	}
            	if (addScanActions) {
            		ScanUtils.setActionsForOperation(psiFile, operation, actions);
            	}
            	if (addTryItActions) {
            		TryItUtils.setActionsForOperation(psiFile, operation, actions);
            	}
                actions.add(quickFixService.getPathOpDeleteFixAction(psiFile, treeNode));
            }
        }
        if (node.isCopyEnabled()) {
            Node target = node.getNode();
            if (target != null) {
                actions.add(new CopyPointerAction(target.getJsonPointer()));
            }
        }
    }

    private static boolean isOperation(DefaultMutableTreeNode opDMTN) {
        BaseNode op = (BaseNode) opDMTN.getUserObject();
        return op instanceof SimpleNode && isOperation(op.getNode());
    }

    private static boolean isOperation(Node op) {
        return op != null && op.getDepth() == 3 && TryItUtils.OPERATIONS.contains(op.getKey()) && isPath(op.getParent());
    }

    private static boolean isPath(Node path) {
        return path != null && path.getDepth() == 2 && PATHS.equals(path.getParent().getKey());
    }
}
