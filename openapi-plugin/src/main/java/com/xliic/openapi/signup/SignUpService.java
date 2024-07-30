package com.xliic.openapi.signup;

import static com.xliic.openapi.webapp.editor.WebFileEditor.SIGNUP_EDITOR_ID;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.services.ISignUpService;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.utils.WindowUtils;

public final class SignUpService implements ISignUpService, SettingsListener, Disposable {

    private static final String SIGNUP = "Sign Up";
    public static final String SIGNUP_COMPETE = "com.xliic.openapi.signup.complete";

    @NotNull
    private final Project project;
    @Nullable
    private WizardCallback onSignUpCompleteCallback = null;

    public SignUpService(@NotNull Project project) {
        this.project = project;
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    public static SignUpService getInstance(@NotNull Project project) {
        return project.getService(SignUpService.class);
    }

    public void createAndOpenSignUpWindow(@NotNull WizardCallback callback) {
        WindowUtils.openWebTab(project, SIGNUP_EDITOR_ID, SIGNUP, () -> {
            // Keep only latest user action which requires signup
            onSignUpCompleteCallback = callback;
        });
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(SIGNUP_COMPETE)) {
            final WizardCallback callback = onSignUpCompleteCallback;
            // This call will trigger dispose and clear the callback ref
            WindowUtils.closeAllWebTabs(project, SIGNUP_EDITOR_ID);
            if (callback != null) {
                callback.complete();
            }
        }
    }

    @Override
    public void dispose() {
        onSignUpCompleteCallback = null;
    }
}
