package com.xliic.core.codeInsight;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.project.Project;

public final class SeverityRegistrar {

	@NotNull
	public static SeverityRegistrar getSeverityRegistrar(@Nullable Project project) {
		return new SeverityRegistrar();
	}
}
