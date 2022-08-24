package com.xliic.core.application;

import org.jetbrains.annotations.NotNull;

public class ReadAction {

    public static <E extends Runnable> void run(@NotNull Runnable action) {
        action.run();
    }
}
