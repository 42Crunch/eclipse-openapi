package com.xliic.openapi.whatsnew.jcef;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.config.ConfigListener;
import com.xliic.openapi.webapp.WebAppFunction;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public class JCEFWhatsNewPanel extends WebFileEditor implements ConfigListener, Disposable {

    public JCEFWhatsNewPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
    }

    @Override
    protected @NotNull BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new WebAppFunction(browser, name);
    }
}
