package com.xliic.openapi.environment;

import static com.xliic.openapi.ToolWindowId.ENV;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ENV_DEFAULT_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Scan.ENV_SECRETS_KEY;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.wm.ToolWindowManager;
import com.xliic.openapi.SecurityPropertiesComponent;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.Settings;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.WindowUtils;

public final class EnvService implements IEnvService, SettingsListener {

    private final Project project;

    public EnvService(@NotNull Project project) {
        this.project = project;
    }

    public static EnvService getInstance(@NotNull Project project) {
        return project.getService(EnvService.class);
    }

    public void subscribe() {
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    @NotNull
    public Environment getEnv() {
        String value = PropertiesComponent.getInstance().getValue(ENV_DEFAULT_KEY);
        String password = SecurityPropertiesComponent.getInstance().getValue(ENV_SECRETS_KEY);
        return new Environment(value, password);
    }

    public void saveEnv(@NotNull String type, @NotNull Map<String, Object> env) {
        String value = Settings.objectToString(env);
        if (value != null) {
            if (Environment.DEFAULT_KEY.equals(type)) {
                PropertiesComponent.getInstance().setValue(ENV_DEFAULT_KEY, value);
            } else if (Environment.SECRETS_KEY.equals(type)) {
                SecurityPropertiesComponent.getInstance().setValue(ENV_SECRETS_KEY, value);
            }
        }
        ApplicationManager.getApplication().invokeAndWait(() -> {
            project.getMessageBus().syncPublisher(EnvListener.TOPIC).updateEnv(getEnv());
        });
    }

    public void createOrActiveEnvWindow() {
        ApplicationManager.getApplication().invokeAndWait(() -> {
            WindowUtils.activateToolWindow(project, ENV, () ->
                project.getMessageBus().syncPublisher(EnvListener.TOPIC).loadEnv(getEnv()));
        });
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (Settings.hasPlatformKey(keys) && !project.isDisposed()) {
            if (!PlatformConnection.isPlatformIntegrationEnabled()) {
                ToolWindowManager manager = ToolWindowManager.getInstance(project);
                ToolWindow window = manager.getToolWindow(ENV);
                if (window != null && !window.isDisposed()) {
                    window.remove();
                }
            }
        }
    }
}
