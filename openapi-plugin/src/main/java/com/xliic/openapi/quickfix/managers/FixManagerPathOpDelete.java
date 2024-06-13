package com.xliic.openapi.quickfix.managers;

import static com.xliic.openapi.utils.Utils.REF;
import static com.xliic.openapi.utils.Utils.REF_DELIMITER;

import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

import javax.swing.tree.DefaultMutableTreeNode;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.core.psi.PsiFile;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.bundler.BundleResult;
import com.xliic.openapi.outline.node.SimpleNode;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.quickfix.FixItem;

public class FixManagerPathOpDelete extends FixManager {

    private static final Set<String> COMPONENTS_LIST = Set.of("responses", "parameters", "definitions", "securityDefinitions", "security");

    @NotNull
    private final String title;
    @NotNull
    private final DefaultMutableTreeNode node;
    @Nullable
    private Node bundleNode;
    @Nullable
    private Set<String> deadRefs;

    public FixManagerPathOpDelete(@NotNull PsiFile psiFile, @NotNull DefaultMutableTreeNode node) {
        super(psiFile);
        this.title = ((SimpleNode) node.getUserObject()).getLevel() == 2 ? "Delete path" : "Delete operation";
        this.node = node;
        bundleNode = null;
        deadRefs = null;
    }

    @Override
    public boolean openDialog() {
        BundleResult bundle = getBundle(psiFile.getVirtualFile().getPath(), psiFile.getProject());
        if (bundle != null && bundle.isBundleComplete()) {
            bundleNode = bundle.getAST();
            if (bundleNode != null) {
                deadRefs = getDeadRefs(((SimpleNode) node.getUserObject()).getPointer(), bundleNode);
            }
        }
        return deadRefs != null && !deadRefs.isEmpty();
    }

    @NotNull
    public List<FixItem> getFixItems(boolean removeDeadRefs) {
        List<FixItem> result = new LinkedList<>();
        result.add(FixItem.getDeleteFixItem(((SimpleNode) node.getUserObject()).getPointer()));
        if (removeDeadRefs && deadRefs != null && !deadRefs.isEmpty()) {
            Set<String> pointers = deadRefs.stream().map((ref) -> ref.replace(REF_DELIMITER, "/")).collect(Collectors.toSet());
            OpenApiVersion version = getOpenApiVersion(psiFile.getVirtualFile().getPath(), project);
            Map<String, Set<String>> compsToRemove = getPointersByComponents(pointers, version);
            Map<String, Set<String>> allComps = getPointersByComponents(getAllComponentPointers(bundleNode, version), version);
            for (Map.Entry<String, Set<String>> entry: compsToRemove.entrySet()) {
                String c = entry.getKey();
                Set<String> cPointers = entry.getValue();
                if (allComps.containsKey(c) && cmpSets(allComps.get(c), cPointers)) {
                    pointers = pointers.stream().filter((p) -> !cPointers.contains(p)).collect(Collectors.toSet());
                    pointers.add(version == OpenApiVersion.V3 ? "/components/" + c : "/" + c);
                }
            }
            for (String pointer : pointers) {
                result.add(FixItem.getDeleteFixItem(pointer));
            }
        }
        return result;
    }

    @Override
    public @NotNull String getTitle() {
        return title;
    }

    @Override
    public List<FixItem> getFixItems() {
        throw new UnsupportedOperationException("Fix items call not supported");
    }

    @Override
    public boolean isResponsibleFor(@NotNull String pointer, @NotNull String label) {
        return false;
    }

    private static Set<String> getDeadRefs(String targetPointer, Node bundleNode) {
        Set<String> myRefs = new HashSet<>();
        Node target = bundleNode.find(targetPointer);
        if (target != null) {
            refWalk(bundleNode, target, myRefs);
        }
        if (myRefs.isEmpty()) {
            return Collections.emptySet();
        }
        Map<String, Set<String>> refDeps = new HashMap<>();
        collectRefDeps(bundleNode, refDeps);
        Set<String> deadRefs = new HashSet<>();
        collectDeadRefs(myRefs, deadRefs, refDeps, targetPointer);
        // Java bundler allows circular referencing, try to find dead references indirectly
        collectDeadRefs(refDeps.keySet(), deadRefs, refDeps, targetPointer);
        return deadRefs;
    }

    private static void collectDeadRefs(Set<String> refs, Set<String> deadRefs, Map<String, Set<String>> refDeps, String targetPointer) {
        for (String myRef : refs) {
            Set<String> myDeps = refDeps.get(myRef);
            Set<String> pointers = myDeps.stream().filter((p) -> !p.startsWith(targetPointer + "/")).collect(Collectors.toSet());
            if (pointers.isEmpty()) {
                deadRefs.add(myRef);
            } else {
                // If at least one pointer is referenced from any path (not targetPointer path) we must never delete it
                if (pointers.stream().noneMatch((p) -> p.startsWith("/paths/"))) {
                    // Fast check that pointers may belong to dead refs, for example:
                    // myRef = #/components/schemas/Pet
                    // pointers = [/components/schemas/Pets/items]
                    // deadRefs = [#/components/schemas/Pets]
                    // It may help to decrease number of recursive calls in checkIfSomePointerDead
                    Set<String> pointersToCheck = pointers.stream().filter((p) -> !assertPointerBelongToRefs(p, deadRefs)).collect(Collectors.toSet());
                    if (pointersToCheck.isEmpty()) {
                        deadRefs.add(myRef);
                    } else {
                        // Here we may be unaware of all dead refs, for example
                        // myRef = #/components/schemas/Pet
                        // pointers = [/components/schemas/Pets/items]
                        // deadRefs = []
                        if (checkAllPointersDead(pointersToCheck, refDeps, targetPointer)) {
                            deadRefs.add(myRef);
                        }
                    }
                }
            }
        }
    }

    private static boolean assertPointerBelongToRefs(String pointer, Set<String> refs) {
        final String myRef = "#" + pointer;
        return refs.stream().anyMatch(((ref) -> myRef.equals(ref) || myRef.startsWith(ref + "/")));
    }

    private static boolean checkAllPointersDead(Set<String> pointers, Map<String, Set<String>> refDeps, String targetPointer) {
        for (String pointer : pointers) {
            for (String ref : refDeps.keySet()) {
                if (assertPointerBelongToRefs(pointer, new HashSet<>(Collections.singletonList(ref)))) {
                    Set<String> myDeps = refDeps.get(ref);
                    Set<String> refs = myDeps.stream().filter((p) -> !p.startsWith(targetPointer + "/")).collect(Collectors.toSet());
                    refs.remove(pointer); // Handle possible circular references
                    if (!refs.isEmpty()) {
                        if (refs.stream().anyMatch((p) -> p.startsWith("/paths/"))) {
                            return false;
                        } else {
                            refs.removeAll(pointers); // Avoid infinite recursion
                            if (!refs.isEmpty()) {
                                return checkAllPointersDead(refs, refDeps, targetPointer);
                            }
                        }
                    }
                }
            }
        }
        return true;
    }

    private static void collectRefDeps(Node node, Map<String, Set<String>> refDeps) {
        if (node.isScalar() && REF.equals(node.getKey())) {
            String value = node.getValue();
            if (value != null && value.startsWith(REF_DELIMITER)) {
                if (!refDeps.containsKey(value)) {
                    refDeps.put(value, new HashSet<>());
                }
                refDeps.get(value).add(node.getJsonPointer());
            }
        }
        for (Node child : node.getChildren()) {
            collectRefDeps(child, refDeps);
        }
    }

    private static void refWalk(Node root, Node target, Set<String> refs) {
        if (target.isScalar() && REF.equals(target.getKey())) {
            String value = target.getValue();
            if (value != null && value.startsWith(REF_DELIMITER) && !refs.contains(value)) {
                refs.add(value);
                Node refTarget = root.find(value.replace(REF_DELIMITER, "/"));
                if (refTarget != null) {
                    refWalk(root, refTarget, refs);
                }
            }
        }
        for (Node child : target.getChildren()) {
            refWalk(root, child, refs);
        }
    }

    private static Set<String> getAllComponentPointers(Node root, OpenApiVersion version) {
        Set<String> res = new HashSet<>();
        if (version == OpenApiVersion.V3) {
            Node components = root.find("/components");
            if (components != null) {
                for (Node component : components.getChildren()) {
                    for (Node item : component.getChildren()) {
                        res.add(item.getJsonPointer());
                    }
                }
            }
        } else {
            for (String componentName : COMPONENTS_LIST) {
                Node component = root.find("/" + componentName);
                if (component != null) {
                    for (Node item : component.getChildren()) {
                        res.add(item.getJsonPointer());
                    }
                }
            }
        }
        return res;
    }

    private static Map<String, Set<String>> getPointersByComponents(Set<String> pointers, OpenApiVersion version) {
        Map<String, Set<String>> res = new HashMap<>();
        final int index = version == OpenApiVersion.V3 ? 2 : 1;
        for (String pointer : pointers) {
            String component = pointer.split("/")[index];
            if (!res.containsKey(component)) {
                res.put(component, new HashSet<>());
            }
            res.get(component).add(pointer);
        }
        return res;
    }

    private static boolean cmpSets(Set<String> set1, Set<String> set2) {
        if (set1.size() != set2.size()) {
            return false;
        }
        for (String item : set1) {
            if (!set2.contains(item)) {
                return false;
            }
        }
        return true;
    }
}
