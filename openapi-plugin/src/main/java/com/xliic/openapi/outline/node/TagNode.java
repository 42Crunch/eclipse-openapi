package com.xliic.openapi.outline.node;

import static com.xliic.openapi.parser.ast.ParserAST.escape;

import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import com.xliic.openapi.parser.ast.node.Node;

public class TagNode extends BaseNode {

    public TagNode(@NotNull String name, @Nullable Node node, @NotNull BaseNode parent) {
        super(name, node, parent);
    }

    @NotNull
    public String getPointer() {
        return "/tags/" + escape(name);
    }

    @Override
    public int getLevel() {
        return 1;
    }
}
