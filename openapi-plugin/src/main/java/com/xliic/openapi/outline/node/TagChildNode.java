package com.xliic.openapi.outline.node;

import com.xliic.openapi.parser.ast.node.Node;
import org.jetbrains.annotations.NotNull;

import java.util.Objects;

import static com.xliic.openapi.parser.ast.ParserAST.escape;

public class TagChildNode extends SimpleNode {

    @NotNull
    private final Node operation;

    public TagChildNode(@NotNull String name, @NotNull Node operation, @NotNull BaseNode parent) {
        super(name, operation, parent);
        this.operation = operation;
    }

    public TagChildNode(@NotNull String name, @NotNull Node opTagNode, @NotNull BaseNode parent, @NotNull Node operation) {
        super(name, opTagNode, parent);
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

    public @NotNull Node getOperation() {
        return operation;
    }
}
