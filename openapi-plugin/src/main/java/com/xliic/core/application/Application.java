package com.xliic.core.application;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Computable;
import com.xliic.core.util.messages.MessageBus;

public interface Application {

    MessageBus getMessageBus();

    void invokeLater(@NotNull Runnable runnable);

    void invokeAndWait(@NotNull Runnable runnable);

    void invokeLaterOnWriteThread(@NotNull Runnable runnable);

    void runReadAction(@NotNull Runnable runnable);

    <T> T runReadAction(@NotNull Computable<T> computable);

    void runWriteAction(@NotNull Runnable runnable);

    void executeOnPooledThread(@NotNull Runnable runnable);
}
