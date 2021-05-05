package com.crunch42.openapi.parser.pointer;

public class Location {

    private final long line;
    private final long column;
    private final long startOffset;
    private final long endOffset;

    public Location() {
        line = 0;
        column = 0;
        endOffset = 0;
        startOffset = 0;
    }

    public Location(long line, long column, long startOffset, long endOffset) {
        this.line = line;
        this.column = column;
        this.startOffset = startOffset;
        this.endOffset = endOffset;
    }
    
    public Location toYAMLLocationForCrLfEOL() {
        // YAML parsing library counts \r symbols in offsets, but also in lines that is a bug
    	// EOL \r\n always results in line + 2 instead of + 1
        // So for \r\n EOL files we need to decrease the line number 2 times
    	return new Location(line / 2, column, startOffset, endOffset);
    }

    public Location toJSONLocationForCrLfEOL() {
        // JSON parsing library ignores \r symbols, but eclipse does consider it in offset logic
        // So for \r\n EOL files we need to increase (restore) the offsets to the amount of missing \r symbols = lines
    	return new Location(line, column, startOffset + line, endOffset + line);
    }

    public long getLine() {
        return line;
    }

    public long getVisualLine() {
        return line + 1;
    }

    public long getColumn() {
        return column;
    }

    public long getVisualColumn() {
        return column + 1;
    }

    public long getStartOffset() {
        return startOffset;
    }

    public long getEndOffset() {
        return endOffset;
    }

    public long getLength() {
        return endOffset - startOffset;
    }
    
    public Location applyShift(int shift) {
    	// We replace the key to show in the tree, but it is mapped to the same position, so do not change both offsets
        return new Location(line, column + shift, startOffset, endOffset);
    }
}
