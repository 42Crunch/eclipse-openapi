package com.xliic.openapi.webapp.messages;

import java.util.Map;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.locks.LockSupport;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.webapp.WebAppFunction;

public class WebAppRateThread extends Thread {

    @NotNull
    private final WebAppProduce producer;
    @NotNull
    private final Map<WebAppProduce, WebAppProduceData> buffer;

    public WebAppRateThread(@NotNull WebAppProduce producer, @NotNull Map<WebAppProduce, WebAppProduceData> buffer) {
        this.producer = producer;
        this.buffer = buffer;
    }

    @Override
    public void run() {
        LockSupport.parkNanos(TimeUnit.MILLISECONDS.toNanos(producer.getRate()));
        WebAppProduceData data;
        synchronized (producer) {
            data = buffer.remove(producer);
            if (data != null) {
                WebAppFunction.run(producer, data.getProps(), data.getMessage());
            }
        }
    }
}
