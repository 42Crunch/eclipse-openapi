package com.xliic.openapi.platform.scan.config.jcef.messages;

import com.xliic.openapi.platform.scan.config.payload.ScanConfWithOas;
import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

public class LoadUpdatedScanConf extends WebAppConsume {

    @NotNull
    private final ScanConfWithOas payload;

    public LoadUpdatedScanConf(@NotNull ScanConfWithOas payload) {
        super("loadUpdatedScanconf");
        this.payload = payload;
    }

    @Override
    protected @Nullable Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("oas", Utils.deserialize(payload.getOas(), Collections.EMPTY_MAP));
        result.put("scanconf", payload.getScanconf());
        return result;
    }
}
