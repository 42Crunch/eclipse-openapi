package com.xliic.openapi.tryit.jcef;

import static com.xliic.openapi.settings.Settings.TryIt.INSECURE_SSL_HOSTNAMES;

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
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.config.jcef.messages.LoadConfig;
import com.xliic.openapi.config.payload.Config;
import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.environment.jcef.messages.LoadEnv;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.jcef.messages.LoadPreferences;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.topic.SettingsListener;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.tryit.jcef.messages.TryOperation;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.WebApp;
import com.xliic.openapi.webapp.http.HttpResponseListener;
import com.xliic.openapi.webapp.http.ShowHttpError;
import com.xliic.openapi.webapp.http.ShowHttpResponse;
import com.xliic.openapi.webapp.http.payload.HttpError;
import com.xliic.openapi.webapp.http.payload.HttpResponse;

public class JCEFTryItPanel extends WebApp implements FileListener, TryItListener, EnvListener, SettingsListener, HttpResponseListener, Disposable {

    public static final String TRY_IT_OPERATION = "com.xliic.openapi.tryit.jcef.JCEFTryItPanel[TryItOperation]";

    public JCEFTryItPanel(@NotNull Project project,
                          @NotNull ToolWindow toolWindow,
                          @NotNull Composite parent,
                          @NotNull ViewPartHandler handler) {
        super(project, toolWindow.getId(), "tryit", parent, handler);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFTryItFunction(project, myId, cache, browser, name);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(FileListener.TOPIC, this);
        connection.subscribe(TryItListener.TOPIC, this);
        connection.subscribe(EnvListener.TOPIC, this);
        connection.subscribe(SettingsListener.TOPIC, this);
        connection.subscribe(HttpResponseListener.TOPIC, this);
    }
    
    @Override
    public void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs, @NotNull Environment env) {
        updateEnv(env);
        if (!prefs.isEmpty()) {
            new LoadPreferences(prefs).send(getCefBrowser());
        }
        new LoadConfig(new Config()).send(getCefBrowser());
        cache.put(TRY_IT_OPERATION, payload);
        cache.put(SavePreferences.PSI_FILE_PATH, payload.getPsiFile().getVirtualFile().getPath());
        new TryOperation(payload).send(getCefBrowser());
    }

    @Override
    public void updateEnv(@NotNull Environment env) {
        new LoadEnv(env).send(getCefBrowser());
    }

    @Override
    public void handleFileNameChanged(@NotNull VirtualFile newFile, @NotNull String oldFileName) {
        TryItOperation operation = (TryItOperation) cache.get(TRY_IT_OPERATION);
        if (operation != null) {
            String filePath = operation.getPsiFile().getVirtualFile().getPath();
            if (filePath.equals(oldFileName)) {
                PsiFile psiFile = Utils.findPsiFile(project, newFile.getPath());
                if (psiFile != null) {
                    operation.setPsiFile(psiFile);
                }
            }
        }
        String filePath = (String) cache.get(SavePreferences.PSI_FILE_PATH);
        if (filePath != null && filePath.equals(oldFileName)) {
            cache.put(SavePreferences.PSI_FILE_PATH, newFile.getPath());
        }
    }

    @Override
    public void handleDocumentBundled(@NotNull String fileName) {
        TryItOperation operation = (TryItOperation) cache.get(TRY_IT_OPERATION);
        if (operation != null) {
            String filePath = operation.getPsiFile().getVirtualFile().getPath();
            if (filePath.equals(fileName)) {
                BundleService bundleService = BundleService.getInstance(project);
                BundleResult bundle = bundleService.getBundle(fileName);
                if (bundle != null && bundle.getAST() != null) {
                    String newOas = TryItUtils.extractSingleOperation(operation.getPath(), operation.getMethod(), bundle);
                    if (!operation.getOas().equals(newOas)) {
                        operation.updateOas(newOas);
                        new TryOperation(operation).send(getCefBrowser());
                    }
                }
            }
        }
    }

    @Override
    public void propertiesUpdated(@NotNull Set<String> keys, @NotNull Map<String, Object> prevData) {
        if (keys.contains(INSECURE_SSL_HOSTNAMES)) {
            new LoadConfig(new Config()).send(getCefBrowser());
        }
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
}
