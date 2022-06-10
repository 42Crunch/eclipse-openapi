package com.xliic.openapi.tree;

import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jdt.internal.ui.actions.CompositeActionGroup;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.actions.AddSnippetAction;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.SnippetService;
import com.xliic.openapi.snippets.Snippet;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;

import icons.OpenApiIcons;

import static com.xliic.openapi.snippets.SnippetIDs.*;

@SuppressWarnings("restriction")
public class OpenAPITreeActionGroup extends CompositeActionGroup {

	private final Project project;

	public OpenAPITreeActionGroup(@NotNull Project project) {
		this.project = project;
	}

	@Override
	public void fillContextMenu(IMenuManager menu) {

		IStructuredSelection selection = (IStructuredSelection) getContext().getSelection();
		Object element = selection.getFirstElement();

		DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) element;
		if (treeNode == null) {
			return;
		}
		VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile(project);
		if ((selectedFile == null) || OpenApiUtils.isTempFile(selectedFile)) {
			return;
		}
        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(selectedFile);
        if (root == null) {
            return;
        }

        OpenApiFileType type = OpenApiUtils.getFileType(selectedFile);
        boolean isJson = (type == OpenApiFileType.Json);
        OpenApiVersion version = ASTService.getOpenAPIVersion(project, selectedFile);
        List<String> snippetIds = new LinkedList<>();
        BaseNode node = (BaseNode) treeNode.getUserObject();

		// Define what snippets to show
        if (node instanceof PanelNode) {
            if (OpenApiPanelKeys.GENERAL.equals(node.getName()) && (version == OpenApiVersion.V3)) {
                snippetIds.add(isJson ? INFO : INFO_YAML);
            }
            else if (OpenApiPanelKeys.PATHS.equals(node.getName())) {
                snippetIds.add(isJson ? PATH : PATH_YAML);
            }
            else if (OpenApiPanelKeys.SERVERS.equals(node.getName())) {
                snippetIds.add(isJson ? SERVER : SERVER_YAML);
            }
            else if (OpenApiPanelKeys.SECURITY.equals(node.getName())) {
                snippetIds.add(isJson ? SECURITY : SECURITY_YAML);
            }
            else if (OpenApiPanelKeys.COMPONENTS.equals(node.getName())) {
                snippetIds.add(isJson ? COMPONENTS_SCHEMA : COMPONENTS_SCHEMA_YAML);
                snippetIds.add(isJson ? COMPONENTS_PARAMETER : COMPONENTS_PARAMETER_YAML);
                snippetIds.add(isJson ? COMPONENTS_RESPONSE : COMPONENTS_RESPONSE_YAML);
                snippetIds.add(isJson ? COMPONENTS_SECURITY_API_KEY : COMPONENTS_SECURITY_API_KEY_YAML);
                snippetIds.add(isJson ? COMPONENTS_SECURITY_BASIC : COMPONENTS_SECURITY_BASIC_YAML);
                snippetIds.add(isJson ? COMPONENTS_SECURITY_JWT : COMPONENTS_SECURITY_JWT_YAML);
                snippetIds.add(isJson ? COMPONENTS_SECURITY_OAUTH2_IMPLICIT : COMPONENTS_SECURITY_OAUTH2_IMPLICIT_YAML);
            }
            else if (OpenApiPanelKeys.GENERAL.equals(node.getName()) && (version == OpenApiVersion.V2)) {
                snippetIds.add(isJson ? BASE_PATH : BASE_PATH_YAML);
                snippetIds.add(isJson ? HOST : HOST_YAML);
                snippetIds.add(isJson ? INFO : INFO_YAML);
            }
            else if (OpenApiPanelKeys.PARAMETERS.equals(node.getName())) {
                snippetIds.add(isJson ? PARAMETER_BODY : PARAMETER_BODY_YAML);
                snippetIds.add(isJson ? PARAMETER_PATH : PARAMETER_PATH_YAML);
                snippetIds.add(isJson ? PARAMETER_OTHER : PARAMETER_OTHER_YAML);
            }
            else if (OpenApiPanelKeys.RESPONSES.equals(node.getName())) {
                snippetIds.add(isJson ? RESPONSE : RESPONSE_YAML);
            }
            else if (OpenApiPanelKeys.DEFINITIONS.equals(node.getName())) {
                snippetIds.add(isJson ? DEFINITION_OBJECT : DEFINITION_OBJECT_YAML);
            }
            else if (OpenApiPanelKeys.SECURITY_DEFINITIONS.equals(node.getName())) {
                snippetIds.add(isJson ? SECURITY_API : SECURITY_API_YAML);
                snippetIds.add(isJson ? SECURITY_BASIC : SECURITY_BASIC_YAML);
                snippetIds.add(isJson ? SECURITY_OAUTH2_IMPLICIT : SECURITY_OAUTH2_IMPLICIT_YAML);
            }
        }
        else {
            if (OpenApiPanelKeys.PATHS.equals(((SimpleNode) node).getParentName())) {
                snippetIds.add(isJson ? OPERATION : OPERATION_YAML);
            }
        }

        if (snippetIds.size() == 0) {
            return;
        }

        SnippetService snippetService = SnippetService.getInstance();

        if (snippetIds.size() == 1 &&
                (OPERATION.equals(snippetIds.get(0)) || OPERATION_YAML.equals(snippetIds.get(0)))) {

			Snippet s = snippetService.get(snippetIds.get(0));
			List<String> choices = s.getChoiceList(1);
			for (String choice : choices) {
				menu.add(new AddSnippetAction(choice, s, treeNode, OpenApiIcons.PropertyNode));
			}
		} else {
			for (String snippetId : snippetIds) {
				Snippet s = snippetService.get(snippetId);
				menu.add(new AddSnippetAction(s.getName(), s, treeNode, OpenApiIcons.AddSnippet));
			}
		}
		super.fillContextMenu(menu);
	}
}