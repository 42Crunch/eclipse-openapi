package com.xliic.idea.action;

import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.expressions.IEvaluationContext;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.IFileEditorInput;
import org.eclipse.ui.ISources;
import org.eclipse.ui.handlers.HandlerUtil;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.editor.Editor;
import com.xliic.idea.file.VirtualFile;
import com.xliic.idea.project.Project;
import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class AnActionEvent {

	private final AnAction action;
	private final ExecutionEvent event;
	private final IEvaluationContext context;

	public AnActionEvent(@NotNull AnAction action, ExecutionEvent event, IEvaluationContext context) {
		this.action = action;
		this.event = event;
		this.context = context;
	}

	public Project getProject() {
		return OpenAPIAbstractUIPlugin.getInstance().getProject();
	}

	public AnActionEvent getPresentation() {
		return this;
	}

	public void setEnabled(boolean enabled) {
		action.setEnabled(enabled);
	}

	@Nullable
	@SuppressWarnings("unchecked")
	public <T> T getData(@NotNull DataKey<T> key) {
		if (key.equals(CommonDataKeys.EDITOR)) {
			return (T) getEditor();
		} else if (key.equals(CommonDataKeys.VIRTUAL_FILE)) {
			return (T) getVirtualFile();
		} else {
			return null;
		}
	}

	private Editor getEditor() {
		if (event != null) {
			IEditorPart editor = HandlerUtil.getActiveEditor(event);
			if (editor instanceof IEditorPart) {
				IEditorInput input = editor.getEditorInput();
				if (input instanceof IFileEditorInput) {
					return new Editor(getProject(), (IFileEditorInput) input);
				}
			}
		} else if (context != null) {
			Object editor = context.getVariable(ISources.ACTIVE_EDITOR_NAME);
			if (editor instanceof IEditorPart) {
				IEditorInput input = ((IEditorPart) editor).getEditorInput();
				if (input instanceof IFileEditorInput) {
					return new Editor(getProject(), (IFileEditorInput) input);
				}
			}
		}
		return null;
	}

	private VirtualFile getVirtualFile() {
		if (event != null) {
			IEditorPart editor = HandlerUtil.getActiveEditor(event);
			if (editor instanceof IEditorPart) {
				IEditorInput input = editor.getEditorInput();
				if (input instanceof IFileEditorInput) {
					return new VirtualFile(((IFileEditorInput) input).getFile());
				}
			}
		} else if (context != null) {
			Object editor = context.getVariable(ISources.ACTIVE_EDITOR_NAME);
			if (editor instanceof IEditorPart) {
				IEditorInput input = ((IEditorPart) editor).getEditorInput();
				if (input instanceof IFileEditorInput) {
					return new VirtualFile(((IFileEditorInput) input).getFile());
				}
			}
		}
		return null;
	}
}
