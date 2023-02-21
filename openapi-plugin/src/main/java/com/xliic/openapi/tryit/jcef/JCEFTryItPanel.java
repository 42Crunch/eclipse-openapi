package com.xliic.openapi.tryit.jcef;

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
import com.xliic.openapi.platform.scan.Preferences;
import com.xliic.openapi.tryit.TryItListener;
import com.xliic.openapi.tryit.payload.TryItError;
import com.xliic.openapi.tryit.payload.TryItOperation;
import com.xliic.openapi.tryit.payload.TryItResponse;

public class JCEFTryItPanel extends PanelBrowser implements TryItListener, Disposable {

    @Nullable
    private TryItOperation lastPayload;
    @Nullable
    private Preferences lastPrefs;

    public JCEFTryItPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        super(project, toolWindow, parent, "tryit");
        lastPayload = null;
        lastPrefs = null;
        project.getMessageBus().connect().subscribe(TryItListener.TOPIC, this);
    }

    @Override
    protected @NotNull String getLoadingMessage() {
        return "Try It";
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
        tryLastOperation();
    }

    @Override
    protected @Nullable Function<Object, JBCefJSQuery.Response> getBrowserFunction() {
        return new JCEFTryItFunction(project, getCefBrowser().getBrowser(), functionId) {
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
    public void tryOperation(@NotNull TryItOperation payload, @NotNull Preferences prefs) {
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "tryOperation");
            put("payload", payload.getProperties());
            put("prefs", prefs.getProperties());
        }};
        lastPayload = payload;
        lastPrefs = prefs;
        sendMessage(parameters);
    }

    @Override
    public void tryLastOperation() {
        if (lastPayload != null && lastPrefs != null) {
            tryOperation(lastPayload, lastPrefs);
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
