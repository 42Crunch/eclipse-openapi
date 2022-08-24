package com.xliic.core.ui;

public class JBColor extends Color {

    public static final JBColor BLACK = new JBColor(0x000000, 0x000000);
    public static final JBColor GRAY = new JBColor(0x808080, 0x808080);

    public JBColor(int rgb, int darkRGB) {
        super(rgb, darkRGB);
    }
}
