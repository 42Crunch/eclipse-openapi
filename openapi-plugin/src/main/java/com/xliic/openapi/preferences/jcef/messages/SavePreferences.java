package com.xliic.openapi.preferences.jcef.messages;

import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class SavePreferences extends WebAppProduce {

    public static final String PSI_FILE_PATH = "com.xliic.openapi.preferences.jcef.messages.SavePreferences[PsiFilePath]";

    @NotNull
    private final Project project;
    @NotNull
    private final Map<String, Object> cache;

    public SavePreferences(@NotNull Project project, @NotNull Map<String, Object> cache) {
        super("savePrefs");
        this.project = project;
        this.cache = cache;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Object value = cache.get(PSI_FILE_PATH);
            if (value != null) {
                PsiFile psiFile = Utils.getPsiFile(project, (String) value);
                if (psiFile != null) {
                    VirtualFile file = psiFile.getVirtualFile();
                    if (file != null) {
                        PrefsService prefsService = PrefsService.getInstance(project);
                        prefsService.savePrefs(file.getPath(), new Preferences((Map<String, Object>) payload));
                    }
                }
            }
        }
    }
}
