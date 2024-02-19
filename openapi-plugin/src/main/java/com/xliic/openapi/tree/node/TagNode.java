package com.xliic.openapi.tree.node;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import static com.xliic.openapi.parser.ast.ParserAST.escape;

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
