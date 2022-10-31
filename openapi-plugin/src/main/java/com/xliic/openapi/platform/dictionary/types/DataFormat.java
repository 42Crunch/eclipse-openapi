package com.xliic.openapi.platform.dictionary.types;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.apache.commons.collections4.CollectionUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class DataFormat {

    public static final String FORMAT_KEY = "format";
    public static final String X_42C_FORMAT_KEY = "x-42c-format";
    public static final List<String> PROPERTIES = Arrays.asList("type", "example", "pattern", "minLength", "maxLength", "enum", "default",
            "exclusiveMinimum", "exclusiveMaximum", "minimum", "maximum", "multipleOf");

    @NotNull
    protected final String name;
    @Nullable
    protected final String description;

    // General information
    @NotNull
    protected final String type; // string / integer / number
    @Nullable
    protected final String format; // float, double, any string value
    @Nullable
    protected List<Object> enumProp;

    // Parameters
    @Nullable
    protected final Object example;
    @Nullable
    protected final Object defaultProp;
    @Nullable
    protected final Boolean readOnly;
    @Nullable
    protected final Boolean writeOnly;
    @Nullable
    protected final Boolean nullable;

    // Additional details
    @NotNull
    protected final String sensitivity; // "1" - "5"
    @NotNull
    protected final String objectIdentifier; // "yes" / "no"
    @NotNull
    protected final String pii; // "yes" / "no"

    // Hidden properties
    @NotNull
    protected final String lastUpdate; // "1659329642"
    @NotNull
    protected final String lastChangeBy; // "204e39b1-ee8f-4f09-b543-6b4123d1ba04"

    public DataFormat(@NotNull String name, @Nullable String description, @NotNull String type, @Nullable String format,
            @Nullable List<Object> enumProp, @Nullable Object example, @Nullable Object defaultProp, @Nullable Boolean readOnly,
            @Nullable Boolean writeOnly, @Nullable Boolean nullable, @NotNull String sensitivity, @NotNull String pii,
            @NotNull String objectIdentifier, @NotNull String lastUpdate, @NotNull String lastChangeBy) {
        this.name = name;
        this.description = description;
        this.type = type;
        this.format = format;
        this.enumProp = enumProp;
        this.example = example;
        this.defaultProp = defaultProp;
        this.readOnly = readOnly;
        this.writeOnly = writeOnly;
        this.nullable = nullable;
        this.sensitivity = sensitivity;
        this.pii = pii;
        this.objectIdentifier = objectIdentifier;
        this.lastUpdate = lastUpdate;
        this.lastChangeBy = lastChangeBy;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o)
            return true;
        if (o == null || getClass() != o.getClass())
            return false;
        DataFormat format = (DataFormat) o;
        return name.equals(format.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }

    public Boolean hasOwnProperty(@NotNull String prop) {
        return get(escape(prop)) != null;
    }

    public Boolean equals(@NotNull String prop, @Nullable Object value) {
        Object myValue = get(escape(prop));
        if (myValue instanceof List) {
            return (value instanceof List) && CollectionUtils.isEqualCollection((List<?>) myValue, (List<?>) value);
        }
        return Objects.equals(myValue, value);
    }

    @Nullable
    public Object get(@NotNull String prop) {
        String escProp = escape(prop);
        try {
            return getClass().getDeclaredField(escProp).get(this);
        } catch (NoSuchFieldException | IllegalAccessException ignored) {
        }
        try {
            return getClass().getSuperclass().getDeclaredField(escProp).get(this);
        } catch (NoSuchFieldException | IllegalAccessException ignored) {
        }
        return null;
    }

    @NotNull
    public Map<String, Object> getProperties() {
        Map<String, Object> props = new HashMap<>();
        add(props, "primitiveType", "format");
        add(props, "name", name);
        addOptional(props, "format", format);
        add(props, "type", type);
        addOptional(props, "description", description);
        addOptional(props, "enum", enumProp);
        addOptional(props, "default", defaultProp);
        addOptional(props, "example", example);
        addOptional(props, "readOnly", readOnly);
        addOptional(props, "writeOnly", writeOnly);
        addOptional(props, "nullable", nullable);
        add(props, "sensitivity", sensitivity);
        add(props, "pii", pii);
        add(props, "objectIdentifier", objectIdentifier);
        add(props, "lastUpdate", lastUpdate);
        add(props, "lastChangeBy", lastChangeBy);
        return props;
    }

    protected static void add(Map<String, Object> props, String property, Object value) {
        add(props, property, value, false);
    }

    protected static void add(Map<String, Object> props, String property, Object value, Boolean stringfy) {
        if (stringfy && value != null) {
            props.put(property, String.valueOf(value));
        } else {
            if (value instanceof Boolean) {
                props.put(property, value);
            } else if (value instanceof BigInteger) {
                props.put(property, ((BigInteger) value).longValue());
            } else if (value instanceof BigDecimal) {
                props.put(property, ((BigDecimal) value).doubleValue());
            } else {
                props.put(property, value);
            }
        }
    }

    protected static void addOptional(Map<String, Object> props, String property, Object value) {
        addOptional(props, property, value, false);
    }

    protected static void addOptional(Map<String, Object> props, String property, Object value, Boolean stringfy) {
        if (value != null) {
            add(props, property, value, stringfy);
        }
    }

    private static String escape(String property) {
        if ("enum".equals(property)) {
            return "enumProp";
        } else if ("default".equals(property)) {
            return "defaultProp";
        }
        return property;
    }
}
