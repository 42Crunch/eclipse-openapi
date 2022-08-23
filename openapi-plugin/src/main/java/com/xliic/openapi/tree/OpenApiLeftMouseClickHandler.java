package com.xliic.openapi.tree;

import com.xliic.core.editor.Editor;
import com.xliic.core.editor.ScrollType;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.ui.treeStructure.MouseEvent;
import com.xliic.core.ui.treeStructure.Tree;
import com.xliic.core.util.EclipseUtil;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.ui.OpenApiFileTreePanel;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;

public class OpenApiLeftMouseClickHandler {

    private final OpenApiFileTreePanel panel;

    public OpenApiLeftMouseClickHandler(@NotNull OpenApiFileTreePanel panel) {
        this.panel = panel;
    }

    public void handle(MouseEvent event) {
        moveToSelectedNodeInEditor(panel.getProject(), panel.getTree());
    }

    public static void moveToSelectedNodeInEditor(@NotNull Project project, @NotNull Tree tree) {
        VirtualFile file = OpenApiUtils.getSelectedOpenAPIFile(project);
        if (file == null) {
            return;
        }
        DefaultMutableTreeNode node = (DefaultMutableTreeNode) tree.getLastSelectedPathComponent();
        if (node == null) {
            return;
        }
        BaseNode o = (BaseNode) node.getUserObject();
        if (o.getNode() == null) {
            return;
        }
        FileEditor fileEditor = FileEditorManager.getInstance(project).getSelectedEditor(file);
        if (fileEditor == null) {
            return;
        }
        Editor editor = ((TextEditor) fileEditor).getEditor();
        Range range = EclipseUtil.getSelectionRange(o.getNode());
        int offset = range.getOffset();
        editor.getCaretModel().moveToOffset(offset, range.getLength(), false);
        editor.getScrollingModel().scrollToCaret(ScrollType.CENTER_UP);
    }
}
