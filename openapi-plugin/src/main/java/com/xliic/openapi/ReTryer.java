package com.xliic.openapi;

import java.util.Date;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.jetbrains.annotations.NotNull;

public abstract class ReTryer<T> {

    private final int pause;
    private final int duration;
    @NotNull
    private final String timeoutMsg;

    public ReTryer(int pause, int maxRetries, @NotNull String timeoutMsg) {
        this.pause = pause;
        this.duration = pause * maxRetries;
        this.timeoutMsg = timeoutMsg;
    }

    @NotNull
    protected abstract T execute() throws Exception;

    protected abstract boolean keepRetrying(@NotNull T result) throws Exception;

    protected void dispose(@NotNull T result) {
        // Do nothing by default
    }

    public void run() throws Exception {
        long start = new Date().getTime();
        long time = start;
        T result = null;
        while (time - start < duration) {
        	try {
	            result = execute();
	            if (keepRetrying(result)) {
	                LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(pause));
	                time = new Date().getTime();
	            } else {
	                return;
	            }
            } finally {
                if (result != null) {
                    dispose(result);
                }
            }
        }
        throw new Exception(timeoutMsg);
    }
}
