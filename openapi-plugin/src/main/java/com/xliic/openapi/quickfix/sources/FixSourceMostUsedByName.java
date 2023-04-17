package com.xliic.openapi.quickfix.sources;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Pair;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.ParserJsonAST;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.report.types.Issue;
import com.xliic.openapi.services.ASTService;

public class FixSourceMostUsedByName extends FixSource {

    private final Map<String, Pair<BundleResult, Map<String, Map<String, Map<Object, Integer>>>>> cachedHints;

    public FixSourceMostUsedByName() {
        cachedHints = new ConcurrentHashMap<>();
    }

    @Override
    protected List<Object> getValues(Issue issue, QuickFix fix, FixParameter parameter, OpenApiVersion version, BundleResult bundle) {
        Node root = bundle.getAST();
        String rootFileName = bundle.getFile();
        Map<String, Map<String, Map<Object, Integer>>> hints = null;
        if (cachedHints.containsKey(rootFileName)) {
            BundleResult cachedBundleResult = cachedHints.get(rootFileName).getFirst();
            if (bundle == cachedBundleResult) {
                hints = cachedHints.get(rootFileName).getSecond();
            }
        }
        if (hints == null) {
            hints = new HashMap<>();
            dfs(root, hints);
            cachedHints.put(rootFileName, new Pair<>(bundle, hints));
        }
        String pointer = FixManager.getAbsolutePointer(issue.getPointer(), fix.getPointer());
        ASTService astService = ASTService.getInstance(issue.getProject());
        Node astRoot = astService.getRootNode(issue.getFileName());
        if (astRoot == null) {
            return new LinkedList<>();
        }
        Node node = astRoot.find(pointer);
        if (node == null) {
            return new LinkedList<>();
        }
        String property = node.getKey();
        Node fixRoot = new ParserJsonAST().parse(fix.getFixText(true));
        Node fixNode = fixRoot.find(parameter.getPath());
        if (fixNode == null) {
            return new LinkedList<>();
        }
        String key = fixNode.getKey();
        List<Object> result = new LinkedList<>();
        if (hints.containsKey(property) && hints.get(property).containsKey(key)) {
            Map<Object, Integer> valuesMap = hints.get(property).get(key);
            List<Map.Entry<Object, Integer>> entries = new LinkedList<>(valuesMap.entrySet());
            entries.sort((o1, o2) -> Integer.compare(o2.getValue(), o1.getValue()));
            return entries.stream().map(Map.Entry::getKey).collect(Collectors.toList());
        }
        return result;
    }

    private void dfs(Node node, Map<String, Map<String, Map<Object, Integer>>> hints) {
        if (node.getDepth() > 3 && node.isScalar()) {
            Node parent = node.getParent();
            if (parent.isObject() && !parent.getParent().isArray()) {
                String key = node.getKey();
                Object value = node.getValue();
                String property = node.getParent().getKey();
                if (!hints.containsKey(property)) {
                    hints.put(property, new HashMap<>());
                }
                Map<String, Map<Object, Integer>> keysMap = hints.get(property);
                if (!keysMap.containsKey(key)) {
                    keysMap.put(key, new HashMap<>());
                }
                Map<Object, Integer> valuesMap = keysMap.get(key);
                int count = valuesMap.getOrDefault(value, 0);
                valuesMap.put(value, count + 1);
            }
        }
        for (Node child : node.getChildren()) {
            dfs(child, hints);
        }
    }

    @Override
    public void dispose(@NotNull String rootFileName) {
        cachedHints.remove(rootFileName);
    }

    @Override
    public void dispose() {
        cachedHints.clear();
    }
}
