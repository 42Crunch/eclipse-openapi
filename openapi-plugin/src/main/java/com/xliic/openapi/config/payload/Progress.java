package com.xliic.openapi.config.payload;

import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;

public class Progress {

    private final double percent;
    private final long transferred;
    private final long total;

    public Progress(long transferred, long total) {
        this.percent = (double) transferred / total;
        this.transferred = transferred;
        this.total = total;
    }

    @NotNull
    public Object getProgress() {
        Map<String, Object> result = new HashMap<>();
        result.put("percent", percent);
        result.put("transferred", transferred);
        result.put("total", total);
        return result;
    }

    @NotNull
    public static String getPercent(long transferred, long total) {
        int percent = (int) (100 * ((double) transferred / total));
        return percent + "%";
    }
}
