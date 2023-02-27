package com.xliic.openapi.settings;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.ide.util.PropertiesComponent;
import com.xliic.core.project.Project;
import com.xliic.openapi.platform.PlatformConnection;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.settings.wizard.anon.AnonEmailWizardDialog;
import com.xliic.openapi.settings.wizard.platform.PlatformURLWizardDialog;

public class Credentials {

    public enum Type { Anon, Platform }

    @Nullable
    public static Type getCredentialsType() {
        if (!StringUtils.isEmpty(getAnonCredentials())) {
            return Type.Anon;
        }
        if (PlatformConnection.isPlatformIntegrationEnabled()) {
            return Type.Platform;
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

    private static String getAnonCredentials() {
        return PropertiesComponent.getInstance().getValue(Settings.Audit.TOKEN);
    }
}
