package com.xliic.openapi.quickfix.sources;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.report.Issue;
import org.jetbrains.annotations.NotNull;

import java.util.LinkedList;
import java.util.List;

public class FixSourceEmpty extends FixSource {

    @Override
    protected List<Object> getValues(Issue issue,
                                     QuickFix fix,
                                     FixParameter parameter,
                                     OpenApiVersion version,
                                     BundleResult bundle) {
        return new LinkedList<>();
    }

    @Override
    public void dispose(@NotNull String rootFileName) {
    }

    @Override
    public void dispose() {
    }
}
