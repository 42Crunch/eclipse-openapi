package com.xliic.core.codeInsight.completion;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.lookup.LookupElement;
import com.xliic.openapi.editor.OpenAPICompletionProposal;

public class CompletionResultSet {

    private final int offset;
    private final List<LookupElement> elements;

    public CompletionResultSet(int offset) {
        this.offset = offset;
        elements = new LinkedList<>();
    }

    public int geOffset() {
        return offset;
    }

    public void addElement(@NotNull LookupElement element) {
        elements.add(element);
    }

    public ICompletionProposal[] getCompletionProposals() {
        ICompletionProposal[] completionProposals = new ICompletionProposal[elements.size()];
        for (int i = 0 ; i < elements.size(); i++) {
            LookupElement le = elements.get(i);
            String element = le.getElement();
            completionProposals[i] = new OpenAPICompletionProposal(element, offset, 0, element.length());
        }
        return completionProposals;
    }

    public @NotNull PrefixMatcher getPrefixMatcher() {
        return new PrefixMatcher();
    }
}
