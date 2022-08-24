package com.xliic.core.ui;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.popup.JBPopupMember;

public class MouseEvent {

    private final JBPopupMember source;

    public MouseEvent(@NotNull JBPopupMember source) {
        this.source = source;
    }

    public JBPopupMember getSource() {
        return source;
    }
}
