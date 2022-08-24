package com.xliic.openapi;

import okhttp3.*;

import org.eclipse.core.resources.IProject;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.common.ContentType;
import com.xliic.common.WorkspaceException;
import com.xliic.core.application.ApplicationManager;
import com.xliic.core.command.WriteCommandAction;
import com.xliic.core.project.Project;
import com.xliic.core.util.Computable;
import com.xliic.core.util.EclipseUtil;
import com.xliic.core.vfs.LocalFileSystem;
import com.xliic.core.vfs.VirtualFile;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import static com.xliic.openapi.OpenApiUtils.*;
import static com.xliic.openapi.quickfix.QuickFix.formatFixText;
import static org.apache.commons.lang.RandomStringUtils.random;

public class ExtRef {

    public static final String EXT_FILE_PREFIX = "ext_ref_";
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    @SuppressWarnings("serial")
    private static final Map<String, ContentType> CONTENT_TYPES = new HashMap<>() {{
        put("application/json", ContentType.JSON);
        put("application/x-yaml", ContentType.YAML);
        put("text/yaml", ContentType.YAML);
    }};

    @SuppressWarnings("serial")
    private static final Map<String, ContentType> EXTENSIONS  = new HashMap<>() {{
        put(".json", ContentType.JSON);
        put(".yaml", ContentType.YAML);
        put(".yml", ContentType.YAML);
    }};

    private final URL url;
    private final Project project;
    private final String rootFileName;

    private VirtualFile file;
    private ContentType contentType;

    public ExtRef(Project project, URL url, String rootFileName) throws IOException, WorkspaceException {
        this.url = url;
        this.project = project;
        this.rootFileName = rootFileName;
        file = null;
        refresh();
    }

    @Nullable
    public String getHostName() {
        try {
            return url.toURI().getAuthority();
        }
        catch (URISyntaxException e) {
        }
        return null;
    }

    public static boolean isExtRef(URI uri) {
        return (uri != null) && isExtRef(uri.toString());
    }

    public static boolean isExtRef(String url) {
        return (url != null) && (url.startsWith("http://") || url.startsWith("https://"));
    }

    public void refresh() throws IOException, WorkspaceException {
        Request request = new Request.Builder().url(url).build();
        Response response = client.newCall(request).execute();
        contentType = getContentType(url.toString(), response);
        if (contentType == null) {
            throw new WorkspaceException("Failed to get content type for " + url);
        }
        final ResponseBody body = response.body();
        if (body == null) {
            throw new WorkspaceException("Failed to get response body for " + url);
        }
        String text = formatFixText(body.string(), contentType == ContentType.JSON);
        IProject requestor = EclipseUtil.getProject(rootFileName);
        String fileName = (file == null) ? getFileName() : file.getName();
        file = WriteCommandAction.runWriteCommandAction(project, (Computable<VirtualFile>) () ->
        TempFileUtils.createExtRefFile(requestor, fileName, text));
        file.setReadOnly(true);
        LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(file));
    }

    public void dispose() {
        if (file != null) {
            WriteCommandAction.writeCommandAction(project).run(() -> {
                IProject project = EclipseUtil.getProject(file.getPath());
                try {
                    file.delete(this);
                }
                catch (IOException ignored) {}
                file = null;
                if (project != null) {
                    EclipseUtil.refreshProject(project);
                }
            });
        }
    }

    public String getText(boolean inReadAction) {
        if (inReadAction) {
            return ApplicationManager.getApplication().runReadAction((Computable<String>) () -> getTextFromFile(file));
        }
        else {
            return getTextFromFile(file);
        }
    }

    public VirtualFile getVirtualFile() {
        return file;
    }

    public String getrRootFileName() {
        return rootFileName;
    }

    private String getFileName() {
        String ext = (contentType == ContentType.JSON) ? "json" : "yaml";
        return EXT_FILE_PREFIX + random(15, true, false).toLowerCase() + "." + ext;
    }

    public ContentType getContentType() {
        return contentType;
    }

    private ContentType getContentType(String uri, Response response) {

        String contentType = "";
        ResponseBody body = response.body();
        if (body != null) {
            MediaType mediaType = body.contentType();
            if (mediaType != null) {
                contentType = mediaType.toString().toLowerCase();
            }
        }
        if (CONTENT_TYPES.containsKey(contentType)) {
            return CONTENT_TYPES.get(contentType);
        }
        contentType = response.header("content-type");
        if (contentType != null) {
            contentType = contentType.toLowerCase();
        }
        if (CONTENT_TYPES.containsKey(contentType)) {
            return CONTENT_TYPES.get(contentType);
        }
        for (Map.Entry<String, ContentType> entry : EXTENSIONS.entrySet()) {
            if (uri.toLowerCase().endsWith(entry.getKey())) {
                return entry.getValue();
            }
        }
        return null;
    }

    public static ContentType getContentType(VirtualFile file) {
        OpenApiFileType type = getFileType(file);
        if (type == OpenApiFileType.Json) {
            return ContentType.JSON;
        }
        else if (type == OpenApiFileType.Yaml) {
            return ContentType.YAML;
        }
        else {
            return null;
        }
    }

    public static String refToURL(@NotNull String ref) {
        if (ref.contains(REF_DELIMITER)) {
            return ref.split(REF_DELIMITER)[0];
        }
        return ref;
    }
}
