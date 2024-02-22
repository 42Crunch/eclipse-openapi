package com.xliic.openapi.platform;

import com.xliic.openapi.utils.Utils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.regex.Pattern;

public class NamingConvention {

    public static final String DEFAULT_API_NAMING_PATTERN = "^[\\w _.-]{1,255}$";
    public static final String DEFAULT_COLLECTION_NAMING_PATTERN = "^[\\w _.\\/:-]{1,2048}$";
    public static final String TAGS_PATTERN = "^([\\w\\-@.+]{1,255}:[\\w\\-@.+]{1,255}[\\s,]*)*$";

    @NotNull
    private final String pattern;
    @NotNull
    private final String description;
    @NotNull
    private final String example;

    public NamingConvention() {
        pattern = "";
        description = "";
        example = "";
    }

    public NamingConvention(@NotNull String pattern, @NotNull String description, @NotNull String example) {
        this.pattern = pattern;
        this.description = description;
        this.example = example;
    }

    @NotNull
    public Object getPayload() {
        Map<String, Object> result = new HashMap<>();
        result.put("pattern", pattern);
        result.put("description", description);
        result.put("example", example);
        return result;
    }

    @NotNull
    public String getStringPayload() {
        return Objects.requireNonNullElse(Utils.serialize(getPayload(), true), "");
    }

    @NotNull
    @SuppressWarnings("unchecked")
    public static NamingConvention restoreFromStringPayload(@NotNull String payload) {
    	if (!payload.isEmpty()) {
	        Map<String, Object> result = (Map<String, Object>) Utils.deserialize(payload);
	        if (result != null) {
	            String pattern = (String) result.getOrDefault("pattern", "");
	            String description = (String) result.getOrDefault("description", "");
	            String example = (String) result.getOrDefault("example", "");
	            return new NamingConvention(pattern, description, example);
	        }
    	}
        return new NamingConvention();
    }

    public @NotNull String getPattern() {
        return pattern;
    }

    public @NotNull String getDescription() {
        return description;
    }

    public @NotNull String getExample() {
        return example;
    }

    public boolean match(@NotNull String value) {
        if (hasPattern()) {
            return Pattern.compile(pattern, Pattern.CASE_INSENSITIVE).matcher(value).find();
        }
        return true;
    }

    public boolean hasPattern() {
        return !StringUtils.isEmpty(pattern);
    }

    public static boolean match(@NotNull String value, @NotNull String pattern) {
        return Pattern.compile(pattern, Pattern.CASE_INSENSITIVE).matcher(value).find();
    }
}
