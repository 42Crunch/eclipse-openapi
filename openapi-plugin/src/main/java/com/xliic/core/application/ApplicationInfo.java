package com.xliic.core.application;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenAPIAbstractUIPlugin;

public class ApplicationInfo {

    private static ApplicationInfo info;

    public static ApplicationInfo getInstance() {
        if (info == null) {
            info = new ApplicationInfo();
        }
        return info;
    }

    @NotNull
    public String getFullVersion() {
        return OpenAPIAbstractUIPlugin.getInstance().getVersion().toString();
    }
}
