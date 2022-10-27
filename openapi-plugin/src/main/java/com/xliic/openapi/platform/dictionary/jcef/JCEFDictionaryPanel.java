package com.xliic.openapi.platform.dictionary.jcef;

import com.fasterxml.jackson.databind.module.SimpleModule;
import com.xliic.core.Disposable;
import com.xliic.core.project.Project;
import com.xliic.core.wm.ToolWindow;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.openapi.PanelBrowser;
import com.xliic.openapi.platform.PlatformListener;
import com.xliic.openapi.platform.dictionary.DictionarySerializer;
import com.xliic.openapi.platform.dictionary.types.DataDictionary;
import com.xliic.openapi.services.DictionaryService;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;
import java.util.function.Function;

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
        Map<String, Object> parameters = new HashMap<>() {{
            put("command", "showDictionary");
            put("payload", getPayload());
        }};
        sendMessage(parameters);
    }

    @Override
    protected @Nullable Function<Object, JBCefJSQuery.Response> getBrowserFunction() {
        return null;
    }

    @Override
    protected void addSerializer(@NotNull SimpleModule module) {
        module.addSerializer(DataDictionary.class, new DictionarySerializer());
    }

    @Override
    public void dispose() {
        super.dispose();
    }

    private String getPayload() {
        StringBuilder builder = new StringBuilder("[");
        DictionaryService ddService = DictionaryService.getInstance(project);
        int index = 0;
        List<DataDictionary> dictionaries = new LinkedList<>(ddService.getDictionaries());
        Collections.sort(dictionaries);
        for (DataDictionary dictionary : dictionaries) {
            builder.append(serialize(dictionary));
            if (index < ddService.getDictionaries().size() - 1) {
                builder.append(",");
                index += 1;
            }
        }
        builder.append("]");
        return builder.toString();
    }

    @Override
    public void reloadAll() {}

    @Override
    public void reloadDictionary() {
        loadComplete();
    }

    @Override
    public void auditReportForAPIUpdated(@NotNull String apiId, float grade, boolean isValid) {}
}
