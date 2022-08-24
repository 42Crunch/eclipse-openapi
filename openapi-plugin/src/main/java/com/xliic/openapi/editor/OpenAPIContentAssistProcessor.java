package com.xliic.openapi.editor;

import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContentAssistProcessor;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.jface.text.contentassist.IContextInformationValidator;
import org.eclipse.ui.IEditorInput;

import com.xliic.core.codeInsight.completion.CompletionResultSet;
import com.xliic.core.editor.Document;
import com.xliic.core.editor.DocumentImpl;
import com.xliic.core.editor.Editor;
import com.xliic.core.fileEditor.FileDocumentManager;
import com.xliic.core.project.Project;

public class OpenAPIContentAssistProcessor implements IContentAssistProcessor {

    private final Project project;
    private final static char [] activationCharacters = "\"#".toCharArray();

    public OpenAPIContentAssistProcessor() {
        project = Project.getInstance();
    }

    @Override
    public ICompletionProposal[] computeCompletionProposals(ITextViewer viewer, int offset) {
        CompletionResultSet resultSet = new CompletionResultSet(offset);
        Document document = new DocumentImpl(viewer.getDocument());
        IEditorInput input = FileDocumentManager.getInstance().getEditorInput(document);
        CompletionHelper.updateResultSet(new Editor(project, input), resultSet);
        return resultSet.getCompletionProposals();
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