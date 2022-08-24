package com.xliic.openapi.quickfix.sources;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.report.Issue;
import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;
import java.util.List;

public abstract class FixSource {

    public List<Object> get(Issue issue,
            QuickFix fix,
            FixParameter parameter,
            OpenApiVersion version,
            BundleResult bundle) {
        if ((bundle != null) && bundle.isBundleComplete()) {
            return getValues(issue, fix, parameter, version, bundle);
        } else {
            return new LinkedList<>();
        }
    }

    public abstract void dispose();

    public abstract void dispose(@NotNull String rootFileName);

    protected abstract List<Object> getValues(Issue issue,
            QuickFix fix,
            FixParameter parameter,
            OpenApiVersion version,
            BundleResult bundle);
}
