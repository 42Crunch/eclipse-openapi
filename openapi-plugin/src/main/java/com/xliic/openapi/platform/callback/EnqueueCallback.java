package com.xliic.openapi.platform.callback;

import org.jetbrains.annotations.NotNull;

import okhttp3.Callback;

public interface EnqueueCallback extends Callback {

    void onFailure(@NotNull String reason);
}
