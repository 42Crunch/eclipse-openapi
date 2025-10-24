package com.xliic.core.diagnostic;

import org.eclipse.core.runtime.ILog;
import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Platform;
import org.eclipse.core.runtime.Status;
import org.jetbrains.annotations.NotNull;

public class Logger {

	// Must be equal to MANIFEST.MF ID property
	private static final String PLUGIN_ID = "openapi-plugin";
	private static final Logger LOGGER = new Logger();

	private final ILog log = Platform.getLog(Platform.getBundle(PLUGIN_ID));
    private boolean maxLogLevel = false;

    public static @NotNull Logger getInstance() {
        return LOGGER;
    }

    public static @NotNull Logger getInstance(@NotNull Class<?> cl) {
        return LOGGER;
    }

    public boolean isDebugEnabled() {
    	return maxLogLevel;
    }

    public boolean isTraceEnabled() {
    	return maxLogLevel;
    }

    public void info(@NotNull Throwable t) {
    	log.info("Exception: " + t, t);
    }

    public void warn(@NotNull Throwable t) {
        log.warn("Exception: " + t, t);
    }

    public void error(@NotNull Throwable t) {
    	log.error("Exception: " + t, t);
    }

    public void info(@NotNull String msg) {
    	log.info(msg);
    }

    public void warn(@NotNull String msg) {
    	log.warn(msg);
    }
    
    public void warn(@NotNull String msg, @NotNull Throwable t) {
    	log.warn(msg + ": " + t);
    }

    public void error(@NotNull String msg) {
    	log.error(msg);
    }

    public void debug(@NotNull String msg) {
    	if (maxLogLevel) {
            log.log(new Status(IStatus.OK, PLUGIN_ID, msg));
        }
    }

    // Have to use the same severity for debug and trace
    public void trace(@NotNull String msg) {
    	debug(msg);
    }

    public void setMaxLogLevel(boolean value) {
    	maxLogLevel = value;
    }
}
