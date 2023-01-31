package com.xliic.openapi.platform.scan.jcef;

import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.PanelBrowser;
import com.xliic.openapi.platform.scan.Environment;
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.platform.scan.ScanListener;
import com.xliic.openapi.platform.scan.payload.ScanOperation;
import com.xliic.openapi.platform.scan.payload.ScanReport;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItResponse;

public class JCEFScanPanel extends PanelBrowser implements ScanListener, Disposable {

    @Nullable
    private ScanOperation lastPayload;
    @Nullable
    private Environment lastEnv;
    @Nullable
    private Preferences lastPrefs;

    public JCEFScanPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        super(project, toolWindow, parent, "scan");
        lastPayload = null;
        lastEnv = null;
        lastPrefs = null;
        project.getMessageBus().connect().subscribe(ScanListener.TOPIC, this);
    }

    @Override
    protected @NotNull String getLoadingMessage() {
        return "Scan...";
    }

    @Override
    protected @Nullable String getMainHTML(String page, String styleCss) {
        return page.replace("${style}", styleCss);
    }

    @Override
    protected @Nullable String getInitJS() {
        return "window.initWebJS();";
    }

    @Override
    protected void loadComplete() {
        scanLastOperation();
    }

    @Override
    protected @Nullable Function<Object, JBCefJSQuery.Response> getBrowserFunction() {
        return new JCEFScanFunction(project, getCefBrowser().getBrowser(), functionId) {
            @Override
            public PsiFile getPsiFile() {
                return lastPayload != null ? lastPayload.getPsiFile() : null;
            }
        };
    }

    @Override
    public void dispose() {
        super.dispose();
        lastPayload = null;
    }

    @Override
    public void scanOperation(@NotNull ScanOperation payload, @NotNull Environment env, @NotNull Preferences prefs) {
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "scanOperation");
            put("payload", payload.getProperties());
            put("env", env.getProperties());
            put("prefs", prefs.getProperties());
        }};
        lastPayload = payload;
        lastEnv = env;
        lastPrefs = prefs;
        sendMessage(parameters);
    }

    @Override
    public void showScanReport(@NotNull ScanReport report) {
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showScanReport");
            put("payload", report.getPayload());
        }};
        sendMessage(parameters);
    }

    @Override
    public void scanLastOperation() {
        if (lastPayload != null && lastEnv != null && lastPrefs != null) {
            scanOperation(lastPayload, lastEnv, lastPrefs);
        }
    }

    @Override
    public void showOperationResponse(@NotNull TryItResponse payload) {
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showResponse");
            put("payload", payload.getProperties());
        }};
        sendMessage(parameters);
    }

    @Override
    public void showOperationError(@NotNull TryItError payload) {
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showError");
            put("payload", payload.getProperties());
        }};
        sendMessage(parameters);
    }
}
