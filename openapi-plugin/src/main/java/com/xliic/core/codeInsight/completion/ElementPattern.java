package com.xliic.core.codeInsight.completion;

import static com.xliic.core.codeInsight.completion.CompletionProposal.LF;

import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

import org.eclipse.jface.text.BadLocationException;
import org.jetbrains.annotations.NotNull;

import com.xliic.core.editor.Document;

public abstract class ElementPattern {

    protected abstract boolean accepts(@NotNull CompletionParameters parameters);

    protected abstract String getPrefix(@NotNull String fragment);

    protected boolean accepts(@NotNull CompletionParameters parameters, @NotNull Map<Character, List<Pattern>> triggers) {
        String fragment;
        int offset = parameters.getOffset();
        Document document = parameters.getDocument();
        int i = offset - 2;
        try {
            char ch = document.getChar(i);
            while (ch != LF) {
                if (triggers.containsKey(ch)) {
                    fragment = document.getText(i, offset - i);
                    for (Pattern pattern : triggers.get(ch)) {
                        if (pattern.matcher(fragment).matches()) {
                            parameters.setPrefix(getPrefix(fragment));
                            parameters.setPattern(pattern);
                            return true;
                        }
                    }
                }
                i -= 1;
                ch = document.getChar(i);
            }
            if (triggers.containsKey(LF)) {
                fragment = document.getText(i + 1, offset - i - 1);
                for (Pattern pattern : triggers.get(LF)) {
                    if (pattern.matcher(fragment).matches()) {
                        parameters.setPrefix(getPrefix(fragment));
                        parameters.setPattern(pattern);
                        return true;
                    }
                }
            }
        } catch (BadLocationException e) {
        }
        return false;
    }
}
