package com.xliic.openapi.webapp.scheme;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.middleware.api.handler.IResponseConstants;
import com.equo.middleware.api.resource.Request;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.utils.NetUtils;

public class ResourceHandler {

    @SuppressWarnings("serial")
    private static final Map<String, String> HEADER = new HashMap<>() {{ put("Access-Control-Allow-Origin", "*"); }};

    @NotNull
    private final String mimeType;
    @NotNull
    private final InputStream inputStream;

    public ResourceHandler(@NotNull String htmlPage) {
        this.mimeType = "text/html";
        inputStream = new ByteArrayInputStream(htmlPage.getBytes(StandardCharsets.UTF_8));
    }

    public ResourceHandler(@NotNull String mimeType, @NotNull String resourceFileName) {
        this.mimeType = mimeType;
        if (mimeType.startsWith("image/")) {
            inputStream = ResourceUtil.getImageAsStream(getClass().getClassLoader(), resourceFileName);
        } else {
            String text = NetUtils.getWebAppResource(getClass(), resourceFileName);
            inputStream = new ByteArrayInputStream(text.getBytes(StandardCharsets.UTF_8));
        }
    }

    public InputStream getResponseData(Request request, Map<String, String> headers) {
        headers.put("Status", "200");
        headers.put(IResponseConstants.CONTENT_TYPE_HEADER, mimeType);
        headers.putAll(HEADER);
        return inputStream;
    }
}
