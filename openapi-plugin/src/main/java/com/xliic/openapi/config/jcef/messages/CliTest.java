package com.xliic.openapi.config.jcef.messages;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.utils.CliUtils;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class CliTest extends WebAppProduce {

    @NotNull
    private final Project project;

    public CliTest(@NotNull Project project) {
        super("testCli", false, false);
        this.project = project;
    }

    @Override
    public void run(@Nullable Object payload) {
        String cli = CliUtils.getCli();
        if (!FileUtils.exists(cli)) {
            showCliTest(false, "CLI is not found");
            return;
        }
        try {
            String stdout = ExecUtils.asyncExecFile(cli, new String[] { "--version" });
            String version = stdout.substring(0, stdout.indexOf("\n"));
            showCliTest(true, version);
        } catch (ExecUtils.ExecException e) {
            showCliTest(false, e.toString());
        }
    }

    private void showCliTest(boolean success, @Nullable String value) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliTest(success, value));
    }
}
