package com.xliic.openapi.bigfiles.jcef;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.bigfiles.BigFilesListener;
import com.xliic.openapi.bigfiles.jcef.messages.SendFileSegment;
import com.xliic.openapi.bigfiles.jcef.messages.ShowBrowseFile;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class JCEFBigFilesPanel extends WebFileEditor implements BigFilesListener, Disposable {

    public JCEFBigFilesPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(BigFilesListener.TOPIC, this);
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return new JCEFBigFilesFunction(project, browser, name);
    }

    @Override
    public void showBrowseFile(@NotNull String file) {
        new ShowBrowseFile(file).send(getCefBrowser());
    }

    @Override
    public void sendFileSegment(@NotNull String file, @NotNull String textSegment, float progress) {
        new SendFileSegment(file, textSegment, progress).send(getCefBrowser());
    }
}
