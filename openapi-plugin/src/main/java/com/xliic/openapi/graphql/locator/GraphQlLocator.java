package com.xliic.openapi.graphql.locator;

import graphql.language.*;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.regex.Pattern;

class GraphQlLocator {

    public static final Pattern ARGUMENT_PATTERN = Pattern.compile("\\(.*:.*\\)$");
    private static final Pattern LIST_TYPE_PATTERN = Pattern.compile(":\\s*\\[.*]!?$");
    private static final Pattern SIMPLE_TYPE_PATTERN = Pattern.compile(":\\s*[^()\\[\\]]+$");

    @Nullable
    public GraphQlPosition getPosition(@NotNull Object target, @NotNull String lastSegment) {
        if (target instanceof StringValue) {
            return new GraphQlPosition((StringValue) target);
        }
        if (target instanceof DirectiveDefinition) {
            return new GraphQlPosition((DirectiveDefinition) target);
        }
        if (target instanceof ObjectTypeDefinition) {
            return new GraphQlPosition((ObjectTypeDefinition) target);
        }
        if (target instanceof FieldDefinition) {
        	FieldDefinition fieldDef = (FieldDefinition) target;
            // Try to find more precise location
            if (SIMPLE_TYPE_PATTERN.matcher(lastSegment).find() || LIST_TYPE_PATTERN.matcher(lastSegment).find()) {
                // id: ID
                // Mutation.usersAddEmailForAuthenticated()[0]: _
                // Notifications(): [Notification]
                // Query.starship().Starship.coordinates: [[Float!]!]
                return new GraphQlPosition((TypeName) getTypeName(fieldDef.getType()));
            }
            if (ARGUMENT_PATTERN.matcher(lastSegment).find()) {
                // Notifications(limit: Int)
                // Query.migration(exclude[0]: String)
                String name = getInputValueName(lastSegment);
                for (InputValueDefinition def : fieldDef.getInputValueDefinitions()) {
                    if (name.equals(def.getName()) || name.startsWith(def.getName() + ".")) {
                        return new GraphQlPosition((TypeName) getTypeName(def.getType()));
                    }
                }
                return new GraphQlPosition(fieldDef.getType().getSourceLocation(), name);
            } else {
                return new GraphQlPosition(fieldDef);
            }
        }
        return null;
    }

    private static String getInputValueName(String segment) {
        String name = segment.substring(segment.indexOf("(") + 1, segment.lastIndexOf(":")).trim();
        int i = name.indexOf("[");
        return i > 0 ? name.substring(0, i) : name;
    }

    private static Type<?> getTypeName(Type<?> type) {
        if (type instanceof NonNullType) {
            return getTypeName(((NonNullType) type).getType());
        }
        if (type instanceof ListType) {
            return getTypeName(((ListType) type).getType());
        }
        return type;
    }
}
