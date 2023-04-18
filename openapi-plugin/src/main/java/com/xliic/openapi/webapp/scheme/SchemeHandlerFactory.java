package com.xliic.openapi.webapp.scheme;

import java.io.InputStream;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.equo.middleware.api.handler.IResponseHandler;
import com.equo.middleware.api.resource.Request;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.ChangeTheme;

public class SchemeHandlerFactory implements IResponseHandler {

    // Domain for local UI debug 127.0.0.1:8887
    public static final String DOMAIN = "openapi.xliic.com";
    public static final String HTTP_SCHEMA_PREFIX = "http://" + DOMAIN + "/";
    private static final String STYLE_CSS_URL = HTTP_SCHEMA_PREFIX + "style.css";

    @NotNull
    private final String indexHTML;

    public SchemeHandlerFactory() {
        indexHTML = NetUtils.getWebAppResource(getClass(), "index.html");
    }

    private ResourceHandler create(@NotNull String url) {
        if (url.startsWith(HTTP_SCHEMA_PREFIX)) {
            if (url.endsWith(".html")) {
                String resourceId = url.replace(HTTP_SCHEMA_PREFIX, "").replace(".html", "");
                return new ResourceHandler(getResourceIndexHTML(resourceId));
            } else if (url.endsWith(".js")) {
                return new ResourceHandler("application/javascript", url.replace(HTTP_SCHEMA_PREFIX, ""));
            } else if (STYLE_CSS_URL.equals(url)) {
                return new ResourceHandler("text/css", "style.css");
            }
        }
        return null;
    }

    @NotNull
    private String getResourceIndexHTML(@NotNull String resourceId) {
        String page = indexHTML.replace("${style-css}", STYLE_CSS_URL);
        page = page.replace("${index-script}", HTTP_SCHEMA_PREFIX + resourceId + ".js");
        page = page.replace("window.__EclipseJTools.postMessage", getBrowserFunctionName(resourceId));
        return page.replace("$theme", "" + Utils.serialize(ChangeTheme.getChangeThemePayload(), true));
    }

    @Override
    public InputStream getResponseData(Request request, Map<String, String> headers) {
      String url = request.getUrl();
      if (url == null) {
          return null;
      }
      ResourceHandler resourceHandler = create(url);
      if (resourceHandler == null) {
          // Return default empty page
          return getClass().getClassLoader().getResourceAsStream("default.html");
      } else {
          return resourceHandler.getResponseData(request, headers);
      }
    }

    public static String getBrowserFunctionName(@NotNull String resourceId) {
        return resourceId.replace("-", "") + "PostMessageToEclipseIDE";
    }
}
