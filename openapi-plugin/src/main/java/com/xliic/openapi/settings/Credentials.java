package com.xliic.openapi.settings;

import static com.xliic.openapi.settings.Settings.Platform.Credentials.*;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.anon.AnonEmailWizardDialog;
import com.xliic.openapi.settings.wizard.platform.PlatformURLWizardDialog;

public class Credentials {

    public enum Type { AnondToken, ApiToken }

    @Nullable
    public static Type getCredentialsType() {
        String platformAuthType = SettingsService.getInstance().getValue(AUTH_TYPE);
        String anondToken = getAnonCredentials();
        String apiToken = SettingsService.getInstance().getValue(API_KEY);
        // If platformAuthType is set, use it else try to derive from the available tokens
        if (AUTH_TYPE_ANOND_TOKEN.equals(platformAuthType) && !StringUtils.isEmpty(anondToken)) {
            return Type.AnondToken;
        } else if (AUTH_TYPE_API_TOKEN.equals(platformAuthType) && !StringUtils.isEmpty(apiToken)) {
            return Type.ApiToken;
        }
        if (!StringUtils.isEmpty(anondToken)) {
            return Type.AnondToken;
        }
        if (!StringUtils.isEmpty(apiToken)) {
            return Type.ApiToken;
        }
        return null;
    }

    public static void configureCredentials(@NotNull Project project, @NotNull WizardCallback callback) {
        CredentialsDialog dialog = new CredentialsDialog(project);
        dialog.show();
        int userType = dialog.getExitCode();
        if (userType == CredentialsDialog.EXISTING_USER_CODE) {
            new PlatformURLWizardDialog(project, callback).showAndGet();
        } else if (userType == CredentialsDialog.NEW_USER_CODE) {
            new AnonEmailWizardDialog(project, callback).showAndGet();
        }
    }

    @Nullable
    public static String getAnonCredentials() {
    	return SettingsService.getInstance().getValue(Settings.Audit.TOKEN);
    }
}
