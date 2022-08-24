package com.xliic.core.concurrency;

import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;

import org.jetbrains.annotations.NotNull;

public class JobScheduler {

    @NotNull
    public static ScheduledExecutorService getScheduler() {
        return Executors.newScheduledThreadPool(1);
    }
}
