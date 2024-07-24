package com.xliic.openapi.platform.dictionary.types;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Arrays;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;

import org.apache.commons.collections4.CollectionUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;

public class DataFormat {

    public static final String FORMAT = "format";
    public static final String EXAMPLE = "example";
    public static final String X_42C_FORMAT = "x-42c-format";
    public static final String X_42C_SAMPLE = "x-42c-sample";

    private static final List<String> BASIC_PROPS = Arrays.asList("type", "pattern", "minLength", "maxLength", "enum",
            "default", "exclusiveMinimum", "exclusiveMaximum", "minimum", "maximum", "multipleOf", X_42C_FORMAT);

    private static final List<String> PROPS_WITH_EXAMPLE = new LinkedList<>(BASIC_PROPS);
    private static final List<String> PROPS_WITH_X_42C_SAMPLE = new LinkedList<>(BASIC_PROPS);

    static {
        PROPS_WITH_EXAMPLE.add(EXAMPLE);
        PROPS_WITH_X_42C_SAMPLE.add(X_42C_SAMPLE);
    }

    protected static final String DEFAULT_STRING = "";
    protected static final BigInteger DEFAULT_INTEGER = new BigInteger("0");

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @NotNull protected final String name;
    @Nullable protected final String description;

    // General information
    @NotNull protected final String type;       // string / integer / number
    @NotNull protected final String x42cFormat; // o:${format.name} or o:${dictionary.name}:${format.name}
    @Nullable protected final String format;    // float, double, any string value
    @Nullable protected final List<Object> enumProp;

    // Parameters
    @Nullable protected final Object example;
    @Nullable protected final Object defaultProp;
    @Nullable protected final Boolean readOnly;
    @Nullable protected final Boolean writeOnly;
    @Nullable protected final Boolean nullable;

    // Additional details
    @NotNull protected final String sensitivity;      // "1" - "5"
    @NotNull protected final String objectIdentifier; // "yes" / "no"
    @NotNull protected final String pii;              // "yes" / "no"

    // Hidden properties
    @NotNull protected final String lastUpdate;   // "1659329642"
    @NotNull protected final String lastChangeBy; // "204e39b1-ee8f-4f09-b543-6b4123d1ba04"

    public DataFormat(@NotNull Node node, @NotNull String prefix) {
        // General information
        this.name = node.getKey();
        this.description = getStringProperty(node, "description", null);
        this.type = Objects.requireNonNull(node.getChildValue("type"));
        this.format = getStringProperty(node, "format", null);
        this.x42cFormat = prefix + name;
        Node enumNode = node.getChild("enum");
        if (enumNode == null) {
            this.enumProp = null;
        } else {
            this.enumProp = new LinkedList<>();
            for (Node e : enumNode.getChildren()) {
                if ("integer".equals(type)) {
                    enumProp.add(new BigInteger(e.getValue()));
                } else if ("number".equals(type)) {
                    enumProp.add(new BigDecimal(e.getValue()));
                } else {
                    enumProp.add(e.getValue());
                }
            }
        }
        // Parameters
        if ("integer".equals(type)) {
            this.example = getIntegerProperty(node, "example", null);
            this.defaultProp = getIntegerProperty(node, "default", null);
        } else if ("number".equals(type) && enumProp != null) {
            this.example = getNumberProperty(node, "example");
            this.defaultProp = getNumberProperty(node, "default");
        } else {
            this.example = node.getChildTypedValue("example");
            this.defaultProp = node.getChildTypedValue("default");
        }
        this.readOnly = getBooleanProperty(node,"readOnly");
        this.writeOnly = getBooleanProperty(node,"writeOnly");
        this.nullable = getBooleanProperty(node,"nullable");
        // Additional details
        this.sensitivity = getStringProperty(node, "sensitivity", DEFAULT_STRING);
        this.pii = getStringProperty(node, "pii", DEFAULT_STRING);
        this.objectIdentifier = getStringProperty(node, "objectIdentifier", DEFAULT_STRING);
        // Hidden properties
        this.lastUpdate = getStringProperty(node,"lastUpdate", DEFAULT_STRING);
        this.lastChangeBy = getStringProperty(node,"lastChangeBy", DEFAULT_STRING);
    }

    @NotNull
    public static List<String> getPropertiesToPass(@NotNull OpenApiVersion version, @NotNull String pointer) {
        if (version == OpenApiVersion.V2 && isPlaceForX42Sample(pointer)) {
            return DataFormat.PROPS_WITH_X_42C_SAMPLE;
        }
        return DataFormat.PROPS_WITH_EXAMPLE;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        DataFormat format = (DataFormat) o;
        return name.equals(format.name);
    }

    @Override
    public int hashCode() {
        return name.hashCode();
    }

    public Boolean hasOwnProperty(@NotNull String prop, boolean isJson) {
        return get(getFieldName(prop), isJson) != null;
    }

    public Boolean equals(@NotNull String prop, @Nullable Object value, boolean isJson) {
        Object myValue = get(getFieldName(prop), isJson);
        value = getFinalValue(prop, value, isJson);
        if (myValue instanceof List) {
            return (value instanceof List) && CollectionUtils.isEqualCollection((List<?>) myValue, (List<?>) value);
        }
        return Objects.equals(myValue, value);
    }

    @Nullable
    public Object get(@NotNull String prop, boolean isJson) {
        if (X_42C_FORMAT.equals(prop)) {
            return x42cFormat;
        }
        String fieldName = getFieldName(prop);
        try {
            return getFinalValue(prop, getClass().getDeclaredField(fieldName).get(this), isJson);
        } catch (NoSuchFieldException | IllegalAccessException ignored) {
        }
        try {
            return getFinalValue(prop, getClass().getSuperclass().getDeclaredField(fieldName).get(this), isJson);
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

    public static boolean doPropertyReplacement(String prop) {
        return !EXAMPLE.equals(prop) && !X_42C_SAMPLE.equals(prop);
    }

    public static boolean isStandardName(@NotNull String formatName) {
        return !formatName.startsWith("o:") || formatName.indexOf(":") == formatName.lastIndexOf(":");
    }

    protected static void add(Map<String, Object> props, String prop, Object value) {
        add(props, prop, value, false);
    }

    protected static void add(Map<String, Object> props, String prop, Object value, Boolean stringfy) {
        if (stringfy && value != null) {
            props.put(prop, String.valueOf(value));
        } else {
            if (value instanceof Boolean) {
                props.put(prop, value);
            } else if (value instanceof BigInteger) {
                props.put(prop, ((BigInteger) value).longValue());
            } else if (value instanceof BigDecimal) {
                props.put(prop, ((BigDecimal) value).doubleValue());
            } else {
                props.put(prop, value);
            }
        }
    }

    protected static void addOptional(Map<String, Object> props, String prop, Object value) {
        addOptional(props, prop, value, false);
    }

    protected static void addOptional(Map<String, Object> props, String prop, Object value, Boolean stringfy) {
        if (value != null) {
            add(props, prop, value, stringfy);
        }
    }

    protected static BigInteger getIntegerProperty(Node node, String key, BigInteger defaultValue) {
        Node child = node.getChild(key);
        if (child == null) {
            return defaultValue;
        } else {
            Object value = child.getTypedValue();
            return value instanceof BigInteger ? (BigInteger) value : defaultValue;
        }
    }

    protected static BigDecimal getNumberProperty(Node node, String key) {
        Node child = node.getChild(key);
        if (child == null) {
            return null;
        } else {
            Object value = child.getTypedValue();
            return value instanceof BigDecimal ? (BigDecimal) value : null;
        }
    }

    protected static Boolean getBooleanProperty(Node node, String key) {
        Node child = node.getChild(key);
        if (child == null) {
            return null;
        } else {
            Object value = child.getTypedValue();
            return value instanceof Boolean ? (Boolean) value : null;
        }
    }

    protected static String getStringProperty(Node node, String key, String defaultValue) {
        Node child = node.getChild(key);
        if (child == null) {
            return defaultValue;
        } else {
            Object value = child.getTypedValue();
            return value instanceof String ? (String) value : defaultValue;
        }
    }

    private static String getFieldName(String prop) {
        if ("enum".equals(prop)) {
            return "enumProp";
        } else if ("default".equals(prop)) {
            return "defaultProp";
        } else if (X_42C_SAMPLE.equals(prop)) {
            return EXAMPLE;
        }
        return prop;
    }

    public static Object getFinalValue(String prop, Object value, boolean isJson) {
        if (isJson && value instanceof String && "pattern".equals(prop)) {
            Map<String, Object> params = new HashMap<>();
            params.put("pattern", value);
            try {
                String escJson = OBJECT_MAPPER.writeValueAsString(params);
                int i = escJson.indexOf("\"", escJson.indexOf(":"));
                return escJson.substring(i + 1, escJson.lastIndexOf("\""));
            } catch (JsonProcessingException ignored) {
            }
        }
        return value;
    }

    private static boolean isPlaceForX42Sample(String pointer) {
        return !(pointer.contains("schema") || pointer.contains("definitions") || pointer.contains("x-42c-schemas"));
    }
}
