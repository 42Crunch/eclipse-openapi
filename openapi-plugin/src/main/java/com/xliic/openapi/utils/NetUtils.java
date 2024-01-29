package com.xliic.openapi.utils;

import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.charset.StandardCharsets;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Stream;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.util.ResourceUtil;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.report.AuditAPIs;

import okhttp3.MediaType;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;
import okhttp3.OkHttpClient;
import okhttp3.Request;

public class NetUtils {
	
    public interface ProgressListener {
        void update(long bytesRead, long contentLength, boolean done);
    }

    public static void download(@NotNull String url, @NotNull String filePath, @NotNull ProgressListener listener) throws Exception {
        Response response = new OkHttpClient().newCall(new Request.Builder().url(url).get().build()).execute();
        ResponseBody body = Objects.requireNonNull(response.body());
        final long total = body.contentLength();
        if (total <= 0) {
            throw new Exception("Unexpected contentLength " + total);
        }
        if (response.code() == 200 || response.code() == 201) {
            try (InputStream inputStream = response.body().byteStream()) {
                byte[] buff = new byte[4096];
                long transferred = 0;
                OutputStream output = new FileOutputStream(filePath);
                listener.update(0L, total, false);
                double percent = (double) transferred / total;
                while (transferred <= total) {
                    int read = inputStream.read(buff);
                    if (read == -1) {
                        break;
                    }
                    output.write(buff, 0, read);
                    transferred += read;
                    double p = (double) transferred / total;
                    double delta = 100 * (p - percent);
                    if (delta >= 1) {
                        percent = p;
                        listener.update(transferred, total, false);
                    }
                }
                output.flush();
                output.close();
                listener.update(transferred, total, true);
            }
        } else {
            throw new Exception("Unexpected response code " + response.code());
        }
    }

    @Nullable
    public static String getKDB() throws IOException {
        try (Response response = AuditAPIs.Sync.getKDB()) {
            try (ResponseBody body = response.body()) {
                if (response.code() == 200) {
                    if (body != null) {
                        return body.string().trim();
                    }
                }
            }
        }
        return null;
    }

    @Nullable
    public static RequestBody getJsonRequestBody(@NotNull Map<String, Object> parameters) {
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            String json = objectMapper.writeValueAsString(parameters);
            return RequestBody.create(json, MediaType.parse("application/json"));
        } catch (JsonProcessingException e) {
            return null;
        }
    }

    @Nullable
    public static Node getBodyNode(@NotNull Response response) {
        try (ResponseBody body = response.body()) {
            if (response.code() == 200 && body != null) {
                try {
                    return Utils.getJsonAST(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    @Nullable
    public static Object getBodyObject(@NotNull Response response) {
        try (ResponseBody body = response.body()) {
            if (response.code() == 200 && body != null) {
                try {
                    return Utils.deserialize(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    @NotNull
    public static Node getBodyNodeRequireNonNull(@NotNull Response response) throws Exception {
        if (response.code() != 200) {
            throw new Exception("Unexpected response code " + response.code());
        }
        try (ResponseBody body = response.body()) {
            if (body == null) {
                throw new Exception("Unexpected response body");
            }
            String text = body.string();
            if (text.isEmpty()) {
                throw new Exception("Unexpected response body content");
            }
            Node node = Utils.getJsonAST(text);
            if (node == null) {
                throw new Exception("Unexpected response body format");
            }
            return node;
        }
    }

    @Nullable
    public static Node getBodyNodeIgnoreCode(@NotNull Response response) {
        try (ResponseBody body = response.body()) {
            if (body != null) {
                try {
                    return Utils.getJsonAST(body.string());
                } catch (IOException ignored) {
                }
            }
        }
        return null;
    }

    public static boolean isURLValid(@NotNull String url) {
        try {
            return StringUtils.isNotEmpty(getDomainName(url));
        } catch (URISyntaxException ignored) {
        }
        return false;
    }

    @NotNull
    public static String getDomainName(@NotNull String url, @NotNull String defaultName) {
        try {
            String domain = getDomainName(url);
            if (domain != null) {
                return domain;
            }
        } catch (URISyntaxException ignored) {
        }
        return defaultName;
    }

    @Nullable
    public static String getDomainName(@NotNull String url) throws URISyntaxException {
        String domain = new URI(url).getHost();
        return domain != null && domain.startsWith("www.") ? domain.substring(4) : domain;
    }

    @NotNull
    public static String getWebAppResource(@NotNull Class<?> loaderClass, @NotNull String fileName) {
        InputStream stream = ResourceUtil.getResourceAsStream(loaderClass.getClassLoader(), "web", fileName);
        InputStreamReader reader = new InputStreamReader(stream, StandardCharsets.UTF_8);
        Stream<String> bufferedReader = new BufferedReader(reader).lines();
        StringBuilder builder = new StringBuilder();
        bufferedReader.forEach(line -> builder.append(line).append("\n"));
        return builder.toString();
    }
}
