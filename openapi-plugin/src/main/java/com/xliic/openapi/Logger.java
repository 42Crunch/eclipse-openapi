package com.xliic.openapi;

import org.eclipse.core.runtime.IStatus;
import org.eclipse.core.runtime.Plugin;
import org.eclipse.core.runtime.Status;

public class Logger {

    private static final String PLUGIN_ID = "com.xliic.openapi";

    public static void error(String message) {
        log(new Status(IStatus.ERROR, PLUGIN_ID, message));
    }

    public static void log(int statusErrorID, String message) {
        log(new Status(statusErrorID, PLUGIN_ID, message));
    }

    public static void log(IStatus status) {
        Plugin plugin = OpenAPIAbstractUIPlugin.getInstance();
        if (plugin == null) {
            System.err.println(status.toString());
        } else {
            plugin.getLog().log(status);
        }
    }

    public static void log(Throwable e) {
        log(new Status(IStatus.ERROR, PLUGIN_ID, e.getMessage(), e));
    }
}
