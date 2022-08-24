package com.xliic.core.startup;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;

public interface StartupActivity {

    public interface DumbAware {

        public void runActivity(@NotNull Project project);
    }
}
