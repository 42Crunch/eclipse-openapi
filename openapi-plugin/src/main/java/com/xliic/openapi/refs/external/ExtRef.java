package com.xliic.openapi.refs.external;

import static com.xliic.openapi.quickfix.QuickFix.formatFixText;
import static com.xliic.openapi.utils.Utils.REF_DELIMITER;
import static com.xliic.openapi.utils.Utils.getFileType;
import static com.xliic.openapi.utils.Utils.getTextFromFile;
import static org.apache.commons.lang3.RandomStringUtils.random;
import static com.xliic.openapi.settings.Settings.ExtRef.APPROVED_HOST_CONFIG;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.List;

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
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.settings.SettingsService;
import com.xliic.openapi.utils.TempFileUtils;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class ExtRef {

    public static final String EXT_FILE_PREFIX = "ext_ref_";
    private static final String INTERNAL_URL_PREFIX = "openapi-internal-";
    private static final OkHttpClient client = new OkHttpClient().newBuilder().build();

    @SuppressWarnings("serial")
    private static final Map<String, ContentType> CONTENT_TYPES = new HashMap<>() {
        {
            put("application/json", ContentType.JSON);
            put("application/x-yaml", ContentType.YAML);
            put("text/yaml", ContentType.YAML);
        }
    };

    @SuppressWarnings("serial")
    private static final Map<String, ContentType> EXTENSIONS = new HashMap<>() {
        {
            put(".json", ContentType.JSON);
            put(".yaml", ContentType.YAML);
            put(".yml", ContentType.YAML);
        }
    };

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
        } catch (URISyntaxException e) {
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
        Request.Builder builder = new Request.Builder();
        ApprovedHostConfig hostConfig = getHostConfiguration(getHostName());
        if (hostConfig.hasToken()) {
            builder.addHeader(hostConfig.getHeaderName(), hostConfig.getHeaderValue());
        }
        Request request = builder.url(url).build();
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
        file = WriteCommandAction.runWriteCommandAction(project,
                (Computable<VirtualFile>) () -> TempFileUtils.createExtRefFile(requestor, fileName, text));
        file.setReadOnly(true);
        LocalFileSystem.getInstance().refreshFiles(Collections.singletonList(file));
    }

    public void dispose() {
        if (file != null) {
            WriteCommandAction.writeCommandAction(project).run(() -> {
                IProject project = EclipseUtil.getProject(file.getPath());
                try {
                    file.delete(this);
                } catch (IOException ignored) {
                }
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
        } else {
            return getTextFromFile(file);
        }
    }

    public VirtualFile getVirtualFile() {
        return file;
    }

    public URL getUrl() {
        return url;
    }

    public @NotNull String getInternalURI() {
        return INTERNAL_URL_PREFIX + url.toString();
    }

    public static @NotNull String getInternalURI(@NotNull URI uri) {
        return INTERNAL_URL_PREFIX + uri;
    }

    public static boolean isInternalURI(@NotNull String uri) {
        return uri.startsWith(INTERNAL_URL_PREFIX);
    }

    public static @NotNull String toURI(@NotNull String internalUri) {
        return internalUri.replace(INTERNAL_URL_PREFIX, "");
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
        } else if (type == OpenApiFileType.Yaml) {
            return ContentType.YAML;
        } else {
            return null;
        }
    }

    public static String refToURL(@NotNull String ref) {
        if (ref.contains(REF_DELIMITER)) {
            return ref.split(REF_DELIMITER)[0];
        }
        return ref;
    }
    
    @SuppressWarnings("unchecked")
    private static ApprovedHostConfig getHostConfiguration(String hostname) {
        List<Object> config = (List<Object>) SettingsService.getInstance().getValueAsObject(APPROVED_HOST_CONFIG);
        if (config != null) {
            for (Object item : config) {
                final Map<String, Object> itemMap = (Map<String, Object>) item;
                if (hostname.equals(itemMap.get("host"))) {
                    String header = (String) itemMap.getOrDefault("header", "");
                    String prefix = (String) itemMap.getOrDefault("prefix", "");
                    String token = (String) itemMap.getOrDefault("token", "");
                    return new ApprovedHostConfig(hostname, header, prefix, token);
                }
            }
        }
        return new ApprovedHostConfig(hostname);
    }
}
