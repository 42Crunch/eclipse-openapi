package com.xliic.openapi.platform.scan.report.jcef.messages;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;

public class ShowScanReport extends WebAppConsume {

    @NotNull
    private final ScanReport report;

    public ShowScanReport(@NotNull ScanReport report) {
        super("showScanReport");
        this.report = report;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("path", report.getPath());
        result.put("method", report.getMethod());
        result.put("report", Utils.deserialize(report.getReport(), Collections.EMPTY_MAP));
        result.put("security", null);
        result.put("oas", Utils.deserialize(report.getOas(), Collections.EMPTY_MAP));
        return result;
    }
}
