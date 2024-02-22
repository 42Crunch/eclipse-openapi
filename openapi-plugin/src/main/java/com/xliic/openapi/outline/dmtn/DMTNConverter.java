package com.xliic.openapi.outline.dmtn;

import static com.xliic.openapi.OpenApiPanelKeys.COMPONENTS;
import static com.xliic.openapi.OpenApiPanelKeys.DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.GENERAL;
import static com.xliic.openapi.OpenApiPanelKeys.NAME_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.OPERATION_ID;
import static com.xliic.openapi.OpenApiPanelKeys.OPERATION_ID_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.TAGS;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS;
import static com.xliic.openapi.OpenApiPanelKeys.PARAMETERS_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.PATHS;
import static com.xliic.openapi.OpenApiPanelKeys.REF_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES;
import static com.xliic.openapi.OpenApiPanelKeys.RESPONSES_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY;
import static com.xliic.openapi.OpenApiPanelKeys.SECURITY_DEFINITIONS;
import static com.xliic.openapi.OpenApiPanelKeys.SERVERS;
import static com.xliic.openapi.OpenApiPanelKeys.URL_KEY;
import static com.xliic.openapi.OpenApiPanelKeys.V2_PANEL_KEYS;
import static com.xliic.openapi.OpenApiPanelKeys.V3_PANEL_KEYS;
import static com.xliic.openapi.outline.node.BaseNode.getPanelName;

import java.util.HashMap;
import java.util.Map;
import java.util.*;

import javax.swing.tree.DefaultMutableTreeNode;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.outline.node.BaseNode;
import com.xliic.openapi.outline.node.OpIdNode;
import com.xliic.openapi.outline.node.PanelNode;
import com.xliic.openapi.outline.node.RootNode;
import com.xliic.openapi.outline.node.SimpleNode;
import com.xliic.openapi.outline.node.TagNode;
import com.xliic.openapi.outline.node.TagChildNode;
import com.xliic.openapi.utils.Utils;

public class DMTNConverter {
	
    private static final Set<String> HTTP_METHODS = new HashSet<>(
            Arrays.asList("get", "put", "post", "delete", "options", "head", "patch", "trace"));

    private void dfs(Node parentAST, DefaultMutableTreeNode parentDMTN, Map<String, DefaultMutableTreeNode> pointers,
            Map<String, DefaultMutableTreeNode> panels) {

        int level = parentAST.getDepth();

        if (parentAST.isObject()) {
            for (Node childAST : parentAST.getChildren()) {

                String key = childAST.getKey();
                DefaultMutableTreeNode childDMTN;
                boolean mustHaveChild = true;

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
                } else {
                    childDMTN = createDMTN(key, childAST, parentDMTN);
                    if ((level == 3) && OPERATION_ID_KEY.equals(key)) {
                        if (PATHS.equals(getPanelName((SimpleNode) childDMTN.getUserObject()))) {
                            DefaultMutableTreeNode operationIdDMTN = panels.get(OPERATION_ID);
                            BaseNode operation = (BaseNode) parentDMTN.getUserObject();
                            operationIdDMTN.add(createOpIdDMTN(childAST.getValue(), childAST, operationIdDMTN, operation));
                        }
                    }
                    mustHaveChild = visible((SimpleNode) childDMTN.getUserObject());
                    if (mustHaveChild) {
                        parentDMTN.add(childDMTN);
                    }
                }
                if (mustHaveChild) {
                    pointers.put(childAST.getJsonPointer(), childDMTN);
                    dfs(childAST, childDMTN, pointers, panels);
                }
            }
        } else if (parentAST.isArray()) {
            for (Node child : parentAST.getChildren()) {
                dfs(child, parentDMTN, pointers, panels);
            }
        } else {
            if (level == 3) {
                SimpleNode o = (SimpleNode) parentDMTN.getUserObject();
                if (URL_KEY.equals(o.getName()) && SERVERS.equals(getPanelName(o))) {
                    o.rename(parentAST.getValue());
                }
            } else if (level == 6) {
                SimpleNode o = (SimpleNode) parentDMTN.getUserObject();
                if (PARAMETERS_KEY.equals(o.getParentName()) && PATHS.equals(getPanelName(o))) {
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
    
    private static boolean visible(SimpleNode node) {

        int level = node.getLevel();
        String name = node.getName();
        String panelKey = getPanelName(node);
        String parentName = node.getParentName();

        if (GENERAL.equals(panelKey) && (level > 0)) {
            return false;
        } else if (SERVERS.equals(panelKey) && ((level > 3) || !URL_KEY.equals(name))) {
            return false;
        } else if (SECURITY.equals(panelKey) && (level > 3)) {
            return false;
        } else if (SECURITY_DEFINITIONS.equals(panelKey) && (level > 2)) {
            return false;
        } else if (PATHS.equals(panelKey)) {
            if (level <= 3) {
                return true;
            } else if ((level == 4) && (PARAMETERS_KEY.equals(name) || RESPONSES_KEY.equals(name))) {
                return true;
            } else if ((level == 5) && RESPONSES_KEY.equals(parentName)) {
                return true;
            }
            return (level == 6) && PARAMETERS_KEY.equals(parentName) && (NAME_KEY.equals(name) || REF_KEY.equals(name));
        } else if (PARAMETERS.equals(panelKey)) {
            return level <= 2;
        } else if (RESPONSES.equals(panelKey)) {
            return level <= 2;
        } else if (COMPONENTS.equals(panelKey)) {
            return level <= 3;
        } else if (DEFINITIONS.equals(panelKey)) {
            return level <= 2;
        }
        return true;
    }

    public DefaultMutableTreeNode convert(@NotNull Node root) {
        RootNode rootNode = new RootNode(Utils.getOpenAPIVersion(root));
        DefaultMutableTreeNode rootDMTN = new DefaultMutableTreeNode(rootNode);
        Map<String, DefaultMutableTreeNode> panels = new HashMap<>();
        Map<String, DefaultMutableTreeNode> pointers = rootNode.getChildren();
        for (String key : (rootNode.getVersion() == OpenApiVersion.V3) ? V3_PANEL_KEYS : V2_PANEL_KEYS) {
            PanelNode panelNode = new PanelNode(key);
            DefaultMutableTreeNode nodeDMTN = new DefaultMutableTreeNode(panelNode);
            pointers.put(panelNode.getPointer(), nodeDMTN);
            panels.put(key, nodeDMTN);
            rootDMTN.add(nodeDMTN);
            if (TAGS.equals(key)) {
                setTags(root, nodeDMTN, pointers);
            }
        }
        dfs(root, rootDMTN, pointers, panels);
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
                            DefaultMutableTreeNode tagDMTN = tagsOpsMap.get(tagName);
                            String opId = operation.getChildValue("operationId");
                            if (StringUtils.isEmpty(opId)) {
                                String name = opName.toUpperCase() + " " + pathName;
                                TagChildNode tagChild = new TagChildNode(name, opTag, (BaseNode) tagDMTN.getUserObject(), operation);
                                DefaultMutableTreeNode tagChildDMTN = new DefaultMutableTreeNode(tagChild);
                                tagDMTN.add(tagChildDMTN);
                                pointers.put(tagChild.getPointer(), tagChildDMTN);
                            } else {
                                TagChildNode tagChild = new TagChildNode(opId, operation, (BaseNode) tagDMTN.getUserObject());
                                DefaultMutableTreeNode tagChildDMTN = new DefaultMutableTreeNode(tagChild);
                                tagDMTN.add(new DefaultMutableTreeNode(tagChild));
                                pointers.put(tagChild.getPointer(), tagChildDMTN);
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
}
