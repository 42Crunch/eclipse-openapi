package com.xliic.core;

import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.stream.Stream;
import java.util.HashMap;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.browser.IResponseHandler;
import com.xliic.core.browser.Request;

public class CefApp {

    private static final String SCRIPT_TAG = "<script>";

    private static final CefApp self = new CefApp();

    private IResponseHandler responseHandler = null;

    public static synchronized CefApp getInstance() throws UnsatisfiedLinkError {
        return self;
    }

    public boolean registerSchemeHandlerFactory(@NotNull String schemeName, @NotNull String domainName, @NotNull IResponseHandler responseHandler) {
    	this.responseHandler = responseHandler;
        return true;
    }

    public String getContentFromUrl(@NotNull String url) {
    	if (responseHandler != null) {
    		Map<String, String> headers = new HashMap<>();
    		// Get HTML
    		Request request = Request.create(url, "GET", headers);
    		InputStream stream = responseHandler.getResponseData(request, headers);
    		StringBuilder page = getContent(stream);
    		// Get JS code
    		request = Request.create(url.replace(".html", ".js"), "GET", headers);
    		stream = responseHandler.getResponseData(request, headers);
    		StringBuilder jsCode = getContent(stream);
    		// Add JS into HTML
            int offset = page.indexOf(SCRIPT_TAG) + SCRIPT_TAG.length();
            page.insert(offset, jsCode.toString());
            return page.toString();
    	}
    	return "<html><head></head><body><h1>Response handler not initialized</h1></body></html>";
    }

    private static StringBuilder getContent(InputStream stream2) {
        Stream<String> stream = new BufferedReader(new InputStreamReader(stream2, StandardCharsets.UTF_8)).lines();
        StringBuilder builder = new StringBuilder();
        stream.forEach(line -> builder.append(line).append("\n"));
        return builder;
    }
}
