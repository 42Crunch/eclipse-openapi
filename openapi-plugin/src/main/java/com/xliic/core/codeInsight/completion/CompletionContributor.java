package com.xliic.core.codeInsight.completion;

import org.eclipse.core.runtime.NullProgressMonitor;
import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContentAssistProcessor;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.jface.text.contentassist.IContextInformationValidator;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;
import com.xliic.core.editor.DocumentImpl;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;
import com.xliic.core.vfs.VirtualFile;

public abstract class CompletionContributor implements IContentAssistProcessor {

    @NotNull
    private final Project project;
    private final char[] activationCharacters;
    @NotNull
    private final ElementPattern pattern;
    @NotNull
    private final CompletionProvider provider;

    public CompletionContributor(String activationCharacters, @NotNull ElementPattern pattern, @NotNull CompletionProvider provider) {
        project = Project.getInstance();
        this.activationCharacters = activationCharacters.toCharArray();
        this.pattern = pattern;
        this.provider = provider;
    }

    @Override
    public ICompletionProposal[] computeCompletionProposals(ITextViewer viewer, int offset) {
        Document document = new DocumentImpl(viewer.getDocument());
        VirtualFile file = FileDocumentManager.getInstance().getFile(document);
        if (offset >= 0 && file != null) {
            CompletionParameters params = new CompletionParameters(project, file, document, offset);
            if (pattern.accepts(params)) {
                try {
                    CompletionRunnableWithProgress runnable = new CompletionRunnableWithProgress(params, provider);
                    runnable.run(new NullProgressMonitor());
                    return runnable.getContentProposals();
                } catch (Exception e) {
                }
            }
        }
        return null;
    }

    @Override
    public IContextInformation[] computeContextInformation(ITextViewer viewer, int offset) {
        return null;
    }

    @Override
    public char[] getCompletionProposalAutoActivationCharacters() {
        return activationCharacters;
    }

    @Override
    public char[] getContextInformationAutoActivationCharacters() {
        return null;
    }

    @Override
    public String getErrorMessage() {
        return null;
    }

    @Override
    public IContextInformationValidator getContextInformationValidator() {
        return null;
    }
}
