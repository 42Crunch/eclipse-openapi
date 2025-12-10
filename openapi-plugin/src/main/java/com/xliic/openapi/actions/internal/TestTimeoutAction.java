package com.xliic.openapi.actions.internal;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.project.Project;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.MsgUtils;
import okhttp3.Request;
import okhttp3.Response;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.utils.NetUtils.getHttpClient;

public class TestTimeoutAction extends AnAction {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        Request request = new Request.Builder().url("http://localhost:8000/timeout").get().build();
        final int timeout = SettingsService.getInstance().getConnectionTimeout();
        long start = System.currentTimeMillis();
        try (Response response = getHttpClient().newCall(request).execute()) {
            long stop = System.currentTimeMillis();
            MsgUtils.info(project, "Response code: " + response.code() +
                    ", wait time: " + (stop - start) + "ms, timeout: " + timeout, false);
        } catch (Exception e) {
            long stop = System.currentTimeMillis();
            MsgUtils.error(project, "Response error: " + e +
                    ", wait time: " + (stop - start) + "ms, timeout: " + timeout, false);
        }
    }
}
