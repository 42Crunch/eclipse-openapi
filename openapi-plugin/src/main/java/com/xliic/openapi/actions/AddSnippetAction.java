package com.xliic.openapi.actions;

import static com.xliic.openapi.OpenApiPanelKeys.BASE_PATH_POINTER;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.HOST_POINTER;
import static com.xliic.openapi.OpenApiPanelKeys.INFO_POINTER;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.OpenApiPanelKeys.getMainPathKey;
import static com.xliic.openapi.utils.OpenAPIUtils.getFirstNotEmptyPanel;
import static com.xliic.openapi.utils.OpenAPIUtils.getPadding;

import java.util.LinkedHashMap;
import java.util.Map;

import javax.swing.tree.DefaultMutableTreeNode;

import org.eclipse.core.resources.IFile;
import org.eclipse.jface.action.Action;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.swt.graphics.Image;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.PlatformUI;
import org.eclipse.ui.texteditor.ITextEditor;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.OpenAPIImages;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.api.IDataService;
import com.xliic.openapi.snippets.Snippet;
import com.xliic.openapi.snippets.SnippetIDs;
import com.xliic.openapi.snippets.SnippetLayout;
import com.xliic.openapi.tree.OpenApiTreeNode;
import com.xliic.openapi.utils.EditorUtil;
import com.xliic.openapi.utils.OpenAPIUtils;

public class AddSnippetAction extends Action {

	private final DefaultMutableTreeNode node;
	private final Snippet snippet;
	private final String title;

	public AddSnippetAction(String title, Snippet snippet, DefaultMutableTreeNode node, Image icon) {

		super(title);
		this.node = node;
		this.snippet = snippet;
		this.title = title;
		setImageDescriptor(OpenAPIImages.AddSnippet);
	}

	@Override
	public boolean isEnabled() {

		if (!snippet.available()) {
			return false;
		}

		OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
		if (!o.isPanel() && PATHS.equals(o.getParentKey())) {
			int count = node.getChildCount();
			for (int i = 0; i < count; i++) {
				DefaultMutableTreeNode p = (DefaultMutableTreeNode) node.getChildAt(i);
				OpenApiTreeNode oc = (OpenApiTreeNode) p.getUserObject();
				if (title.equals(oc.getKey())) {
					return false;
				}
			}
		}

		if (o.isPanel() && o.is(GENERAL)) {

			VirtualFile file = OpenAPIUtils.getSelectedOpenAPIFile();
			if (file == null) {
				return false;
			}

			IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
			OpenApiVersion version = dataService.getFileProperty(file.getPath()).getVersion();
			Map<String, DefaultMutableTreeNode> pointerToNodesMap = dataService.getParserData(file.getPath())
					.getPointerToNodesMap();

			if (SnippetIDs.INFO.equals(snippet.getId()) || SnippetIDs.INFO_YAML.equals(snippet.getId())) {
				return !pointerToNodesMap.containsKey(INFO_POINTER);
			} else if (version == OpenApiVersion.V2) {
				if (SnippetIDs.HOST.equals(snippet.getId()) || SnippetIDs.HOST_YAML.equals(snippet.getId())) {
					return !pointerToNodesMap.containsKey(HOST_POINTER);
				} else if (SnippetIDs.BASE_PATH.equals(snippet.getId())
						|| SnippetIDs.BASE_PATH_YAML.equals(snippet.getId())) {
					return !pointerToNodesMap.containsKey(BASE_PATH_POINTER);
				}
			}
		}
		return true;
	}

	@Override
	@SuppressWarnings("serial")
	public void run() {

		ITextEditor editor = (ITextEditor) EditorUtil.getCurrentEditor();
		if (editor == null) {
			return;
		}
		IEditorInput input = editor.getEditorInput();
		if (!(input instanceof IFileEditorInput)) {
			return;
		}
		IFileEditorInput fileInput = (IFileEditorInput) input;
		IFile file = fileInput.getFile();

		OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
		IDataService dataService = PlatformUI.getWorkbench().getService(IDataService.class);
		ParserData parserData = dataService.getParserData(new VirtualFile(file).getPath());
		if (!parserData.isValid()) {
			return;
		}

		OpenApiFileType fileType = dataService.getFileProperty(new VirtualFile(file).getPath()).getType();
		boolean isJson = (fileType == OpenApiFileType.Json);

		int innerPadding = getPadding(node, fileType);
		int padding = isJson ? 2 * innerPadding : innerPadding;
		int line = (int) o.getLine();

		final SnippetLayout layout = new SnippetLayout(padding, innerPadding, false, o.getKey(), true, null,
				parserData.isCrLfEol());

		if (o.isPanelExists() || !o.isPanel()) {

			layout.setPanel(null);
			String container = snippet.getContainer();

			if (container == null) {
				layout.setContainerExists(true);
				layout.setComma(node.getChildCount() > 0);
				layout.setPadding(isJson ? (2 + o.getLevel()) * innerPadding : (1 + o.getLevel()) * innerPadding);
			} else {
				int count = node.getChildCount();
				for (int i = 0; i < count; i++) {
					DefaultMutableTreeNode p = (DefaultMutableTreeNode) node.getChildAt(i);
					if (container.equals(((OpenApiTreeNode) p.getUserObject()).getKey())) {
						layout.setContainerExists(true);
						layout.setComma(p.getChildCount() > 0);
						layout.setPadding(
								isJson ? (3 + o.getLevel()) * innerPadding : (2 + o.getLevel()) * innerPadding);
						line = (int) ((OpenApiTreeNode) p.getUserObject()).getLine();
						break;
					}
				}
			}
		} else {

			if (o.isPanel() && o.is(GENERAL)) {
				OpenApiVersion version = dataService.getFileProperty(new VirtualFile(file).getPath()).getVersion();
				Map<String, DefaultMutableTreeNode> pointerToNodesMap = dataService
						.getParserData(new VirtualFile(file).getPath()).getPointerToNodesMap();
				DefaultMutableTreeNode p = pointerToNodesMap.get(getMainPathKey(version));

				layout.setPanel(null);
				layout.setContainerExists(true);
				layout.setComma(true);
				layout.setPadding(isJson ? innerPadding : 0);
				line = (int) ((OpenApiTreeNode) p.getUserObject()).getLine();
			} else {
				DefaultMutableTreeNode nextPanel = getFirstNotEmptyPanel(node);
				String container = snippet.getContainer();
				layout.setContainerExists(container == null);
				layout.setPadding(isJson ? innerPadding : 0);
				if (nextPanel == null) {
					return;
				} else {
					layout.setComma(true);
					line = (int) ((OpenApiTreeNode) nextPanel.getUserObject()).getLine() - 1;
				}
			}
		}

		if (!o.isPanel() && PATHS.equals(o.getParentKey())) {
			layout.setIndexToValueMap(new LinkedHashMap<>() {
				{
					put(0, title);
				}
			});
		}

		IDocument doc = EditorUtil.getDocument(fileInput);
		try {
			IRegion reg = doc.getLineInformation(line + 1);
			String text = snippet.getText(layout);
			doc.replace(reg.getOffset(), 0, text);
		} catch (BadLocationException e) {
			e.printStackTrace();
		}
	}
}
