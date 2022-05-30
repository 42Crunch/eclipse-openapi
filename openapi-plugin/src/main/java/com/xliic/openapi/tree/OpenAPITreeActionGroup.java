package com.xliic.openapi.tree;

import java.util.LinkedList;
import java.util.List;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.jdt.internal.ui.actions.CompositeActionGroup;
import org.eclipse.jface.action.IMenuManager;
import org.eclipse.jface.viewers.IStructuredSelection;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.PlatformUI;

import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiPanelKeys;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.actions.AddSnippetAction;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.services.api.ISnippetService;
import com.xliic.openapi.snippets.Snippet;
import com.xliic.openapi.snippets.SnippetIDs;

@SuppressWarnings("restriction")
public class OpenAPITreeActionGroup extends CompositeActionGroup {
	
	private final static Image propertyNodeImage = OpenAPIImages.PropertyNode.createImage();
	private final static Image addSnippetImage = OpenAPIImages.AddSnippet.createImage();

	public OpenAPITreeActionGroup() {
	}

	@Override
	public void fillContextMenu(IMenuManager menu) {

		IStructuredSelection selection = (IStructuredSelection) getContext().getSelection();
		Object element = selection.getFirstElement();

		DefaultMutableTreeNode treeNode = (DefaultMutableTreeNode) element;
		if (treeNode == null) {
			return;
		}
		VirtualFile selectedFile = OpenApiUtils.getSelectedOpenAPIFile();
		if ((selectedFile == null) || OpenApiUtils.isTempFile(selectedFile)) {
			return;
		}
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		if (!dataService.getParserData(selectedFile.getPath()).isValid()) {
			return;
		}

		OpenApiFileType type = dataService.getFileProperty(selectedFile.getPath()).getType();
		boolean isJson = (type == OpenApiFileType.Json);
		OpenApiVersion version = dataService.getFileProperty(selectedFile.getPath()).getVersion();
		List<String> snippetIds = new LinkedList<>();
		OpenApiTreeNode node = (OpenApiTreeNode) treeNode.getUserObject();

		// Define what snippets to show
		if (node.isPanel()) {
			if (node.is(OpenApiPanelKeys.GENERAL) && (version == OpenApiVersion.V3)) {
				snippetIds.add(isJson ? SnippetIDs.INFO : SnippetIDs.INFO_YAML);
			} else if (node.is(OpenApiPanelKeys.PATHS)) {
				snippetIds.add(isJson ? SnippetIDs.PATH : SnippetIDs.PATH_YAML);
			} else if (node.is(OpenApiPanelKeys.SERVERS)) {
				snippetIds.add(isJson ? SnippetIDs.SERVER : SnippetIDs.SERVER_YAML);
			} else if (node.is(OpenApiPanelKeys.SECURITY)) {
				snippetIds.add(isJson ? SnippetIDs.SECURITY : SnippetIDs.SECURITY_YAML);
			} else if (node.is(OpenApiPanelKeys.COMPONENTS)) {
				snippetIds.add(isJson ? SnippetIDs.COMPONENTS_SCHEMA : SnippetIDs.COMPONENTS_SCHEMA_YAML);
				snippetIds.add(isJson ? SnippetIDs.COMPONENTS_PARAMETER : SnippetIDs.COMPONENTS_PARAMETER_YAML);
				snippetIds.add(isJson ? SnippetIDs.COMPONENTS_RESPONSE : SnippetIDs.COMPONENTS_RESPONSE_YAML);
				snippetIds.add(
						isJson ? SnippetIDs.COMPONENTS_SECURITY_API_KEY : SnippetIDs.COMPONENTS_SECURITY_API_KEY_YAML);
				snippetIds
						.add(isJson ? SnippetIDs.COMPONENTS_SECURITY_BASIC : SnippetIDs.COMPONENTS_SECURITY_BASIC_YAML);
				snippetIds.add(isJson ? SnippetIDs.COMPONENTS_SECURITY_JWT : SnippetIDs.COMPONENTS_SECURITY_JWT_YAML);
				snippetIds.add(isJson ? SnippetIDs.COMPONENTS_SECURITY_OAUTH2_IMPLICIT
						: SnippetIDs.COMPONENTS_SECURITY_OAUTH2_IMPLICIT_YAML);
			} else if (node.is(OpenApiPanelKeys.GENERAL) && (version == OpenApiVersion.V2)) {
				snippetIds.add(isJson ? SnippetIDs.BASE_PATH : SnippetIDs.BASE_PATH_YAML);
				snippetIds.add(isJson ? SnippetIDs.HOST : SnippetIDs.HOST_YAML);
				snippetIds.add(isJson ? SnippetIDs.INFO : SnippetIDs.INFO_YAML);
			} else if (node.is(OpenApiPanelKeys.PARAMETERS)) {
				snippetIds.add(isJson ? SnippetIDs.PARAMETER_BODY : SnippetIDs.PARAMETER_BODY_YAML);
				snippetIds.add(isJson ? SnippetIDs.PARAMETER_PATH : SnippetIDs.PARAMETER_PATH_YAML);
				snippetIds.add(isJson ? SnippetIDs.PARAMETER_OTHER : SnippetIDs.PARAMETER_OTHER_YAML);
			} else if (node.is(OpenApiPanelKeys.RESPONSES)) {
				snippetIds.add(isJson ? SnippetIDs.RESPONSE : SnippetIDs.RESPONSE_YAML);
			} else if (node.is(OpenApiPanelKeys.DEFINITIONS)) {
				snippetIds.add(isJson ? SnippetIDs.DEFINITION_OBJECT : SnippetIDs.DEFINITION_OBJECT_YAML);
			} else if (node.is(OpenApiPanelKeys.SECURITY_DEFINITIONS)) {
				snippetIds.add(isJson ? SnippetIDs.SECURITY_API : SnippetIDs.SECURITY_API_YAML);
				snippetIds.add(isJson ? SnippetIDs.SECURITY_BASIC : SnippetIDs.SECURITY_BASIC_YAML);
				snippetIds.add(isJson ? SnippetIDs.SECURITY_OAUTH2_IMPLICIT : SnippetIDs.SECURITY_OAUTH2_IMPLICIT_YAML);
			}
		} else {
			if (OpenApiPanelKeys.PATHS.equals(node.getParentKey())) {
				snippetIds.add(isJson ? SnippetIDs.OPERATION : SnippetIDs.OPERATION_YAML);
			}
		}

		if (snippetIds.size() == 0) {
			return;
		}

		ISnippetService snippetService = PlatformUI.getWorkbench().getService(ISnippetService.class);

		if (snippetIds.size() == 1 && (SnippetIDs.OPERATION.equals(snippetIds.get(0))
				|| SnippetIDs.OPERATION_YAML.equals(snippetIds.get(0)))) {

			Snippet s = snippetService.get(snippetIds.get(0));
			List<String> choices = s.getChoiceList(1);
			for (String choice : choices) {
				menu.add(new AddSnippetAction(choice, s, treeNode, propertyNodeImage));
			}
		} else {
			for (String snippetId : snippetIds) {
				Snippet s = snippetService.get(snippetId);
				menu.add(new AddSnippetAction(s.getName(), s, treeNode, addSnippetImage));
			}
		}
		super.fillContextMenu(menu);
	}
}