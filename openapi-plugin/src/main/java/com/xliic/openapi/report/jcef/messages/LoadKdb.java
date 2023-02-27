package com.xliic.openapi.report.jcef.messages;

import com.xliic.openapi.utils.Utils;
import com.xliic.openapi.webapp.messages.WebAppConsume;
import org.jetbrains.annotations.NotNull;

import java.util.Collections;
import java.util.Map;

public class LoadKdb extends WebAppConsume {

    @NotNull
    private final String  kdb;

    public LoadKdb(@NotNull String kdb) {
        super("loadKdb");
        this.kdb = kdb;
    }

    @Override @SuppressWarnings("unchecked")
    protected @NotNull Map<String, Object> getPayload() {
        return (Map<String, Object>) Utils.deserialize(kdb, Collections.EMPTY_MAP);
    }
}
