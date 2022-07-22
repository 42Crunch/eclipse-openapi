package com.xliic.openapi.report;

import java.util.HashMap;
import java.util.Map;

import com.xliic.core.util.ImmutableMap;

public class Summary {

    private final int all;
    private final boolean errors;
    private final boolean invalid;

    private final Grade data;
    private final Grade security;

    public Summary(boolean errors, boolean invalid, Grade data, Grade security) {
        this.errors = errors;
        this.invalid = invalid;
        this.data = data;
        this.security = security;
        all = data.getValue() + security.getValue();
    }

    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("datavalidation", ImmutableMap.of("value", data.getValue(), "max", data.getMax()));
        result.put("security", ImmutableMap.of("value", security.getValue(), "max", security.getMax()));
        result.put("oasconformance", ImmutableMap.of("value", 0, "max", 0));
        result.put("all", all);
        result.put("errors", errors);
        result.put("invalid", invalid);
        return result;
    }
}
