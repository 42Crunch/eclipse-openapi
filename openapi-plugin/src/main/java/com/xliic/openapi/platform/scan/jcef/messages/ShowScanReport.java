package com.xliic.openapi.platform.scan.jcef.messages;

import java.util.Base64;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.platform.scan.payload.ScanReport;
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
        result.put("path", "/");
        result.put("method", "get");
        result.put("report", Utils.deserialize(new String(Base64.getDecoder().decode(report.getData())), Collections.EMPTY_MAP));
        result.put("security", null);
        return result;
    }
}
