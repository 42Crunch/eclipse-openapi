package com.xliic.openapi.editor;

import org.eclipse.core.runtime.Assert;
import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;

import com.xliic.openapi.OpenAPIImages;

public class OpenAPICompletionProposal implements ICompletionProposal {
	
	private final static Image fImage = OpenAPIImages.PropertyNode.createImage();
	
	private int fReplacementOffset;
	private int fCursorPosition;
	private String fReplacementString;

	public OpenAPICompletionProposal(String replacementString, int replacementOffset, int replacementLength, int cursorPosition) {
		
		Assert.isNotNull(replacementString);
		Assert.isTrue(replacementOffset >= 0);
		Assert.isTrue(replacementLength >= 0);
		Assert.isTrue(cursorPosition >= 0);

		fReplacementString= replacementString;
		fReplacementOffset= replacementOffset;
		fCursorPosition= cursorPosition;
	}

	@Override
	public void apply(IDocument document) {
		
		int line, lineOffset;
		try {
			line = document.getLineOfOffset(fReplacementOffset);
			lineOffset = document.getLineOffset(line);
			int innerOffset = fReplacementOffset - lineOffset;
			int length = document.getLineLength(line);
			String selectedString = document.get(lineOffset, length);

			int p0, p1;			
			if (selectedString.charAt(innerOffset - 1) == '"') {
				p0 = innerOffset;
			}
			else {
				p0 = selectedString.lastIndexOf('"', innerOffset - 1) + 1;
			}
			
			if (selectedString.charAt(innerOffset) == '"') {
				p1 = innerOffset;
			}
			else {
				p1 = selectedString.indexOf('"', innerOffset);
			}
			
			if (p1 == -1) {
				document.replace(lineOffset + p0, selectedString.length() - p0 - 1, fReplacementString + "\"");
			}
			else {
				document.replace(lineOffset + p0, p1 - p0, fReplacementString);
			}
		} 
		catch (BadLocationException x) {
		}
	}

	@Override
	public Point getSelection(IDocument document) {
		return new Point(fReplacementOffset + fCursorPosition, 0);
	}

	@Override
	public String getAdditionalProposalInfo() {
		return null;
	}

	@Override
	public String getDisplayString() {
		return fReplacementString;
	}

	@Override
	public Image getImage() {
		return fImage;
	}

	@Override
	public IContextInformation getContextInformation() {
		return null;
	}
}
