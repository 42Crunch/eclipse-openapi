package com.xliic.openapi.config.jcef.messages;

import java.io.IOException;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public abstract class TestConnection extends WebAppProduce {

    @NotNull
    protected final Project project;
    @Nullable
    private String message;

    public TestConnection(@NotNull String name, @NotNull Project project) {
        super(name);
        this.project = project;
        message = null;
    }

    @Nullable
    protected abstract String preTestAssert();

    @Nullable
    protected abstract String test() throws IOException;

    protected abstract void notify(boolean success, @NotNull String message);

    @Override
    public void run(@Nullable Object payload) {
        message = preTestAssert();
        if (message != null) {
            ApplicationManager.getApplication().invokeLater(() -> notify(false, message));
            return;
        }
        try {
            message = test();
            if (message == null) {
                ApplicationManager.getApplication().invokeLater(() -> notify(true, ""));
            } else {
                ApplicationManager.getApplication().invokeLater(() -> notify(false, message));
            }
        } catch (Exception e) {
            ApplicationManager.getApplication().invokeLater(() -> notify(false, e.toString()));
        }
    }
}
