package com.xliic.openapi.whatsnew;

import static com.xliic.openapi.settings.Settings.Plugin.VERSION;
import static com.xliic.openapi.webapp.editor.WebFileEditor.WHATS_NEW_EDITOR_ID;

import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Objects;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationInfo;
import com.xliic.core.project.Project;
import com.xliic.core.services.IWhatsNewService;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.WindowUtils;

public final class WhatsNewService implements IWhatsNewService {

    private static final String VERSION_SPLITTER = "-";
    private static final String WHATS_NEW = "What's New in OpenAPI (Swagger) Editor";

    @NotNull
    private final Project project;
    private final boolean hasWebPage;

    public WhatsNewService(@NotNull Project project) {
        this.project = project;
        hasWebPage = hasWebPage();
    }

    public static WhatsNewService getInstance(@NotNull Project project) {
        return project.getService(WhatsNewService.class);
    }

    public void openWhatsNewPageIfNeeded() {
        if (hasWebPage) {
            String pluginVer = getPluginVersion();
            if (!StringUtils.isEmpty(pluginVer)) {
                String savedVer = getSavedVersion();
                if (!Objects.equals(savedVer, pluginVer)) {
                    SettingsService.getInstance().setValue(VERSION, pluginVer);
                }
                try {
                    if (StringUtils.isEmpty(savedVer) || (getVersion(savedVer) < getVersion(pluginVer))) {
                        WindowUtils.openWebTab(project, WHATS_NEW_EDITOR_ID, WHATS_NEW, () -> {});
                    }
                } catch (Exception ignored) {
                }
            }
        }
    }

    @Nullable
    public static String getSavedVersion() {
        return SettingsService.getInstance().getValue(VERSION);
    }

    @Nullable
    public static String getPluginVersion() {
        return ApplicationInfo.getInstance().getFullVersion();
    }

    private static Float getVersion(String version) {
        if (version.contains(VERSION_SPLITTER)) {
            return Float.parseFloat(version.split(VERSION_SPLITTER)[0]);
        }
        // Eclipse format x.x.xx
        String [] parts = version.split("\\.");
        if (parts.length >= 3) {
        	version = parts[0] + ".";
        	for (int i = 1 ; i < parts.length ; i++) {
        		version = version + parts[i];
        	}
        }
        return Float.parseFloat(version);
    }

    public boolean hasWhatsNewWebPage() {
        return hasWebPage;
    }

    private boolean hasWebPage() {
        try (InputStream stream = ResourceUtil.getResourceAsStream(
                this.getClass().getClassLoader(), "web", WHATS_NEW_EDITOR_ID + ".html")) {
            try (InputStreamReader ignored = new InputStreamReader(stream, StandardCharsets.UTF_8)) {
                return true;
            }  catch (Exception e) {
                return false;
            }
        } catch (Exception e) {
            return false;
        }
    }
}
