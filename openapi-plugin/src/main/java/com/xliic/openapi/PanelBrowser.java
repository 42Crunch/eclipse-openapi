package com.xliic.openapi;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;
import java.util.stream.Stream;

import org.eclipse.swt.widgets.Composite;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.util.DefaultIndenter;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.ide.ui.LafManager;
import com.xliic.core.ide.ui.LafManagerListener;
import com.xliic.core.project.Project;
import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.core.ui.jcef.CefLoadHandlerAdapter;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.core.ui.jcef.JBCefJSQuery;
import com.xliic.core.util.ResourceUtil;
import com.xliic.core.wm.ToolWindow;

public abstract class PanelBrowser extends JBCefBrowser implements LafManagerListener {

    private static final String SCRIPT_OPEN_TAG = "<script>";
    private static final String SCRIPT_CLOSE_TAG = "</script>";

    @NotNull
    protected final Project project;
    @NotNull
    protected final ToolWindow toolWindow;
    @NotNull
    protected final String basePath;
    @NotNull
    protected final String functionId;

    private final String indexHTML;
    private final String indexCSS;
    private String indexJs;

    private volatile boolean isInit = false;
    private volatile boolean isReady = false;

    private final JBCefJSQuery query;
    private final CefLoadHandlerAdapter loadHandler;
    private final Function<Object, JBCefJSQuery.Response> fun;
    private final ObjectMapper mapper = new ObjectMapper();

    public PanelBrowser(@NotNull Project project, @NotNull ToolWindow toolWindow, @NotNull Composite parent, @NotNull String basePath) {
        super(parent);
        this.project = project;
        this.toolWindow = toolWindow;
        this.basePath = basePath;
        functionId = basePath + "InjectedPostMessageHandler";
        fun = getBrowserFunction();
        if (fun != null) {
            query = JBCefJSQuery.create(this);
            query.addHandler(fun);
        } else {
            query = null;
        }
        loadHandler = new CefLoadHandlerAdapter() {
            @Override
            public void onLoadingStateChange(CefBrowser browser, boolean isLoading, boolean canGoBack, boolean canGoForward) {
                if (!isLoading) {
                    if (indexJs != null) {
                        boolean res = browser.getBrowser().execute(indexJs);
                        if (res) {
                            String initJs = getInitJS();
                            if (initJs != null) {
                                res = browser.getBrowser().execute(initJs);
                                if (res) {
                                    isReady = true;
                                    loadComplete();
                                }
                            }
                        }
                    }
                }
            }
        };
        getJBCefClient().addLoadHandler(loadHandler, getCefBrowser());
        ApplicationManager.getApplication().getMessageBus().connect().subscribe(LafManagerListener.TOPIC, this);
        indexHTML = getResourceAsString("index.html");
        indexCSS = getResourceAsString("style.css");
        indexJs = getResourceAsString("index.js");
        SimpleModule module = new SimpleModule();
        module.addSerializer(Payload.class, new PayloadSerializer());
        mapper.registerModule(module);
    }

    @NotNull
    protected abstract String getLoadingMessage();

    @Nullable
    protected abstract String getMainHTML(String indexHtml, String styleCss);

    @Nullable
    protected abstract String getInitJS();

    protected abstract void loadComplete();

    @Nullable
    protected abstract Function<Object, JBCefJSQuery.Response> getBrowserFunction();

    protected void init() {
        isInit = true;
        String page = indexHTML.replaceAll("<meta http-equiv=.*?>", "");
        page = page.replace("theme: {}", "theme: " + getMessage(ThemeColors.getThemeColorValues()));
        page = getMainHTML(page, indexCSS);
        indexJs = getMainJS(page, indexJs, functionId);
        page = remove(page, SCRIPT_OPEN_TAG, SCRIPT_CLOSE_TAG);
        loadHTML(page != null ? page : "<html><head></head><body><div><h1>Loading</h1><p>" + getLoadingMessage() + "</p></div></body></html>");
    }

    @Override
    public void dispose() {
        super.dispose();
        ApplicationManager.getApplication().getMessageBus().connect().unsubscribe(this);
        isReady = false;
        getJBCefClient().removeLoadHandler(loadHandler, getCefBrowser());
        if (query != null) {
            query.removeHandler(fun);
        }
    }

    @Override
    public void lookAndFeelChanged(@NotNull LafManager source) {
        if (isReady) {
            @SuppressWarnings("serial")
            Map<String, Object> parameters = new HashMap<>() {
                {
                    put("command", "changeTheme");
                    put("payload", ThemeColors.getThemeColorValues());
                }
            };
            sendMessage(parameters);
        }
    }

    protected void sendMessage(@NotNull Map<String, Object> parameters) {
        if (isReady) {
            String message = getMessage(parameters);
            if (message != null) {
                CefBrowser cefBrowser = getCefBrowser();
                cefBrowser.executeJavaScript(getJs(message), cefBrowser.getURL(), 0);
            }
        } else if (!isInit) {
            init();
        }
    }

    protected <T> String serialize(@Nullable T data) {
        try {
            String result = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(data);
            return OpenApiUtils.wrapJsonToString(result).replace("\\\\\"", "\"");
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return "";
    }

    protected static String jsonfy(String text) {
        try {
            String JSON_SPACES = "\" : ";
            JsonNode node = new YAMLMapper().readTree(text);
            DefaultPrettyPrinter printer = new DefaultPrettyPrinter().withObjectIndenter(new DefaultIndenter("", ""));
            String result = new ObjectMapper().writer(printer).writeValueAsString(node).trim();
            if (result.contains(JSON_SPACES)) {
                result = result.replace(JSON_SPACES, "\":");
            }
            return result;
        } catch (JsonProcessingException e) {
            e.printStackTrace();
        }
        return null;
    }

    private static String remove(String page, String fromTag, String toTag) {
        int from = page.indexOf(fromTag);
        int to = page.lastIndexOf(toTag) + toTag.length();
        StringBuilder text = new StringBuilder(page);
        text.replace(from, to, "");
        return text.toString();
    }

    private static String getMainJS(String page, String indexJs, String functionId) {
        int from = page.indexOf(SCRIPT_OPEN_TAG) + SCRIPT_OPEN_TAG.length();
        int to = page.lastIndexOf(SCRIPT_CLOSE_TAG);
        String myJs = page.substring(from, to);
        myJs = myJs.replace("window.__EclipseJTools.postMessage", functionId);
        // Apply some readable format
        StringBuilder text = new StringBuilder();
        for (String line : myJs.split("\\r?\\n|\\r")) {
            if (line.isEmpty() || line.isBlank()) {
                continue;
            } else if (line.startsWith("\t\t\t")) {
                line = line.replaceFirst("\t\t\t", "");
                line = line.replace("\t", "  ");
            }
            text.append(line).append("\n");
        }
        myJs = text.toString();
        return indexJs + "\n" + myJs;
    }

    private static String getJs(String message) {
        return "window.dispatchMessage(" + message + ");";
    }

    private static String getMessage(Map<String, Object> parameters) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(parameters).replace("\\\\\"", "\"");
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    private String getResourceAsString(String fileName) {
        InputStream ins = ResourceUtil.getResourceAsStream(getClass().getClassLoader(), basePath, fileName);
        Stream<String> stream = new BufferedReader(new InputStreamReader(ins, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }
}
