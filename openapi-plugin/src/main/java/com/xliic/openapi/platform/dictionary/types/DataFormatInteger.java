package com.xliic.openapi.platform.dictionary.types;

import java.math.BigInteger;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class DataFormatInteger extends DataFormat {

    @Nullable
    protected final BigInteger minimum;
    @Nullable
    protected final Boolean exclusiveMinimum;

    @Nullable
    protected final BigInteger maximum;
    @Nullable
    protected final Boolean exclusiveMaximum;

    @Nullable
    protected final BigInteger multipleOf;

    public DataFormatInteger(@NotNull String name, @Nullable String description, @Nullable String format, @Nullable Object example,
            @Nullable Object defaultProp, @Nullable Boolean readOnly, @Nullable Boolean writeOnly, @Nullable Boolean nullable,
            @NotNull String sensitivity, @NotNull String pii, @NotNull String objectIdentifier, @NotNull String lastUpdate,
            @NotNull String lastChangeBy, @Nullable BigInteger minimum, @Nullable Boolean exclusiveMinimum, @Nullable BigInteger maximum,
            @Nullable Boolean exclusiveMaximum, @Nullable BigInteger multipleOf) {

        super(name, description, "integer", format, null, example, defaultProp, readOnly, writeOnly, nullable, sensitivity, pii, objectIdentifier,
                lastUpdate, lastChangeBy);
        this.minimum = minimum;
        this.exclusiveMinimum = exclusiveMinimum;
        this.maximum = maximum;
        this.exclusiveMaximum = exclusiveMaximum;
        this.multipleOf = multipleOf;
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
