package com.xliic.openapi.parser.replace;

import org.jetbrains.annotations.NotNull;

import com.xliic.openapi.parser.ast.Range;

public class TextReplacement implements Comparable<TextReplacement> {

    private final Range range;
    private final String value;

    public TextReplacement(Range range, String value) {
        this.range = range;
        this.value = value;
    }

    public Range getRange() {
        return range;
    }

    public String getValue() {
        return value;
    }

    @Override
    public int compareTo(@NotNull TextReplacement o) {
        return Integer.compare(range.getStartOffset(), o.getRange().getStartOffset());
    }
}
