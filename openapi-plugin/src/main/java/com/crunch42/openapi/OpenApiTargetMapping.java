package com.crunch42.openapi;

import java.util.HashMap;
import java.util.Map;

public class OpenApiTargetMapping {

  private static final Map<String, String> V2 = new HashMap<>();
  private static final Map<String, String> V3 = new HashMap<>();

  static {

    V2.put("schema", "/definitions");
    V2.put("items", "/definitions");
    V2.put("parameters", "/parameters");
    V2.put("responses", "/responses");

    V3.put("schema", "/components/schemas");
    V3.put("responses", "/components/responses");
    V3.put("parameters", "/components/parameters");
    V3.put("examples", "/components/examples");
    V3.put("requestBody", "/components/requestBodies");
    V3.put("callbacks", "/components/callbacks");
    V3.put("headers", "/components/headers");
    V3.put("links", "/components/links");
    V3.put("items", "/components/schemas");
  }

  public static Map<String, String> getTargetMapping(OpenApiVersion version) {

    return (version == OpenApiVersion.V3) ? OpenApiTargetMapping.V3 : OpenApiTargetMapping.V2;
  }
}
