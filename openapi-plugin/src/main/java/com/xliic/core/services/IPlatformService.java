package com.xliic.core.services;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.platform.tree.PlatformFavoriteState;

public interface IPlatformService {

    PlatformFavoriteState getState();

    void loadState(@NotNull PlatformFavoriteState state);
}
