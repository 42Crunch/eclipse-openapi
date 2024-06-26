package com.xliic.openapi.webapp.scheme;

import static com.xliic.openapi.webapp.editor.WebFileEditor.WHATS_NEW_EDITOR_ID;

import java.io.InputStream;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.equo.middleware.api.handler.IResponseHandler;
import com.equo.middleware.api.resource.Request;
import com.xliic.core.ui.UIManager;
import com.xliic.openapi.utils.NetUtils;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.ChangeTheme;

public class SchemeHandlerFactory implements IResponseHandler {

    // Domain for local UI debug 127.0.0.1:8887
	public static final String PROTOCOL = "https";
    public static final String DOMAIN = "openapi.xliic.com";
    public static final String HTTP_SCHEMA_PREFIX = PROTOCOL + "://" + DOMAIN + "/";

    @NotNull
    private final String indexHTML;
    @Nullable
    private UIManager manager;

    public SchemeHandlerFactory() {
        indexHTML = NetUtils.getWebAppResource(getClass(), "index.html");
        manager = null;
    }

    public void setUIManager(@NotNull UIManager manager) {
        this.manager = manager;
    }

    private ResourceHandler create(@NotNull String url) {
        if (url.startsWith(HTTP_SCHEMA_PREFIX)) {
            if (url.endsWith(".html")) {
                String resourceId = url.replace(HTTP_SCHEMA_PREFIX, "").replace(".html", "");
                return new ResourceHandler(getResourceIndexHTML(resourceId));
            } else if (url.endsWith(".js")) {
                return new ResourceHandler("application/javascript", url.replace(HTTP_SCHEMA_PREFIX, ""));
            }
        }
        return null;
    }

    @NotNull
    private String getResourceIndexHTML(@NotNull String resourceId) {
        String page;
        String themePayload = Utils.serialize(ChangeTheme.getChangeThemePayload(manager), true);
        if (WHATS_NEW_EDITOR_ID.equals(resourceId)) {
            page = NetUtils.getWebAppResource(getClass(), resourceId + ".html") + "\n" + getColorizationScript();
        } else {
            page = indexHTML.replace("${index-script}", HTTP_SCHEMA_PREFIX + resourceId + ".js");
            page = page.replace("window.__EclipseJTools.postMessage", getBrowserFunctionName(resourceId));
        }
        return page.replace("$theme", themePayload == null ? "" : themePayload);
    }

    @Override
    public InputStream getResponseData(Request request, Map<String, String> headers) {
      String url = request.getUrl();
      if (url == null || manager == null) {
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
    
    private static String getColorizationScript() {
        return "<script>"
        		+ "setColors($theme);\n"
        		+ "window.fireDOMContentLoaded = function() {\n"
        		+ "	window.runIDECommand = function(event) {\n"
        		+ "		if (event.detail.command === \"changeTheme\") {\n"
        		+ "			setColors(event.detail.payload.theme);\n"
        		+ "		}\n"
        		+ "	};\n"
        		+ "};\n"
        		+ "function setColors(colors) {\n"
        		+ "	document.body.style.background = colors.background;\n"
        		+ "	document.body.style.color = colors.foreground;\n"
        		+ "}</script>";
    }
}
