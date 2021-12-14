package com.xliic.openapi.quickfix.managers;

import java.util.List;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiFileType;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.quickfix.FixItem;
import com.xliic.openapi.quickfix.FixType;
import com.xliic.openapi.services.BundleService;
import com.xliic.openapi.services.DataService;

public abstract class FixManager {

	protected final PsiFile psiFile;

	protected FixManager(PsiFile psiFile) {
		this.psiFile = psiFile;
	}

	public abstract FixType getType();

	public abstract String getTitle();

	public abstract List<FixItem> getFixItems();

	public abstract boolean isResponsibleFor(@NotNull String pointer, @NotNull String label);

	public boolean isAvailable() {
		return true;
	}

	public static String getAbsolutePointer(String issuePointer, String fixPointer) {
		return StringUtils.isEmpty(fixPointer) ? issuePointer : issuePointer + fixPointer;
	}

	protected BundleResult getBundle(String auditFileName, Project project) {
		BundleService bundleService = BundleService.getInstance(project);
		return bundleService.getBundle(auditFileName);
	}

	protected OpenApiVersion getOpenApiVersion(String auditFileName, Project project) {
		DataService dataService = DataService.getInstance(project);
		return dataService.getFileProperty(auditFileName).getVersion();
	}

	protected boolean isJson(PsiFile file) {
		return OpenApiUtils.getFileType(file) == OpenApiFileType.Json;
	}
}
