package com.xliic.openapi.platform.dictionary.types;

import java.math.BigInteger;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class DataFormatInteger extends DataFormat {

    @Nullable protected final BigInteger minimum;
    @Nullable protected final Boolean exclusiveMinimum;

    @Nullable protected final BigInteger maximum;
    @Nullable protected final Boolean exclusiveMaximum;

    @Nullable protected final BigInteger multipleOf;

    public DataFormatInteger(@NotNull Node node, @NotNull String prefix) {
        super(node, prefix);
        this.minimum = getIntegerProperty(node, "minimum", null);
        this.exclusiveMinimum = getBooleanProperty(node, "exclusiveMinimum");
        this.maximum = getIntegerProperty(node, "maximum", null);
        this.exclusiveMaximum = getBooleanProperty(node, "exclusiveMaximum");
        this.multipleOf = getIntegerProperty(node, "multipleOf", null);
    }

    @Override
    @NotNull
    public Map<String, Object> getProperties() {
        Map<String, Object> props = super.getProperties();
        addOptional(props, "minimum", minimum, true);
        addOptional(props, "exclusiveMinimum", exclusiveMinimum);
        addOptional(props, "maximum", maximum, true);
        addOptional(props, "exclusiveMaximum", exclusiveMaximum);
        addOptional(props, "multipleOf", multipleOf);
        return props;
    }
}