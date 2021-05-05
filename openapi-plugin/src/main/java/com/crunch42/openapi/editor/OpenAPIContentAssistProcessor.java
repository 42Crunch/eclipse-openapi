package com.crunch42.openapi.editor;

import org.eclipse.jface.text.ITextViewer;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContentAssistProcessor;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.jface.text.contentassist.IContextInformationValidator;

public class OpenAPIContentAssistProcessor implements IContentAssistProcessor {
	
	private final static char [] activationCharacters = "\"#".toCharArray();

	public OpenAPIContentAssistProcessor() {}

	@Override
	public ICompletionProposal[] computeCompletionProposals(ITextViewer viewer, int offset) {		
		return CompletionHelper.updateResultSet(viewer, offset);
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