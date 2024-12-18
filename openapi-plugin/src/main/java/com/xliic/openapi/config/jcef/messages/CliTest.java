package com.xliic.openapi.config.jcef.messages;

import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.project.Project;
import com.xliic.openapi.cli.CliService;
import com.xliic.openapi.cli.CliUtils;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.utils.ExecUtils;
import com.xliic.openapi.utils.FileUtils;
import com.xliic.openapi.webapp.messages.WebAppProduce;

public class CliTest extends WebAppProduce {

    private static final Pattern PATTERN = Pattern.compile("([0-9]+\\.[0-9]+\\.[0-9]+)$");
    
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
            String version = getVersion(cli);
            CliService.getInstance().checkForCliUpdate(project, version);
            showCliTest(true, version);
        } catch (ExecUtils.ExecException e) {
            showCliTest(false, e.toString());
        }
    }
    
    @NotNull
    public static String getVersion(@NotNull String cliPath) throws ExecUtils.ExecException {
        String stdout = ExecUtils.asyncExecFile(cliPath, List.of("--version"));
        String version = stdout.split("\n")[0]; // get the first line only
        Matcher matcher = PATTERN.matcher(version);
        return matcher.find() ? matcher.group(1) : CliService.DEFAULT_VERSION;
    }

    private void showCliTest(boolean success, @Nullable String value) {
        ApplicationManager.getApplication().invokeLater(() ->
                project.getMessageBus().syncPublisher(ConfigListener.TOPIC).showCliTest(success, value));
    }
}
