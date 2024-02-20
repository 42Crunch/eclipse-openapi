package com.xliic.openapi.settings;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.anon.AnonEmailWizardDialog;
import com.xliic.openapi.settings.wizard.platform.PlatformURLWizardDialog;
import com.xliic.openapi.cli.CliUtils;

import static com.xliic.openapi.utils.MsgUtils.notifyTokenNotFound;

public class Credentials {

    public enum Type { Anon, Platform, Cli }

    public static boolean hasCredentialsType() {
        return !StringUtils.isEmpty(getAnonCredentials()) || PlatformConnection.isPlatformIntegrationEnabled();
    }

    @NotNull
    public static Type getCredentialsType(@NotNull Project project) {
        boolean hasCli = CliUtils.hasCli();
        String anondCredentials = getAnonCredentials();
        if (hasCli && StringUtils.isEmpty(anondCredentials)) {
            notifyTokenNotFound(project, "platform connection");
        }
        if (!StringUtils.isEmpty(anondCredentials) && hasCli) {
            return Type.Cli;
        }
        if (PlatformConnection.isPlatformIntegrationEnabled()) {
            return Type.Platform;
        }
        return Type.Anon;
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
