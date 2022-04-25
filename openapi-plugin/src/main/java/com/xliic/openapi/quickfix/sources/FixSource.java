package com.xliic.openapi.quickfix.sources;

import java.util.Collections;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.report.Issue;

public abstract class FixSource {

	public List<Object> get(Issue issue, QuickFix fix, FixParameter parameter, OpenApiVersion version,
			BundleResult bundle) {
		if ((bundle != null) && bundle.isBundleComplete()) {
			return getValues(issue, fix, parameter, version, bundle);
		} else {
			return Collections.emptyList();
		}
	}

	public abstract void dispose();

	public abstract void dispose(@NotNull String rootFileName);

	protected abstract List<Object> getValues(Issue issue, QuickFix fix, FixParameter parameter, OpenApiVersion version,
			BundleResult bundle);
}
