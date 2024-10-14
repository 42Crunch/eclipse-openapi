package com.xliic.core.browser;

import java.util.Map;

public class Request {

  private Map<String, String> headers;
  private String url;
  private String method;

  public static Request create(String url, String method, Map<String, String> headers) {
    Request request = new Request();
    request.url = url;
    request.method = method;
    request.headers = headers;
    return request;
  }

  private Request() {
  }

  public String getUrl() {
    return url;
  }

  public String getMethod() {
    return method;
  }

  public Map<String, String> getHeaderMap() {
    return headers;
  }
}
