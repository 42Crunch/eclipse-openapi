package com.xliic.openapi.services.api;

import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.xliic.idea.file.VirtualFile;
import com.xliic.openapi.bundler.BundleError;
import com.xliic.openapi.bundler.BundleResult;

public interface IBundleService {

	public boolean isFileBeingBundled(@NotNull String fileName);

	public void scheduleToBundle(@NotNull String rootFileName, String changedFileName);

	public boolean hasBundles();

	public void scheduleToRemoveBundle(@NotNull String rootFileName);

	public BundleResult getBundle(@NotNull String rootFileName);

	public Map<String, Set<BundleError>> getBundleErrorsMap();

	public void addBundleDocumentListener(@NotNull VirtualFile file);

	public void removeBundleDocumentListener(@NotNull VirtualFile file);

	public void notifyOfErrors(@NotNull String rootFileName);

	public void handleFileNameChanged(VirtualFile newFile, String oldFileName);
}
