package com.xliic.openapi.quickfix.schema;

import static com.xliic.openapi.quickfix.schema.SchemaUtils.addToOneOf;
import static com.xliic.openapi.quickfix.schema.SchemaUtils.getType;
import static com.xliic.openapi.quickfix.schema.SchemaUtils.has;
import static com.xliic.openapi.quickfix.schema.SchemaUtils.isMixedTypeArray;
import static com.xliic.openapi.quickfix.schema.SchemaUtils.unpack;
import static com.xliic.openapi.quickfix.schema.SchemaUtils.updateRequiredList;

import org.jetbrains.annotations.NotNull;

import com.google.gson.JsonArray;
import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.Node;

public class SchemaMixedArrayGenerator {

    @NotNull
    public static JsonObject get(@NotNull Node node) {

        node = unpack(node);
        JsonObject schema = new JsonObject();
        schema.addProperty("type", "array");

        JsonObject oneOf = new JsonObject();
        oneOf.add("oneOf", new JsonArray());
        schema.add("items", oneOf);

        for (Node value : node.getChildren()) {

            String itemType = getType(value);
            JsonObject valueSchema;
            JsonObject items = (JsonObject) schema.get("items");

            if ("object".equals(itemType)) {
                if (has(items, "properties")) {
                    if (!has(items, "required")) {
                        items.add("required", new JsonArray());
                    }
                    updateRequiredList((JsonObject) items.get("properties"), value, (JsonArray) items.get("required"));
                }
                JsonObject nextSchema = new JsonObject();
                nextSchema.addProperty("type", "object");
                nextSchema.add("properties", new JsonObject());
                nextSchema.add("required", new JsonArray());
                nextSchema.addProperty("additionalProperties", false);
                valueSchema = SchemaObjectGenerator.get(value, nextSchema);
            } else if ("array".equals(itemType)) {
                if (isMixedTypeArray(value)) {
                    valueSchema = SchemaMixedArrayGenerator.get(value);
                } else {
                    valueSchema = SchemaUniformArrayGenerator.get(value);
                }
            } else {
                valueSchema = new JsonObject();
                valueSchema.addProperty("type", itemType);
            }
            addToOneOf((JsonArray) items.get("oneOf"), valueSchema);
        }
        return schema;
    }
}
