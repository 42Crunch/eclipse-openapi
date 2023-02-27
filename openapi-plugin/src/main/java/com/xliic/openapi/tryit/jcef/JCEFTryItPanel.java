package com.xliic.openapi.tryit.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.PanelViewPart.ViewPartHandler;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.environment.EnvListener;
import com.xliic.openapi.environment.Environment;
import com.xliic.openapi.environment.jcef.messages.LoadEnv;
import com.xliic.openapi.preferences.Preferences;
import com.xliic.openapi.preferences.jcef.messages.LoadPreferences;
import com.xliic.openapi.preferences.jcef.messages.SavePreferences;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.topic.FileListener;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.TryItUtils;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpError;
import com.xliic.openapi.tryit.jcef.messages.ShowHttpResponse;
import com.xliic.openapi.tryit.jcef.messages.TryOperation;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.tryit.payload.TryItResponse;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.WebApp;

public class JCEFTryItPanel extends WebApp implements FileListener, TryItListener, EnvListener, Disposable {

    public static final String TRY_IT_OPERATION = "com.xliic.openapi.tryit.jcef.JCEFTryItPanel[TryItOperation]";

    public JCEFTryItPanel(@NotNull Project project,
                          @NotNull ToolWindow toolWindow,
                          @NotNull Composite parent,
                          @NotNull ViewPartHandler handler) {
        super(project, toolWindow, "tryit", parent, handler);
        project.getMessageBus().connect().subscribe(FileListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(TryItListener.TOPIC, this);
        project.getMessageBus().connect().subscribe(EnvListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFTryItFunction(project, cache, browser, name);
    }

    @Override
    public void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs, @NotNull Environment env) {
        updateEnv(env);
        if (!prefs.isEmpty()) {
            new LoadPreferences(prefs).send(getCefBrowser());
        }
        cache.put(TRY_IT_OPERATION, payload);
        cache.put(SavePreferences.PSI_FILE_PATH, payload.getPsiFile().getVirtualFile().getPath());
        new TryOperation(payload).send(getCefBrowser());
    }

    @Override
    public void showOperationResponse(@NotNull TryItResponse payload) {
        new ShowHttpResponse(payload).send(getCefBrowser());
    }

    @Override
    public void showOperationError(@NotNull TryItError payload) {
        new ShowHttpError(payload).send(getCefBrowser());
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
                PsiFile psiFile = Utils.getPsiFile(project, newFile.getPath());
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
}
