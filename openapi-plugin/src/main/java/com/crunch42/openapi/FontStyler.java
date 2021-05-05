package com.crunch42.openapi;

import org.eclipse.jface.viewers.StyledString.Styler;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.TextStyle;

public class FontStyler extends Styler {
	
    private final Font font;
    private Styler styler;
    
    public FontStyler(Font font) {
        this.font = font;
    }
    
    public FontStyler(Font font, Styler styler) {
        this(font);
        this.styler = styler;
        
    }
    
    @Override
    public void applyStyles(TextStyle textStyle) {
        if (font!=null) {
            textStyle.font = font;
        }
        if (styler!=null) {
            styler.applyStyles(textStyle);
        }
    }
}
