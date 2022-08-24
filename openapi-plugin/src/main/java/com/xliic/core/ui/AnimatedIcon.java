package com.xliic.core.ui;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Icon;
import com.xliic.core.util.IconLoader;

public class AnimatedIcon {

    public static final class Default {
        public static final @NotNull Icon INSTANCE = IconLoader.findIcon("/icons/progress.png");
    }
}
