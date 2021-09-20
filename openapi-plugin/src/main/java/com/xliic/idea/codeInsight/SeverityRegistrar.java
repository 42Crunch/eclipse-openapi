package com.xliic.idea.codeInsight;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.idea.project.Project;

public final class SeverityRegistrar {

	@NotNull
	public static SeverityRegistrar getSeverityRegistrar(@Nullable Project project) {
		return new SeverityRegistrar();
	}
}
