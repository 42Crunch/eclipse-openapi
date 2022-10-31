package com.xliic.core.ide.ui;

import org.eclipse.e4.ui.css.swt.theme.ITheme;

import com.xliic.core.ui.UIManager;

@SuppressWarnings("restriction")
public class LafManager {

    private final ITheme theme;

    public LafManager(ITheme theme) {
        this.theme = theme;
    }

    public UIManager.LookAndFeelInfo getCurrentLookAndFeel() {
        String name = UIManager.isDarkTheme(theme) ? "Darcula" : "Default";
        return new UIManager.LookAndFeelInfo(name);
    }
}
