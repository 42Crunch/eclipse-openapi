package com.xliic.core.util;

import org.eclipse.swt.widgets.Display;
import org.jetbrains.annotations.NotNull;

public class SwingUtilities {

    public static void invokeLater(@NotNull Runnable runnable) {
        Display.getDefault().asyncExec(runnable);
    }
}
