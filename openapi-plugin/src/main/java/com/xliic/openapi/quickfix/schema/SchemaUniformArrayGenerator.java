package com.xliic.openapi.quickfix.schema;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import static com.xliic.openapi.quickfix.schema.SchemaUtils.*;

public class SchemaUniformArrayGenerator {

    @NotNull
    public static JsonObject get(@NotNull Node node) {

        node = unpack(node);
        JsonObject schema = new JsonObject();
        schema.addProperty("type", "array");
        schema.add("items", new JsonObject());

        JsonArray schemas = new JsonArray();
        JsonObject items = (JsonObject) schema.get("items");
        boolean isObjectType = false;

        for (Node value : node.getChildren()) {

            String itemType = getType(value);
            items.addProperty("type", itemType);

            if ("object".equals(itemType)) {
                isObjectType = true;
                if (has(items, "properties")) {
                    if (!has(items, "required")) {
                        items.add("required", new JsonArray());
                    }
                    updateRequiredList((JsonObject) items.get("properties"), value, (JsonArray) items.get("required"));
                }
                JsonObject nextSchema = new JsonObject();
                nextSchema.addProperty("type", "object");
                nextSchema.add("properties", items.get("properties"));
                nextSchema.add("required", new JsonArray());
                nextSchema.addProperty("additionalProperties", false);
                items.add("properties", SchemaObjectGenerator.get(value, nextSchema).get("properties"));
            } else if ("array".equals(itemType)) {
                if (isMixedTypeArray(value)) {
                    schemas.add(SchemaMixedArrayGenerator.get(value));
                } else {
                    schemas.add(SchemaUniformArrayGenerator.get(value));
                }
            }
        }
        if (isObjectType) {
            items.addProperty("additionalProperties", false);
        }
        if (schemas.size() > 0) {
            if (schemas.size() > 1) {
                schema.add("items", schemas);
            } else {
                schema.add("items", schemas.get(0));
            }
        }
        return schema;
    }
}
