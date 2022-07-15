package com.xliic.core.actionSystem;

import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.expressions.IEvaluationContext;
import org.eclipse.ui.IEditorInput;
import org.eclipse.ui.IEditorPart;
import org.eclipse.ui.ISources;
import org.eclipse.ui.handlers.HandlerUtil;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.editor.Editor;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.VirtualFile;

public class AnActionEvent {

	private boolean enabled;
	private final ExecutionEvent event;
	private final IEvaluationContext context;

	public AnActionEvent(@NotNull ExecutionEvent event) {
		this.event = event;
		this.context = null;
		this.enabled = true;
	}
	
	public AnActionEvent(@NotNull Object context) {
		this.event = null;
		this.context = context instanceof IEvaluationContext ? (IEvaluationContext) context : null;
		this.enabled = true;
	}

	public Project getProject() {
		return Project.getInstance();
	}

	public AnActionEvent getPresentation() {
		return this;
	}

	public void setEnabled(boolean enabled) {
		this.enabled = enabled;
	}
	
	public boolean isEnabled() {
		return enabled;
	}
	
	public void setVisible(boolean visible) {
		setEnabled(visible);
	}

	@Nullable
	@SuppressWarnings("unchecked")
	public <T> T getData(@NotNull DataKey<T> key) {
		if (key.equals(CommonDataKeys.EDITOR)) {
			return (T) getEditor();
		} else if (key.equals(CommonDataKeys.VIRTUAL_FILE)) {
			return (T) getVirtualFile();
		} else if (key.equals(CommonDataKeys.PSI_FILE)) {
			return (T) getPsiFile();	
		} else {
			return null;
		}
	}

	private Editor getEditor() {
		Object editor = null;
		if (event != null) {
			editor = HandlerUtil.getActiveEditor(event);
		} else if (context != null) {
			editor = context.getVariable(ISources.ACTIVE_EDITOR_NAME);
		}
		if (editor instanceof IEditorPart) {
			IEditorInput input = ((IEditorPart) editor).getEditorInput();
			if (EclipseUtil.isSupported(input)) {
				return new Editor(getProject(), input);
			}
		}
		return null;
	}

	private VirtualFile getVirtualFile() {
		Editor editor = getEditor();
		if (editor != null) {
			return editor.getVirtualFile();
		}
		return null;
	}
	
	private PsiFile getPsiFile() {
		VirtualFile file = getVirtualFile();
		return file == null ? null : new PsiFile(getProject(), file);
	}
}
