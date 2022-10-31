package com.xliic.core.codeInsight.completion;

import java.util.LinkedList;
import java.util.List;

import org.eclipse.jface.text.contentassist.ICompletionProposal;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.codeInsight.lookup.LookupElement;

public class CompletionResultSet {

    private CompletionSorter sorter;
    private final List<LookupElement> elements;

    public CompletionResultSet() {
        sorter = null;
        elements = new LinkedList<>();
    }

    public CompletionResultSet withRelevanceSorter(@NotNull CompletionSorter sorter) {
        this.sorter = sorter;
        return this;
    }

    public void addElement(@NotNull LookupElement element) {
        if (isSubstringFoundOrderedInString(element.getFilterPrefix(), element.getDisplayString())) {
            elements.add(element);
        }
    }

    public ICompletionProposal[] getCompletionProposals() {
        int size = elements.size();
        ICompletionProposal[] proposals = new ICompletionProposal[size];
        if (size > 1 && sorter != null) {
            elements.sort(sorter);
        }
        for (int i = 0; i < size; i++) {
            LookupElement element = elements.get(i);
            proposals[i] = new CompletionProposal(element);
        }
        return proposals;
    }

    private static boolean isSubstringFoundOrderedInString(String subString, String string) {
        int lastIndex = 0;
        subString = subString.toLowerCase();
        string = string.toLowerCase();
        for (Character c : subString.toCharArray()) {
            int index = string.indexOf(c, lastIndex);
            if (index < 0) {
                return false;
            } else {
                lastIndex = index + 1;
            }
        }
        return true;
    }
}
