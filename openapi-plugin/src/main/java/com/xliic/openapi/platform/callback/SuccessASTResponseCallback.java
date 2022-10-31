package com.xliic.openapi.platform.callback;

import org.jetbrains.annotations.NotNull;

import com.xliic.core.project.Project;
import com.xliic.openapi.OpenApiUtils;
import com.xliic.openapi.parser.ast.node.Node;

public abstract class SuccessASTResponseCallback extends SuccessBodyResponseCallback {

    public SuccessASTResponseCallback(@NotNull Project project) {
        super(project);
    }

    public SuccessASTResponseCallback(@NotNull Project project, boolean showDialogOnFailure) {
        super(project, showDialogOnFailure);
    }

    public abstract void onCode200ASTResponse(@NotNull Node node);

    @Override
    public void onCode200WithBodyTextResponse(@NotNull String text) {
        Node node = OpenApiUtils.getJsonAST(text);
        if (node != null) {
            onCode200ASTResponse(node);
        } else {
            onFailure("Response text is not JSON");
        }
    }
}
