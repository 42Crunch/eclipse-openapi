package com.xliic.openapi.actions;

import static com.xliic.openapi.OpenApiUtils.JSON_REF_PATTERN;
import static com.xliic.openapi.OpenApiUtils.YAML_REF_PATTERN;
import static com.xliic.openapi.OpenApiUtils.getOpenFileDescriptor;
import static com.xliic.openapi.OpenApiUtils.getRefTextFromPsiElement;

import java.io.File;
import java.nio.file.Paths;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang.StringUtils;
import org.eclipse.jface.dialogs.MessageDialog;
import org.eclipse.swt.widgets.Shell;
import org.jetbrains.annotations.NotNull;

import com.xliic.idea.DumbAware;
import com.xliic.idea.action.AnAction;
import com.xliic.idea.action.AnActionEvent;
import com.xliic.idea.action.CommonDataKeys;
import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.LocalFileSystem;
import com.xliic.idea.file.OpenFileDescriptor;
import com.xliic.idea.file.PsiFile;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.idea.psi.LeafPsiElement;
import com.xliic.idea.psi.PsiDocumentManager;
import com.xliic.idea.psi.PsiElement;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.tree.OpenApiTreeNode;

public class GoToDefinitionAction extends AnAction implements DumbAware {

	private static final String REF = "#/";

	@Override
	public void update(AnActionEvent event) {

		Project project = event.getProject();
		Editor editor = event.getData(CommonDataKeys.EDITOR);
		VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
		if (project == null || editor == null || file == null) {
			return;
		}
		event.getPresentation().setEnabled(false);
		PsiElement psiElement = getDoubleClickedPsiElement(project, editor);
		if ((psiElement instanceof LeafPsiElement)
				&& (JSON_REF_PATTERN.accepts(psiElement) || YAML_REF_PATTERN.accepts(psiElement))) {
			event.getPresentation().setEnabled(true);
		}
	}

	@Override
	public void actionPerformed(@NotNull AnActionEvent event) {

		Project project = event.getProject();
		Editor editor = event.getData(CommonDataKeys.EDITOR);
		VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
		if (project == null || editor == null || file == null) {
			return;
		}
		PsiElement psiElement = getDoubleClickedPsiElement(project, editor);
		if (psiElement == null) {
			return;
		}
		String text = getRefTextFromPsiElement(psiElement);
		String title = "No definition found for " + text;

		if (text.contains(REF)) {

			String[] parts = text.split(REF);
			String key = "/" + parts[1];
			String refFileName = parts[0];

			if (StringUtils.isEmpty(refFileName)) {
				// Internal ref
				DataService dataService = DataService.getInstance(project);
				DefaultMutableTreeNode node = dataService.getParserData(file.getPath()).getPointerToNodesMap().get(key);
				if (node == null) {
					showRefNotFoundPopup(title, editor.getShell());
					return;
				}
				OpenApiUtils.goToNodeInEditor(editor, (OpenApiTreeNode) node.getUserObject());
			} else {
				// External ref
				File refIoFile = new File(new File(Paths.get(file.getPath()).getParent().toString()), refFileName);
				VirtualFile refFile = LocalFileSystem.getInstance().findFileByIoFile(refIoFile);
				if (refFile == null) {
					showRefNotFoundPopup(title, editor.getShell());
					return;
				}
				String fileText = OpenApiUtils.getTextFromFile(refIoFile);
				if (fileText == null) {
					showRefNotFoundPopup(title, editor.getShell());
					return;
				}
				ASTService astService = ASTService.getInstance(project);
				Node root = astService.getRootNode(refFile);
				Node target = root.find(key);
				if (target == null) {
					showRefNotFoundPopup(title, editor.getShell());
					return;
				}
				getOpenFileDescriptor(project, refFile, target.getRange()).navigate(true);
			}
		} else {
			// Possible file
			File refIoFile = new File(new File(Paths.get(file.getPath()).getParent().toString()), text);
			VirtualFile refFile = LocalFileSystem.getInstance().findFileByIoFile(refIoFile);
			if (refFile == null) {
				showRefNotFoundPopup(title, editor.getShell());
				return;
			}
			new OpenFileDescriptor(project, refFile, 0).navigate(true);
		}
	}

	private static void showRefNotFoundPopup(@NotNull String title, @NotNull Shell shell) {
		// It is impossible to calculate correct location to show
		MessageDialog.openWarning(shell, "Warning", title);
	}

	private PsiElement getDoubleClickedPsiElement(@NotNull Project project, @NotNull Editor editor) {
		PsiFile psiFile = PsiDocumentManager.getInstance(project).getPsiFile(editor.getDocument());
		if (psiFile == null) {
			return null;
		}
		int offset = editor.logicalPositionToOffset(editor.getCaretModel().getLogicalPosition());
		return psiFile.findElementAt(offset);
	}
}
