package com.xliic.openapi.parser.ast;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;
import org.snakeyaml.engine.v2.common.ScalarStyle;
import org.snakeyaml.engine.v2.nodes.NodeTuple;
import org.snakeyaml.engine.v2.nodes.ScalarNode;
import org.snakeyaml.engine.v2.nodes.Tag;
import org.yaml.snakeyaml.DumperOptions;

import java.util.HashSet;
import java.util.Set;

public class NodeUtils {

    @NotNull
    public static DumperOptions.ScalarStyle getSuitableScalarStyle(@NotNull Node node, @NotNull DumperOptions.ScalarStyle defaultStyle) {
        Set<DumperOptions.ScalarStyle> styles = new HashSet<>();
        for (Node child : node.getChildren()) {
            if (child.isScalar()) {
                Object object = getScalarNode(child.getNode());
                if (object instanceof ScalarNode) {
                    ScalarNode target = (ScalarNode) object;
                    if (target.getTag() == Tag.STR) {
                        DumperOptions.ScalarStyle style = convert(target.getScalarStyle());
                        if (style != null) {
                            styles.add(style);
                        }
                    }
                }
            }
        }
        if (styles.isEmpty()) {
            return defaultStyle;
        } else if (styles.size() == 1) {
            return (DumperOptions.ScalarStyle) styles.toArray()[0];
        } else {
            return choose(styles, defaultStyle);
        }
    }

    @NotNull
    public static DumperOptions.ScalarStyle getSuitableScalarStyle(@NotNull Node node) {
        return getSuitableScalarStyle(node, DumperOptions.ScalarStyle.PLAIN);
    }

    private static DumperOptions.ScalarStyle convert(@NotNull ScalarStyle style) {
        if (style == ScalarStyle.DOUBLE_QUOTED) {
            return DumperOptions.ScalarStyle.DOUBLE_QUOTED;
        } else if (style == ScalarStyle.SINGLE_QUOTED) {
            return DumperOptions.ScalarStyle.SINGLE_QUOTED;
        } else if (style == ScalarStyle.PLAIN) {
            return DumperOptions.ScalarStyle.PLAIN;
        } else {
            return null;
        }
    }

    private static Object getScalarNode(Object node) {
        if (node instanceof NodeTuple) {
            org.snakeyaml.engine.v2.nodes.Node valueNode = ((NodeTuple) node).getValueNode();
            if (valueNode instanceof ScalarNode) {
                return valueNode;
            }
        } else if (node instanceof ScalarNode) {
            return node;
        }
        return null;
    }

    private static DumperOptions.ScalarStyle choose(Set<DumperOptions.ScalarStyle> styles, DumperOptions.ScalarStyle defaultStyle) {
        if (styles.contains(DumperOptions.ScalarStyle.PLAIN)) {
            return DumperOptions.ScalarStyle.PLAIN;
        } else if (styles.contains(DumperOptions.ScalarStyle.DOUBLE_QUOTED)) {
            return DumperOptions.ScalarStyle.DOUBLE_QUOTED;
        } else if (styles.contains(DumperOptions.ScalarStyle.SINGLE_QUOTED)) {
            return DumperOptions.ScalarStyle.SINGLE_QUOTED;
        } else {
            return defaultStyle;
        }
    }
}
