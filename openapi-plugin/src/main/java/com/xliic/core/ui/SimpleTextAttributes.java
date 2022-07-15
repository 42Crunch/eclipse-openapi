package com.xliic.core.ui;

import java.awt.Color;

public final class SimpleTextAttributes {
	
    public static final int STYLE_PLAIN = 0;
    public static final int STYLE_BOLD = 1;
    
    public static final SimpleTextAttributes REGULAR_ATTRIBUTES = new SimpleTextAttributes(0, (Color) null);
    public static final SimpleTextAttributes REGULAR_BOLD_ATTRIBUTES = new SimpleTextAttributes(1, (Color) null);
    public static final SimpleTextAttributes GRAYED_ATTRIBUTES = new SimpleTextAttributes(0, Color.GRAY);
    
    private final Color myFgColor;
    private final int myStyle;
    
    public SimpleTextAttributes(int style, Color fgColor) {
        myStyle = style;
        myFgColor = fgColor;
    }
    
    public Color getFgColor() {
        return this.myFgColor;
    }
    
    public int getStyle() {
        return this.myStyle;
    }
}
