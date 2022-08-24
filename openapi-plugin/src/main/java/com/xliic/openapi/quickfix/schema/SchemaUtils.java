package com.xliic.openapi.quickfix.schema;

import com.google.gson.*;
import com.xliic.core.util.Pair;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.ParserAST;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Set;

public class SchemaUtils {

    public static final ParserAST parser = new ParserJsonAST();

    public static boolean has(@NotNull JsonObject schema, @NotNull String key) {
        return schema.has(key) && !(schema.get(key) instanceof JsonNull);
    }

    public static void addToOneOf(@NotNull JsonArray oneOf, @NotNull JsonObject schema) {
        String type = schema.get("type").getAsString();
        if (!"object".equals(type) && !"array".equals(type)) {
            for (JsonElement oneOfSchema : oneOf) {
                if (type.equals(((JsonObject) oneOfSchema).get("type").getAsString())) {
                    return;
                }
            }
        }
        oneOf.add(schema);
    }

    public static void updateRequiredList(@NotNull JsonObject properties,
            @NotNull Node value,
            @NotNull JsonArray required) {
        for (Node child : value.getChildren()) {
            String key = child.getKey();
            int index = getIndex(required, key);
            if (!has(properties, key)) {
                if (index >= 0) {
                    required.remove(index);
                }
            } else if (index == -1) {
                required.add(key);
            }
        }
    }

    public static @NotNull JsonArray getRequired(@NotNull Node json) {
        JsonArray required = new JsonArray();
        for (Node child : json.getChildren()) {
            required.add(child.getKey());
        }
        return required;
    }

    public static boolean isMixedTypeArray(@NotNull Node json) {
        if (json.getChildren().size() > 1) {
            String type = getType(json.getChildren().get(0));
            for (Node value : json.getChildren()) {
                if (!type.equals(getType(value))) {
                    return true;
                }
            }
        }
        return false;
    }

    public static @NotNull String getType(@NotNull Node node) {
        if (node.isObject()) {
            return "object";
        } else if (node.isArray()) {
            return "array";
        }
        Object value = node.getTypedValue();
        if (value == null) {
            return "null";
        } else if (value instanceof Integer) {
            return "integer";
        } else if (value instanceof Float) {
            Float fValue = (Float) value;
            if ((1.0 * fValue.intValue()) == fValue) {
                return "integer";
            }
            return "number";
        } else if (value instanceof Boolean) {
            return "boolean";
        }
        return "string";
    }

    public static boolean isEqual(JsonElement e1, JsonElement e2) {
        if (e1 == e2) {
            return true;
        } else if ((e1 instanceof JsonObject) && (e2 instanceof JsonObject)) {
            JsonObject o1 = (JsonObject) e1;
            JsonObject o2 = (JsonObject) e2;
            Set<String> keys1 = o1.keySet();
            Set<String> keys2 = o2.keySet();
            if (keys1.size() != keys2.size()) {
                return false;
            } else {
                for (String key : keys1) {
                    if (keys2.contains(key)) {
                        if (!isEqual(o1.get(key), o2.get(key))) {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
                return true;
            }
        } else if ((e1 instanceof JsonArray) && (e2 instanceof JsonArray)) {
            JsonArray a1 = (JsonArray) e1;
            JsonArray a2 = (JsonArray) e2;
            if (a1.size() != a2.size()) {
                return false;
            } else {
                for (int i = 0; i < a1.size(); i++) {
                    if (!isEqual(a1.get(i), a2.get(i))) {
                        return false;
                    }
                }
                return true;
            }

        } else if ((e1 instanceof JsonPrimitive) && (e2 instanceof JsonPrimitive)) {
            JsonPrimitive p1 = (JsonPrimitive) e1;
            JsonPrimitive p2 = (JsonPrimitive) e2;
            return p1.equals(p2);
        } else {
            return false;
        }
    }

    private static int getIndex(@NotNull JsonArray array, @NotNull String value) {
        int index = 0;
        for (JsonElement element : array) {
            if (value.equals(element.getAsString())) {
                return index;
            }
            index += 1;
        }
        return -1;
    }

    public static @NotNull String getUniqueSchemaName(@NotNull Set<String> schemaNames) {
        String result = "GeneratedSchemaName";
        for (int index = 1; index < 1000; index++) {
            String newName = result + index;
            if (!schemaNames.contains(newName)) {
                return newName;
            }
        }
        return "";
    }

    public static @NotNull Set<String> getSchemaNames(@NotNull Node root, @NotNull OpenApiVersion version) {
        Set<String> result = new HashSet<>();
        Node schemas = (version == OpenApiVersion.V2) ? root.find("/definitions") : root.find("/components/schemas");
        if (schemas != null) {
            for (Node schema : schemas.getChildren()) {
                result.add(schema.getKey());
            }
        }
        return result;
    }

    public static Node getSchemaV2Examples(@NotNull String pointer, @NotNull Set<String> problem, @NotNull Node root) {
        if (problem.contains("response-schema-undefined")) {
            Node target = root.find(pointer);
            if ((target != null) && target.isObject()) {
                Node schema = null;
                Node examples = null;
                for (Node child : target.getChildren()) {
                    if ("schema".equals(child.getKey())) {
                        schema = child;
                    } else if ("examples".equals(child.getKey())) {
                        examples = child;
                    }
                }
                if ((examples != null) && (schema == null)) {
                    List<Node> children = examples.getChildren();
                    if (children.size() == 1) {
                        Node child = children.get(0);
                        if ("application/json".equals(child.getKey()) &&
                                child.isObject() && child.getChildren().size() > 0) {
                            return child;
                        }
                    }
                }
            }
        }
        return null;
    }

    public static Node getSchemaV2Example(@NotNull String pointer, @NotNull Set<String> problem, @NotNull Node root) {
        //noinspection SpellCheckingInspection
        if (problem.contains("schema-request-notype") || problem.contains("schema-response-notype")) {
            Node target = root.find(pointer);
            if ((target != null) && target.isObject() && "schema".equals(target.getKey())) {
                List<Node> children = target.getChildren();
                if (children.size() == 1) {
                    Node child = children.get(0);
                    if ("example".equals(child.getKey())) {
                        return child;
                    }
                }
            }
        }
        return null;
    }

    public static Node getSchemaV3Examples(@NotNull String pointer, @NotNull Set<String> problem, @NotNull Node root) {
        if (problem.contains("v3-mediatype-request-schema-undefined") ||
                problem.contains("v3-mediatype-response-schema-undefined")) {
            Node target = root.find(pointer);
            if ((target != null) && target.isObject() && "application/json".equals(target.getKey())) {
                Node schema = null;
                Node examples = null;
                for (Node child : target.getChildren()) {
                    if ("schema".equals(child.getKey())) {
                        schema = child;
                    } else if ("examples".equals(child.getKey())) {
                        examples = child;
                    }
                }
                if ((examples != null) && (schema == null)) {
                    List<Node> children = examples.getChildren();
                    if (children.size() > 0) {
                        for (Node exampleChild : children) {
                            for (Node contentChild : exampleChild.getChildren()) {
                                if ("value".equals(contentChild.getKey())) {
                                    return examples;
                                }
                            }
                        }
                    }
                }
            }
        }
        return null;
    }

    public static Node getSchemaV3Example(@NotNull String pointer, @NotNull Set<String> problem, @NotNull Node root) {
        //noinspection SpellCheckingInspection
        if (problem.contains("v3-schema-request-notype") || problem.contains("v3-schema-response-notype")) {
            Node target = root.find(pointer);
            if ((target != null) && target.isObject() && "schema".equals(target.getKey())) {
                List<Node> children = target.getChildren();
                if (children.size() == 1) {
                    Node child = children.get(0);
                    if ("example".equals(child.getKey())) {
                        return child;
                    }
                }
            }
        }
        return null;
    }

    public static JsonObject getSchemaFromAST(@NotNull PsiFile psiFile,
            @NotNull Node genFrom,
            @NotNull OpenApiVersion version) {
        try {
            if (version == OpenApiVersion.V2) {
                return getAndResolveSchemaFromAST(psiFile, genFrom);
            } else {
                if ("example".equals(genFrom.getKey())) {
                    return getAndResolveSchemaFromAST(psiFile, genFrom);
                } else {
                    List<JsonObject> schemas = new LinkedList<>();
                    for (Node exampleChild : genFrom.getChildren()) {
                        for (Node contentChild : exampleChild.getChildren()) {
                            if ("value".equals(contentChild.getKey())) {
                                JsonObject schema = getAndResolveSchemaFromAST(psiFile, contentChild);
                                if (schema != null) {
                                    schemas.add(schema);
                                }
                            }
                        }
                    }
                    if (!schemas.isEmpty()) {
                        return SchemaGenerator.generateOneOfSchema(schemas);
                    }
                }
            }
        } catch (Exception ignored) {
        }
        return null;
    }

    public static JsonObject getAndResolveSchemaFromAST(@NotNull PsiFile psiFile, @NotNull Node genFrom) {
        List<Node> children = genFrom.getChildren();
        if ((children.size() == 1) && "$ref".equals(children.get(0).getKey())) {
            String ref = children.get(0).getValue();
            Pair<VirtualFile, Node> result = OpenApiUtils.resolveRef(psiFile, ref);
            if (result != null) {
                Node node = result.getSecond();
                if (node != null) {
                    return SchemaGenerator.generateSchema(node);
                }
            }
            return null;
        } else {
            return SchemaGenerator.generateSchema(genFrom);
        }
    }

    public static Node unpack(Node node) {
        if (node.isScalar()) {
            Object value = node.getTypedValue();
            if (value instanceof String) {
                String text = ((String) value).trim();
                if ((text.startsWith("{") && text.endsWith("}")) ||
                        (text.startsWith("[") && text.endsWith("]"))) {
                    try {
                        Node target = parser.parse(text);
                        if (target != null) {
                            return target;
                        }
                    } catch (Exception ignored) {
                    }
                }
            }
        }
        return node;
    }
}
