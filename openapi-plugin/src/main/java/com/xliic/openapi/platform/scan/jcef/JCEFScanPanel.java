package com.xliic.openapi.platform.scan.jcef;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Map;
import java.util.Set;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.environment.jcef.messages.LoadEnv;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.jcef.messages.ShowGeneralError;
import com.xliic.openapi.platform.scan.jcef.messages.ShowLog;
import com.xliic.openapi.platform.scan.jcef.messages.ShowScanReport;
import com.xliic.openapi.platform.scan.jcef.messages.StartScan;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.jcef.messages.LoadPreferences;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpError;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpResponse;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;
import com.xliic.openapi.webapp.WebApp;

public class JCEFScanPanel extends WebApp implements FileListener, ScanListener, EnvListener, SettingsListener, Disposable {

    public JCEFScanPanel(@NotNull Project project,
                         @NotNull ToolWindow toolWindow,
                         @NotNull Composite parent,
                         @NotNull ViewPartHandler handler) {
        super(project, toolWindow, "scan", parent, handler);
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(ScanListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(EnvListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(SettingsListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFScanFunction(project, cache, browser, name);
    }

    @Override
    public void startScan(@NotNull VirtualFile file) {
        cache.put(SavePreferences.PSI_FILE_PATH, file.getPath());
        new StartScan().send(getCefBrowser());
    }

    @Override
    public void scanOperation(@NotNull ScanOperation payload, @NotNull Environment env, @NotNull Preferences prefs) {
        updateEnv(env);
        if (!prefs.isEmpty()) {
            new LoadPreferences(prefs).send(getCefBrowser());
        }
        new LoadConfig(new Config()).send(getCefBrowser());
        cache.put(SavePreferences.PSI_FILE_PATH, payload.getPsiFile().getVirtualFile().getPath());
        new com.xliic.openapi.platform.scan.jcef.messages.ScanOperation(payload).send(getCefBrowser());
    }

    @Override
    public void showScanReport(@NotNull ScanReport report) {
        new ShowScanReport(report).send(getCefBrowser());
    }

    @Override
    public void showOperationResponse(@NotNull TryItResponse payload) {
        new ShowHttpResponse(payload).send(getCefBrowser());
    }

    @Override
    public void showOperationError(@NotNull TryItError error) {
        new ShowHttpError(error).send(getCefBrowser());
    }

    @Override
    public void showGeneralError(@NotNull String message, @Nullable String code, @Nullable String details) {
        new ShowGeneralError(message, code, details).send(getCefBrowser());
    }

    @Override
    public void updateEnv(@NotNull Environment env) {
        new LoadEnv(env).send(getCefBrowser());
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
        if (filePath != null && filePath.equals(oldFileName)) {
            cache.put(SavePreferences.PSI_FILE_PATH, newFile.getPath());
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (isScanPropertiesUpdated(keys)) {
            new LoadConfig(new Config()).send(getCefBrowser());
        }
    }

    @Override
    public void sendLogMessage(@NotNull String level, @NotNull String message) {
        new ShowLog(level, ZonedDateTime.now(ZoneOffset.UTC).format(DateTimeFormatter.ISO_INSTANT), message).send(getCefBrowser());
    }

    private static boolean isScanPropertiesUpdated(Set<String> keys) {
        for (String key : keys) {
            if (key.startsWith("com.xliic.openapi.settings.platform.scan")) {
                return true;
            }
        }
        return false;
    }
}
