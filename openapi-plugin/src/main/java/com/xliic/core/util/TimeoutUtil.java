package com.xliic.core.util;

public class TimeoutUtil {

    private TimeoutUtil() {
    }

    public static void sleep(long millis) {
        try {
            Thread.sleep(millis);
        } catch (InterruptedException var3) {
        }
    }
}
