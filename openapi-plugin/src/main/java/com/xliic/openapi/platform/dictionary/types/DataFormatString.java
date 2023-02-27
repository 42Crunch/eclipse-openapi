package com.xliic.openapi.platform.dictionary.types;

import java.math.BigInteger;
import java.util.Map;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.node.Node;

public class DataFormatString extends DataFormat {

    @NotNull protected final String pattern;
    @NotNull protected final BigInteger minLength;
    @NotNull protected final BigInteger maxLength;

    public DataFormatString(@NotNull Node node, @NotNull String prefix) {
        super(node, prefix);
        this.pattern = getStringProperty(node, "pattern", DEFAULT_STRING);
        this.minLength = getIntegerProperty(node, "minLength", DEFAULT_INTEGER);
        this.maxLength = getIntegerProperty(node, "maxLength", DEFAULT_INTEGER);
    }

    @Override
    @NotNull
    public Map<String, Object> getProperties() {
        Map<String, Object> props = super.getProperties();
        add(props, "pattern", pattern);
        add(props, "minLength", minLength, true);
        add(props, "maxLength", maxLength, true);
        return props;
    }
}