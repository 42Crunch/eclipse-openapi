package com.xliic.openapi.outline.actions;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnJAction;
import com.xliic.core.actionSystem.AnJActionEvent;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileEditor;
import com.xliic.core.fileEditor.FileEditorManager;
import com.xliic.core.fileEditor.TextEditor;
import com.xliic.core.icons.AllIcons;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.outline.OutlineSortTreeModel;
import com.xliic.openapi.outline.ui.OutlinePanel;
import com.xliic.openapi.services.ASTService;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;
import com.xliic.openapi.parser.ast.node.Node;

import javax.swing.tree.DefaultMutableTreeNode;

public class TargetAction extends AnJAction implements DumbAware {

	@NotNull
	private final Project project;
	@NotNull
	private final OutlinePanel panel;

	public TargetAction(@NotNull Project project, @NotNull OutlinePanel panel) {
		super("Select Node", "Select node", AllIcons.General.Locate);
		this.project = project;
		this.panel = panel;
	}

	@Override
	public @NotNull ActionUpdateThread getActionUpdateThread() {
		return ActionUpdateThread.BGT;
	}

	@Override
	public void update(@NotNull AnJActionEvent event) {
		VirtualFile file = Utils.getSelectedOpenAPIFile(project);
		if (file != null) {
			Node root = ASTService.getInstance(project).getRootNode(file.getPath());
			event.getPresentation().setEnabled(root != null && getTreeRoot() != null && getOffset(file) >= 0);
		} else {
			event.getPresentation().setEnabled(false);
		}
	}

	@Override
	public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
		VirtualFile file = Utils.getSelectedOpenAPIFile(project);
		if (file != null) {
			panel.targetTree(getTreeRoot(), getOffset(file));
		}
	}

	private DefaultMutableTreeNode getTreeRoot() {
		OutlineSortTreeModel model = (OutlineSortTreeModel) panel.getTree().getModel();
		return (DefaultMutableTreeNode) model.getRoot();
	}

	private int getOffset(VirtualFile file) {
		FileEditor fileEditor = FileEditorManager.getInstance(project).getSelectedEditor(file);
		if (fileEditor != null) {
			Editor editor = ((TextEditor) fileEditor).getEditor();
			return editor.logicalPositionToOffset(editor.getCaretModel().getLogicalPosition());
		}
		return -1;
	}
}
