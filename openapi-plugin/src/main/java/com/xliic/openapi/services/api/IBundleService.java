package com.xliic.openapi.services.api;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;

public interface IBundleService {

    public boolean isPartOfBundleWithExtRefs(@NotNull String fileName);

    public boolean isFileBeingBundled(@NotNull String fileName);

    public void scheduleToBundleByHost(@NotNull String hostname);

    public void scheduleToBundleByHosts(@NotNull Set<String> hostnames);

    public boolean hasBundles();

    public BundleResult getBundle(@NotNull String rootFileName);

    public Map<String, Set<BundleError>> getBundleErrorsMap();

    public void notifyOfErrors(@NotNull String rootFileName);
}
