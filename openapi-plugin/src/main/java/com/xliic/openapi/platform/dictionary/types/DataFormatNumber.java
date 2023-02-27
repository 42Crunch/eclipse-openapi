package com.xliic.openapi.platform.dictionary.types;

import java.math.BigDecimal;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class DataFormatNumber extends DataFormat {

    @Nullable protected final BigDecimal minimum;
    @Nullable protected final Boolean exclusiveMinimum;

    @Nullable protected final BigDecimal maximum;
    @Nullable protected final Boolean exclusiveMaximum;

    @Nullable protected final BigDecimal multipleOf;

    public DataFormatNumber(@NotNull Node node, @NotNull String prefix) {
        super(node, prefix);
        this.minimum = getNumberProperty(node, "minimum");
        this.exclusiveMinimum = getBooleanProperty(node, "exclusiveMinimum");
        this.maximum = getNumberProperty(node, "maximum");
        this.exclusiveMaximum = getBooleanProperty(node, "exclusiveMaximum");
        this.multipleOf = getNumberProperty(node, "multipleOf");
    }

    @Override
    @NotNull
    public Map<String, Object> getProperties() {
        Map<String, Object> props = super.getProperties();
        addOptional(props, "minimum", minimum);
        addOptional(props, "exclusiveMinimum", exclusiveMinimum);
        addOptional(props, "maximum", maximum);
        addOptional(props, "exclusiveMaximum", exclusiveMaximum);
        addOptional(props, "multipleOf", multipleOf);
        return props;
    }
}