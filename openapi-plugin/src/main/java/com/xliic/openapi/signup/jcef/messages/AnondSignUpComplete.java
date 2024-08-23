package com.xliic.openapi.signup.jcef.messages;

import static com.xliic.openapi.settings.Settings.Audit.TOKEN;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_ANOND_TOKEN;
import static com.xliic.openapi.signup.SignUpService.SIGNUP_COMPETE;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class AnondSignUpComplete extends WebAppProduce {

    @NotNull
    private final Project project;

    public AnondSignUpComplete(@NotNull Project project) {
        super("anondSignUpComplete", false, false);
        this.project = project;
    }

    @Override
    @SuppressWarnings("unchecked")
    public void run(@Nullable Object payload) {
        if (payload instanceof Map) {
            Set<String> updatedKeys = new HashSet<>();
            Map<String, Object> prevData = new HashMap<>();
            Map<String, Object> map = (Map<String, Object>) payload;
            SettingsService settingsService = SettingsService.getInstance();
            settingsService.setCacheValue(TOKEN, map.get("anondToken"));
            settingsService.setCacheValue(AUTH_TYPE, AUTH_TYPE_ANOND_TOKEN);
            settingsService.save(updatedKeys, prevData);
            if (!updatedKeys.isEmpty() && !project.isDisposed()) {
                updatedKeys.add(SIGNUP_COMPETE);
                ApplicationManager.getApplication().invokeLater(() ->
                    project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData));
            }
        }
    }
}
