package com.xliic.openapi.webapp.messages;

import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.eclipse.e4.ui.css.swt.theme.ITheme;
import org.eclipse.e4.ui.css.swt.theme.IThemeEngine;
import org.eclipse.swt.graphics.Color;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.UIManager;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.WebAppColor;

@SuppressWarnings("restriction")
public class ChangeTheme extends WebAppConsume {

    private static final Map<String, Set<String>> KIND_TO_THEMES = new HashMap<>();
    private static final Map<String, String> KIND_DEFAULT_THEMES = new HashMap<>();
    private static final Map<String, List<WebAppColor>> THEME_COLORS = new HashMap<>();

    static {
        String text = NetUtils.getWebAppResource(ChangeTheme.class, "colors.json");
        Node root = Objects.requireNonNull(Utils.getJsonAST(text));
        Node kind = Objects.requireNonNull(root.getChild("kind"));
        for (Node node : kind.getChildren()) {
            Set<String> result = new HashSet<>();
            for (Node child : node.getChildren()) {
                result.add(child.getValue());
            }
            KIND_TO_THEMES.put(node.getKey(), result);
        }
        Node themes = Objects.requireNonNull(root.getChild("themes"));
        for (Node theme : themes.getChildren()) {
            String themeId = Objects.requireNonNull(theme.getChildValue("name"));
            List<WebAppColor> colors = new LinkedList<>();
            for (Node color: Objects.requireNonNull(theme.getChild("colors")).getChildren()) {
                colors.add(new WebAppColor(color));
            }
            THEME_COLORS.put(themeId, colors);
            String defaultKind = theme.getChildValue("default");
            if (defaultKind != null) {
                KIND_DEFAULT_THEMES.put(defaultKind, themeId);
            }
        }
    }

    @NotNull
    private final UIManager manager;

    public ChangeTheme(@NotNull UIManager manager) {
        super("changeTheme");
        this.manager = manager;
    }

    @Override
    protected @NotNull Map<String, Object> getPayload() {
        return getChangeThemePayload(manager);
    }

    public static Map<String, Object> getChangeThemePayload(@NotNull UIManager manager) {
        Map<String, Object> payload = new HashMap<>();
        String kind = getKind(manager);
        payload.put("kind", kind);
        Map<String, Object> colors = new HashMap<>();
        String themeId = getCurrentScheme().getId();
        if (THEME_COLORS.containsKey(themeId)) {
            setColors(themeId, colors);
        } else {
            // Get all colors from the default theme
            setColors(KIND_DEFAULT_THEMES.get(kind), colors);
        }
        if (isCustomBackgroundTheme(themeId) && !"light".equals(kind)) {
            updateColor("background", "Panel.background", colors, manager);
            updateColor("sidebarBackground", "Panel.background", colors, manager);
        }
        // Set scrollbar colors
        colors.put("scrollbarThumbBackground", colors.get("border"));
        colors.put("scrollbarTrackBackground", colors.get("background"));
        payload.put("theme", colors);
        return payload;
    }
    
    public static boolean isLightTheme() {
        return "light".equals(getKind(UIManager.getInstance()));
    }

	private static boolean isCustomBackgroundTheme(String themeId) {
        return !isWhiteBackgroundTheme(themeId) && !isDarkBackgroundTheme(themeId);
    }

    private static boolean isWhiteBackgroundTheme(String themeId) {
        return "org.eclipse.e4.ui.css.theme.e4_default".equals(themeId) || "org.eclipse.e4.ui.css.theme.e4_classic".equals(themeId);
    }

	private static boolean isDarkBackgroundTheme(String themeId) {
        return "org.eclipse.e4.ui.css.theme.e4_dark".equals(themeId) || "org.eclipse.e4.ui.css.theme.high-contrast".equals(themeId);
    }

    private static void setColors(String themeId, Map<String, Object> colors) {
        for (WebAppColor color: THEME_COLORS.get(themeId)) {
            colors.put(color.getId(), color.getValue());
        }
    }

    private static void updateColor(String key, String uiKey, Map<String, Object> colors, UIManager manager) {
        Color color = manager.getColor(uiKey);
        if (color != null) {
            colors.put(key, toHex(color));
        }
    }

    private static ITheme getCurrentScheme() {
        IThemeEngine themeEngine = PlatformUI.getWorkbench().getService(IThemeEngine.class);
        return themeEngine.getActiveTheme();
    }

    private static String getKind(UIManager manager) {
        String kind = getKindFromScheme(getCurrentScheme());
        if (kind != null) {
            return kind;
        }
        Color color = manager.getColor("Panel.background");
        if (color != null) {
            int grey = (int) ((color.getRed() + color.getGreen() + color.getBlue()) / 3.0);
            return 100 <= grey ? "light" : (grey <= 10 ? "highContrast" : "dark");
        }
        return "light";
    }

    private static String getKindFromScheme(ITheme scheme) {
        if (scheme == null) {
            return null;
        }
        String name = scheme.getId();
        for (Map.Entry<String, Set<String>> entry : KIND_TO_THEMES.entrySet()) {
            if (entry.getValue().contains(name)) {
                return entry.getKey();
            }
        }
        return null;
    }

    private static String toHex(Color color) {
        return "#" + Integer.toHexString(color.getRed()) + Integer.toHexString(color.getGreen()) + Integer.toHexString(color.getBlue());
    }
}
