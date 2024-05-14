package com.xliic.openapi.settings;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.utils.Utils;
import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;
import java.util.List;
import java.util.Objects;

public class ListConverter implements Converter {

    private static final String DEFAULT_STRING = "";
    private static final List<Object> DEFAULT_LIST = new LinkedList<>();
    private static final ObjectMapper MAPPER = new ObjectMapper();

    @Override
    public String toString(@NotNull Object value) {
        return Objects.requireNonNullElse(Utils.serialize(MAPPER, value, true), DEFAULT_STRING);
    }

    @Override
    public Object toObject(@NotNull String value) {
        if (!value.isEmpty()) {
            return Objects.requireNonNullElse(Utils.deserialize(MAPPER, value, List.class), DEFAULT_LIST);
        }
        return DEFAULT_LIST;
    }
}
