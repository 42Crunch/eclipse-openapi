package com.xliic.openapi.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.util.DefaultIndenter;
import com.fasterxml.jackson.core.util.DefaultPrettyPrinter;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import com.fasterxml.jackson.dataformat.yaml.YAMLMapper;
import com.xliic.core.Disposable;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.ui.UIManager;
import com.xliic.core.ui.jcef.CefBrowser;
import com.xliic.core.ui.jcef.JBCefBrowser;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.report.Audit;
import com.xliic.openapi.report.AuditSerializer;
import com.xliic.openapi.report.jcef.JCEFPostMessageListener;
import com.xliic.openapi.services.api.IHTMLService;

import okhttp3.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.stream.Stream;

import static com.xliic.openapi.OpenApiUtils.getURI;

public class HTMLService implements IHTMLService, Disposable {

    private static final String ARTICLES_URL = "https://platform.42crunch.com/kdb/audit-with-yaml.json";
    private static final String LOADING_KDB_MSG = "<html><head></head><body><div><h1>Please Wait</h1>" +
            "<p>Loading API Contract Security Audit KDB Articles...</p></div></body></html>";
    
    private static final String SCRIPT_OPEN_TAG = "<script>";
    private static final String SCRIPT_CLOSE_TAG = "</script>";

    private static final String DARK_BKG_COLOR = "#1e1e1e";
    private static final String DARK_FRG_COLOR = "#f3f3f3";

    private static final String LIGHT_BKG_COLOR = "#ffffff";
    private static final String LIGHT_FRG_COLOR = "#000000";

    private volatile String mainHTML;
    private volatile String indexJs;
    private volatile String kdbText;
    private final List<JBCefBrowser> browsers;

    public HTMLService() {
        browsers = new LinkedList<>();
    }

    public void init() {
        String indexHtml = getResourceAsString("index.html");
        String styleCss = getResourceAsString("style.css");
        indexJs = getResourceAsString("index.js");
        mainHTML = null;
        kdbText = null;
        OkHttpClient client = new OkHttpClient().newBuilder().build();
        Request request = new Request.Builder().url(ARTICLES_URL).build();
        client.newCall(request).enqueue(new Callback() {
            @Override
            public void onResponse(@NotNull Call call, @NotNull Response response) throws IOException {
                try (ResponseBody body = response.body()) {
                    if (response.code() == 200) {
                        if (body != null) {
                            String text = body.string().trim();
                            if (text.startsWith("{") && text.endsWith("}")) {
                                mainHTML = getMainHTML(indexHtml, styleCss);
                                indexJs = getMainJS(indexHtml, indexJs, isDarkTheme());
                                kdbText = jsonfy(text);
                                // Eclipse Development Note 
                                // All calls to browser must be in SWT thread
                                ApplicationManager.getApplication().invokeLater(() -> {
	                                synchronized (browsers) {
	                                    for (JBCefBrowser browser : browsers) {
	                                        initWebUI(browser);
	                                    }
	                                    browsers.clear();
	                                }
                                });
                            }
                        }
                    }
                }
            }
            @Override
            public void onFailure(@NotNull Call call, @NotNull IOException e) {
            	e.printStackTrace();
            }
        });
    }

    public static HTMLService getInstance() {
        return ApplicationManager.getApplication().getService(HTMLService.class);
    }

    public void initWebUI(@NotNull JBCefBrowser browser) {
        synchronized (browsers) {
            if (isMainHTMLReady()) {
                browser.loadHTML(mainHTML);
            }
            else {
                browser.loadHTML(LOADING_KDB_MSG);
                browsers.add(browser);
            }
        }
    }

    public void initWebJS(@NotNull CefBrowser browser) {
    	if (isMainHTMLReady()) {
    		boolean res = browser.getBrowser().execute(indexJs);
    		if (res) {
    			browser.getBrowser().execute("window.initWebJS(" + kdbText + ");");
    		}
    	}
    }

    @SuppressWarnings("serial")
	public void changeActiveColorTheme(@NotNull JBCefBrowser browser, boolean isDarkTheme) {
        if (isMainHTMLReady()) {
            String message;
            if (isDarkTheme) {
                message = getMessage(new HashMap<>() {{
                    put("command", "changeTheme");
                    put("kind", "dark");
                    put("foreground", DARK_FRG_COLOR);
                    put("background", DARK_BKG_COLOR);
                }});
            }
            else {
                message = getMessage(new HashMap<>() {{
                    put("command", "changeTheme");
                    put("kind", "light");
                    put("foreground", LIGHT_FRG_COLOR);
                    put("background", LIGHT_BKG_COLOR);
                }});
            }
            CefBrowser cefBrowser = browser.getCefBrowser();
            cefBrowser.executeJavaScript(getJs(message), cefBrowser.getURL(), 0);
        }
    }

    @SuppressWarnings("serial")
	public void showFullReport(@NotNull JBCefBrowser browser, @NotNull Audit report) {
        if (isMainHTMLReady()) {
            String message = getMessage(new HashMap<>() {{
                put("command", "showFullReport");
                put("report", serialize(report));
            }});
            CefBrowser cefBrowser = browser.getCefBrowser();
            cefBrowser.executeJavaScript(getJs(message), cefBrowser.getURL(), 0);
        }
    }

    @SuppressWarnings("serial")
	public void showNoReport(@NotNull JBCefBrowser browser) {
        if (isMainHTMLReady()) {
            String message = getMessage(new HashMap<>() {{
                put("command", "showNoReport");
            }});
            CefBrowser cefBrowser = browser.getCefBrowser();
            cefBrowser.executeJavaScript(getJs(message), cefBrowser.getURL(), 0);
        }
    }

    @SuppressWarnings("serial")
	public void showPartialReport(@NotNull JBCefBrowser browser,
                                  @NotNull Audit report,
                                  @NotNull VirtualFile file,
                                  @NotNull List<Integer> ids) {
        if (isMainHTMLReady()) {
            String message = getMessage(new HashMap<>() {{
                put("command", "showPartialReport");
                put("report", serialize(report));
                put("uri", getURI(file));
                put("ids", ids);
            }});
            CefBrowser cefBrowser = browser.getCefBrowser();
            cefBrowser.executeJavaScript(getJs(message), cefBrowser.getURL(), 0);
        }
    }

    // Eclipse Development Note 
    // Main html page should not contain js, it doesn't work in equo browser
    // We will run all scripts right after html gets loaded
    public String getMainHTML(String indexHtml, String styleCss) {
        int i0 = indexHtml.indexOf("<script");
        int i1 = indexHtml.lastIndexOf(SCRIPT_CLOSE_TAG) + SCRIPT_CLOSE_TAG.length();
        StringBuilder text = new StringBuilder(indexHtml);
        text.replace(i0, i1, "");
        indexHtml = text.toString();
        indexHtml = indexHtml.replaceAll("<meta http-equiv=.*?>", "");
        indexHtml = indexHtml.replace("${style}", styleCss);
        return indexHtml;
    }
    
    public String getMainJS(String indexHtml, String indexJs, boolean isDarkTheme) {
        int i0 = indexHtml.indexOf(SCRIPT_OPEN_TAG) + SCRIPT_OPEN_TAG.length();
        int i1 = indexHtml.lastIndexOf(SCRIPT_CLOSE_TAG);
        String myJs = indexHtml.substring(i0, i1);
        myJs = myJs.replace("window.__EclipseJTools.postMessage", JCEFPostMessageListener.HADLER_ID);
	    if (isDarkTheme) {
	        myJs = myJs.replace("${themeKind}", "dark");
	        myJs = myJs.replace("${foreground}", DARK_FRG_COLOR);
	        myJs = myJs.replace("${background}", DARK_BKG_COLOR);
	    }
	    else {
	        myJs = myJs.replace("${themeKind}", "light");
	        myJs = myJs.replace("${foreground}", LIGHT_FRG_COLOR);
	        myJs = myJs.replace("${background}", LIGHT_BKG_COLOR);
	    }
	    // Apply minor formatting
	    StringBuilder text = new StringBuilder();
	    for (String line : myJs.split("\\r?\\n|\\r")) {
	    	if (line.isEmpty() || line.isBlank()) {
	    		continue;
	    	} else if (line.startsWith("\t\t\t") ) {
	    		line = line.replaceFirst("\t\t\t", "");
	    		line = line.replace("\t", "  ");
	    	}
	    	text.append(line).append("\n");
	    }
	    myJs = text.toString();
        return indexJs + "\n" + myJs;
    }

    public static boolean isDarkTheme(@Nullable UIManager.LookAndFeelInfo laf) {
        if (laf == null) {
            return false;
        }
        else {
            String name = laf.getName();
            return name.contains("Darcula") || name.contains("High contrast");
        }
    }

    public static boolean isDarkTheme() {
        String name = UIManager.getLookAndFeel().getName();
        return name.contains("Darcula") || name.contains("High contrast");
    }

    public boolean isMainHTMLReady() {
        return mainHTML != null && kdbText != null;
    }

    private static String getJs(String message) {
        return "window.dispatchMessage(" + message + ");";
    }

    // Eclipse Development Note 
    // This one prepares kdb text to be passed directly as json argument not to waste time parsing it in js
	private static String jsonfy(String text) {
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

    private static String getMessage(Map<String, Object> parameters) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.writeValueAsString(parameters).replace("\\\\\"", "\"");
        }
        catch (JsonProcessingException e) {
            return null;
        }
    }

    private static String serialize(@Nullable Audit report) {
            ObjectMapper mapper = new ObjectMapper();
            SimpleModule module = new SimpleModule();
            module.addSerializer(Audit.class, new AuditSerializer());
            mapper.registerModule(module);
            try {
                String result = mapper.writerWithDefaultPrettyPrinter().writeValueAsString(report);
                return escape(result).replace("\\\\\"", "\"");
            }
            catch (JsonProcessingException e) {
                e.printStackTrace();
            }
            return null;
    }

    private String getResourceAsString(String fileName) {
        InputStream ins = ResourceUtil.getResourceAsStream(getClass().getClassLoader(), "audit", fileName);
        Stream<String> stream = new BufferedReader(new InputStreamReader(ins, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }

    private static String escape(String value) {
        value = value.replace("\"", "\\\"");
        value = value.replace("\b", "\\b");
        value = value.replace("\f", "\\f");
        value = value.replace("\n", "");
        value = value.replace("\r", "");
        return value.replace("\t", "");
    }

    @Override
    public void dispose() {
        mainHTML = null;
        indexJs = null;
        kdbText = null;
        browsers.clear();
    }
}
