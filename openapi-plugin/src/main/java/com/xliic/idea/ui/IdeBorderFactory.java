package com.xliic.idea.ui;

import javax.swing.border.TitledBorder;

public class IdeBorderFactory {
	
    public static TitledBorder createTitledBorder(String title) {
        return new TitledBorder(title);
    }
}
