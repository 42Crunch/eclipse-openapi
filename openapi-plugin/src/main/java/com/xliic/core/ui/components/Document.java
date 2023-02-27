package com.xliic.core.ui.components;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.ui.DocumentAdapter;

public interface Document {

    void addDocumentListener(@NotNull DocumentAdapter listener);

    void removeDocumentListener(@NotNull DocumentAdapter listener);
}
