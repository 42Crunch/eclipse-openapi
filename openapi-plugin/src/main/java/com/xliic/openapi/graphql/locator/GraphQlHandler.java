package com.xliic.openapi.graphql.locator;

import com.xliic.core.editor.Document;
import com.xliic.openapi.parser.ast.Range;
import graphql.schema.idl.TypeDefinitionRegistry;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import static com.xliic.openapi.graphql.locator.GraphQlLocator.ARGUMENT_PATTERN;

public class GraphQlHandler {

    @NotNull
    private final GraphQlFinder finder;
    @NotNull
    private static final GraphQlLocator LOCATOR = new GraphQlLocator();

    public GraphQlHandler(@NotNull TypeDefinitionRegistry reg) {
        finder = new GraphQlFinder(reg);
    }

    @Nullable
    public GraphQlPosition getPosition(@NotNull String pointer) {
        String[] segments = splitPointer(pointer);
        if (segments.length == 0) {
            return null;
        }
        Object parent = null;
        for (String segment : segments) {
            parent = finder.findTarget(parent, getCleanValue(segment));
            if (parent == null) {
                return null;
            }
        }
        return LOCATOR.getPosition(parent, segments[segments.length - 1]);
    }

    @NotNull
    public static Range getRange(@NotNull Document document, @NotNull GraphQlPosition pos) {
        int line = pos.getLine() - 1;
        int lineOffset = document.getLineStartOffset(line);
        int startOffset = lineOffset + pos.getColumn() - 1 + pos.getShift();
        int endOffset = startOffset + pos.getLength();
        return new Range(startOffset, endOffset, line, pos.getColumn());
    }

    private static String[] splitPointer(String pointer) {
        if (ARGUMENT_PATTERN.matcher(pointer).find()) {
            // Query.viewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)
            // ["Query", "viewerAnyAuth(accessToken.AccessTokenInput.apiKey: String)"]
            String beforeBr = pointer.substring(0, pointer.lastIndexOf("("));
            String afterBr = pointer.substring(pointer.lastIndexOf("("));
            String[] items = beforeBr.split("\\.");
            items[items.length - 1] = items[items.length - 1] + afterBr;
            return items;
        } else {
            // Query.TweetsMeta().Meta.count: Int
            // ["Query", "TweetsMeta()", "Meta", "count: Int"]
            return pointer.split("\\.");
        }
    }

    private static String getCleanValue(String value) {
        for (int i = 0; i < value.length(); i++) {
            char c = value.charAt(i);
            if (c == '(' || c == '[' || c == ':') {
                return value.substring(0, i);
            }
        }
        return value;
    }
}
