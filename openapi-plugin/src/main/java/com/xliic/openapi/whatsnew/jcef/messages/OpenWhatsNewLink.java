package com.xliic.openapi.whatsnew.jcef.messages;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;
import com.xliic.openapi.settings.Credentials;
import com.xliic.openapi.settings.wizard.WizardCallback;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.webapp.messages.OpenLink;

public class OpenWhatsNewLink extends OpenLink {

    @NotNull
    private final Project project;

    public OpenWhatsNewLink(@NotNull Project project) {
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        if (payload instanceof String) {
            String href = (String) payload;
            // Commands handlers must be added below
            if ("command:openapi.platform.openSignUp".equals(href)) {
                Credentials.configureCredentials(project, new WizardCallback() {
                    @Override
                    public void complete() {
                    }
                });
            } else if (href.startsWith("https://")) {
                super.run(payload);
            } else {
                // Let unexpected link payload trigger simple error notification
                MsgUtils.notifyError(project, "Unexpected link href: " + href);
            }
        }
    }
}
