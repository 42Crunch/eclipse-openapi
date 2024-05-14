package com.xliic.openapi.settings;

import org.jetbrains.annotations.NotNull;

public interface Converter {

    String toString(@NotNull Object value);
    Object toObject(@NotNull String value);
}
