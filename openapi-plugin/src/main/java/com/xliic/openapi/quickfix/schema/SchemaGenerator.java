package com.xliic.openapi.quickfix.schema;

import com.google.gson.JsonArray;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.List;

import static com.xliic.openapi.quickfix.schema.SchemaUtils.*;

public class SchemaGenerator {

    @NotNull
    public static JsonObject generateOneOfSchema(@NotNull List<JsonObject> schemas) {

        JsonObject result = new JsonObject();
        result.add("oneOf", new JsonArray());

        for (JsonObject schema : schemas) {
            boolean addToOneOf = true;
            for (JsonElement oneOfSchema : (JsonArray) result.get("oneOf")) {
                if (isEqual(schema, oneOfSchema)) {
                    addToOneOf = false;
                }
            }
            if (addToOneOf) {
                ((JsonArray) result.get("oneOf")).add(schema);
            }
        }
        if (((JsonArray) result.get("oneOf")).size() == 1) {
            return (JsonObject) ((JsonArray) result.get("oneOf")).get(0);
        }
        return result;
    }

    @NotNull
    public static JsonObject generateSchema(@NotNull Node node) {

        node = unpack(node);
        JsonObject result = new JsonObject();
        result.addProperty("type", getType(node));

        if ("object".equals(result.get("type").getAsString())) {
            JsonObject schema = SchemaObjectGenerator.get(node, null);
            result.addProperty("type", schema.get("type").getAsString());
            result.add("properties", schema.get("properties"));
            JsonArray required = new JsonArray();
            for (Node child : node.getChildren()) {
                String key = child.getKey();
                if (!key.startsWith("$")) {
                    required.add(key);
                }
            }
            result.add("required", required);
            result.addProperty("additionalProperties", schema.get("additionalProperties").getAsBoolean());
        } else if ("array".equals(result.get("type").getAsString())) {
            JsonObject schema;
            if (isMixedTypeArray(node)) {
                schema = SchemaMixedArrayGenerator.get(node);
            } else {
                schema = SchemaUniformArrayGenerator.get(node);
            }
            result.addProperty("type", schema.get("type").getAsString());
            result.add("items", schema.get("items"));
        }
        return result;
    }
}
