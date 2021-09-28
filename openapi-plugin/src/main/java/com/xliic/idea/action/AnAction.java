package com.xliic.idea.action;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.eclipse.core.expressions.IEvaluationContext;

public abstract class AnAction extends AbstractHandler {

	public void setEnabled(boolean enabled) {
		setBaseEnabled(enabled);
	}

	@Override
	public Object execute(ExecutionEvent event) throws ExecutionException {
		actionPerformed(new AnActionEvent(this, event, null));
		return null;
	}

	@Override
	public void setEnabled(Object evaluationContext) {
		if (evaluationContext instanceof IEvaluationContext) {
			update(new AnActionEvent(this, null, (IEvaluationContext) evaluationContext));
		}
	}

	@Override
	public void dispose() {
	}

	public abstract void update(AnActionEvent event);

	public abstract void actionPerformed(AnActionEvent event);
}
