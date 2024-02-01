package com.xliic.openapi.platform.scan.config.jcef.messages;

import com.xliic.openapi.platform.scan.config.payload.ScanConfOperation;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ShowScanConfOperation extends WebAppConsume {

    @NotNull
    private final ScanConfOperation report;

    public ShowScanConfOperation(@NotNull ScanConfOperation report) {
        super("showScanconfOperation");
        this.report = report;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("oas", Utils.deserialize(report.getOas(), Collections.EMPTY_MAP));
        result.put("path", report.getPath());
        result.put("method", report.getMethod());
        result.put("scanconf", report.getConfig());
        return result;
    }
}
