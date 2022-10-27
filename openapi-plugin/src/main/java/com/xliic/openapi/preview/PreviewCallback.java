package com.xliic.openapi.preview;

import com.xliic.core.util.ActionCallback;

public class PreviewCallback extends ActionCallback {

    private int port;

    public PreviewCallback() {
        this.port = -1;
    }

    public int getPort() {
        return port;
    }

    public void setPort(int port) {
        this.port = port;
    }
}
