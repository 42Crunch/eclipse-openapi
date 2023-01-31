package com.xliic.openapi.utils;

import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Map;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.parser.ast.node.Node;

import okhttp3.MediaType;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.ResponseBody;

public class NetUtils {

    @Nullable
    public static RequestBody getJsonRequestBody(@NotNull Map<String, String> parameters) {
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
}
