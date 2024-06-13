package com.xliic.core.diagnostic;

import org.jetbrains.annotations.NotNull;

public class Logger {

	private static final Logger LOGGER = new Logger();

    public static @NotNull Logger getInstance(@NotNull Class<?> cl) {
        return LOGGER;
    }
    
    public void error(@NotNull Throwable t) {
    	t.printStackTrace();
    }
}
