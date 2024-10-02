package com.xliic.openapi.services;

import static com.xliic.openapi.ToolWindowId.TRY_IT;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.core.services.ITryItService;
import com.xliic.openapi.environment.EnvService;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.PrefsService;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.utils.WindowUtils;

public final class TryItService implements ITryItService {

    private final Project project;

    public TryItService(@NotNull Project project) {
        this.project = project;
    }

    public static TryItService getInstance(@NotNull Project project) {
        return project.getService(TryItService.class);
    }

    public void createOrActiveTryItWindow(@NotNull TryItOperation payload) {
        EnvService envService = EnvService.getInstance(project);
        PrefsService prefsService = PrefsService.getInstance(project);
        Environment env = envService.getEnv();
        Preferences prefs = prefsService.getPreferences(payload.getPsiFile().getVirtualFile());
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, TRY_IT, () ->
                project.getMessageBus().syncPublisher(TryItListener.TOPIC).tryOperation(payload, prefs, env));
        });
    }
}
