package com.xliic.openapi.outline.dmtn;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.outline.node.*;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;
import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;

import static com.xliic.openapi.OpenApiPanelKeys.*;

public class DMTNConverter {

    private static final Set<String> HTTP_METHODS = new HashSet<>(
            Arrays.asList("get", "put", "post", "delete", "options", "head", "patch", "trace"));

    private static final Set<String> VISIBLE_COMPONENTS = new HashSet<>(
            Arrays.asList("schemas", "headers", "securitySchemes", "links", "callbacks", "examples", "responses", "parameters", "requestBodies"));

    private static final Set<String> METHOD_PROPS = new HashSet<>(Arrays.asList(PARAMETERS, RESPONSES, SECURITY, REQUEST_BODY));

    private static final List<String> EMPTY_KEYS = new LinkedList<>();

    private static boolean visible(String panelName, String name, String parentName, Node node) {
        int level = node.getDepth();
        if (GENERAL.equals(panelName) && (level > 0)) {
            return false;
        } else if (SERVERS.equals(panelName) && ((level > 3) || !URL_KEY.equals(name))) {
            return false;
        } else if (SECURITY.equals(panelName) && (level > 3)) {
            return false;
        } else if (SECURITY_DEFINITIONS.equals(panelName) && (level > 2)) {
            return false;
        } else if (PATHS.equals(panelName)) {
            if (level <= 3) {
                return true;
            } else if ((level == 4) && METHOD_PROPS.contains(name)) {
                return true;
            } else if ((level == 5) && RESPONSES_KEY.equals(parentName)) {
                return true;
            } else if ((level == 5) && REQUEST_BODY.equals(parentName)) {
                return true;
            }
            return (level == 6) && PARAMETERS_KEY.equals(parentName) && (NAME_KEY.equals(name) || REF_KEY.equals(name));
        } else if (PARAMETERS.equals(panelName)) {
            return level <= 2;
        } else if (RESPONSES.equals(panelName)) {
            return level <= 2;
        } else if (COMPONENTS.equals(panelName)) {
            if (level == 2) {
                return VISIBLE_COMPONENTS.contains(name);
            } else {
                return level <= 3;
            }
        } else if (DEFINITIONS.equals(panelName)) {
            return level <= 2;
        } else if (WEBHOOKS.equals(panelName)) {
            if (level == 3) {
                return HTTP_METHODS.contains(name) || "$ref".equals(name);
            } else if (level == 4) {
                return METHOD_PROPS.contains(name);
            }
            return level <= 5;
        }
        return true;
    }

    private void dfs(String myPanelName,
                     Node parentAST,
                     DefaultMutableTreeNode parentDMTN,
                     Map<String, DefaultMutableTreeNode> pointers,
                     Map<String, DefaultMutableTreeNode> panels) {
        int level = parentAST.getDepth();
        if (parentAST.isObject()) {
            for (Node childAST : parentAST.getChildren()) {
                String key = childAST.getKey();
                if (level == 0 && TAGS.equals(key)) {
                    continue;
                }
                boolean continueDfs = true;
                DefaultMutableTreeNode childDMTN = null;
                if (level == 0) {
                    if (panels.containsKey(key)) {
                        childDMTN = panels.get(key);
                        PanelNode o = (PanelNode) childDMTN.getUserObject();
                        o.setNode(childAST);
                    } else {
                        DefaultMutableTreeNode generalDMTN = panels.get(GENERAL);
                        childDMTN = createDMTN(key, childAST, generalDMTN);
                        generalDMTN.add(childDMTN);
                    }
                    pointers.put(childAST.getJsonPointer(), childDMTN);
                } else {
                    if ((level == 3) && OPERATION_ID_KEY.equals(key)) {
                        if (PATHS.equals(myPanelName)) {
                            DefaultMutableTreeNode operationIdDMTN = panels.get(OPERATION_ID);
                            BaseNode operation = (BaseNode) parentDMTN.getUserObject();
                            operationIdDMTN.add(createOpIdDMTN(childAST.getValue(), childAST, operationIdDMTN, operation));
                        }
                    }
                    String parentName = ((BaseNode) parentDMTN.getUserObject()).getName();
                    if (visible(myPanelName, key, parentName, childAST)) {
                        childDMTN = createDMTN(key, childAST, parentDMTN);
                        parentDMTN.add(childDMTN);
                        pointers.put(childAST.getJsonPointer(), childDMTN);
                    } else {
                        continueDfs = false;
                    }
                }
                if (continueDfs) {
                    if (level == 0) {
                        myPanelName = panels.containsKey(key) ? key : GENERAL;
                    }
                    dfs(myPanelName, childAST, childDMTN, pointers, panels);
                }
            }
        } else if (parentAST.isArray()) {
            for (Node child : parentAST.getChildren()) {
                dfs(myPanelName, child, parentDMTN, pointers, panels);
            }
        } else {
            if (level == 3) {
                SimpleNode o = (SimpleNode) parentDMTN.getUserObject();
                if (URL_KEY.equals(o.getName()) && SERVERS.equals(myPanelName)) {
                    o.rename(parentAST.getValue());
                }
            } else if (level == 6) {
                SimpleNode o = (SimpleNode) parentDMTN.getUserObject();
                if (PARAMETERS_KEY.equals(o.getParentName()) && PATHS.equals(myPanelName)) {
                    if (NAME_KEY.equals(o.getName()) || REF_KEY.equals(o.getName())) {
                        o.rename(parentAST.getValue());
                    }
                }
            }
        }
    }

    private DefaultMutableTreeNode createDMTN(String key, Node node, DefaultMutableTreeNode parent) {
        return new DefaultMutableTreeNode(new SimpleNode(key, node, (BaseNode) parent.getUserObject()));
    }

    private DefaultMutableTreeNode createOpIdDMTN(String key, Node node, DefaultMutableTreeNode parent, BaseNode operation) {
        return new DefaultMutableTreeNode(new OpIdNode(key, node, (BaseNode) parent.getUserObject(), operation));
    }

    @NotNull
    public DefaultMutableTreeNode convert(@NotNull Node root) {
        RootNode rootNode = new RootNode(Utils.getOpenAPIVersion(root));
        DefaultMutableTreeNode rootDMTN = new DefaultMutableTreeNode(rootNode);
        Map<String, DefaultMutableTreeNode> panels = new HashMap<>();
        Map<String, DefaultMutableTreeNode> pointers = rootNode.getChildren();
        for (String key : getKeys(rootNode.getVersion())) {
            PanelNode panelNode = new PanelNode(key, root.getChild(key));
            DefaultMutableTreeNode nodeDMTN = new DefaultMutableTreeNode(panelNode);
            pointers.put(panelNode.getPointer(), nodeDMTN);
            panels.put(key, nodeDMTN);
            rootDMTN.add(nodeDMTN);
        }
        dfs("", root, rootDMTN, pointers, panels);
        DefaultMutableTreeNode tagPanelDMTN = panels.get(TAGS);
        setTags(root, tagPanelDMTN, pointers);
        // Add details to operation id nodes
        DefaultMutableTreeNode opIdPanelDMTN = panels.get(OPERATION_ID);
        if (opIdPanelDMTN != null) {
            for (int i = 0 ; i < opIdPanelDMTN.getChildCount() ; i++) {
                DefaultMutableTreeNode child = (DefaultMutableTreeNode) opIdPanelDMTN.getChildAt(i);
                OpIdNode opIdNode = (OpIdNode) child.getUserObject();
                DefaultMutableTreeNode operation = pointers.get(opIdNode.getOperation().getPointer());
                if (operation != null) {
                    addChildrenFromOperationNode(child, operation);
                }
            }
        }
        return rootDMTN;
    }

    private static void setTags(Node root, DefaultMutableTreeNode tagsDMTN, Map<String, DefaultMutableTreeNode> pointers) {
        Map<String, DefaultMutableTreeNode> tagsOpsMap = new HashMap<>();
        // Collect all tags from all operations
        Node paths = root.getChild("paths");
        if (paths != null) {
            for (Node path : paths.getChildren()) {
                String pathName = path.getKey();
                for (Node operation : path.getChildren()) {
                    String opName = operation.getKey();
                    if (!HTTP_METHODS.contains(opName)) {
                        continue;
                    }
                    Node opTags = operation.getChild("tags");
                    if (opTags != null && opTags.isArray()) {
                        for (Node opTag : opTags.getChildren()) {
                            String tagName = opTag.getValue();
                            if (!tagsOpsMap.containsKey(tagName)) {
                                Node tagNode = getTagNode(root, tagName);
                                TagNode tag = new TagNode(tagName, tagNode, (BaseNode) tagsDMTN.getUserObject());
                                DefaultMutableTreeNode tagDMTN = new DefaultMutableTreeNode(tag);
                                tagsDMTN.add(tagDMTN);
                                tagsOpsMap.put(tagName, tagDMTN);
                                pointers.put(tag.getPointer(), tagDMTN);
                            }
                            TagChildNode tagChild;
                            DefaultMutableTreeNode tagDMTN = tagsOpsMap.get(tagName);
                            String opId = operation.getChildValue("operationId");
                            if (StringUtils.isEmpty(opId)) {
                                String name = opName.toUpperCase() + " " + pathName;
                                tagChild = new TagChildNode(name, opTag, (BaseNode) tagDMTN.getUserObject(), operation);
                            } else {
                                tagChild = new TagChildNode(opId, operation, (BaseNode) tagDMTN.getUserObject());
                            }
                            DefaultMutableTreeNode tagChildDMTN = new DefaultMutableTreeNode(tagChild);
                            tagDMTN.add(tagChildDMTN);
                            pointers.put(tagChild.getPointer(), tagChildDMTN);
                            // Copy children from operation node
                            DefaultMutableTreeNode opDMTN = pointers.get(operation.getJsonPointer());
                            if (opDMTN != null) {
                                addChildrenFromOperationNode(tagChildDMTN, opDMTN);
                            }
                        }
                    }
                }
            }
        }
        // Collect all tags from tags object
        Node tags = root.getChild("tags");
        if (tags != null) {
            for (Node tagNode : tags.getChildren()) {
                String tagName = tagNode.getChildValue("name");
                if (!StringUtils.isEmpty(tagName)) {
                    if (!tagsOpsMap.containsKey(tagName)) {
                        TagNode tag = new TagNode(tagName, tagNode, (BaseNode) tagsDMTN.getUserObject());
                        DefaultMutableTreeNode tagDMTN = new DefaultMutableTreeNode(tag);
                        tagsDMTN.add(tagDMTN);
                        tagsOpsMap.put(tagName, tagDMTN);
                        pointers.put(tag.getPointer(), tagDMTN);
                    }
                }
            }
        }
    }

    private static void addChildrenFromOperationNode(DefaultMutableTreeNode targetDMTN, DefaultMutableTreeNode opDMTN) {
        BaseNode target = (BaseNode) targetDMTN.getUserObject();
        for (int i = 0 ; i < opDMTN.getChildCount() ; i++) {
            DefaultMutableTreeNode opChildDMTN = (DefaultMutableTreeNode) opDMTN.getChildAt(i);
            // All operation nodes and all their child sub nodes are simple nodes
            SimpleNode opChild = (SimpleNode) opChildDMTN.getUserObject();
            Node node = opChild.getNode();
            if (node != null) {
                DefaultMutableTreeNode copyDMTN = new DefaultMutableTreeNode(new SimpleNode(opChild.getName(), node, target));
                if (opChildDMTN.getChildCount() > 0) {
                    addChildrenFromOperationNode(copyDMTN, opChildDMTN);
                }
                targetDMTN.add(copyDMTN);
            }
        }
    }

    private static Node getTagNode(Node root, String tagName) {
        Node tags = root.getChild("tags");
        if (tags != null) {
            for (Node tag : tags.getChildren()) {
                if (tagName.equals(tag.getChildValue("name"))) {
                    return tag;
                }
            }
        }
        return null;
    }

    private static List<String> getKeys(OpenApiVersion version) {
        if (version == OpenApiVersion.V2) {
            return V2_PANEL_KEYS;
        } else if (version == OpenApiVersion.V3) {
            return V3_PANEL_KEYS;
        } else if (version == OpenApiVersion.V3_1) {
            return V3_1_PANEL_KEYS;
        } else {
            return EMPTY_KEYS;
        }
    }
}
