package com.xliic.openapi.tags;

import com.xliic.core.persistence.Converter;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

import java.util.Map;

public class TagsStateConverter extends Converter<Map<String, Object>> {

    @SuppressWarnings("unchecked")
    public Map<String, Object> fromString(@NotNull String value) {
        return (Map<String, Object>) Utils.deserialize(value);
    }

    public String toString(Map<String, Object> value) {
        return Utils.serialize(value, true);
    }
}