package com.xliic.core.codeInsight.completion;

import java.util.Comparator;

import com.xliic.core.codeInsight.lookup.LookupElement;

public class CompletionSorter implements Comparator<LookupElement> {

    @Override
    public int compare(LookupElement o1, LookupElement o2) {
        return o1.getDisplayString().compareTo(o2.getDisplayString());
    }
}
