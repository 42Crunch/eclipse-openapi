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

import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.actionSystem.CommonDataKeys;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.psi.LeafPsiElement;
import com.xliic.core.psi.PsiDocumentManager;
import com.xliic.core.psi.PsiElement;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.ExtRef;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.parser.tree.ParserData;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;
import com.xliic.openapi.services.ExtRefService;
import com.xliic.openapi.tree.OpenApiTreeNode;

import static com.xliic.openapi.OpenApiUtils.*;

public class GoToDefinitionAction extends AnAction implements DumbAware {

	@Override
	public void update(AnActionEvent event) {
		event.getPresentation().setEnabled(false);
		Project project = event.getProject();
		Editor editor = event.getData(CommonDataKeys.EDITOR);
		VirtualFile file = event.getData(CommonDataKeys.VIRTUAL_FILE);
		if (project == null || editor == null || file == null) {
			return;
		}
	    BundleService bundleService = BundleService.getInstance(project);
	    if (bundleService.isFileBeingBundled(file.getPath())) {
	      PsiElement psiElement = getDoubleClickedPsiElement(project, editor);
	      if (psiElement instanceof LeafPsiElement) {
	        if (JSON_REF_PATTERN.accepts(psiElement) || YAML_REF_PATTERN.accepts(psiElement)) {
	          event.getPresentation().setEnabled(true);
	        }
	        else {
	          PsiElement element = psiElement.getParent();
	          element = (element == null) ? null : element.getParent();
	          element = (element == null) ? null : element.getFirstChild();
	          if ((element != null) && REF.equals(StringUtils.strip(element.getText(), "'\""))) {
	            event.getPresentation().setEnabled(true);
	          }
	        }
	      }
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
		
	    if (ExtRef.isExtRef(text)) {
	        ExtRefService extRefService = ExtRefService.getInstance(project);
	        PsiElement result = extRefService.getPsiElement(text);
	        if (result == null) {
	          showRefNotFoundPopup(title, editor.getShell());
	          return;
	        }
	        else {
              Range range = EclipseUtil.getSelectionRange(result.getNode());
	          new OpenFileDescriptor(project, result.getContainingFile().getVirtualFile(),
	                  result.getOffset(), range == null ? 0 : range.getLength()).navigate(true);
	        }
	        return;
	      }

	    if (text.contains(REF_DELIMITER)) {

	    	String [] parts = text.split(REF_DELIMITER);
	        String key = "/" + parts[1];
	        String refFileName = parts[0];

	        if (StringUtils.isEmpty(refFileName)) {
	          // Internal ref
	          DataService dataService = DataService.getInstance(project);
	          ParserData parserData = dataService.getParserData(file.getPath());
	          if ((parserData == null) || !parserData.isValid()) {
	        	showRefNotFoundPopup(title, editor.getShell());
	            return;
	          }
	          DefaultMutableTreeNode node = parserData.getPointerToNodesMap().get(key);
	          if (node == null) {
	        	showRefNotFoundPopup(title, editor.getShell());
	            return;
	          }
	          OpenApiTreeNode tn = (OpenApiTreeNode) node.getUserObject();
	          int offset = (int) tn.getStartOffset();
	          int length = (int) (tn.getEndOffset() - offset);
	          new OpenFileDescriptor(project, file, offset, length).navigate(true);
	        }
	        else {
	          // External ref
	          File refIoFile = new File(new File(Paths.get(file.getPath()).getParent().toString()), refFileName);
	          VirtualFile refFile = LocalFileSystem.getInstance().findFileByIoFile(refIoFile);
	          if (refFile == null) {
	        	showRefNotFoundPopup(title, editor.getShell());
	            return;
	          }
	          ASTService astService = ASTService.getInstance(project);
	          Node root = astService.getRootNode(refFile);
	          if (root == null) {
	        	showRefNotFoundPopup(title, editor.getShell());
	            return;
	          }
	          Node target = root.find(key);
	          if (target == null) {
	        	showRefNotFoundPopup(title, editor.getShell());
	            return;
	          }
	          getOpenFileDescriptor(project, refFile, target).navigate(true);
	        }
	    } else {
			// Possible file
			File refIoFile = new File(new File(Paths.get(file.getPath()).getParent().toString()), text);
			VirtualFile refFile = LocalFileSystem.getInstance().findFileByIoFile(refIoFile);
			if (refFile == null) {
				showRefNotFoundPopup(title, editor.getShell());
				return;
			}
			new OpenFileDescriptor(project, refFile).navigate(true);
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
