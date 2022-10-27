package com.xliic.core.codeInsight.completion;

import org.eclipse.jface.text.BadLocationException;
import org.eclipse.jface.text.IDocument;
import org.eclipse.jface.text.contentassist.BoldStylerProvider;
import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.eclipse.jface.text.contentassist.ICompletionProposalExtension7;
import org.eclipse.jface.text.contentassist.IContextInformation;
import org.eclipse.jface.viewers.StyledString;
import org.eclipse.swt.graphics.Image;
import org.eclipse.swt.graphics.Point;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.lookup.LookupElement;

public class CompletionProposal implements ICompletionProposal, ICompletionProposalExtension7 {

    public static final char LF = '\n';
    public static final char DQ = '"';
    public static final char SQ = '\'';
    public static final char NS = '#';

    @NotNull
    private final LookupElement element;

    public CompletionProposal(@NotNull LookupElement element) {
        this.element = element;
    }

    @Override
    public void apply(IDocument document) {
        try {
            int offset = element.getOffset();
            int line = document.getLineOfOffset(offset);
            int lineOffset = document.getLineOffset(line);
            int innerOffset = offset - lineOffset;
            int length = document.getLineLength(line);
            String lineText = document.get(lineOffset, length);
            LookupElement.FileType type = element.getFileType();

            if (type == LookupElement.FileType.JSON) {
                int i = getIndexOfOpenQuote(lineText, DQ, innerOffset);
                if (i >= 0) {
                    int j = getIndexOfCloseQuote(lineText, DQ, innerOffset);
                    replace(document, lineText, lineOffset, i, j, DQ);
                }
            } else if (type== LookupElement.FileType.YAML) {
                int i = getIndexOfOpenQuote(lineText, DQ, innerOffset);
                if (i >= 0) {
                    int j = getIndexOfCloseQuote(lineText, DQ, innerOffset);
                    if (i < j) {
                        replace(document, lineText, lineOffset, i, j, DQ);
                        return;
                    }
                }
                i = getIndexOfOpenQuote(lineText, SQ, innerOffset);
                if (i >= 0) {
                    int j = getIndexOfCloseQuote(lineText, SQ, innerOffset);
                    if (i < j) {
                        replace(document, lineText, lineOffset, i, j, SQ);
                        return;
                    }
                }
                String prefix = element.getPrefix();
                i = innerOffset - prefix.length();
                document.replace(offset - prefix.length(), lineText.length() - i - 1, getDisplayString());
            }
        }
        catch (BadLocationException x) {
        }
    }


    @Override
    public Point getSelection(IDocument document) {
        return null;
    }


    @Override
    public String getAdditionalProposalInfo() {
        return element.getTypeText();
    }


    @Override
    public String getDisplayString() {
        return element.getDisplayString();
    }


    @Override
    public Image getImage() {
        return element.getIcon().createImage();
    }


    @Override
    public IContextInformation getContextInformation() {
        return null;
    }


    @Override
    public StyledString getStyledDisplayString(IDocument document, int offset, BoldStylerProvider boldStylerProvider) {
        String name = getDisplayString();
        String nameLc = name.toLowerCase();
        String prefix = element.getFilterPrefix().toLowerCase();
        if (prefix == null || prefix.isBlank()) {
            return new StyledString(getDisplayString());
        }
        int lastIndex = 0;
        StyledString result = new StyledString();
        for (Character c : prefix.toCharArray()) {
            int index = nameLc.indexOf(c, lastIndex);
            if (index < 0) {
                return new StyledString(getDisplayString());
            } else {
                result.append(new StyledString(name.substring(lastIndex, index)));
                result.append(new StyledString(String.valueOf(name.charAt(index)), boldStylerProvider.getBoldStyler()));
                lastIndex = index + 1;
            }
        }
        result.append(new StyledString(name.substring(lastIndex)));
        return result;
    }

    private void replace(IDocument document, String lineText, int lineOffset, int i, int j, char quote) throws BadLocationException {
        if (i < j) {
            document.replace(lineOffset + i, j - i, getDisplayString());
        }
        else {
            document.replace(lineOffset + i, lineText.length() - i - 1, getDisplayString() + quote);
        }
    }

    private static int getIndexOfOpenQuote(String lineText, char quote, int lineInnerOffset) {
        char ch = lineText.charAt(lineInnerOffset - 1);
        if (ch == quote) {
            return lineInnerOffset;
        }
        else {
            int ix = lineText.lastIndexOf(quote, lineInnerOffset - 1);
            return ix >= 0 ? ix + 1 : -1;
        }
    }

    private static int getIndexOfCloseQuote(String lineText, char quote, int lineInnerOffset) {
        char ch = lineText.charAt(lineInnerOffset);
        if (ch == quote) {
            return lineInnerOffset;
        }
        else {
            int ix = lineText.indexOf(quote, lineInnerOffset);
            return ix >= 0 ? ix : -1;
        }
    }
}