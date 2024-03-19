package com.xliic.openapi.platform.dictionary.jcef;

import java.util.List;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.chromium.swt.Browser;
import com.equo.chromium.swt.BrowserFunction;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.util.messages.MessageBusConnection;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.dictionary.jcef.messages.ShowDictionary;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.services.DictionaryService;
import com.xliic.openapi.webapp.editor.WebFileEditor;
import com.xliic.openapi.webapp.editor.WebVirtualFile;

public class JCEFDictionaryPanel extends WebFileEditor implements PlatformListener, Disposable {

    public JCEFDictionaryPanel(@NotNull Project project, @NotNull Composite parent, @NotNull WebVirtualFile file) {
        super(project, parent, file);
    }

    @Override
    protected void onLoadEnd() {
        DictionaryService dictService = DictionaryService.getInstance(project);
        reloadDictionary(dictService.getDictionaries());
    }

    @Override
    protected @Nullable BrowserFunction getBrowserFunction(@NotNull Browser browser, @NotNull String name) {
        return null;
    }

    @Override
    protected void subscribe(@NotNull MessageBusConnection connection) {
        connection.subscribe(PlatformListener.TOPIC, this);
    }
    
    @Override
    public void reloadDictionary(@NotNull List<DataDictionary> dictionaries) {
        new ShowDictionary(dictionaries).send(getCefBrowser());
    }
}
