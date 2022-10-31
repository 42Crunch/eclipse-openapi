package com.xliic.openapi;

import java.awt.Color;
import java.util.HashMap;
import java.util.Map;

import javax.swing.UIManager;

import org.eclipse.e4.ui.css.swt.theme.ITheme;
import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

// The class must be used after theme has been changed

@SuppressWarnings("restriction")
public class ThemeColors {

    @NotNull
    public static Map<String, Object> getThemeColorValues() {

        Map<String, Object> colors = new HashMap<>();

        colors.put("kind", isStandardDarkTheme() ? "dark" : "light");

        setColor("foreground", "Panel.foreground", colors);
        setColor("disabledForeground", "Panel.foreground", colors);
        setColor("background", "Panel.background", colors);

        setColor("border", "Panel.background", colors);
        setColor("focusBorder", "Panel.background", colors);

        setColor("buttonBorder", "Button.background", colors);
        setColor("buttonBackground", "Button.background", colors);
        setColor("buttonForeground", "Button.foreground", colors);
        setColor("buttonHoverBackground", "Button.highlight", colors);

        setColor("buttonSecondaryBackground", "Button.background", colors);
        setColor("buttonSecondaryForeground", "Button.foreground", colors);
        setColor("buttonSecondaryHoverBackground", "Button.highlight", colors);

        setColor("inputBackground", "TextField.background", colors);
        setColor("inputForeground", "TextField.foreground", colors);
        setColor("inputBorder", "TextField.background", colors);

        setColor("tabBorder", "TabbedPane.background", colors);
        setColor("tabActiveBackground", "Panel.background", colors);
        setColor("tabActiveForeground", "TabbedPane.foreground", colors);
        setColor("tabInactiveBackground", "TabbedPane.background", colors);
        setColor("tabInactiveForeground", "TabbedPane.disabledForeground", colors);

        setColor("dropdownBackground", "List.background", colors);
        setColor("dropdownBorder", "List.background", colors);
        setColor("dropdownForeground", "List.foreground", colors);

        setColor("checkboxBackground", "CheckBox.background", colors);
        setColor("checkboxBorder", "CheckBox.background", colors);
        setColor("checkboxForeground", "CheckBox.foreground", colors);

        setColor("errorForeground", "Panel.foreground", colors);
        setColor("errorBackground", "Panel.background", colors);
        setColor("errorBorder", "Panel.background", colors);

        setColor("sidebarBackground", "ToolBar.background", colors);
        setColor("listActiveSelectionBackground", "List.selectionBackground", colors);
        setColor("listActiveSelectionForeground", "List.selectionForeground", colors);
        setColor("listHoverBackground", "List.selectionBackground", colors);

        return colors;
    }

    private static void setColor(String key, String uiKey, Map<String, Object> colors) {
        Color color = UIManager.getColor(uiKey);
        String decorationColor = getDecorationColor(key);
        if (decorationColor != null) {
            colors.put(key, decorationColor);
        } else if (color != null) {
            colors.put(key, toCSSColor(color));
        }
    }

    private static String toCSSColor(Color color) {
        return "#" + Integer.toHexString(color.getRed()) + Integer.toHexString(color.getGreen()) + Integer.toHexString(color.getBlue());
    }

    private static boolean isStandardDarkTheme() {
        IWorkbench workbench = PlatformUI.getWorkbench();
        IThemeEngine themeEngine = workbench.getService(IThemeEngine.class);
        ITheme theme = themeEngine.getActiveTheme();
        return theme.getId().contains("dark");
    }

    private static boolean isStandardLightTheme() {
        return !isStandardDarkTheme();
    }

    private static boolean isLightBasedTheme() {
        return isStandardLightTheme();
    }

    private static String getDecorationColor(String key) {
        boolean lightBasedTheme = isLightBasedTheme();
        switch (key) {
        case "background":
        case "tabActiveBackground":
            return lightBasedTheme ? "#ffffff" : "#1e1e1e";
        case "foreground":
        case "disabledForeground":
            return lightBasedTheme ? "#000000" : "#f3f3f3";
        case "border":
        case "buttonBorder":
            return lightBasedTheme ? "#a5a5a5" : "#8e8e8e";
        case "focusBorder":
            return lightBasedTheme ? "#0090f1" : "#007fd4";
        case "errorForeground":
            return lightBasedTheme ? "#a1260d" : "#f48771";
        case "errorBackground":
            return lightBasedTheme ? "#f2dede" : "#5a1d1d";
        case "errorBorder":
            return "#be1100";
        case "tabInactiveBackground":
            return lightBasedTheme ? "#ececec" : "#2d2d2d";
        case "buttonBackground":
            return lightBasedTheme ? "#007acc" : "#0e639c";
        case "buttonHoverBackground":
            return lightBasedTheme ? "#0062a3" : "#1177bb";
        case "buttonSecondaryBackground":
            return lightBasedTheme ? "#9fa5ae" : "#3a3d41";
        case "buttonSecondaryHoverBackground":
            return lightBasedTheme ? "#4c5561" : "#45494e";
        case "checkboxBackground":
            return lightBasedTheme ? "#ffffff" : "#3c3c3c";
        case "checkboxBorder":
            return lightBasedTheme ? "#cecece" : "#dee2e6";
        case "checkboxForeground":
            return lightBasedTheme ? "#000000" : "#f0f0f0";
        }
        return null;
    }
}
