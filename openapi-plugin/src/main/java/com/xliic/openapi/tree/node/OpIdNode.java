package com.xliic.openapi.tree.node;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

import static com.xliic.openapi.parser.ast.ParserAST.escape;

public class OpIdNode extends SimpleNode {

    @NotNull
    private final BaseNode operation;

    public OpIdNode(@NotNull String name, @NotNull Node node, @NotNull BaseNode parent, @NotNull BaseNode operation) {
        super(name, node, parent);
        this.operation = operation;
    }

    @NotNull
    public String getPointer() {
        return Objects.requireNonNull(parent).getPointer() + "/" + escape(name);
    }

    @Override
    public int getLevel() {
        return 2;
    }

    public @NotNull BaseNode getOperation() {
        return operation;
    }
}
