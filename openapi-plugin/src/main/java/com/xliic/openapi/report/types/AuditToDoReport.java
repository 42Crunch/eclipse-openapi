package com.xliic.openapi.report.types;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.SimpleData;

public class AuditToDoReport extends SimpleData {

    @Nullable
    private final String text;

    public AuditToDoReport(@NotNull Map<String, Object> data) {
        super(data);
        this.text = null;
    }

    public AuditToDoReport(@NotNull String text) {
        super(new HashMap<>(0));
        this.text = text;
    }

    public String getText() {
        return text != null ? text : new String(Base64.getDecoder().decode((String) getData().get("data")));
    }
}
