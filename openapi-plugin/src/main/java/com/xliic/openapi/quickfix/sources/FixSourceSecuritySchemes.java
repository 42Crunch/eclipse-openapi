package com.xliic.openapi.quickfix.sources;

import java.util.LinkedList;
import java.util.List;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.report.types.Issue;

public class FixSourceSecuritySchemes extends FixSource {

    @Override
    protected List<Object> getValues(Issue issue, QuickFix fix, FixParameter parameter, OpenApiVersion version, BundleResult bundle) {
        Node root = bundle.getAST();
        if (version == OpenApiVersion.V2) {
            return extractKeys(root.find("/securityDefinitions"));
        } else if (version == OpenApiVersion.V3) {
            return extractKeys(root.find("/components/securitySchemes"));
        }
        return new LinkedList<>();
    }

    private List<Object> extractKeys(Node node) {
        List<Object> result = new LinkedList<>();
        if (node != null) {
            for (Node child : node.getChildren()) {
                result.add(child.getKey());
            }
        }
        return result;
    }

    @Override
    public void dispose(@NotNull String rootFileName) {
    }

    @Override
    public void dispose() {
    }
}
