package com.xliic.openapi.quickfix.schema;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.quickfix.schema.SchemaUtils.*;

public class SchemaObjectGenerator {

    @NotNull
    public static JsonObject get(@NotNull Node node, JsonObject schema) {

        node = unpack(node);
        if (schema != null) {
            schema.addProperty("type", "object");
            if (!has(schema, "properties")) {
                schema.add("properties", new JsonObject());
            }
        } else {
            schema = new JsonObject();
            schema.addProperty("type", "object");
            schema.add("properties", new JsonObject());
        }
        schema.add("required", getRequired(node));
        schema.addProperty("additionalProperties", false);

        for (Node child : node.getChildren()) {

            String key = child.getKey();
            String type = getType(child);
            JsonObject properties = (JsonObject) schema.get("properties");

            if ("object".equals(type)) {
                properties.add(key, SchemaObjectGenerator.get(child, (JsonObject) properties.get(key)));
            } else if ("array".equals(type)) {
                properties.add(key, isMixedTypeArray(child) ? SchemaMixedArrayGenerator.get(child) : SchemaUniformArrayGenerator.get(child));
            } else if (has(properties, key)) {
                JsonObject entry = (JsonObject) properties.get(key);
                if (entry.get("type") instanceof JsonArray) {
                    JsonArray types = (JsonArray) entry.get("type");
                    boolean addType = true;
                    for (JsonElement element : types) {
                        if (type.equals(element.getAsString())) {
                            addType = false;
                        }
                    }
                    if (addType) {
                        types.add(type);
                    }
                } else {
                    if (!type.equals(entry.get("type").getAsString())) {
                        JsonArray types = new JsonArray();
                        types.add(entry.get("type").getAsString());
                        types.add(type);
                        entry.add("type", types);
                    }
                }
            } else {
                JsonObject newSchema = new JsonObject();
                newSchema.addProperty("type", type);
                properties.add(key, newSchema);
            }
        }
        return schema;
    }
}
