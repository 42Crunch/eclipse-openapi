package com.xliic.openapi.preferences;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public final class PrefsService implements IPrefsService, Disposable {

    @NotNull
    private final Map<String, Preferences> preferences = new HashMap<>();

    public static PrefsService getInstance(@NotNull Project project) {
        return project.getService(PrefsService.class);
    }

    @NotNull
    public Preferences getPreferences(@NotNull VirtualFile file) {
        return getPreferences(file.getPath());
    }

    public void savePrefs(@NotNull String fileName, @NotNull Preferences prefs) {
        preferences.put(fileName, getPreferences(fileName).merge(prefs));
    }

    @Override
    public void dispose() {
        preferences.clear();
    }

    private Preferences getPreferences(@NotNull String fileName) {
        return preferences.getOrDefault(fileName, new Preferences());
    }
}
