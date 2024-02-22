package com.xliic.openapi.preferences.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class LoadPreferences extends WebAppConsume {

    @NotNull
    private final Preferences prefs;

    public LoadPreferences(@NotNull Preferences prefs) {
        super("loadPrefs");
        this.prefs = prefs;
    }

    @Override
    protected @Nullable Object getPayload() {
        return prefs.getPreferences();
    }
}
