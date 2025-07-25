package com.xliic.openapi.actions.internal;

import static com.xliic.openapi.OpenAPIAbstractUIPlugin.XLIIC_PLUGIN_ENABLE_INTERNAL_ACTIONS;
import static com.xliic.openapi.OpenAPIStartupActivity.XLIIC_PLUGIN_USE_DEV_MODE;
import static com.xliic.openapi.whatsnew.WhatsNewService.getPluginVersion;
import static com.xliic.openapi.whatsnew.WhatsNewService.getSavedVersion;
import static com.xliic.openapi.utils.NetUtils.getProxyString;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.actionSystem.ActionUpdateThread;
import com.xliic.core.actionSystem.AnAction;
import com.xliic.core.actionSystem.AnActionEvent;
import com.xliic.core.module.Module;
import com.xliic.core.module.ModuleManager;
import com.xliic.core.module.ModuleRootManager;
import com.xliic.core.project.DumbAware;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.Endpoints;
import com.xliic.openapi.utils.MsgUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.whatsnew.WhatsNewService;

public class GetIDEInfoAction extends AnAction implements DumbAware {

    @Override
    public @NotNull ActionUpdateThread getActionUpdateThread() {
        return ActionUpdateThread.BGT;
    }

    @Override
    public void update(@NotNull AnActionEvent event) {
        event.getPresentation().setEnabled(event.getProject() != null);
    }

    @Override
    public void actionPerformed(@NotNull AnActionEvent anActionEvent) {
        Project project = anActionEvent.getProject();
        if (project == null) {
            return;
        }
        StringBuilder builder = new StringBuilder();
        builder.append("OS: ").append(Utils.getOs()).append("\n");
        builder.append("OS Arch: ").append(Utils.getOsArch()).append("\n");
        builder.append("Freemiumd Proxy: ").append(getProxyString(Endpoints.getFreemiumdUrl())).append("\n");
        for (Module module : ModuleManager.getInstance(project).getModules()) {
            builder.append("Module [").append(module.getName()).append("]\n");
            VirtualFile[] roots = ModuleRootManager.getInstance(module).getContentRoots();
            for (VirtualFile root : roots) {
                builder.append(root.getPath()).append("\n");
            }
        }
        addVersionInfo(project, builder);
        builder.append("APPDATA: ").append(System.getenv("APPDATA")).append("\n");
        builder.append("USE_DEV_MODE: ").append(System.getenv(XLIIC_PLUGIN_USE_DEV_MODE)).append("\n");
        builder.append("ENABLE_INTERNAL_ACTIONS: ").append(System.getenv(XLIIC_PLUGIN_ENABLE_INTERNAL_ACTIONS)).append("\n");
        builder.append("java.io.tmpdir: ").append(System.getProperty("java.io.tmpdir")).append("\n");
        builder.append("user.home: ").append(System.getProperty("user.home")).append("\n");

        MsgUtils.info(project, builder.toString(), true);
    }

    private static void addVersionInfo(Project project, StringBuilder builder) {
        builder.append("Saved version: ").append(getSavedVersion()).append("\n");
        String pluginVer = getPluginVersion();
        if (pluginVer != null) {
            builder.append("Plugin version: ").append(pluginVer).append("\n");
        }
        builder.append("Has what's new page: ").append(WhatsNewService.getInstance(project).hasWhatsNewWebPage()).append("\n");
    }
}
