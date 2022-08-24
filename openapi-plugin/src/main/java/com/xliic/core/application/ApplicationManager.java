package com.xliic.core.application;

import org.eclipse.swt.widgets.Display;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.util.messages.MessageBus;

public class ApplicationManager {

    private final static ApplicationManager applicationManager = new ApplicationManager();

    public static ApplicationManager getApplication() {
        return applicationManager;
    }

    @NotNull
    public MessageBus getMessageBus() {
        return Project.getInstance().getMessageBus();
    }

    public void invokeLater(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    public void invokeAndWait(@NotNull Runnable runnable, @NotNull ModalityState state) {
        Display.getDefault().asyncExec(runnable);
    }

    public void invokeLaterOnWriteThread(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    public void runReadAction(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    public <T> T runReadAction(@NotNull Computable<T> computable) {
        return computable.get();
    }

    public void runWriteAction(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    public void executeOnPooledThread(@NotNull Runnable runnable) {
        Thread thread = new Thread(runnable);
        thread.start();
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
