package com.xliic.openapi;

import java.awt.Color;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.swing.UIManager;

import org.eclipse.e4.ui.css.swt.theme.ITheme;
import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.ui.IWorkbench;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

@SuppressWarnings("restriction")
public class ThemeColors {
	
	private static final String LIGHT = "light";
	private static final String DARK = "dark";
	private static final String HIGH_CONTRAST = "highContrast";
	private static final String DEFAULT_THEME = LIGHT;
	private static final String NOT_FOUND_COLOR = "#ff0000";
	private static final List<String> THEMES = List.of(LIGHT, DARK, HIGH_CONTRAST);
	private static final Map<String, List<String>> COLORS_SCHEME = new HashMap<>();
	private static final int LIGHT_THRESHOLD = 100;
	
	static {
		registerColor("foreground", "#000", "#bbbbbb", "#bbbbbb");
		registerColor("disabledForeground", "#000", "#bbbbbb", "#bbbbbb");
		registerColor("background", "#ffffff", "#3c3f41", "#3c3f41");
		registerColor("border", "#a5a5a5", "#444444", "#444444");
		registerColor("focusBorder", "#0090f1", "#007fd4", "#007fd4");
		registerColor("errorForeground", "#a1260d", "#f48771", "#f48771");
		registerColor("errorBackground", "#f2dede", "#5a1d1d", "#5a1d1d");
		registerColor("errorBorder", "#be1100", "#be1100", "#be1100");
		registerColor("inputBackground", "#ffffff", "#3c3c3c", "#3c3c3c");
		registerColor("inputForeground", "#616161", "#cccccc", "#cccccc");
		registerColor("buttonBorder", "#007acc", "#0e639c", "#0e639c");
		registerColor("buttonBackground", "#007acc", "#0e639c", "#0e639c");
		registerColor("buttonForeground", "#ffffff", "#ffffff", "#ffffff");
		registerColor("buttonHoverBackground", "#0062a3", "#1177bb", "#1177bb");
		registerColor("buttonSecondaryForeground", "#ffffff", "#ffffff", "#ffffff");
		registerColor("buttonSecondaryBackground", "#5f6a79", "#3a3d41", "#3a3d41");
		registerColor("buttonSecondaryHoverBackground", "#4c5561", "#45494e", "#45494e");
		registerColor("checkboxBackground", "#ffffff", "#3c3c3c", "#3c3c3c");
		registerColor("checkboxBorder", "#cecece", "#dee2e6", "#dee2e6");
		registerColor("checkboxForeground", "#000000", "#f0f0f0", "#f0f0f0");
		registerColor("listActiveSelectionBackground", "#0060c0", "#04395e", "#04395e");
		registerColor("listActiveSelectionForeground", "#ffffff", "#ffffff", "#ffffff");
		registerColor("tabBorder", "#f3f3f3", "#252526", "#252526");
        registerColor("tabActiveBackground", "#ffffff", "#1e1e1e", "#1e1e1e");
        registerColor("tabActiveForeground", "#333333", "#ffffff", "#ffffff");
        registerColor("tabInactiveBackground", "#ececec", "#2d2d2d", "#2d2d2d");
        registerColor("tabInactiveForeground", "#333333", "#808187", "#808187");
	}

    @NotNull
    public static Map<String, Object> getThemeColorValues() {
        String themeKind = getThemeKind();
        Map<String, Object> colors = new HashMap<>();
        colors.put("kind", themeKind);

        setColor("foreground", "Panel.foreground", colors, themeKind);
        setColor("disabledForeground", "Panel.foreground", colors, themeKind);
        setColor("background", "Panel.background", colors, themeKind);

        setColor("border", "Panel.background", colors, themeKind);
        setColor("focusBorder", "Panel.background", colors, themeKind);

        setColor("buttonBorder", "Button.background", colors, themeKind);
        setColor("buttonBackground", "Button.background", colors, themeKind);
        setColor("buttonForeground", "Button.foreground", colors, themeKind);
        setColor("buttonHoverBackground", "Button.highlight", colors, themeKind);

        setColor("buttonSecondaryBackground", "Button.background", colors, themeKind);
        setColor("buttonSecondaryForeground", "Button.foreground", colors, themeKind);
        setColor("buttonSecondaryHoverBackground", "Button.highlight", colors, themeKind);

        setColor("inputBackground", "TextField.background", colors, themeKind);
        setColor("inputForeground", "TextField.foreground", colors, themeKind);
        setColor("inputBorder", "TextField.background", colors, themeKind);

        setColor("tabBorder", "TabbedPane.background", colors, themeKind);
        setColor("tabActiveBackground", "Panel.background", colors, themeKind);
        setColor("tabActiveForeground", "TabbedPane.foreground", colors, themeKind);
        setColor("tabInactiveBackground", "TabbedPane.background", colors, themeKind);
        setColor("tabInactiveForeground", "TabbedPane.disabledForeground", colors, themeKind);

        setColor("dropdownBackground", "List.background", colors, themeKind);
        setColor("dropdownBorder", "List.background", colors, themeKind);
        setColor("dropdownForeground", "List.foreground", colors, themeKind);

        setColor("checkboxBackground", "CheckBox.background", colors, themeKind);
        setColor("checkboxBorder", "CheckBox.background", colors, themeKind);
        setColor("checkboxForeground", "CheckBox.foreground", colors, themeKind);

        setColor("errorForeground", "Panel.foreground", colors, themeKind);
        setColor("errorBackground", "Panel.background", colors, themeKind);
        setColor("errorBorder", "Panel.background", colors, themeKind);

        setColor("sidebarBackground", "ToolBar.background", colors, themeKind);
        setColor("listActiveSelectionBackground", "List.selectionBackground", colors, themeKind);
        setColor("listActiveSelectionForeground", "List.selectionForeground", colors, themeKind);
        setColor("listHoverBackground", "List.selectionBackground", colors, themeKind);
        return colors;
    }

    private static void setColor(String key, String uiKey, Map<String, Object> colors, String themeKind) {
        String dColor = getDecorationColor(key, themeKind);
        if (dColor != null) {
            colors.put(key, dColor);
            return;
        }
        Color color = UIManager.getColor(uiKey);
        if (color != null) {
            colors.put(key, toHex(color));
            return;
        }
        colors.put(key, NOT_FOUND_COLOR);
    }

    private static String toHex(Color color) {
        return "#" + Integer.toHexString(color.getRed()) + 
        				Integer.toHexString(color.getGreen()) + 
        					Integer.toHexString(color.getBlue());
    }

    private static String getThemeId() {
        IWorkbench workbench = PlatformUI.getWorkbench();
        IThemeEngine themeEngine = workbench.getService(IThemeEngine.class);
        ITheme theme = themeEngine.getActiveTheme();
        return theme.getId();
    }
    
    private static String getThemeKind() {
        // Standard themes:
    	// org.eclipse.e4.ui.css.theme.e4_dark
    	// org.eclipse.e4.ui.css.theme.e4_classic
    	// org.eclipse.e4.ui.css.theme.e4_default
    	// org.eclipse.e4.ui.css.theme.high-contrast
        // Custom theme may have any name:
        // net.jeeeyul.eclipse.themes.custom
    	String themeId = getThemeId();
    	if (themeId.contains(DARK)) {
    		return DARK;
    	}
    	if (themeId.contains("default") || themeId.contains("classic") || themeId.contains(LIGHT)) {
    		return LIGHT;
    	}
    	if (themeId.contains("high-contrast")) {
    		return HIGH_CONTRAST;
    	}
        Color color = UIManager.getColor("Panel.background");
        if (color == null) {
        	return DEFAULT_THEME;
        }
        int m = (int) ((color.getRed() + color.getGreen() + color.getBlue()) / 3.0); 
        return m >= LIGHT_THRESHOLD ? LIGHT : DARK;
    }

	private static void registerColor(String key, String light, String dark, String highContrast) {
		if (!COLORS_SCHEME.containsKey(key)) {
			COLORS_SCHEME.put(key, List.of(light, dark, highContrast));
		}
	}

    private static String getDecorationColor(String key, String themeKind) {
    	List<String> colors = COLORS_SCHEME.get(key);
    	if (colors == null) {
            return null;
    	}
    	return colors.get(THEMES.indexOf(themeKind));
    }
}
