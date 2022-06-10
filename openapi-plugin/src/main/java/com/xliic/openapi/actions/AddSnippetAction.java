package com.xliic.openapi.actions;

import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.util.Icon;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.snippets.Snippet;
import com.xliic.openapi.snippets.SnippetIDs;
import com.xliic.openapi.snippets.SnippetLayout;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.SimpleNode;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.IRegion;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.texteditor.ITextEditor;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.LinkedHashMap;

import static com.xliic.openapi.OpenApiPanelKeys.*;

public class AddSnippetAction extends AnJAction implements DumbAware {

  private final DefaultMutableTreeNode node;
  private final Snippet snippet;
  private final String title;

  public AddSnippetAction(String title, Snippet snippet, DefaultMutableTreeNode node, Icon icon) {
    super(title, "", icon);
    this.node = node;
    this.snippet = snippet;
    this.title = title;
    update();
  }

  @Override
  public void update(@NotNull AnJActionEvent e) {

    if (!snippet.available()) {
      e.getPresentation().setEnabled(false);
      return;
    }

    BaseNode o = (BaseNode) node.getUserObject();
    if (!(o instanceof PanelNode) && PATHS.equals(((SimpleNode) o).getParentName())) {
      int count = node.getChildCount();
      for (int i = 0 ; i < count ; i++) {
        DefaultMutableTreeNode p = (DefaultMutableTreeNode) node.getChildAt(i);
        SimpleNode oc = (SimpleNode) p.getUserObject();
        if (title.equals(oc.getName())) {
          e.getPresentation().setEnabled(false);
          break;
        }
      }
      return;
    }

    if ((o instanceof PanelNode) && GENERAL.equals(o.getName()) && e.getProject() != null) {

      VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(e.getProject());
      if (file == null) {
        e.getPresentation().setEnabled(false);
        return;
      }

      ASTService astService = ASTService.getInstance(e.getProject());
      OpenApiVersion version = ASTService.getOpenAPIVersion(e.getProject(), file);
      Node root = astService.getRootNode(file);

      if (SnippetIDs.INFO.equals(snippet.getId()) || SnippetIDs.INFO_YAML.equals(snippet.getId())) {
        e.getPresentation().setEnabled(root.find(INFO_POINTER) == null);
      }
      else if (version == OpenApiVersion.V2) {
        if (SnippetIDs.HOST.equals(snippet.getId()) || SnippetIDs.HOST_YAML.equals(snippet.getId())) {
          e.getPresentation().setEnabled(root.find(HOST_POINTER) == null);
        }
        else if (SnippetIDs.BASE_PATH.equals(snippet.getId()) || SnippetIDs.BASE_PATH_YAML.equals(snippet.getId())) {
          e.getPresentation().setEnabled(root.find(BASE_PATH_POINTER) == null);
        }
      }
    }
  }

  @SuppressWarnings("serial")
@Override
  public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {

    Project project = anActionEvent.getProject();
    if (project == null) {
      return;
    }
    VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
    if (file == null) {
      return;
    }
    FileEditor fileEditor = FileEditorManager.getInstance(project).getSelectedEditor(file);
    if (fileEditor == null) {
      return;
    }

    BaseNode o = (BaseNode) node.getUserObject();
    OpenApiFileType fileType = OpenApiUtils.getFileType(file);
    boolean isJson = (fileType == OpenApiFileType.Json);

    int innerPadding = OpenApiUtils.getPadding(node, fileType);
    int padding = isJson ? 2 * innerPadding : innerPadding;
    int line = o.getRange().getLine();
    boolean isSimpleNode = (o instanceof SimpleNode);

    final SnippetLayout layout = new SnippetLayout(padding, innerPadding, false, o.getName(), true, null);

    if (isSimpleNode || ((PanelNode) o).exists()) {

      layout.setPanel(null);
      String container = snippet.getContainer();

      if (container == null) {
        layout.setContainerExists(true);
        layout.setComma(node.getChildCount() > 0);
        int n = isSimpleNode ? 0 : 1;
        n = isJson ? n + 1 : n;
        layout.setPadding((n + o.getLevel()) * innerPadding);
      }
      else {
        int count = node.getChildCount();
        for (int i = 0; i < count; i++) {
          DefaultMutableTreeNode p = (DefaultMutableTreeNode) node.getChildAt(i);
          if (container.equals(((SimpleNode) p.getUserObject()).getName())) {
            layout.setContainerExists(true);
            layout.setComma(p.getChildCount() > 0);
            layout.setPadding(isJson ? (3 + o.getLevel()) * innerPadding : (2 + o.getLevel()) * innerPadding);
            line = ((SimpleNode) p.getUserObject()).getRange().getLine();
            break;
          }
        }
      }
    }
    else {
      if (GENERAL.equals(o.getName())) {

        ASTService astService = ASTService.getInstance(project);
        Node root = astService.getRootNode(file);
        OpenApiVersion version = astService.getOpenAPIVersion(file.getPath());
        Node target = root.find(getMainPathKey(version));

        layout.setPanel(null);
        layout.setContainerExists(true);
        layout.setComma(true);
        layout.setPadding(isJson ? innerPadding : 0);
        line = target.getRange().getLine();
      }
      else {
        DefaultMutableTreeNode nextPanel = OpenApiUtils.getFirstNotEmptyPanel(node);
        String container = snippet.getContainer();
        layout.setContainerExists(container == null);
        layout.setPadding(isJson ? innerPadding : 0);
        if (nextPanel == null) {
          return;
        }
        else {
          layout.setComma(true);
          line = ((SimpleNode) nextPanel.getUserObject()).getRange().getLine() - 1;
        }
      }
    }

    if (!(o instanceof PanelNode) && PATHS.equals(((SimpleNode) o).getParentName())) {
      layout.setIndexToValueMap(new LinkedHashMap<>() {{
        put(0, title);
      }});
    }

	ITextEditor editor = (ITextEditor) EclipseUtil.getCurrentEditor();
	if (editor == null) {
		return;
	}
	IEditorInput input = editor.getEditorInput();
	if (!EclipseUtil.isSupported(input)) {
		return;
	}
	IDocument doc = EclipseUtil.getDocument(input);
	try {
		IRegion reg = doc.getLineInformation(line + 1);
		String text = snippet.getText(layout);
		doc.replace(reg.getOffset(), 0, text);
	} catch (BadLocationException e) {
		e.printStackTrace();
	}
  }
}
