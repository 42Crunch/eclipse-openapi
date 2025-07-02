package com.xliic.openapi.platform.scan.report.jcef.messages;

import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowScanReport extends WebAppConsume {

    @NotNull
    private final String apiAlias;

    public ShowScanReport(@NotNull String apiAlias) {
        super("showScanReport");
        this.apiAlias = apiAlias;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("apiAlias", apiAlias);
        return result;
    }
}
