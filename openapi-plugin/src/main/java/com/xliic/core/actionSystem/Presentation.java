package com.xliic.core.actionSystem;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.util.Icon;

public interface Presentation {

    void setIcon(@Nullable Icon icon);
    
    void setDescription(@NotNull String description);
}
