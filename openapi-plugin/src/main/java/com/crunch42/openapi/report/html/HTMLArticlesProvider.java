package com.crunch42.openapi.report.html;

import com.crunch42.openapi.OpenAPIAbstractUIPlugin;

import org.apache.commons.lang.StringUtils;
import org.json.JSONObject;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.stream.Stream;

public class HTMLArticlesProvider {

	private static final URL BASE_URL = OpenAPIAbstractUIPlugin.getInstance().getBundle().getEntry("/");
	private static final String HREF_TARGET = "target=\\\"_blank\\\"";

    private JSONObject articles;

    public HTMLArticlesProvider() {
		try {
			URL url = new URL(BASE_URL, "resources/articles.json");
	        InputStream inputStream = getClass().getResourceAsStream(url.getFile());
	        Stream<String> stream = new BufferedReader(new InputStreamReader(inputStream, StandardCharsets.UTF_8)).lines();
	        StringBuilder builder = new StringBuilder();
	        for (String str : stream.toArray(String[]::new)) {
	        	handle(builder, str);
	        }
	        articles = new JSONObject(builder.toString());
		}
		catch (MalformedURLException e) {
			e.printStackTrace();
		}
    }

    private void handle(StringBuilder builder, String input) {
    	if (input.contains(HREF_TARGET)) {
    		input = input.replace(HREF_TARGET, StringUtils.EMPTY);
    	}
    	builder.append(input);
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
}
