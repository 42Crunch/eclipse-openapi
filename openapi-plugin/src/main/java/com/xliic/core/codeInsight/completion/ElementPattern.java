package com.xliic.core.codeInsight.completion;

import java.util.List;
import java.util.regex.Pattern;

import org.eclipse.jface.text.BadLocationException;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;

public abstract class ElementPattern {

    protected abstract boolean accepts(@NotNull CompletionParameters parameters);

    protected boolean accepts(@NotNull CompletionParameters parameters, @NotNull List<Pattern> patterns) {
        int offset = parameters.getOffset();
        Document document = parameters.getDocument();
        int lineNumber = document.getLineNumber(offset);
        int lineStartOffset = document.getLineStartOffset(lineNumber);
        int lineEndOffset = document.getLineEndOffset(lineNumber);
        try {
            String fragment = document.getText(lineStartOffset, lineEndOffset - lineStartOffset);
            if (fragment.endsWith("\r")) {
                fragment = fragment.substring(0, fragment.length() - 1);
            }
            for (Pattern pattern : patterns) {
                if (pattern.matcher(fragment).matches()) {
                    String prefix = getPrefix(fragment);
                    parameters.setPrefix(prefix);
                    parameters.setPattern(pattern);
                    return prefix != null;
                }
            }
        } catch (BadLocationException e) {
        }
        return false;
    }

    // Default implementation
    protected String getPrefix(String fragment) {
        int n = fragment.indexOf(":");
        if (n > 0) {
            String tmp = fragment.substring(n + 1).trim();
            if (tmp.startsWith("\"")) {
                return trimQuotes(tmp, "\"");
            } else if (tmp.startsWith("'")) {
                return trimQuotes(tmp, "'");
            }
            return tmp;
        }
        return null;
    }

    private String trimQuotes(String value, String ch) {
        int i = value.indexOf(ch);
        int j = value.lastIndexOf(ch);
        if (i == j) {
            return null;
        }
        String prefix = value.substring(i + 1, j).trim();
        return 0 <= prefix.indexOf(ch) ? null : prefix;
    }
}
