package com.xliic.core.codeInsight.completion;

import org.jetbrains.annotations.NotNull;

public interface CompletionProvider {

    void addCompletions(@NotNull CompletionParameters parameters, @NotNull CompletionResultSet resultSet);
}
