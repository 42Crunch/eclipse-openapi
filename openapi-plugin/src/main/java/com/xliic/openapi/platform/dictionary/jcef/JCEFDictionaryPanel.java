package com.xliic.openapi.platform.dictionary.jcef;

import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.function.Function;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.wm.ToolWindow;
import com.xliic.openapi.PanelBrowser;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.services.DictionaryService;

public class JCEFDictionaryPanel extends PanelBrowser implements PlatformListener, Disposable {

    public JCEFDictionaryPanel(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent) {
        super(project, toolWindow, parent, "data-dictionary");
        project.getMessageBus().connect().subscribe(PlatformListener.TOPIC, this);
    }

    @Override
    protected @NotNull String getLoadingMessage() {
        return "Data Dictionary...";
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
        @SuppressWarnings("serial")
        Map<String, Object> parameters = new HashMap<>() {
            {
                put("command", "showDictionary");
                put("payload", getPayload());
            }
        };
        sendMessage(parameters);
    }

    @Override
    protected @Nullable Function<Object, JBCefJSQuery.Response> getBrowserFunction() {
        return null;
    }

    private List<Map<String, Object>> getPayload() {
        List<Map<String, Object>> payload = new LinkedList<>();
        DictionaryService ddService = DictionaryService.getInstance(project);
        List<DataDictionary> dictionaries = new LinkedList<>(ddService.getDictionaries());
        Collections.sort(dictionaries);
        for (DataDictionary dictionary : dictionaries) {
            payload.add(dictionary.getProperties());
        }
        return payload;
    }

    @Override
    public void reloadAll() {
    }

    @Override
    public void reloadDictionary() {
        loadComplete();
    }

    @Override
    public void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid) {
    }
}
