package com.xliic.openapi.preview;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.jetbrains.annotations.NotNull;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import static com.xliic.openapi.utils.NetUtils.getPreviewResource;

@SuppressWarnings("serial")
public class PreviewServlet extends HttpServlet {

    private static final Map<String, String> CONTENT = new HashMap<>();

    @NotNull
    private final String token;

    public PreviewServlet(@NotNull String token) {
        this.token = token;
    }

    @Override
    public void init() throws ServletException {
        initResource("/swaggerui.html", "swaggerui.html");
        initResource("/styles/swaggerui.css", "swaggerui.css");
        initResource("/js/swaggerui.js", "swaggerui.js");
        initResource("/redoc.html", "redoc.html");
        initResource("/js/redoc.js", "redoc.js");
        initResource("/js/token.js", null);
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws IOException {
        String path = req.getPathInfo();
        if (path == null) {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);
            return;
        }
        if (path.endsWith(".html")) {
            serveResource(new PreviewResource(CONTENT.get(path), "text/html"), resp);
        } else if (path.startsWith("/styles/") && path.endsWith(".css")) {
            serveResource(new PreviewResource(CONTENT.get(path), "text/css"), resp);
        } else if (path.startsWith("/js/") && path.endsWith(".js")) {
            serveResource(new PreviewResource(CONTENT.get(path), "application/javascript"), resp);
        } else {
            resp.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }

    private static void serveResource(PreviewResource resource, HttpServletResponse resp) throws IOException {
        resp.setStatus(HttpServletResponse.SC_OK);
        resp.setContentType(resource.getContentType());
        resp.setContentLengthLong(resource.length());
        try (InputStream is = resource.newInputStream(); OutputStream os = resp.getOutputStream()) {
            is.transferTo(os);
        }
    }

    private void initResource(String path, String fileName) {
        if (CONTENT.get(path) == null) {
            if ("/js/token.js".equals(path)) {
                CONTENT.put(path, "window.previewToken=\"" + token +"\"");
            } else {
                CONTENT.put(path, getPreviewResource(getClass(), fileName));
            }
        }
    }
}
