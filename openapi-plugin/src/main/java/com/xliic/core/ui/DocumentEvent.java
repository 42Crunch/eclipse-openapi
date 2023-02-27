package com.xliic.core.ui;

import java.util.EventObject;

import org.jetbrains.annotations.NotNull;

public class DocumentEvent {

    @NotNull
    private final EventObject event;

    public DocumentEvent(@NotNull EventObject event) {
        this.event = event;
    }

    @NotNull
    public EventObject gerEvent() {
        return event;
    }
}
