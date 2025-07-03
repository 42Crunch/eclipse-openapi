package com.xliic.openapi.signup.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.signup.SignUpListener;
import com.xliic.openapi.signup.jcef.messages.ShowAnondTokenResponse;
import com.xliic.openapi.signup.jcef.messages.ShowPlatformConnectionTestError;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public class JCEFSignUpPanel extends WebFileEditor implements SignUpListener, Disposable {

    public JCEFSignUpPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(SignUpListener.TOPIC, this);
    }
    
    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFSignUpFunction(project, cache, browser, name);
    }

    @Override
    public void showAnondTokenResponse(boolean success, @NotNull String message) {
        new ShowAnondTokenResponse(success, message).send(getCefBrowser());
    }

    @Override
    public void showPlatformConnectionTestError(@NotNull String error) {
        new ShowPlatformConnectionTestError(error).send(getCefBrowser());
    }
}
