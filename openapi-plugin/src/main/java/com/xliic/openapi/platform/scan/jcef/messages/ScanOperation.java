package com.xliic.openapi.platform.scan.jcef.messages;

import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class ScanOperation extends WebAppConsume {

    @NotNull
    private final com.xliic.openapi.platform.scan.payload.ScanOperation report;

    public ScanOperation(@NotNull com.xliic.openapi.platform.scan.payload.ScanOperation report) {
        super("scanOperation");
        this.report = report;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("oas", Utils.deserialize(report.getOas(), Collections.EMPTY_MAP));
        result.put("rawOas", report.getOas());
        result.put("path", report.getPath());
        result.put("method", report.getMethod());
        result.put("config", Utils.deserialize(report.getConfig(), Collections.EMPTY_MAP));
        result.put("documentUrl", Utils.getURI(report.getPsiFile().getVirtualFile()));
        return result;
    }
}
