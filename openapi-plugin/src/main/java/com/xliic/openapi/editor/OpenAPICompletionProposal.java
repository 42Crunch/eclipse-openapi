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

			int p0, p1, ix;
			boolean doubleQuotationMarks = true;
			char ch = selectedString.charAt(innerOffset - 1);
			if (ch == '"' || ch == '\'') {
				p0 = innerOffset;
			}
			else {
				ix = selectedString.lastIndexOf('"', innerOffset - 1);
				if (ix == -1) {
					ix = selectedString.lastIndexOf('\'', innerOffset - 1);
					if (ix == -1) {
						return;
					}
					doubleQuotationMarks = false;
				}
				p0 = ix + 1;
			}
			
			ch = selectedString.charAt(innerOffset);
			if (ch == '"' || ch == '\'') {
				p1 = innerOffset;
			}
			else {
				ix = selectedString.indexOf('"', innerOffset);
				if (ix == -1) {
					ix = selectedString.indexOf('\'', innerOffset);
					if (ix == -1) {
						return;
					}
					doubleQuotationMarks = false;
				}
				p1 = ix;
			}
			
			if (p1 == -1) {
				document.replace(lineOffset + p0, selectedString.length() - p0 - 1, fReplacementString + (doubleQuotationMarks ? "\"" : "'"));
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
