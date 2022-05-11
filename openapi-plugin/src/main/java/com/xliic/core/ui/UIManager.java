package com.xliic.core.ui;

import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.eclipse.e4.ui.css.swt.theme.ITheme;
import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.jetbrains.annotations.NotNull;

@SuppressWarnings("restriction")
public class UIManager {
	
	public static LookAndFeelInfo getLookAndFeel() {
		IWorkbench workbench = PlatformUI.getWorkbench();
    	IThemeEngine themeEngine = workbench.getService(IThemeEngine.class);
		ITheme theme = themeEngine.getActiveTheme();
		String name = isDarkTheme(theme) ? "Darcula" : "Default";
		return new LookAndFeelInfo(name);
	}

	public static boolean isDarkTheme(@NotNull ITheme theme) {
		String label = theme.getLabel();
		return (label != null) && label.contains("Dark");
	}

    public static class LookAndFeelInfo {
    	
        private String name;

        public LookAndFeelInfo(String name) {
            this.name = name;
        }

        public String getName() {
            return name;
        }
    }   
}
