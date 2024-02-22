package com.xliic.openapi.tryit;

import java.io.IOException;
import java.io.StringWriter;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
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
import com.xliic.openapi.outline.actions.TryItAction;

public class TryItUtils {

    public static final Set<String> OPERATIONS = new HashSet<>(
            Arrays.asList("get", "put", "post", "delete", "options", "head", "patch"));

    @NotNull
    public static String extractSingleOperation(@NotNull String path, @NotNull String method, @NotNull BundleResult bundle) {
        return extractSingleOperation(bundle.getJsonText(), bundle.getAST(), path, method);
    }

    @NotNull
    @SuppressWarnings("unchecked")
    public static String extractSingleOperation(@NotNull String text, @NotNull Node astRoot, @NotNull String path, @NotNull String method) {
        Set<String> refs = getReferences(path, method, astRoot);
        Set<String> pathKeysToSave = new HashSet<>(Arrays.asList("parameters", "servers", method));
        try {
            Map<String, Object> root = new ObjectMapper().readValue(text, new TypeReference<>() {});
            if (root != null) {
                Map<String, Object> pathsMap = (Map<String, Object>) root.get("paths");
                if (pathsMap != null) {
                    Map<String, Object> pathMap = (Map<String, Object>) pathsMap.get(path);
                    if (pathMap != null) {
                        pathMap.keySet().removeIf(key -> !pathKeysToSave.contains(key));
                    }
                    pathsMap.keySet().removeIf(key -> !path.equals(key));
                }
                filterComponents(root, refs);
                filterDefinitions(root, refs);
                return serializeToString(root);
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return text;
    }

    @NotNull
    public static String serializeToString(@NotNull Map<String, Object> root) throws IOException {
        JsonFactory factory = new JsonFactory();
        StringWriter jsonObjectWriter = new StringWriter();
        JsonGenerator generator = factory.createGenerator(jsonObjectWriter);
        generator.useDefaultPrettyPrinter();
        generator.setCodec(new ObjectMapper());
        generator.writeObject(root);
        generator.close();
        return jsonObjectWriter.toString();
    }

    @SuppressWarnings("unchecked")
    public static void filterComponents(@NotNull Map<String, Object> root, @NotNull Set<String> refs) {
        Map<String, Object> componentsMap = (Map<String, Object>) root.get("components");
        if (componentsMap != null) {
            Set<String> typesToRemove = new HashSet<>();
            Map<String, Set<String>> componentsRefsMap = getComponentsReferencesMap(refs);
            for (Map.Entry<String, Object> item : componentsMap.entrySet()) {
                // Type may be responses, schemas, parameters, securitySchemes
                String type = item.getKey();
                if ("securitySchemes".equals(type)) {
                    continue;
                }
                Map<String, Object> typeMap = (Map<String, Object>) componentsMap.get(type);
                if (typeMap != null) {
                    Set<String> typeKeys = componentsRefsMap.get(type);
                    typeMap.keySet().removeIf(key -> typeKeys == null || !typeKeys.contains(key));
                    if (typeMap.isEmpty()) {
                        typesToRemove.add(type);
                    }
                }
            }
            componentsMap.keySet().removeIf(typesToRemove::contains);
        }
    }

    @SuppressWarnings("unchecked")
    public static void filterDefinitions(@NotNull Map<String, Object> root, @NotNull Set<String> refs) {
        Map<String, Object> defsMap = (Map<String, Object>) root.get("definitions");
        if (defsMap != null) {
            defsMap.keySet().removeIf(key -> !refs.contains("#/definitions/" + key));
        }
    }

    private static Map<String, Set<String>> getComponentsReferencesMap(Set<String> refs) {
        Map<String, Set<String>> result = new HashMap<>();
        for (String ref : refs) {
            if (ref.startsWith("#/components")) {
                String [] segments = ref.replace("#/components/", "").split("/");
                if (segments.length > 1) {
                    String type = segments[0];
                    String name = segments[1];
                    if (!result.containsKey(type)) {
                        result.put(type, new HashSet<>());
                    }
                    result.get(type).add(name);
                }
            }
        }
        return result;
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull DefaultActionGroup actions) {
        List<Object> payloads = new LinkedList<>();
        setActionsForOperation(psiFile, op, payloads);
        payloads.forEach(p -> {
            TryItOperation tp = (TryItOperation) p;
            String type = tp.getPreferredMediaType();
            if (tp.getPreferredMediaType() == null) {
                actions.add(new TryItAction("Try it", tp));
            } else {
                actions.add(new TryItAction("Try it " + tp.getPreferredExampleName() + " example as " + type, tp));
            }
        });
    }

    public static void setActionsForOperation(@NotNull PsiFile psiFile, @NotNull Node op, @NotNull List<Object> payloads) {
        String pathName = op.getParent().getKey();
        String operationName = op.getKey();
        int textOffset = op.getRange().getOffset();
        payloads.add(new TryItOperation(psiFile, pathName, operationName, textOffset));
        Node requestBody = op.getChild("requestBody");
        if (requestBody != null) {
            Node content = requestBody.getChild("content");
            if (content != null) {
                for (Node contentType : content.getChildren()) {
                    Node examples = contentType.getChild("examples");
                    if (examples != null) {
                        String type = contentType.getKey();
                        for (Node example : examples.getChildren()) {
                            Node exampleValueNode = example.getChild("value");
                            if (exampleValueNode != null) {
                                TryItOperation payload = new TryItOperation(psiFile, pathName, operationName, example.getRange().getOffset());
                                payload.setPreferredMediaType(type);
                                payload.setPreferredExamplePointer(exampleValueNode.getJsonPointer());
                                payload.setPreferredExampleName(example.getKey());
                                payloads.add(payload);
                            }
                        }
                    }
                }
            }
        }
    }

    private static Set<String> getReferences(String path, String method, Node root) {
        Set<String> refs = new HashSet<>();
        Node paths = root.getChild("paths");
        if (paths != null) {
            Node pathNode = paths.getChild(path);
            if (pathNode != null) {
                for (String key : Arrays.asList("parameters", method)) {
                    Node child = pathNode.getChild(key);
                    if (child != null) {
                        collectSchemaNames(root, child, refs);
                    }
                }
            }
        }
        return refs;
    }

    public static void collectSchemaNames(Node root, Node node, Set<String> refs) {
        if (node.isScalar() && "$ref".equals(node.getKey())) {
            String value = node.getValue();
            if (value != null && value.startsWith("#/")) {
                refs.add(value);
                Node refNode = root.find(value.replaceFirst("#/", "/"));
                if (refNode != null) {
                    collectSchemaNames(root, refNode, refs);
                }
            }
        }
        for (Node child : node.getChildren()) {
            collectSchemaNames(root, child, refs);
        }
    }
}
