package com.xliic.core.ui;

import java.util.HashMap;
import java.util.Map;

import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.swt.widgets.Shell;
import org.eclipse.ui.IWorkbenchWindow;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

@SuppressWarnings("restriction")
public class UIManager {

    @NotNull
    private final Map<String, org.eclipse.swt.graphics.Color> colors = new HashMap<>();

    private UIManager() {}

    private UIManager(Shell sh) {
        colors.put("Panel.foreground", sh.getForeground());
        colors.put("Panel.background", sh.getBackground());
    }

    @NotNull
    public static UIManager getInstance() {
        IWorkbenchWindow[] windows = PlatformUI.getWorkbench().getWorkbenchWindows();
        for (int i = 0; i < windows.length; i++) {
            Shell sh = windows[i].getShell();
            if (sh != null) {
                return new UIManager(sh);
            }
        }
        return new UIManager();
    }

    public org.eclipse.swt.graphics.Color getColor(@NotNull String key) {
        return colors.get(key);
    }

    public static boolean isDarkTheme() {
        IThemeEngine themeEngine = PlatformUI.getWorkbench().getService(IThemeEngine.class);
        String label = themeEngine.getActiveTheme().getLabel();
        return label != null && (label.contains("Dark") || label.contains("High Contrast"));
    }
}
