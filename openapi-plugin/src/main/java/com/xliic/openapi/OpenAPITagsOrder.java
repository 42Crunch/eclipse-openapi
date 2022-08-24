package com.xliic.openapi;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class OpenAPITagsOrder {

    public static final List<String> topTags = new LinkedList<>();
    public static final List<String> componentsTags = new LinkedList<>();

    static {

        // Preferred order of the tags, mixed v2 and v3 tags
        topTags.addAll(Arrays.asList(
                "swagger",
                "openapi",
                "info",
                "externalDocs",
                "host",
                "basePath",
                "schemes",
                "consumes",
                "produces",
                "tags",
                "servers",
                "components",
                "paths",
                "parameters",
                "responses",
                "security",
                "securityDefinitions",
                "definitions"));

        // Preferred order of tags in v3 components
        componentsTags.addAll(Arrays.asList(
                "schemas",
                "responses",
                "parameters",
                "examples",
                "requestBodies",
                "headers",
                "securitySchemes",
                "links",
                "callbacks"));
    }
}
