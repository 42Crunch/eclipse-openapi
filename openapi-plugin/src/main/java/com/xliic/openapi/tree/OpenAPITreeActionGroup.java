package com.xliic.openapi.tree;

import java.util.Arrays;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jdt.internal.ui.actions.CompositeActionGroup;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.psi.PsiManager;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.TempFileUtils;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.QuickFixService;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;

import icons.OpenApiIcons;

import static com.xliic.openapi.OpenApiPanelKeys.*;

@SuppressWarnings("restriction")
public class OpenAPITreeActionGroup extends CompositeActionGroup {

	private final Project project;

	public OpenAPITreeActionGroup(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void fillContextMenu(IMenuManager menu) {
		
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
		IStructuredSelection selection = (IStructuredSelection) getContext().getSelection();
		Object element = selection.getFirstElement();
		DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) element;
        if ((treeNode == null) || (file == null) || TempFileUtils.isExtRefFile(file)) {
            return;
        }
        PsiFile psiFile = PsiManager.getInstance(project).findFile(file);
        if (psiFile == null) {
            return;
        }

        DefaultActionGroup actions = DefaultActionGroup.createPopupGroup(menu);
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, file);
        BaseNode node = (BaseNode) treeNode.getUserObject();
        QuickFixService quickFixService = QuickFixService.getInstance();

        // Define what snippets to show
        if (node instanceof PanelNode) {
            if (GENERAL.equals(node.getName()) && (version == OpenApiVersion.V3)) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "info", treeNode));
            }
            else if (PATHS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "path", treeNode));
            }
            else if (SERVERS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "server", treeNode));
            }
            else if (SECURITY.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "security", treeNode));
            }
            else if (COMPONENTS.equals(node.getName())) {
                List<String> ids = Arrays.asList(
                        "componentsSchema", "componentsParameter", "componentsResponse",
                        "componentsSecurityApiKey", "componentsSecurityBasic",
                        "componentsSecurityJwt", "componentsSecurityOauth2Implicit");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            }
            else if (GENERAL.equals(node.getName()) && (version == OpenApiVersion.V2)) {
                List<String> ids = Arrays.asList("basePath", "host", "info");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            }
            else if (PARAMETERS.equals(node.getName())) {
                List<String> ids = Arrays.asList("parameterBody", "parameterPath", "parameterOther");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            }
            else if (RESPONSES.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "response", treeNode));
            }
            else if (DEFINITIONS.equals(node.getName())) {
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, "definitionObject", treeNode));
            }
            else if (SECURITY_DEFINITIONS.equals(node.getName())) {
                List<String> ids = Arrays.asList("securityApiKey", "securityBasic", "securityOauth2Implicit");
                actions.addAll(quickFixService.getSnippetFixActions(psiFile, ids, treeNode));
            }
        }
        else {
            if ((node instanceof SimpleNode) && PATHS.equals(((SimpleNode) node).getParentName())) {
                DefaultActionGroup diffGroup = DefaultActionGroup.createPopupGroup();
                diffGroup.getTemplatePresentation().setIcon(OpenApiIcons.AddSnippet);
                diffGroup.addAll(quickFixService.getSnippetFixActions(psiFile, "operation", treeNode));
                actions.add(diffGroup);
            }
        }
		super.fillContextMenu(menu);
	}
}