package com.xliic.openapi.graphql;

import java.util.Optional;
import java.util.regex.Pattern;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.application.ApplicationManager;
import com.xliic.core.editor.Document;
import com.xliic.core.fileEditor.OpenFileDescriptor;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.parser.ast.Range;
import com.xliic.openapi.report.types.Audit;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.AuditService;

import graphql.language.FieldDefinition;
import graphql.language.InputValueDefinition;
import graphql.language.ListType;
import graphql.language.NonNullType;
import graphql.language.ObjectTypeDefinition;
import graphql.language.SourceLocation;
import graphql.language.Type;
import graphql.language.TypeName;
import graphql.schema.idl.TypeDefinitionRegistry;

public class GraphQlUtils {

    private static final Pattern ARGUMENT_PATTERN = Pattern.compile("\\(.*:.*\\)$");
    private static final Pattern LIST_TYPE_PATTERN = Pattern.compile(":\\s*\\[.*]!?$");
    private static final Pattern SIMPLE_TYPE_PATTERN = Pattern.compile(":\\s*[^()\\[\\]]+$");

    public static void goToLocationInFile(@NotNull Project project, @NotNull VirtualFile file, @NotNull String pointer) {
        AuditService auditService = AuditService.getInstance(project);
        Audit root = auditService.getAuditReport(file.getPath());
        if (root != null) {
            for (Issue issue : root.getIssues()) {
                if (pointer.equals(issue.getPointer())) {
                    ApplicationManager.getApplication().invokeLater(() -> {
                        int offset = issue.getRangeMarker().getStartOffset();
                        new OpenFileDescriptor(project, file, offset).navigate(true);
                    });
                    break;
                }
            }
        }
    }

    @Nullable
    public static Range getRangeByLocation(@NotNull Document document, @NotNull TypeDefinitionRegistry reg, @NotNull String pointer) {
        String[] items;
        // Wisely split location into parts by .
        if (ARGUMENT_PATTERN.matcher(pointer).find()) {
            String mainPtr = pointer.substring(0, pointer.lastIndexOf("("));
            String prefix = pointer.substring(pointer.lastIndexOf("("));
            items = mainPtr.split("\\.");
            items[items.length - 1] = items[items.length - 1] + prefix;
        } else {
            items = pointer.split("\\.");
        }
        // Find final field
        ObjectTypeDefinition objTypeDef = null;
        FieldDefinition fieldDef = null;
        for (String item : items) {
            item = cleanValue(item);
            if (objTypeDef != null && fieldDef != null) {
                objTypeDef = null;
                fieldDef = null;
            }
            if (objTypeDef == null) {
                Optional<ObjectTypeDefinition> o = reg.getType(item, ObjectTypeDefinition.class);
                if (o.isPresent()) {
                    objTypeDef = o.get();
                }
            } else {
                for (FieldDefinition field : objTypeDef.getFieldDefinitions()) {
                    if (field.getName().equals(item)) {
                        fieldDef = field;
                        break;
                    }
                }
            }
        }
        String name;
        SourceLocation loc;
        if (fieldDef != null) {
            // Try to find more precise location
            String lastItem = items[items.length - 1];
            if (SIMPLE_TYPE_PATTERN.matcher(lastItem).find() || LIST_TYPE_PATTERN.matcher(lastItem).find()) {
                // id: ID or Mutation.usersAddEmailForAuthenticated()[0]: _
                // Notifications(): [Notification] or Query.starship().Starship.coordinates: [[Float!]!]
                Type<?> typeName = getTypeName(fieldDef.getType());
                name = ((TypeName) typeName).getName();
                loc = typeName.getSourceLocation();
            } else if (ARGUMENT_PATTERN.matcher(lastItem).find()) {
                // Notifications(limit: Int) or Query.migration(exclude[0]: String)
                name = lastItem.substring(lastItem.indexOf("(") + 1, lastItem.lastIndexOf(":")).trim();
                name = cleanValue(name, "[");
                InputValueDefinition myValDef = null;
                for (InputValueDefinition valDef : fieldDef.getInputValueDefinitions()) {
                    if (name.equals(valDef.getName()) || name.startsWith(valDef.getName() + ".")) {
                        myValDef = valDef;
                        break;
                    }
                }
                if (myValDef != null) {
                    Type<?> typeName = getTypeName(myValDef.getType());
                    name = ((TypeName) typeName).getName();
                    loc = typeName.getSourceLocation();
                } else {
                    loc = fieldDef.getType().getSourceLocation();
                }
            } else {
                name = fieldDef.getName();
                loc = fieldDef.getSourceLocation();
            }
        } else if (objTypeDef != null) {
            name = objTypeDef.getName();
            loc = objTypeDef.getSourceLocation();
        } else {
            return null;
        }
        if (loc != null) {
            int line = loc.getLine() - 1;
            int lineOffset = document.getLineStartOffset(line);
            int startOffset = lineOffset + loc.getColumn() - 1;
            int endOffset = startOffset + name.length();
            return new Range(startOffset, endOffset, line, loc.getColumn());
        } else {
            return null;
        }
    }

    private static String cleanValue(String value) {
        value = cleanValue(value, "(");
        value = cleanValue(value, "[");
        return cleanValue(value, ":");
    }

    private static String cleanValue(String value, String valueToRemove) {
        final int i = value.indexOf(valueToRemove);
        return 0 < i ? value.substring(0, i) : value;
    }

    private static Type<?> getTypeName(Type<?> type) {
        if (type instanceof NonNullType) {
            return getTypeName(((NonNullType) type).getType());

        } else if (type instanceof ListType) {
            return getTypeName(((ListType) type).getType());
        } else {
            return type;
        }
    }
}
