package com.xliic.openapi.graphql.locator;

import org.jetbrains.annotations.NotNull;

import graphql.language.DirectiveDefinition;
import graphql.language.FieldDefinition;
import graphql.language.ObjectTypeDefinition;
import graphql.language.SourceLocation;
import graphql.language.StringValue;
import graphql.language.TypeName;

public class GraphQlPosition {

    private final int line;
    private final int column;
    private final int length;
    private final int shift;

    public GraphQlPosition(@NotNull TypeName type) {
        this(type.getSourceLocation().getLine(), type.getSourceLocation().getColumn(), type.getName().length());
    }

    public GraphQlPosition(@NotNull FieldDefinition def) {
        this(def.getSourceLocation().getLine(), def.getSourceLocation().getColumn(), def.getName().length());
    }

    public GraphQlPosition(@NotNull ObjectTypeDefinition def) {
        this(def.getSourceLocation().getLine(), def.getSourceLocation().getColumn(), "type".length());
    }

    public GraphQlPosition(@NotNull DirectiveDefinition def) {
        this(def.getSourceLocation().getLine(), def.getSourceLocation().getColumn(), "directive".length());
    }

    public GraphQlPosition(@NotNull StringValue value) {
        this(value.getSourceLocation().getLine(), value.getSourceLocation().getColumn(), value.getValue().length(), 1);
    }

    public GraphQlPosition(@NotNull SourceLocation loc, @NotNull String target) {
        this(loc, target, 0);
    }

    public GraphQlPosition(@NotNull SourceLocation loc, @NotNull String target, int shift) {
        this(loc.getLine(), loc.getColumn(), target.length(), shift);
    }

    public GraphQlPosition(int line, int column, int length) {
        this(line, column, length, 0);
    }

    public GraphQlPosition(int line, int column, int length, int shift) {
        this.line = line;
        this.column = column;
        this.length = length;
        this.shift = shift;
    }

    @Override
    public String toString() {
        return "GraphQlPosition{" +
                "line=" + line +
                ", column=" + column +
                ", length=" + length +
                ", shift=" + shift +
                '}';
    }

    public int getLine() {
        return line;
    }

    public int getColumn() {
        return column;
    }

    public int getLength() {
        return length;
    }

    public int getShift() {
        return shift;
    }
}
