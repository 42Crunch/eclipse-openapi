package com.xliic.openapi.platform.callback;

import okhttp3.Callback;
import org.jetbrains.annotations.NotNull;

public interface EnqueueCallback extends Callback {

    void onFailure(@NotNull String reason);
}
