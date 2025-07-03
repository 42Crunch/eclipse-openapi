package com.xliic.openapi.platform.scan.report.jcef;

import java.time.ZoneOffset;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
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
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowGeneralError;
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowLog;
import com.xliic.openapi.platform.scan.report.jcef.messages.ShowScanReport;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.webapp.chunks.ChunksListener;
import com.xliic.openapi.webapp.chunks.jcef.messages.ParseChunk;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;
import com.xliic.openapi.webapp.http.HttpResponseListener;
import com.xliic.openapi.webapp.http.ShowHttpError;
import com.xliic.openapi.webapp.http.ShowHttpResponse;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

public class JCEFScanReportPanel extends WebFileEditor 
        implements FileListener, ScanListener, EnvListener, SettingsListener, HttpResponseListener, ChunksListener, Disposable {

    public JCEFScanReportPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFScanReportFunction(project, myId, cache, browser, name);
    }
    
    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(FileListener.TOPIC, this);
        connection.subscribe(ScanListener.TOPIC, this);
        connection.subscribe(EnvListener.TOPIC, this);
        connection.subscribe(SettingsListener.TOPIC, this);
        connection.subscribe(HttpResponseListener.TOPIC, this);
        connection.subscribe(ChunksListener.TOPIC, this);
    }

    @Override
    public void showScanReport(@NotNull String webAppId, @NotNull String apiAlias) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ShowScanReport(apiAlias).send(getCefBrowser());
    }

    @Override
    public void showGeneralError(@NotNull String webAppId, @NotNull String message, @Nullable String code, @Nullable String details) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
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
    public void sendLogMessage(@NotNull String webAppId, @NotNull String level, @NotNull String message) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
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

    @Override
    public void showHttpResponse(@NotNull String webAppId, @NotNull HttpResponse payload) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ShowHttpResponse(payload).send(getCefBrowser());
    }

    @Override
    public void showHttpError(@NotNull String webAppId, @NotNull HttpError payload) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ShowHttpError(payload).send(getCefBrowser());
    }
    
    @Override
    public void parseChunk(@NotNull String webAppId, @Nullable String chunk) {
        if (!Objects.equals(webAppId, myId)) {
            return;
        }
        new ParseChunk(chunk).send(getCefBrowser());
    }
}
