package com.xliic.openapi.platform.scan.report.jcef.messages;

import com.xliic.openapi.platform.scan.report.payload.ScanReport;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ShowFullScanReport extends WebAppConsume {

    @NotNull
    private final ScanReport report;

    public ShowFullScanReport(@NotNull ScanReport report) {
        super("showFullScanReport");
        this.report = report;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("report", Utils.deserialize(report.getReport(), Collections.EMPTY_MAP));
        result.put("security", null);
        result.put("oas", Utils.deserialize(report.getOas(), Collections.EMPTY_MAP));
        return result;
    }
}
