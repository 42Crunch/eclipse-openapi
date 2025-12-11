package com.xliic.openapi.graphql.locator;

import java.util.Map;
import java.util.Optional;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import graphql.language.Argument;
import graphql.language.ArrayValue;
import graphql.language.Directive;
import graphql.language.DirectiveDefinition;
import graphql.language.FieldDefinition;
import graphql.language.ObjectTypeDefinition;
import graphql.language.StringValue;
import graphql.language.Value;
import graphql.schema.idl.TypeDefinitionRegistry;

class GraphQlFinder {

    @NotNull
    private final TypeDefinitionRegistry reg;

    public GraphQlFinder(@NotNull TypeDefinitionRegistry reg) {
        this.reg = reg;
    }

    /*
     * Location Format
     * Pattern 1: Input Arguments
     *   {OperationType}.{fieldName}({argumentName}: {Type})
     *   Query.search(name: String)
     *   Query.search(in3[0]: String)
     * Pattern 2: Output Fields
     *   {OperationType}.{fieldName}().{nestedPath}: {Type}
     *   Query.search().User.name: String
     * Pattern 3: Nested with Lists
     *   Query.search().User.languages[0].Language.name: String!
     * Pattern 4: Directive Validation
     *   {directiveName}
     */
    @Nullable
    public Object findTarget(@Nullable Object parent, @NotNull String segment) {
        if (parent == null) {
            Optional<ObjectTypeDefinition> opt = reg.getType(segment, ObjectTypeDefinition.class);
            if (opt.isPresent()) {
                return opt.get();
            } else {
                for (Map.Entry<String, DirectiveDefinition> entry : reg.getDirectiveDefinitions().entrySet()) {
                    if (entry.getKey().equals(segment)) {
                        return entry.getValue();
                    }
                }
            }
        } else if (parent instanceof ObjectTypeDefinition) {
            for (FieldDefinition field : ((ObjectTypeDefinition) parent).getFieldDefinitions()) {
                if (field.getName().equals(segment)) {
                    return field;
                }
            }
        } else if (parent instanceof FieldDefinition) {
        	FieldDefinition field = (FieldDefinition) parent;
            Optional<ObjectTypeDefinition> opt = reg.getType(segment, ObjectTypeDefinition.class);
            if (opt.isPresent()) {
                return opt.get();
            } else {
                for (Directive directive : field.getDirectives()) {
                    for (Argument argument : directive.getArguments()) {
                        if (argument.getValue() instanceof ArrayValue) {
                        	ArrayValue values = (ArrayValue) argument.getValue();
                            for (Value<?> value : values.getValues()) {
                                if (value instanceof StringValue && segment.equals(((StringValue) value).getValue())) {
                                    return value;
                                }
                            }
                        } else if (argument.getValue() instanceof StringValue) {
                        	StringValue value = (StringValue) argument.getValue(); 
                            if (segment.equals(value.getValue())) {
                                return value;
                            }
                        }
                    }
                }
            }
        }
        return null;
    }
}
