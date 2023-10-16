package com.xliic.core.ui;

import static org.eclipse.ui.PlatformUI.getWorkbench;

import org.eclipse.jface.viewers.StyledString.Styler;
import org.eclipse.swt.SWT;
import org.eclipse.swt.graphics.Font;
import org.eclipse.swt.graphics.FontData;
import org.eclipse.swt.graphics.TextStyle;
import org.jetbrains.annotations.Nullable;

public final class SimpleTextAttributes extends Styler {

    public static final int STYLE_PLAIN = 0;
    public static final int STYLE_BOLD = 1;
    public static final int STYLE_ITALIC = 2;

    public static final SimpleTextAttributes REGULAR_ATTRIBUTES = new SimpleTextAttributes(STYLE_PLAIN, null);
    public static final SimpleTextAttributes REGULAR_BOLD_ATTRIBUTES = new SimpleTextAttributes(STYLE_BOLD, null);
    public static final SimpleTextAttributes GRAYED_ATTRIBUTES = new SimpleTextAttributes(STYLE_PLAIN, JBColor.GRAY);
    public static final SimpleTextAttributes GRAY_ITALIC_ATTRIBUTES = new SimpleTextAttributes(STYLE_ITALIC, JBColor.GRAY);
    public static final SimpleTextAttributes GRAYED_BOLD_ATTRIBUTES = new SimpleTextAttributes(STYLE_BOLD, JBColor.GRAY);

    private static final Font FONT_BOLD = getFont(SWT.BOLD);
    private static final Font FONT_ITALIC = getFont(SWT.ITALIC);

    private final int styler;
    @Nullable
    private final Color fgColor;

    public SimpleTextAttributes(int style, @Nullable Color fgColor) {
        this.styler = style;
        this.fgColor = fgColor;
    }

    @Nullable
    public Color getFgColor() {
        return this.fgColor;
    }

    public int getStyle() {
        return styler;
    }

    @Override
    public void applyStyles(TextStyle textStyle) {
        if (styler == 1) {
            textStyle.font = FONT_BOLD;
        } else if (styler == 2) {
            textStyle.font = FONT_ITALIC;
        }
        if (fgColor != null) {
            textStyle.foreground = fgColor.getSwtGraphicsColor();
        }
    }

    private static Font getFont(int style) {
        Font font = getWorkbench().getDisplay().getSystemFont();
        FontData[] data = font.getFontData();
        for (int i = 0; i < data.length; i++) {
            data[i].setStyle(style);
        }
        return new Font(font.getDevice(), data);
    }
}
