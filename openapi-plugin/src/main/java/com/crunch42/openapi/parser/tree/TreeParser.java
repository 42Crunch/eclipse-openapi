package com.crunch42.openapi.parser.tree;

import com.crunch42.openapi.OpenApiVersion;
import com.crunch42.openapi.parser.pointer.Location;
import com.crunch42.openapi.parser.pointer.LocationUtils;
import com.crunch42.openapi.tree.OpenApiTreeNode;
import com.crunch42.openapi.utils.OpenAPIUtils;

import javax.validation.constraints.NotNull;

import javax.swing.tree.DefaultMutableTreeNode;
import java.util.*;
import java.util.regex.Pattern;

import static com.crunch42.openapi.OpenApiPanelKeys.*;

public abstract class TreeParser {

    private final static int DEFAULT_INDEX = -1;
    private final static Pattern VERSION_V3_REGEXP = Pattern.compile("^3\\.0\\.\\d(-.+)?$");

    protected boolean CRLF_EOL = false;
    private Map<String, DefaultMutableTreeNode> pointers;
    private Map<Integer, DefaultMutableTreeNode> lineToRefMap;
    private Map<String, DefaultMutableTreeNode> panels;

    protected abstract boolean isMap(Object parent);
    protected abstract boolean isList(Object parent);
    protected abstract Object getRootFromText(String text);
    protected abstract Iterator<String> getSortedKeysIterator(Object parent);
    protected abstract Object getObjectByKey(Object parent, String key);
    protected abstract Iterator<Object> getIterator(Object parent);
    protected abstract Location getLocation(Object entry);
    protected abstract Object getChild(Object entry);
    protected abstract String getStringValue(Object entry);

    private void dfs(Object parent, DefaultMutableTreeNode node, String parentPointer, int level, int index) {

        if (isMap(parent)) {
            for (Iterator<String> it = getSortedKeysIterator(parent); it.hasNext(); ) {

                String key = it.next();
                Object value = getObjectByKey(parent, key);
                Location location = getLocation(value);
                String pointer = LocationUtils.pointer(parentPointer, key);
                DefaultMutableTreeNode childNode;

                if (level == 0) {
                    if (panels.containsKey(key)) {
                        childNode = panels.get(key);
                        OpenApiTreeNode o = (OpenApiTreeNode) childNode.getUserObject();
                        o.setLocation(location);
                        o.setPanelExists(true);
                        o.setPointer(pointer);
                    } else {
                        childNode = new DefaultMutableTreeNode(
                                new OpenApiTreeNode(key, location,false, GENERAL, null,
                                    pointer, level, index == DEFAULT_INDEX, true));
                        panels.get(GENERAL).add(childNode);
                    }
                }
                else {
                    OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
                    if (!goToNextLevel(key ,o.getPanelKey(), level)) {
                        continue;
                    }
                    childNode = new DefaultMutableTreeNode(
                            new OpenApiTreeNode(key, location,false, o.getPanelKey(), o.getKey(),
                                    pointer, level, index == DEFAULT_INDEX, o.isVisible()));
                    node.add(childNode);
                }

                pointers.put(pointer, childNode);
                if (REF_KEY.equals(key)) {
                    lineToRefMap.put((int) location.getLine(), childNode);
                }
                dfs(getChild(value), childNode, pointer, level + 1, DEFAULT_INDEX);
            }
        }
        else if (isList(parent)) {
            int i = 0;
            for (Iterator<Object> it = getIterator(parent); it.hasNext(); ) {
                dfs(getChild(it.next()), node, LocationUtils.pointer(parentPointer, i), level + 1, i);
                i++;
            }
        }
        else {
            if (level == 3) {
                OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
                if (URL_KEY.equals(o.getKey()) && SERVERS.equals(o.getPanelKey())) {
                    o.replaceKey(getStringValue(parent));
                }
            }
            else if (level == 6) {
                OpenApiTreeNode o = (OpenApiTreeNode) node.getUserObject();
                if (NAME_KEY.equals(o.getKey()) &&
                        PARAMETERS_KEY.equals(o.getParentKey()) && PATHS.equals(o.getPanelKey())) {
                    o.replaceKey(getStringValue(parent));
                }
            }
        }
    }

    private void clear() {
    	CRLF_EOL = false;
        pointers = new HashMap<>();
        lineToRefMap = new HashMap<>();
        panels = new HashMap<>();
    }

    private void generateHighLevelPanels(DefaultMutableTreeNode root, OpenApiVersion version) {
        for (String key : (version == OpenApiVersion.V3) ? V3_PANEL_KEYS : V2_PANEL_KEYS) {
            DefaultMutableTreeNode node = new DefaultMutableTreeNode(new OpenApiTreeNode(key));
            if (GENERAL.equals(key)) {
                pointers.put(GENERAL_POINTER, node);
            }
            panels.put(key, node);
            root.add(node);
        }
    }

    private static boolean goToNextLevel(String key, String panelKey, int level) {
        if (GENERAL.equals(panelKey)) {
            return level == 0;
        }
        else if (SERVERS.equals(panelKey)) {
            return (level <= 2) && (URL_KEY.equals(key));
        }
        else if (SECURITY.equals(panelKey)) {
            return level <= 2;
        }
        else if (SECURITY_DEFINITIONS.equals(panelKey)) {
            return level == 1;
        }
        return true;
    }

    private OpenApiVersion getDetectedVersion(Object root) {
        if (isMap(root)) {
            for (Iterator<String> it = getSortedKeysIterator(root); it.hasNext(); ) {
                String key = it.next();
                if (SWAGGER_KEY.equals(key)) {
                    return OpenApiVersion.V2;
                }
                else if (OPENAPI_KEY.equals(key)) {
                    Object value = getObjectByKey(root, key);
                    if (VERSION_V3_REGEXP.matcher(getStringValue(getChild(value)).trim()).matches()) {
                        return OpenApiVersion.V3;
                    }
                }
            }
        }
        return OpenApiVersion.Unknown;
    }

    public ParserData parse(@NotNull String text) {
        clear();
        Object root = getRootFromText(text);
        if (root == null) {
            return new ParserData("Parser returned null");
        }
        OpenApiVersion version = getDetectedVersion(root);
        if (version == OpenApiVersion.Unknown) {
            return new ParserData("Not open api format");
        }
        CRLF_EOL = OpenAPIUtils.detectCrLfEOL(text);
        DefaultMutableTreeNode rootNode = new DefaultMutableTreeNode();
        generateHighLevelPanels(rootNode, version);
        dfs(root, rootNode, LocationUtils.EMPTY_POINTER, 0, DEFAULT_INDEX);
        return new ParserData(rootNode, pointers, lineToRefMap, version, CRLF_EOL);
    }
}
