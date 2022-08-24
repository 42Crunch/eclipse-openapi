package com.xliic.core.command;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;

public class WriteCommandAction {

    public interface Builder {
        <E extends Throwable> void run(@NotNull Runnable runnable) throws E;
    }

    private static final class BuilderImpl implements Builder {

        private final Project project;

        public BuilderImpl(@NotNull Project project) {
            this.project = project;
        }

        @Override
        public <E extends Throwable> void run(@NotNull Runnable runnable) throws E {
            runWriteCommandAction(project, runnable);
        }
    }

    public static void runWriteCommandAction(@NotNull Project project, @NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }

    public static <T> T runWriteCommandAction(@NotNull Project project, @NotNull final Computable<T> computable) {
        return computable.get();
    }

    public static @NotNull Builder writeCommandAction(Project project) {
        return new BuilderImpl(project);
    }
}
