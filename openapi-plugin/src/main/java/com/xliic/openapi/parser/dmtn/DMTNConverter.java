package com.xliic.openapi.parser.dmtn;

import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.tree.node.BaseNode;
import com.xliic.openapi.tree.node.PanelNode;
import com.xliic.openapi.tree.node.RootNode;
import com.xliic.openapi.tree.node.SimpleNode;
import org.jetbrains.annotations.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;

import static com.xliic.openapi.OpenApiPanelKeys.*;
import static com.xliic.openapi.tree.node.BaseNode.getPanelName;

public class DMTNConverter {

    private void dfs(Node parentAST,
            DefaultMutableTreeNode parentDMTN,
            Map<String, DefaultMutableTreeNode> pointers,
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
                    }
                    else {
                        DefaultMutableTreeNode generalDMTN = panels.get(GENERAL);
                        childDMTN = createDMTN(key, childAST, generalDMTN);
                        generalDMTN.add(childDMTN);
                    }
                }
                else {
                    childDMTN = createDMTN(key, childAST, parentDMTN);
                    if ((level == 3) && OPERATION_ID_KEY.equals(key)) {
                        if (PATHS.equals(getPanelName((SimpleNode) childDMTN.getUserObject()))) {
                            DefaultMutableTreeNode operationIdDMTN = panels.get(OPERATION_ID);
                            operationIdDMTN.add(createDMTN(childAST.getValue(), childAST, operationIdDMTN));
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
        }
        else if (parentAST.isArray()) {
            for (Node child : parentAST.getChildren()) {
                dfs(child, parentDMTN, pointers, panels);
            }
        }
        else {
            if (level == 3) {
                SimpleNode o = (SimpleNode) parentDMTN.getUserObject();
                if (URL_KEY.equals(o.getName()) && SERVERS.equals(getPanelName(o))) {
                    o.rename(parentAST.getValue());
                }
            }
            else if (level == 6) {
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

    private static boolean visible(SimpleNode node) {

        int level = node.getLevel();
        String name = node.getName();
        String panelKey = getPanelName(node);
        String parentName = node.getParentName();

        if (GENERAL.equals(panelKey) && (level > 0)) {
            return false;
        }
        else if (SERVERS.equals(panelKey) && ((level > 3) || !URL_KEY.equals(name))) {
            return false;
        }
        else if (SECURITY.equals(panelKey) && (level > 3)) {
            return false;
        }
        else if (SECURITY_DEFINITIONS.equals(panelKey) && (level > 2)) {
            return false;
        }
        else if (PATHS.equals(panelKey)) {
            if (level <= 3) {
                return true;
            }
            else if ((level == 4) && (PARAMETERS_KEY.equals(name) || RESPONSES_KEY.equals(name))) {
                return true;
            }
            else if ((level == 5) && RESPONSES_KEY.equals(parentName)) {
                return true;
            }
            return (level == 6) && PARAMETERS_KEY.equals(parentName) && (NAME_KEY.equals(name) || REF_KEY.equals(name));
        }
        else if (PARAMETERS.equals(panelKey)) {
            return level <= 2;
        }
        else if (RESPONSES.equals(panelKey)) {
            return level <= 2;
        }
        else if (COMPONENTS.equals(panelKey)) {
            return level <= 3;
        }
        else if (DEFINITIONS.equals(panelKey)) {
            return level <= 2;
        }
        return true;
    }

    public DefaultMutableTreeNode convert(@NotNull Node root) {
        RootNode rootNode = new RootNode(OpenApiUtils.getOpenAPIVersion(root));
        DefaultMutableTreeNode rootDMTN = new DefaultMutableTreeNode(rootNode);
        Map<String, DefaultMutableTreeNode> panels = new HashMap<>();
        Map<String, DefaultMutableTreeNode> pointers = rootNode.getChildren();
        for (String key : (rootNode.getVersion() == OpenApiVersion.V3) ? V3_PANEL_KEYS : V2_PANEL_KEYS) {
            PanelNode panelNode = new PanelNode(key);
            DefaultMutableTreeNode nodeDMTN = new DefaultMutableTreeNode(panelNode);
            pointers.put(panelNode.getPointer(), nodeDMTN);
            panels.put(key, nodeDMTN);
            rootDMTN.add(nodeDMTN);
        }
        dfs(root, rootDMTN, pointers, panels);
        return rootDMTN;
    }
}
