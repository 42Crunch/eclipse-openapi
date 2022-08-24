package com.xliic.core.ui;

import org.eclipse.swt.graphics.RGB;

public class Color {

    public static final Color DEFAULT_BACKGROUNG = new Color(0xFFFFFF, 0x2F2F2F);

    private final int rgb;
    private final int darkRGB;

    public Color(int rgb, int darkRGB) {
        this.rgb = rgb;
        this.darkRGB = darkRGB;
    }

    public org.eclipse.swt.graphics.Color getSwtGraphicsColor() {
        return getColor(isDarkTheme() ? darkRGB : rgb);
    }

    private org.eclipse.swt.graphics.Color getColor(int hex) {
        int r = (hex & 0xFF0000) >> 16;
        int g = (hex & 0xFF00) >> 8;
        int b = (hex & 0xFF);
        return new org.eclipse.swt.graphics.Color(new RGB(r, g, b));
    }

    private static boolean isDarkTheme() {
        String name = UIManager.getLookAndFeel().getName();
        return name.contains("Darcula") || name.contains("High contrast");
    }
}
