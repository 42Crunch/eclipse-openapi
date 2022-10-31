package com.xliic.core.actionSystem;

import org.jetbrains.annotations.NotNull;

public class Separator extends AnJAction {

    public Separator() {
        super(null, null, null);
    }

    @Override
    public void actionPerformed(@NotNull AnJActionEvent anActionEvent) {
    }

    @NotNull
    public static Separator create() {
        return new Separator();
    }
}
