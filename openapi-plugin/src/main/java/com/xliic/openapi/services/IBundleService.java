package com.xliic.openapi.services;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;

public interface IBundleService {

	public void bundle(@NotNull String rootFileName);

	public boolean hasBundles();

	public void removeBundle(@NotNull String rootFileName);

	public boolean hasBundle(@NotNull String rootFileName);

	public BundleResult getBundle(@NotNull String rootFileName);

	public Map<String, Set<BundleError>> getBundleErrorsMap();

	public void addBundleDocumentListener(@NotNull VirtualFile file);

	public void removeBundleDocumentListener(@NotNull VirtualFile file);

	public void notifyOfErrors(@NotNull String rootFileName);
}
