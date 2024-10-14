package com.xliic.core.browser;

import java.io.InputStream;
import java.util.Map;

public interface IResponseHandler {

  public default boolean shouldProcessRequest(Request request) {
    return true;
  }

  public InputStream getResponseData(Request request, Map<String, String> headers);
}
