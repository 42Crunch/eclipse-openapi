package com.xliic.core.application;

import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.util.messages.MessageBus;

public class ApplicationManager implements Application {

    private final static ApplicationManager applicationManager = new ApplicationManager();

    public static ApplicationManager getApplication() {
        return applicationManager;
    }

    @Override
    public @NotNull MessageBus getMessageBus() {
        return Project.getInstance().getMessageBus();
    }

    @Override
    public void invokeLater(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public void invokeAndWait(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public void invokeAndWait(@NotNull Runnable runnable, @NotNull ModalityState state) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public void invokeLaterOnWriteThread(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public void runReadAction(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public <T> T runReadAction(@NotNull Computable<T> computable) {
        return computable.get();
    }

    @Override
    public void runWriteAction(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    @Override
    public void executeOnPooledThread(@NotNull Runnable runnable) {
        new Thread(runnable).start();
    }

    @SuppressWarnings("unchecked")
    public <T> T getService(@NotNull Class<T> serviceClass) {
        for (Class<?> serviceInterface : serviceClass.getInterfaces()) {
            String name = serviceInterface.getSimpleName();
            if (name.startsWith("I") && name.endsWith("Service")) {
                return (T) PlatformUI.getWorkbench().getService(serviceInterface);
            }
        }
        return null;
    }
}
