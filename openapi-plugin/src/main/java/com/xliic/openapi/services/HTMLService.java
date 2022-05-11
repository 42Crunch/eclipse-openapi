package com.xliic.openapi.services;

import org.apache.commons.lang.RandomStringUtils;
import org.eclipse.ui.PlatformUI;
import org.jetbrains.annotations.NotNull;
import org.json.JSONObject;

import com.xliic.core.Disposable;
import com.xliic.core.util.FileUtil;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.services.api.IHTMLService;

import java.io.*;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.stream.Stream;

import static com.xliic.openapi.OpenApiUtils.createTextResource;

public class HTMLService implements IHTMLService, Disposable {

    public final String ISSUE;
    public final String SUMMARY;
    public final String SUMMARY_INVALID;
    public final String FALLBACK_ARTICLE;
    public final String REPORT;
    public final String NO_REPORT_AVAILABLE;
    public final String GO_BACK;
    public final String NO_ISSUES_FOUND;

    public final String STYLE_CSS;
    public final String BOOTSTRAP_MIN_CSS;

    public final String MAIN_JS;
    public final String RENAME_JS;
    public final String REMOVE_JS;
    public final String REFRESH_JS;
    public final String THEME_LIGHT_JS;
    public final String THEME_DARK_JS;

    private final JSONObject articles;
    private File resourcesPath;

    public HTMLService() {

        ISSUE = getResourceAsString("html", "issue.html");
        SUMMARY = getResourceAsString("html", "summary.html");
        SUMMARY_INVALID = getResourceAsString("html", "summary-invalid.html");
        FALLBACK_ARTICLE = getResourceAsString("html", "fallback.html");
        REPORT = getResourceAsString("html", "report.html");
        NO_REPORT_AVAILABLE = getResourceAsString("html", "report-empty.html");
        GO_BACK = getResourceAsString("html", "back.html");
        NO_ISSUES_FOUND = getResourceAsString("html", "issues-not-found.html");

        STYLE_CSS = getResourceAsString("css", "style.css");
        BOOTSTRAP_MIN_CSS = getResourceAsString("css", "bootstrap.min.css");

        MAIN_JS = getResourceAsString("js", "main.js");
        RENAME_JS = getResourceAsString("js", "rename.js");
        REMOVE_JS = getResourceAsString("js", "remove.js");
        REFRESH_JS = getResourceAsString("js", "refresh.js");
        THEME_LIGHT_JS = getResourceAsString("js", "theme_light.js");
        THEME_DARK_JS = getResourceAsString("js", "theme_dark.js");

        articles = new JSONObject(removeBlankTarget(getResourceAsString("config", "articles.json")));

        // Create tmp images for audit report (images from jar are not rendered in JCEF)
        try {
            initWebResources();
        }
        catch (IOException ignored) {
        }
    }

    private void initWebResources() throws IOException {
        if (resourcesPath == null) {
            String randomString = RandomStringUtils.random(10, true, false).toLowerCase();
            resourcesPath = FileUtil.createTempDirectory("report_", randomString, true);
            createTextResource(resourcesPath, "icons", "42crunch_icon", ".svg");
            createTextResource(resourcesPath, "icons", "logo", ".svg");
            createTextResource(resourcesPath, "icons", "logoDark", ".svg");
        }
    }

    public static HTMLService getInstance() {
    	return (HTMLService) PlatformUI.getWorkbench().getService(IHTMLService.class);
    }

    public String getLogo(boolean isDarkThemeNow) {
        String logo = isDarkThemeNow ? "logoDark.svg" : "logo.svg";
        return new File(resourcesPath, logo).toURI().toString();
    }

    public String getCrunch42Icon() {
        return new File(resourcesPath, "42crunch_icon.svg").toURI().toString();
    }

    private String issueIdToArticleId(String id) {
        return id.replace(".", "-").toLowerCase();
    }

    public boolean containsArticleId(String id) {
        return (id != null) && articles.toJsonMap().containsKey(issueIdToArticleId(id));
    }

    public Map<String, Object> getArticle(String id) {
        return ((JSONObject) articles.toJsonMap().get(issueIdToArticleId(id))).toJsonMap();
    }

    private String getResourceAsString(String basePath, String fileName) {
        InputStream inputStream = ResourceUtil.getResourceAsStream(getClass().getClassLoader(), basePath, fileName);
        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }

    public @NotNull String addCssToHeader(@NotNull String html, boolean applyAll) {
        String css = applyAll ? BOOTSTRAP_MIN_CSS + STYLE_CSS : STYLE_CSS;
        return html.replace("<head>", "<head><style>" + css + "</style>");
    }

    public static String string(String value) {
        return "\"" + value + "\"";
    }

    public static void append(StringBuilder builder, String key, String value, boolean isLast) {
        builder.append("\"").append(key).append("\":").append(string(value));
        if (!isLast) {
            builder.append(",");
        }
    }

    @Override
    public void dispose() {}
    
    private String removeBlankTarget(String text) {
    	return text.replace("target=\\\"_blank\\\"", "");
    }
}
