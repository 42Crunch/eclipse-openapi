package com.xliic.openapi.platform.dictionary.types;

import java.math.BigDecimal;
import java.math.BigInteger;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.concurrent.atomic.AtomicInteger;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.Payload;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.platform.callback.SuccessASTResponseCallback;
import com.xliic.openapi.platform.dictionary.DictionaryReloadCallback;

public class DataDictionary extends SuccessASTResponseCallback implements Payload, Comparable<DataDictionary> {

    public static final String STANDARD_NAME = "standard";
    public static final String STANDARD_PREFIX = "o:" + STANDARD_NAME + ":";

    @NotNull
    private final String id;
    @NotNull
    private final String name;
    @NotNull
    private final String description;
    private final Map<String, DataFormat> formats = Collections.synchronizedMap(new HashMap<>());
    @NotNull
    private final AtomicInteger counter;
    @NotNull
    private final DictionaryReloadCallback callback;

    public DataDictionary(@NotNull String id, @NotNull String name, @NotNull String description, @NotNull Project project,
            @NotNull AtomicInteger counter, @NotNull DictionaryReloadCallback callback) {
        super(project);
        this.id = id;
        this.name = name;
        this.description = description;
        this.counter = counter;
        this.callback = callback;
    }

    @NotNull
    public String getId() {
        return id;
    }

    @NotNull
    public String getName() {
        return name;
    }

    @NotNull
    public String getDescription() {
        return description;
    }

    public boolean isStandard() {
        return STANDARD_NAME.equals(name);
    }

    @NotNull
    public Map<String, DataFormat> getFormats() {
        return formats;
    }

    @NotNull
    public Map<String, Map<String, Object>> getFormatsProperties() {
        List<String> keys = new LinkedList<>(formats.keySet());
        Collections.sort(keys);
        Map<String, Map<String, Object>> result = new LinkedHashMap<>();
        for (String key : keys) {
            result.put(key, formats.get(key).getProperties());
        }
        return result;
    }

    @Override
    public void onCode200ASTResponse(@NotNull Node node) {
        try {
            Node target = node.find("/formats");
            if (target != null) {
                for (Node child : target.getChildren()) {

                    DataFormat df = null;
                    String name = child.getKey();
                    String description = child.getChildValue("description");

                    // General information
                    String type = child.getChildValue("type");
                    String format = child.getChildValue("format");
                    List<Object> enumProp = null;
                    Node enumNode = child.getChild("enum");
                    if (enumNode != null) {
                        enumProp = new LinkedList<>();
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
                    Object example = child.getChildTypedValue("example");
                    Object defaultProp = child.getChildTypedValue("default");
                    Boolean readOnly = getBooleanProperty(child, "readOnly");
                    Boolean writeOnly = getBooleanProperty(child, "writeOnly");
                    Boolean nullable = getBooleanProperty(child, "nullable");

                    // Additional details
                    String sensitivity = child.getChildValue("sensitivity");
                    String objectIdentifier = child.getChildValue("objectIdentifier");
                    String pii = child.getChildValue("pii");

                    // Hidden properties
                    String lastUpdate = child.getChildValue("lastUpdate");
                    String lastChangeBy = child.getChildValue("lastChangeBy");

                    // Type specific additional properties
                    if (enumProp == null) {
                        if ("string".equals(type)) {
                            String pattern = child.getChildValue("pattern");
                            BigInteger minLength = Objects.requireNonNull(getIntegerProperty(child, "minLength"));
                            BigInteger maxLength = Objects.requireNonNull(getIntegerProperty(child, "maxLength"));
                            df = new DataFormatString(name, description, format, example, defaultProp, readOnly, writeOnly, nullable, sensitivity,
                                    pii, objectIdentifier, lastUpdate, lastChangeBy, pattern, minLength, maxLength);
                        } else if ("integer".equals(type)) {
                            Object exampleInt = getIntegerProperty(child, "example");
                            Object defaultPropInt = getIntegerProperty(child, "default");
                            BigInteger minimum = getIntegerProperty(child, "minimum");
                            Boolean exclusiveMinimum = getBooleanProperty(child, "exclusiveMinimum");
                            BigInteger maximum = getIntegerProperty(child, "maximum");
                            Boolean exclusiveMaximum = getBooleanProperty(child, "exclusiveMaximum");
                            BigInteger multipleOf = getIntegerProperty(child, "multipleOf");
                            df = new DataFormatInteger(name, description, format, exampleInt, defaultPropInt, readOnly, writeOnly, nullable,
                                    sensitivity, pii, objectIdentifier, lastUpdate, lastChangeBy, minimum, exclusiveMinimum, maximum,
                                    exclusiveMaximum, multipleOf);
                        } else if ("number".equals(type)) {
                            BigDecimal minimum = getNumberProperty(child, "minimum");
                            Boolean exclusiveMinimum = getBooleanProperty(child, "exclusiveMinimum");
                            BigDecimal maximum = getNumberProperty(child, "maximum");
                            Boolean exclusiveMaximum = getBooleanProperty(child, "exclusiveMaximum");
                            BigDecimal multipleOf = getNumberProperty(child, "multipleOf");
                            df = new DataFormatNumber(name, description, format, example, defaultProp, readOnly, writeOnly, nullable, sensitivity,
                                    pii, objectIdentifier, lastUpdate, lastChangeBy, minimum, exclusiveMinimum, maximum, exclusiveMaximum,
                                    multipleOf);
                        }
                    } else {
                        Object exampleEnum = example;
                        Object defaultPropEnum = defaultProp;
                        if ("integer".equals(type)) {
                            exampleEnum = getIntegerProperty(child, "example");
                            defaultPropEnum = getIntegerProperty(child, "default");
                        } else if ("number".equals(type)) {
                            exampleEnum = getNumberProperty(child, "example");
                            defaultPropEnum = getNumberProperty(child, "default");
                        }
                        df = new DataFormat(name, description, type, format, enumProp, exampleEnum, defaultPropEnum, readOnly, writeOnly, nullable,
                                sensitivity, pii, objectIdentifier, lastUpdate, lastChangeBy);
                    }
                    if (df != null) {
                        formats.put(name, df);
                    }
                }
            }
        } finally {
            if (counter.decrementAndGet() == 0) {
                callback.complete();
            }
        }
    }

    @Override
    public void onFailure(@NotNull String reason) {
        if (counter.decrementAndGet() == 0) {
            callback.complete();
        }
    }

    @Override
    public int compareTo(@NotNull DataDictionary o) {
        return getName().compareTo(o.getName());
    }

    @NotNull
    public static String getFullStandardFormatName(@NotNull String shortStandardFormatName) {
        return STANDARD_PREFIX + shortStandardFormatName;
    }

    private static BigInteger getIntegerProperty(Node node, String key) {
        Node child = node.getChild(key);
        if (child == null) {
            return null;
        } else {
            String value = child.getValue();
            return value != null ? new BigInteger(value) : null;
        }
    }

    private static BigDecimal getNumberProperty(Node node, String key) {
        Node child = node.getChild(key);
        if (child == null) {
            return null;
        } else {
            String value = child.getValue();
            return value != null ? new BigDecimal(value) : null;
        }
    }

    private static Boolean getBooleanProperty(Node node, String key) {
        Node child = node.getChild(key);
        if (child == null) {
            return false;
        } else {
            String value = child.getValue();
            return value != null ? Boolean.parseBoolean(value) : null;
        }
    }

    @Override
    public Map<String, Object> getProperties() {
        Map<String, Object> result = new HashMap<>();
        result.put("id", id);
        result.put("name", name);
        result.put("description", description);
        result.put("formats", getFormatsProperties());
        return result;
    }
}
