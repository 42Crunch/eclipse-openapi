package com.xliic.core.actionSystem;

import org.eclipse.core.commands.AbstractHandler;
import org.eclipse.core.commands.ExecutionEvent;
import org.eclipse.core.commands.ExecutionException;
import org.jetbrains.annotations.NotNull;

public abstract class AnAction extends AbstractHandler {

    @Override
    public Object execute(ExecutionEvent event) throws ExecutionException {
        actionPerformed(new AnActionEvent(event));
        return null;
    }

    @Override
    public void setEnabled(Object evaluationContext) {
        AnActionEvent event = new AnActionEvent(evaluationContext);
        update(event);
        boolean state = event.getPresentation().isEnabled();
        if (state != super.isEnabled()) {
            setBaseEnabled(state);
        }
    }

    protected void update(@NotNull AnActionEvent event) {}

    protected abstract void actionPerformed(@NotNull AnActionEvent event);

    protected abstract @NotNull ActionUpdateThread getActionUpdateThread();
}
