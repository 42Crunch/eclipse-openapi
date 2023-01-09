package com.xliic.openapi.tryit;

import java.io.StringWriter;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

import org.jetbrains.annotations.NotNull;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonGenerator;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.xliic.core.actionSystem.DefaultActionGroup;
import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tryit.payload.TryItOperation;

public class TryItUtils {

    @NotNull
    @SuppressWarnings("unchecked")
    public static String extractSingleOperation(@NotNull String path, @NotNull String method, @NotNull BundleResult bundle) {
        String text = bundle.getJsonText();
        Set<String> schemaNames = getReferencedSchemaNames(path, method, bundle.getAST());
        Set<String> pathKeysToSave = new HashSet<>(Arrays.asList("parameters", "servers", method));
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            Map<String, Object> root = objectMapper.readValue(text, new TypeReference<>() {});
            if (root != null) {
                Map<String, Object> pathsMap = (Map<String, Object>) root.get("paths");
                if (pathsMap != null) {
                    Map<String, Object> pathMap = (Map<String, Object>) pathsMap.get(path);
                    if (pathMap != null) {
                        pathMap.keySet().removeIf(key -> !pathKeysToSave.contains(key));
                    }
                    pathsMap.keySet().removeIf(key -> !path.equals(key));
                }
                Map<String, Object> componentsMap = (Map<String, Object>) root.get("components");
                if (componentsMap != null) {
                    Map<String, Object> schemasMap = (Map<String, Object>) componentsMap.get("schemas");
                    if (schemasMap != null) {
                        schemasMap.keySet().removeIf(key -> !schemaNames.contains(key));
                    }
                }
                JsonFactory factory = new JsonFactory();
                StringWriter jsonObjectWriter = new StringWriter();
                JsonGenerator generator = factory.createGenerator(jsonObjectWriter);
                generator.useDefaultPrettyPrinter();
                generator.setCodec(new ObjectMapper());
                generator.writeObject(root);
                generator.close();
                return jsonObjectWriter.toString();
            }
        } catch (Exception e) {
           e.printStackTrace();
        }
        return text;
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull DefaultActionGroup actions) {
        String pathName = op.getParent().getKey();
        String operationName = op.getKey();
        int textOffset = op.getRange().getOffset();
        actions.add(new TryItAction("Try it", new TryItOperation(psiFile, pathName, operationName, textOffset)));
        Node requestBody = op.getChild("requestBody");
        if (requestBody != null) {
            Node content = requestBody.getChild("content");
            if (content != null) {
                for (Node contentType : content.getChildren()) {
                    Node examples = contentType.getChild("examples");
                    if (examples != null) {
                        String type = contentType.getKey();
                        for (Node example : examples.getChildren()) {
                            TryItOperation payload = new TryItOperation(psiFile, pathName, operationName, example.getRange().getOffset());
                            payload.setPreferredMediaType(type);
                            payload.setPreferredExamplePointer(example.getJsonPointer());
                            actions.add(new TryItAction("Try it " + example.getKey() + " example as " + type, payload));
                        }
                    }
                }
            }
        }
    }

    private static Set<String> getReferencedSchemaNames(String path, String method, Node root) {
        Set<String> schemaNames = new HashSet<>();
        Node paths = root.getChild("paths");
        if (paths != null) {
            Node pathNode = paths.getChild(path);
            if (pathNode != null) {
                for (String key : Arrays.asList("parameters", method)) {
                    Node child = pathNode.getChild(key);
                    if (child != null) {
                        collectSchemaNames(child, schemaNames);
                    }
                }
            }
        }
        return schemaNames;
    }

    public static void collectSchemaNames(Node node, Set<String> schemaNames) {
        if (node.isScalar() && "$ref".equals(node.getKey())) {
            String value = node.getValue();
            if (value != null && value.startsWith("#/components/schemas")) {
                String [] segments = value.split("/");
                if (segments.length > 0) {
                    schemaNames.add(segments[segments.length - 1]);
                }
            }
        }
        for (Node child : node.getChildren()) {
            collectSchemaNames(child, schemaNames);
        }
    }
}
