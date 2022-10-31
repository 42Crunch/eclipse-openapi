package com.xliic.core.wm;

import org.jetbrains.annotations.NotNull;

public class ToolWindowAnchor {

    public static final @NotNull ToolWindowAnchor TOP = new ToolWindowAnchor("top", "action.text.anchor.top", "action.text.anchor.top.capitalized");
    public static final @NotNull ToolWindowAnchor LEFT = new ToolWindowAnchor("left", "action.text.anchor.left",
            "action.text.anchor.left.capitalized");
    public static final @NotNull ToolWindowAnchor BOTTOM = new ToolWindowAnchor("bottom", "action.text.anchor.bottom",
            "action.text.anchor.bottom.capitalized");
    public static final @NotNull ToolWindowAnchor RIGHT = new ToolWindowAnchor("right", "action.text.anchor.right",
            "action.text.anchor.right.capitalized");

    private final @NotNull String myText;
    private final @NotNull String bundleKey;
    private final @NotNull String capitalizedBundleKey;

    private ToolWindowAnchor(@NotNull String text, @NotNull String bundleKey, @NotNull String capitalizedBundleKey) {
        this.bundleKey = bundleKey;
        this.capitalizedBundleKey = capitalizedBundleKey;
        this.myText = text;
    }
}
