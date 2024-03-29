package com.xliic.openapi;

import java.io.IOException;
import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.NetUtils;

import okhttp3.Response;

public abstract class Puller<T> {

    protected final int pause;
    protected final int duration;

    public Puller(int pause, int duration) {
        this.pause = pause;
        this.duration = duration;
    }

    @NotNull
    protected abstract Response send() throws IOException;

    @Nullable
    protected abstract T response(@NotNull Node body);

    @NotNull
    protected Exception timeout() {
         return new Exception("Failed to pull data in " + duration + "ms");
    }

    @NotNull
    public T get() throws Exception {
        T data;
        long start = new Date().getTime();
        long time = start;
        try {
            while (time - start < duration) {
                try (Response response = send()) {
                    Node body = NetUtils.getBodyNode(response);
                    if (body != null) {
                        try {
                            data = response(body);
                            if (data != null) {
                                return data;
                            }
                        } catch (Throwable ignored) {
                        }
                    }
                }
                LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(pause));
                time = new Date().getTime();
            }
        } catch (Throwable ignored) {
        }
        throw timeout();
    }
}
