package com.xliic.openapi.platform.dictionary.types;

import java.math.BigInteger;
import java.util.Map;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

public class DataFormatString extends DataFormat {

    @NotNull
    protected final String pattern;
    @NotNull
    protected final BigInteger minLength;
    @NotNull
    protected final BigInteger maxLength;

    public DataFormatString(@NotNull String name, @Nullable String description, @Nullable String format, @Nullable Object example,
            @Nullable Object defaultProp, @Nullable Boolean readOnly, @Nullable Boolean writeOnly, @Nullable Boolean nullable,
            @NotNull String sensitivity, @NotNull String pii, @NotNull String objectIdentifier, @NotNull String lastUpdate,
            @NotNull String lastChangeBy, @NotNull String pattern, @NotNull BigInteger minLength, @NotNull BigInteger maxLength) {
        super(name, description, "string", format, null, example, defaultProp, readOnly, writeOnly, nullable, sensitivity, pii, objectIdentifier,
                lastUpdate, lastChangeBy);
        this.pattern = pattern;
        this.minLength = minLength;
        this.maxLength = maxLength;
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
