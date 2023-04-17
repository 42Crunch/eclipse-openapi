package com.xliic.openapi.quickfix.sources;

import static com.xliic.openapi.utils.Utils.getRelativePathFromTo;

import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.util.Pair;
import com.xliic.core.vfs.VirtualFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleLocation;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixParameter;
import com.xliic.openapi.quickfix.QuickFix;
import com.xliic.openapi.quickfix.managers.FixManager;
import com.xliic.openapi.report.types.Issue;

public class FixSourceSchemaRefByResponseCode extends FixSource {

    private final Map<String, Pair<BundleResult, Map<String, Map<String, Integer>>>> cachedHints;

    public FixSourceSchemaRefByResponseCode() {
        cachedHints = new ConcurrentHashMap<>();
    }

    @Override
    protected List<Object> getValues(Issue issue, QuickFix fix, FixParameter parameter, OpenApiVersion version, BundleResult bundle) {
        Node root = bundle.getAST();
        String rootFileName = bundle.getFile();
        Map<String, Map<String, Integer>> hints = null;
        if (cachedHints.containsKey(rootFileName)) {
            BundleResult cachedBundleResult = cachedHints.get(rootFileName).getFirst();
            if (bundle == cachedBundleResult) {
                hints = cachedHints.get(rootFileName).getSecond();
            }
        }
        if (hints == null) {
            Node paths = root.find("/paths");
            if (paths == null) {
                return new LinkedList<>();
            }
            hints = new HashMap<>();
            for (Node path : paths.getChildren()) {
                for (Node operation : path.getChildren()) {
                    Node responses = operation.getChild("responses");
                    if (responses != null) {
                        for (Node response : responses.getChildren()) {
                            String code = response.getKey();
                            Node ref;
                            if (version == OpenApiVersion.V2) {
                                ref = response.find("/schema/$ref");
                            } else {
                                ref = response.find("/content/application~1json/schema/$ref");
                            }
                            if ((ref != null) && ref.isScalar() && !StringUtils.isEmpty(ref.getValue())) {
                                if (!hints.containsKey(code)) {
                                    hints.put(code, new HashMap<>());
                                }
                                String value = ref.getValue();
                                Map<String, Integer> valuesMap = hints.get(code);
                                int count = valuesMap.getOrDefault(value, 0);
                                valuesMap.put(value, count + 1);
                            }
                        }
                    }
                }
            }
            cachedHints.put(rootFileName, new Pair<>(bundle, hints));
        }

        String pointer = FixManager.getAbsolutePointer(issue.getPointer(), parameter.getPath());
        List<String> segments = Arrays.asList(pointer.split("/"));
        Collections.reverse(segments);
        String code = (version == OpenApiVersion.V2) ? segments.get(2) : segments.get(4);

        if (hints.containsKey(code)) {
            Map<String, Integer> valuesMap = hints.get(code);
            List<Map.Entry<String, Integer>> entries = new LinkedList<>(valuesMap.entrySet());
            entries.sort((o1, o2) -> Integer.compare(o2.getValue(), o1.getValue()));
            List<String> pointers = entries.stream().map(Map.Entry::getKey).collect(Collectors.toList());
            return resolveBundledPointers(pointers, issue.getFileName(), bundle);
        }
        return new LinkedList<>();
    }

    private List<Object> resolveBundledPointers(List<String> pointers, String fileName, BundleResult bundleResult) {
        List<Object> resolvedPointers = new LinkedList<>();
        for (String pointer : pointers) {
            BundleLocation location = bundleResult.getBundleLocation(pointer);
            if (location.isValid()) {
                VirtualFile file = location.getFile();
                if (fileName.equals(file.getPath())) {
                    resolvedPointers.add(pointer);
                } else if (StringUtils.isEmpty(location.getPointer())) {
                    resolvedPointers.add(getRelativePathFromTo(fileName, file.getPath()));
                } else {
                    resolvedPointers.add(getRelativePathFromTo(fileName, file.getPath()) + "#" + location.getPointer());
                }
            }
        }
        return resolvedPointers;
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
