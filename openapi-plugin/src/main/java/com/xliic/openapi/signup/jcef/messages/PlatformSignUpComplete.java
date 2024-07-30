package com.xliic.openapi.signup.jcef.messages;

import static com.xliic.openapi.config.jcef.messages.SaveConfig.addPlatformTurnOnOffKeys;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.API_KEY;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.AUTH_TYPE_API_TOKEN;
import static com.xliic.openapi.settings.Settings.Platform.Credentials.URL;
import static com.xliic.openapi.signup.SignUpService.SIGNUP_COMPETE;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.PlatformAPIs;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.signup.SignUpListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.webapp.messages.WebAppProduce;

import okhttp3.Response;

public class PlatformSignUpComplete extends WebAppProduce {

    @NotNull
    private final Project project;

    public PlatformSignUpComplete(@NotNull Project project) {
        super("platformSignUpComplete", false, false);
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
            final String platformUrl = (String) map.get("platformUrl");
            final String platformApiToken = (String) map.get("platformApiToken");
            // Do not save credentials before test is ok
            try {
                try (Response response = PlatformAPIs.Sync.testConnection(platformUrl, platformApiToken)) {
                    if (response.code() == 200) {
                        settingsService.setCacheValue(URL, platformUrl);
                        settingsService.setCacheValue(API_KEY, platformApiToken);
                        settingsService.setCacheValue(AUTH_TYPE, AUTH_TYPE_API_TOKEN);
                        settingsService.save(updatedKeys, prevData);
                        if (!updatedKeys.isEmpty() && !project.isDisposed()) {
                            addPlatformTurnOnOffKeys(updatedKeys, prevData);
                            updatedKeys.add(SIGNUP_COMPETE);
                            ApplicationManager.getApplication().invokeLater(() ->
                                project.getMessageBus().syncPublisher(SettingsListener.TOPIC).propertiesUpdated(updatedKeys, prevData));
                        }
                    } else {
                        error("Unexpected response code " + response.code());
                    }
                }
            } catch (Exception e) {
                error(e.toString());
            }
        }
    }

    private void error(@NotNull String error) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(SignUpListener.TOPIC).showPlatformConnectionTestError(error));
    }
}
