package com.xliic.core.codeInsight.completion;

import java.lang.reflect.InvocationTargetException;

import org.eclipse.core.runtime.IProgressMonitor;
import org.eclipse.jface.operation.IRunnableWithProgress;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.OpenApiVersion;
import com.xliic.openapi.parser.ast.node.Node;
import com.xliic.openapi.utils.Utils;

public class CompletionRunnableWithProgress implements IRunnableWithProgress {

    @NotNull
    private final CompletionParameters parameters;
    @NotNull
    private final CompletionProvider provider;
    @NotNull
    private final CompletionResultSet resultSet;

    public CompletionRunnableWithProgress(@NotNull CompletionParameters parameters, @NotNull CompletionProvider provider) {
        this.parameters = parameters;
        this.provider = provider;
        resultSet = new CompletionResultSet();
    }

    public ICompletionProposal[] getContentProposals() {
        return resultSet.getCompletionProposals();
    }

    @Override
    public void run(IProgressMonitor monitor) throws InvocationTargetException, InterruptedException {
        monitor.beginTask("Preparing completions...", IProgressMonitor.UNKNOWN);
        Node root = Utils.getJsonAST(parameters.getDocument().getText());
        parameters.setRoot(root);
        parameters.setVersion(root == null ? OpenApiVersion.Unknown : Utils.getOpenAPIVersion(root));
        provider.addCompletions(parameters, resultSet);
        monitor.done();
    }
}
