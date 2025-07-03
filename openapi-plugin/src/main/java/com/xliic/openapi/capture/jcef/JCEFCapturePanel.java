package com.xliic.openapi.capture.jcef;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.capture.CaptureListener;
import com.xliic.openapi.capture.jcef.messages.SaveCapture;
import com.xliic.openapi.capture.jcef.messages.ShowCaptureWindow;
import com.xliic.openapi.capture.payload.CaptureItem;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import java.util.List;

public class JCEFCapturePanel extends WebFileEditor implements CaptureListener, Disposable {

    public JCEFCapturePanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(CaptureListener.TOPIC, this);
    }
    
    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFCaptureFunction(project, browser, name);
    }

    @Override
    public void showCaptureWindow(@NotNull List<CaptureItem> items) {
        new ShowCaptureWindow(items).send(getCefBrowser());
    }

    @Override
    public void saveCapture(@NotNull CaptureItem item) {
        new SaveCapture(item).send(getCefBrowser());
    }
}
