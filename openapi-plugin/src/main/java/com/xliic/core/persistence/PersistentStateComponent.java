package com.xliic.core.persistence;

import org.jetbrains.annotations.Nullable;

public interface PersistentStateComponent<T> {
	
    @Nullable T getState();
    void loadState();
    void saveState();
}
