package com.xliic.openapi.platform.scan.config.jcef;

import java.util.Map;
import java.util.Objects;
import java.util.Set;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.environment.jcef.messages.LoadEnv;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.config.jcef.messages.LoadUpdatedScanConf;
import com.xliic.openapi.platform.scan.config.jcef.messages.ShowScanConfOperation;
import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.platform.scan.config.payload.ScanConfWithOas;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.jcef.messages.LoadPreferences;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpError;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpResponse;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public class JCEFScanConfPanel extends WebFileEditor implements FileListener, ScanListener, EnvListener, SettingsListener, Disposable {

    public static final String SCAN_CONF_PATH = "com.xliic.openapi.platform.scan.jcef.JCEFScanConfPanel[ScanConfPath]";
    
    public JCEFScanConfPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(FileListener.TOPIC, this);
        connection.subscribe(ScanListener.TOPIC, this);
        connection.subscribe(EnvListener.TOPIC, this);
        connection.subscribe(SettingsListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFScanConfFunction(project, myId, cache, browser, name);
    }

    @Override
    public void showScanConfOperation(@NotNull String toId, 
    		                          @NotNull ScanConfOperation payload, 
    		                          @NotNull Environment env, 
    		                          @NotNull Preferences prefs) {
        if (!Objects.equals(toId, myId)) {
            return;
        }
        new LoadConfig(new Config()).send(getCefBrowser());
        updateEnv(env);
        if (!prefs.isEmpty()) {
            new LoadPreferences(prefs).send(getCefBrowser());
        }
        cache.put(SavePreferences.PSI_FILE_PATH, payload.getPsiFile().getVirtualFile().getPath());
        cache.put(SCAN_CONF_PATH, payload.getScanConfPath());
        new ShowScanConfOperation(payload).send(getCefBrowser());
    }

    @Override
    public void loadUpdatedScanConf(@NotNull String toId, @NotNull ScanConfWithOas payload) {
        if (!Objects.equals(toId, myId)) {
            return;
        }
        new LoadUpdatedScanConf(payload).send(getCefBrowser());
    }

    @Override
    public void showOperationResponse(@NotNull String toId, @NotNull TryItResponse payload) {
        if (!Objects.equals(toId, myId)) {
            return;
        }
        new ShowHttpResponse(payload).send(getCefBrowser());
    }

    @Override
    public void showOperationError(@NotNull String toId, @NotNull TryItError error) {
        if (!Objects.equals(toId, myId)) {
            return;
        }
        new ShowHttpError(error).send(getCefBrowser());
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

    private static boolean isScanPropertiesUpdated(Set<String> keys) {
        for (String key : keys) {
            if (key.startsWith("com.xliic.openapi.settings.platform.scan")) {
                return true;
            }
        }
        return false;
    }
}